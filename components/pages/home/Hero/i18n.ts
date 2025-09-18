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
    `With more than ${years} years of experience in frontend, UI/UX, and product design, I build intuitive, high-performing dashboards and websites, bridging project management, design and development seamlessly.`,
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
    `Avec plus de ${years} ans d'expérience en frontend, UI/UX et design produit, je crée des tableaux de bord et sites web intuitifs et performants, combinant efficacement gestion de projet, design et développement.`,
  cta: {
    primary: "Contactez-moi",
    secondary: "Projets",
  },
  trusted_by: "Ils me font confiance",
};

export default { en, fr };
