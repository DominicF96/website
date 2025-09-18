export interface I18n {
  title: string;
  project_types: {
    case_studies: string;
    brands: string;
    articles: string;
    games: string;
  },
  coming_soon: string;
}

const en = {
  title: "My Work",
  project_types: {
    case_studies: "Case Studies",
    brands: "Brands",
    articles: "Articles / Devlogs",
    games: "Games"
  },
  coming_soon: "Coming soon..."
};

const fr = {
  title: "Réalisations",
  project_types: {
    case_studies: "Études de cas",
    brands: "Marques",
    articles: "Articles / Devlogs",
    games: "Jeux"
  },
  coming_soon: "Bientôt..."
};

export default { en, fr };
