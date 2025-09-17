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
  title: "Dominic | CS • QuickDocs Website ",
  description:
    "Hi, my name is Dominic. In this case study I will share with you my key learnings in designing and building the QuickDocs Website.",
  keywords:
    "Case Study, QuickDocs, Website, Dominic, Fournier, Developer, Designer, Product Owner",
};

export const fr = {
  title: "Dominic | CS • Site Web QuickDocs",
  description:
    "Bonjour, je m'appelle Dominic. Dans cette étude de cas, je partagerai avec vous mes principales leçons dans la conception et la construction du site Web de QuickDocs.",
  keywords:
    "Case Study, QuickDocs, Site Web, Dominic, Fournier, Développeur, Designer, Product Owner",
};
