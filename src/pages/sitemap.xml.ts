// sitemap.xml with both languages and hreflang alternates, built from the route map.
import type { APIRoute } from "astro";
import { routes, unlisted, type RouteKey } from "../i18n/routes";
import { site } from "../config/site";

export const GET: APIRoute = () => {
  const abs = (path: string) => new URL(path, site.url).href;
  const keys = (Object.keys(routes) as RouteKey[]).filter((key) => !unlisted.includes(key));

  const entries = keys.flatMap((key) => {
    const { en, fr } = routes[key];
    const alternates = [
      `<xhtml:link rel="alternate" hreflang="en-CA" href="${abs(en)}"/>`,
      `<xhtml:link rel="alternate" hreflang="fr-CA" href="${abs(fr)}"/>`,
      `<xhtml:link rel="alternate" hreflang="x-default" href="${abs(en)}"/>`,
    ].join("");
    return [en, fr].map((path) => `<url><loc>${abs(path)}</loc>${alternates}</url>`);
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
