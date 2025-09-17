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
  title: "Dominic | CS • Oreus Balance",
  description:
    "Hi, my name is Dominic. In this case study I will share with you my key learnings in designing Oreus Balance, a personal finance web application.",
  keywords:
    "Case Study, Oreus, Balance, Personal Finance, Dominic, Fournier, Developer, Designer, Product Owner",
};

export const fr = {
  title: "Dominic | CS • Oreus Balance",
  description:
    "Bonjour, je m'appelle Dominic. Dans cette étude de cas, je partagerai avec vous mes principales leçons dans la conception d'Oreus Balance, une application Web de finances personnelles.",
  keywords:
    "Étude de cas, Oreus, Balance, Finances personnelles, Dominic, Fournier, Développeur, Designer, Propriétaire de produit",
};
