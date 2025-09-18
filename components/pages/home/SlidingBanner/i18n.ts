export interface I18n {
  row1: Array<string>;
  row2: Array<string>;
  row3: Array<string>;
}

const en = {
  row1: ["Creative", "Visionary", "Agile", "Inspired"],
  row2: ["Developer", "Designer", "Product Owner"],
  row3: ["Self-Starter", "Versatile", "Leader", "Team Player"],
};

const fr = {
  row1: ["Créatif", "Visionnaire", "Agile", "Inspiré"],
  row2: ["Développeur", "Designer", "Product Owner"],
  row3: ["Autonome", "Polyvalent", "Leader", "Esprit d'équipe"],
};

const locales = { en, fr }; 
export default locales;
