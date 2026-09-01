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
  title: "Dominic Fournier • Product Manager, Design Lead",
  description: (years: number | string) =>
    `With over ${years} years across product management, design, and frontend development, I lead teams to build intuitive, feature-rich digital products.`,
  keywords: "Portfolio, Dominic, Fournier, Product Manager, Design Lead, Product Designer, Frontend",
};

export const fr = {
  title: "Dominic Fournier • Product Manager, Design Lead",
  description: (years: number | string) =>
    `Avec plus de ${years} années en gestion de produit, design et développement Frontend, je dirige des équipes pour construire des produits numériques intuitifs et riches en fonctionnalités.`,
  keywords:
    "Portfolio, Dominic, Fournier, Gestionnaire de produit, Responsable design, Designer produit, Frontend",
};
