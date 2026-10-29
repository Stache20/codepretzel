// Every page and its URL in each language. The language toggle, hreflang tags,
// canonicals and sitemap are all generated from this map.
export type Lang = "en" | "fr";

export const routes = {
  home: { en: "/", fr: "/fr/" },
  reporting: { en: "/services/sql-reporting-dashboards/", fr: "/fr/services/rapports-sql-tableaux-de-bord/" },
  migration: { en: "/services/data-migration/", fr: "/fr/services/migration-de-donnees/" },
  healthCheck: { en: "/services/data-health-check/", fr: "/fr/services/bilan-de-sante-des-donnees/" },
  webApps: { en: "/services/web-apps/", fr: "/fr/services/applications-web/" },
  construction: { en: "/industries/construction-trades/", fr: "/fr/secteurs/construction-et-metiers/" },
  about: { en: "/about/", fr: "/fr/a-propos/" },
  contact: { en: "/contact/", fr: "/fr/contact/" },
  thanks: { en: "/thank-you/", fr: "/fr/merci/" },
  notFound: { en: "/404/", fr: "/fr/404/" },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

// Pages left out of the sitemap and marked noindex.
export const unlisted: RouteKey[] = ["thanks", "notFound"];

export const url = (key: RouteKey, lang: Lang) => routes[key][lang];
