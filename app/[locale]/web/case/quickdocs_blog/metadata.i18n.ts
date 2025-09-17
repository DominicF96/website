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
  title: "Dominic | CS • QuickDocs Blog ",
  description:
    "Hi, my name is Dominic. In this case study I will share with you my key learnings in designing and building the QuickDocs Blog.",
  keywords:
    "Case Study, QuickDocs, Blog, Dominic, Fournier, Developer, Designer, Product Owner",
};

export const fr = {
  title: "Dominic | CS • Blogue QuickDocs",
  description:
    "Bonjour, je m'appelle Dominic. Dans cette étude de cas, je partagerai avec vous mes principales leçons dans la conception et la construction du blogue de QuickDocs.",
  keywords:
    "Case Study, QuickDocs, Blogue, Dominic, Fournier, Développeur, Designer, Product Owner",
};
