export interface I18n {
  home: string;
  case_study: string;
  dashboard_template: string;
  web: string;
  brands: string;
  articles: string;
  games: string;
  contact: string;
}

const en = {
  home: "Home",
  case_study: "Projects",
  dashboard_template: "Dashboard Template",
  web: "Web",
  brands: "Brands",
  articles: "Articles",
  games: "Games",
  contact: "Contact me",
};

const fr = {
  home: "Accueil",
  case_study: "Projets",
  dashboard_template: "Modèle de tableau de bord",
  web: "Web",
  brands: "Marques",
  articles: "Articles",
  games: "Jeux",
  contact: "Contactez-moi",
};

export default { en, fr };
