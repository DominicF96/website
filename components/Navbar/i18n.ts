export interface I18n {
  home: string;
  case_study: string;
  dashboard_template: string;
  blog: string;
  contact: string;
}

const en = {
  home: "Home",
  case_study: "Case Studies",
  dashboard_template: "Dashboard Template",
  blog: "Blog",
  contact: "Contact me",
};

const fr = {
  home: "Accueil",
  case_study: "Études de cas",
  dashboard_template: "Modèle de tableau de bord",
  blog: "Blog",
  contact: "Contactez-moi",
};

export default { en, fr };
