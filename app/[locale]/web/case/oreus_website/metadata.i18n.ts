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
  title: "Dominic | CS • Oreus",
  description:
    "Hi, my name is Dominic. In this case study I will share with you my key learnings in building my software services company, Oreus.",
  keywords:
    "Case Study, Oreus, Software, Services, Company, Dominic, Fournier, Developer, Designer, Product Owner",
};

export const fr = {
  title: "Dominic | CS • Oreus",
  description:
    "Bonjour, je m'appelle Dominic. Dans cette étude de cas, je partagerai avec vous mes principales leçons dans la construction de ma société de services logiciels, Oreus.",
  keywords:
    "Case Study, Oreus, Software, Services, Company, Dominic, Fournier, Développeur, Designer, Product Owner",
};
