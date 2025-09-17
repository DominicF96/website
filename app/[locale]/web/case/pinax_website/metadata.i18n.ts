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
  title: "Dominic | CS • Pinax Website",
  description:
    "Hi, my name is Dominic. In this case study I will share with you my key learnings in building Pinax's Website.",
  keywords:
    "Case Study, Pinax, Website, web3, blockchain, services, Dominic, Fournier, Developer, Designer, Product Owner",
};

export const fr = {
  title: "Dominic | CS • Site Web Pinax",
  description:
    "Bonjour, je m'appelle Dominic. Dans cette étude de cas, je partagerai avec vous mes principales leçons dans la construction du site Web de Pinax.",
  keywords:
    "Case Study, Pinax, Site Web, web3, blockchain, services, Dominic, Fournier, Développeur, Designer, Product Owner",
};
