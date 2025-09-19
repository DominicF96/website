export interface I18n {
  home: string;
  case_study: string;
  dashboard_template: string;
  case_studies: string;
  brands: string;
  articles: string;
  games: string;
  contact: string;
}

const en = {
  home: "Home",
  case_study: "Projects",
  dashboard_template: "Dashboard Template",
  case_studies: "Case Studies",
  brands: "Brands",
  articles: "Articles",
  games: "Games",
  contact: "Contact me",
  secret_found: "🔓 You've unlocked my final form. Félicitations!"
};

const fr = {
  home: "Accueil",
  case_study: "Projets",
  dashboard_template: "Modèle de tableau de bord",
  case_studies: "Études de cas",
  brands: "Marques",
  articles: "Articles",
  games: "Jeux",
  contact: "Contactez-moi",
  secret_found: "🔓 Vous avez débloqué ma forme finale. Félicitations!"
};

const locales = { en, fr };
export default locales;
