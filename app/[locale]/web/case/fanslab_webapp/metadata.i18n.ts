import { PageMetadataI18n } from "@/types";

export interface HomeI18n {
  metadata: PageMetadataI18n;
}

export interface I18n {
  title: string;
  description: string;
  keywords: string;
}

export const en = {
  title: "Dominic | CS • Fanslab Web Platform",
  description:
    "Hi, my name is Dominic. In this case study I will share with you my key learnings in building Fanslab's Web Platform.",
  keywords:
    "Case Study, Fanslab, Webapp, Community, Dominic, Fournier, Developer, Designer, Product Owner",
};

export const fr = {
  title: "Dominic | CS • Plateforme Web Fanslab",
  description:
    "Bonjour, je m'appelle Dominic. Dans cette étude de cas, je partagerai avec vous mes principales leçons dans la construction de la plateforme Web de Fanslab.",
  keywords:
    "Case Study, Fanslab, Webapp, Communauté, Dominic, Fournier, Développeur, Designer, Product Owner",
};
