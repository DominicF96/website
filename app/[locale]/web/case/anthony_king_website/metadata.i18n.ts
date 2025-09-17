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
  title: "Dominic | CS • Anthony King Website ",
  description:
    "Hi, my name is Dominic. In this case study I will share with you my key learnings in building Anthony King Mortgage Broker's Website.",
  keywords: "Case Study, Portfolio, Dominic, Fournier, Developer, Designer, Product Owner",
};

export const fr = {
  title: "Dominic | CS • Site Web d'Anthony King",
  description:
    "Bonjour, je m'appelle Dominic. Dans cette étude de cas, je partagerai avec vous mes principales leçons dans la construction du site Web du courtier hypothécaire Anthony King",
  keywords:
    "Case Study, Portfolio, Dominic, Fournier, Développeur, Designer, Product Owner",
};