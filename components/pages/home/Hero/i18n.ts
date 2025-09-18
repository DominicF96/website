export interface I18n {
  flavor: {
    part_1: string;
    part_2: string;
  };
  title: {
    part_1: string;
    part_2: string;
  };
  description: string;
  cta: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  trusted_by: string;
}

const en = {
  flavor: {
    part_1: "Hi, I'm",
    part_2: "Dominic",
  },
  title: {
    part_1: "Frontend Developer,",
    part_2: "Product Designer",
  },
  description: (years: number | string) =>
    `With over ${years} years of experience in Frontend development, management, and product design, I help teams turn complex challenges into intuitive, high-performing digital products.`,
  cta: {
    primary: "Contact me",
    secondary: "Projects",
  },
  trusted_by: "Trusted by",
};

const fr = {
  flavor: {
    part_1: "Bonjour, je suis",
    part_2: "Dominic",
  },
  title: {
    part_1: "Développeur Frontend,",
    part_2: "Designer Produit",
  },
  description: (years: number | string) =>
    `Avec plus de ${years} années d'expérience en développement Frontend, gestion et design produit, j'aide les équipes à transformer des défis complexes en produits numériques intuitifs et performants.`,
  cta: {
    primary: "Contactez-moi",
    secondary: "Projets",
  },
  trusted_by: "Ils me font confiance",
};

const locales = { en, fr }; 
export default locales;
