// Interface text shared by every page (header, footer, buttons).
import type { Lang } from "./routes";

export const ui = {
  en: {
    brandLine: "Data & Reporting",
    skip: "Skip to content",
    menu: "Menu",
    nav: {
      services: "Services",
      reporting: "Reporting & dashboards",
      migration: "Data migration",
      healthCheck: "Data Health Check",
      webApps: "Web apps & sites",
      construction: "Construction & trades",
      about: "About",
      contact: "Contact",
    },
    cta: "Book a free 30-minute call",
    navCta: "Book a free call",
    getInTouch: "Get in touch",
    switchLang: "Français",
    switchLangLabel: "Voir cette page en français",
    place: "Montreal, Quebec — serving clients across Canada",
    footerServices: "Services",
    footerCompany: "WebPretzel",
    footerContact: "Contact",
    breadcrumbHome: "Home",
    rights: "All rights reserved.",
  },
  fr: {
    brandLine: "Données et rapports",
    skip: "Aller au contenu",
    menu: "Menu",
    nav: {
      services: "Services",
      reporting: "Rapports et tableaux de bord",
      migration: "Migration de données",
      healthCheck: "Bilan de santé des données",
      webApps: "Applications et sites web",
      construction: "Construction et métiers",
      about: "À propos",
      contact: "Contact",
    },
    cta: "Réservez un appel gratuit de 30 minutes",
    navCta: "Réservez un appel",
    getInTouch: "Écrivez-moi",
    switchLang: "English",
    switchLangLabel: "View this page in English",
    place: "Montréal, Québec — au service des clients partout au Canada",
    footerServices: "Services",
    footerCompany: "WebPretzel",
    footerContact: "Contact",
    breadcrumbHome: "Accueil",
    rights: "Tous droits réservés.",
  },
} satisfies Record<Lang, unknown>;

export const t = (lang: Lang) => ui[lang];
