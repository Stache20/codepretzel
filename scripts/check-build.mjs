// Checks the built site in dist/ against the SEO and content rules. Run after `npm run build`:
//   npm run check:build
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const dist = new URL("../dist/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const SITE = "https://webpretzel.ca";
const errors = [];
const fail = (msg) => errors.push(msg);

// Route map, read from source so this script needs no build step of its own.
const routesSrc = readFileSync(new URL("../src/i18n/routes.ts", import.meta.url), "utf8");
const routes = {};
for (const [, key, en, fr] of routesSrc.matchAll(/(\w+): \{ en: "([^"]+)", fr: "([^"]+)" \}/g)) routes[key] = { en, fr };
const unlisted = ["thanks", "notFound"];

const fileFor = (path) => (path === "/404/" ? join(dist, "404.html") : join(dist, path, "index.html"));
const attr = (tag, name) => tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"');

const titles = new Map();
const descriptions = new Map();

for (const [key, paths] of Object.entries(routes)) {
  for (const lang of ["en", "fr"]) {
    const path = paths[lang];
    const file = fileFor(path);
    const where = `${key}/${lang} (${path})`;
    if (!existsSync(file)) {
      fail(`${where}: page missing`);
      continue;
    }
    const html = readFileSync(file, "utf8");
    const indexable = !unlisted.includes(key);

    const h1s = html.match(/<h1[\s>]/g) ?? [];
    if (h1s.length !== 1) fail(`${where}: ${h1s.length} <h1> elements`);

    const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
    const desc = decode(attr(html.match(/<meta name="description"[^>]*>/)?.[0] ?? "", "content") ?? "");
    if (!title || title.length > 60) fail(`${where}: title missing or over 60 chars`);
    if (!desc || desc.length > 155) fail(`${where}: description missing or over 155 chars`);
    if (titles.has(title)) fail(`${where}: duplicate title with ${titles.get(title)}`);
    if (descriptions.has(desc)) fail(`${where}: duplicate description with ${descriptions.get(desc)}`);
    titles.set(title, where);
    descriptions.set(desc, where);

    const htmlLang = html.match(/<html lang="([^"]+)"/)?.[1];
    if (htmlLang !== (lang === "fr" ? "fr-CA" : "en-CA")) fail(`${where}: html lang is ${htmlLang}`);

    if (indexable) {
      const canonical = attr(html.match(/<link rel="canonical"[^>]*>/)?.[0] ?? "", "href");
      if (canonical !== SITE + path) fail(`${where}: canonical ${canonical}`);
      const alt = (hl) => attr(html.match(new RegExp(`<link rel="alternate" hreflang="${hl}"[^>]*>`))?.[0] ?? "", "href");
      if (alt("en-CA") !== SITE + paths.en) fail(`${where}: hreflang en-CA wrong`);
      if (alt("fr-CA") !== SITE + paths.fr) fail(`${where}: hreflang fr-CA wrong`);
      if (alt("x-default") !== SITE + paths.en) fail(`${where}: hreflang x-default wrong`);
    } else if (!html.includes('<meta name="robots" content="noindex"')) {
      fail(`${where}: unlisted page is not noindex`);
    }

    // Language toggle points at the equivalent page (404s point at the other home page).
    const toggle = attr(html.match(/<li class="nav-lang"><a [^>]*>/)?.[0] ?? "", "href");
    const other = lang === "en" ? "fr" : "en";
    const expected = key === "notFound" ? routes.home[other] : paths[other];
    if (toggle !== expected) fail(`${where}: language toggle goes to ${toggle}, expected ${expected}`);

    // Structured data.
    const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
    let graph = [];
    try {
      graph = JSON.parse(ld)["@graph"];
    } catch {
      fail(`${where}: JSON-LD missing or invalid`);
    }
    const types = graph.map((n) => n["@type"]);
    const biz = graph.find((n) => n["@type"] === "ProfessionalService");
    if (!biz) fail(`${where}: no ProfessionalService JSON-LD`);
    else {
      for (const field of ["name", "url", "logo", "areaServed", "availableLanguage", "email"]) if (!biz[field]) fail(`${where}: ProfessionalService missing ${field}`);
      if (biz.address) fail(`${where}: ProfessionalService has an address`);
    }
    if (key !== "home" && indexable && !types.includes("BreadcrumbList")) fail(`${where}: no BreadcrumbList`);
    const faqHeadings = html.includes('id="faq"');
    if (faqHeadings !== types.includes("FAQPage")) fail(`${where}: FAQ section and FAQPage JSON-LD don't match`);

    // Images need dimensions and alt text.
    for (const img of html.match(/<img [^>]*>/g) ?? []) {
      if (!/ width="\d+"/.test(img) || !/ height="\d+"/.test(img)) fail(`${where}: image without width/height: ${img.slice(0, 80)}`);
      if (!/ alt="/.test(img)) fail(`${where}: image without alt`);
    }

    // Netlify form on contact pages.
    if (key === "contact" && !/<form[^>]+data-netlify="true"[^>]+netlify-honeypot="bot-field"/.test(html)) fail(`${where}: Netlify form not set up`);
  }
}

// Forbidden content anywhere in the output.
const forbidden = [
  [/jonas/i, "vendor name (Jonas)"],
  [/codepretzel/i, "CodePretzel leftover"],
  [/\$\s?\d|\d\s?\$|\bCAD\b|\bprice|\bpricing|\btarif|\bprix\b|\/h(our)?\b/i, "pricing"],
  [/\b[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d\b/, "Canadian postal code"],
  [/\b\d+,? (rue|boul\.?|boulevard|avenue|street|st\.|ave\.?)\b/i, "street address"],
];
const walk = (dir) => readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f)) : [join(dir, f)]));
const textFiles = walk(dist).filter((f) => /\.(html|xml|txt|css|js|json)$/.test(f));
for (const file of textFiles) {
  const text = readFileSync(file, "utf8").replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, (m) => m.replace(/"(logo|image)":"[^"]+"/g, ""));
  for (const [re, label] of forbidden) {
    const m = text.match(re);
    if (m) fail(`${file.replace(dist, "")}: ${label}: "${text.slice(Math.max(0, m.index - 30), m.index + 40).replace(/\s+/g, " ")}"`);
  }
}

// Sitemap: every indexable page in both languages, each with three alternates.
const sitemap = readFileSync(join(dist, "sitemap.xml"), "utf8");
const urls = sitemap.match(/<url>[\s\S]*?<\/url>/g) ?? [];
const indexableCount = Object.keys(routes).filter((k) => !unlisted.includes(k)).length * 2;
if (urls.length !== indexableCount) fail(`sitemap: ${urls.length} URLs, expected ${indexableCount}`);
for (const u of urls) if ((u.match(/xhtml:link/g) ?? []).length !== 3) fail(`sitemap: entry without 3 alternates: ${u.slice(0, 80)}`);
const robots = readFileSync(join(dist, "robots.txt"), "utf8");
if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) fail("robots.txt: no sitemap line");

console.log(`Checked ${Object.keys(routes).length * 2} pages, ${urls.length} sitemap URLs, ${textFiles.length} text files.`);
if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n- ` + errors.join("\n- "));
  process.exit(1);
}
console.log("All checks passed.");
