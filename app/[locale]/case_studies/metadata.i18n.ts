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
  title: "Frontend, Designer, PO • Dominic Fournier",
  description: (years: number | string) =>
    `With over ${years} years of experience in Product Design and Frontend development, I specialize in coordinating Agile teams to build intuitive, feature-rich dashboards and websites.`,
  keywords: "Portfolio, Dominic, Fournier, Developer, Designer, Product Owner",
};

export const fr = {
  title: "Frontend, Designer, PO • Dominic Fournier",
  description: (years: number | string) =>
    `Avec plus de ${years} ans d'expérience en design de produit et développement Frontend, je me spécialise dans la coordination d'équipes Agiles pour construire des tableaux de bord et des sites web intuitifs et riches en fonctionnalités.`,
  keywords:
    "Portfolio, Dominic, Fournier, Développeur, Designer, Product Owner",
};
