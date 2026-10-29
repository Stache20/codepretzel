// Generates favicons and Open Graph images from the pretzel mark.
// Run after changing the mark or the OG text: node scripts/make-brand-assets.mjs
import { readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const AMBER = "#FDB913";
const DARK = "#14161a";
const mark = readFileSync(new URL("../src/assets/brand/pretzel-mark.svg", import.meta.url), "utf8");
const [, viewBox] = mark.match(/viewBox="([^"]+)"/);
const [, pathData] = mark.match(/ d="([^"]+)"/);
const pub = (name) => new URL(`../public/${name}`, import.meta.url);

const markSvg = (fill) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}"><path fill="${fill}" fill-rule="evenodd" d="${pathData}"/></svg>`;

// Favicons: amber mark on a dark rounded square.
const icon = (size) => {
  const [x, y, w, h] = viewBox.split(" ").map(Number);
  const pad = w * 0.18;
  const side = w + pad * 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${x - pad} ${y - pad - (w - h) / 2} ${side} ${side}"><rect x="${x - pad}" y="${y - pad - (w - h) / 2}" width="${side}" height="${side}" rx="${side * 0.2}" fill="${DARK}"/><path fill="${AMBER}" fill-rule="evenodd" d="${pathData}"/></svg>`;
};

writeFileSync(pub("favicon.svg"), icon(32));
writeFileSync(pub("mark.svg"), markSvg(AMBER));
await sharp(Buffer.from(icon(32)), { density: 300 }).resize(32, 32).png().toFile(pub("favicon-32.png").pathname.slice(1));
await sharp(Buffer.from(icon(180)), { density: 300 }).resize(180, 180).png().toFile(pub("apple-touch-icon.png").pathname.slice(1));

// Open Graph images, one per language.
const og = ({ brand, headline, place }) => `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${DARK}"/>
  <rect x="0" y="606" width="1200" height="24" fill="${AMBER}"/>
  <svg x="80" y="80" width="150" height="120" viewBox="${viewBox}"><path fill="${AMBER}" fill-rule="evenodd" d="${pathData}"/></svg>
  <text x="80" y="270" font-family="Segoe UI, Arial, sans-serif" font-size="34" font-weight="600" fill="${AMBER}">${brand}</text>
  ${headline.map((line, i) => `<text x="80" y="${360 + i * 72}" font-family="Segoe UI, Arial, sans-serif" font-size="60" font-weight="700" fill="#ffffff">${line}</text>`).join("\n  ")}
  <text x="80" y="550" font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#c9ccd2">${place}</text>
</svg>`;

const ogs = {
  "og-en.png": { brand: "WebPretzel · Data &amp; Reporting", headline: ["SQL reporting, dashboards", "and data migration"], place: "Montreal, Quebec — serving clients across Canada" },
  "og-fr.png": { brand: "WebPretzel · Données et rapports", headline: ["Rapports SQL, tableaux de bord", "et migration de données"], place: "Montréal, Québec — au service des clients partout au Canada" },
};
for (const [file, text] of Object.entries(ogs)) {
  await sharp(Buffer.from(og(text))).png().toFile(pub(file).pathname.slice(1));
}
console.log("Brand assets written to public/");
