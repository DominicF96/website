export interface I18n {
  title: string;
  description: string;
  search: {
    label: string;
    placeholder: string;
    not_found: string;
  };
  read_time: string;
  date: string;
  project_type: string;
  role: string;
  see_case_study: string;
  open: string;
  wip: string;
  back: string;
  sort: {
    label: string;
    by: string;
    title: string;
    date: string;
    score: string;
  },
  coming_soon: string;
}

const en: I18n = {
  title: "Case Studies",
  description: "Case studies showcase past projects and also provide an opportunity to evaluate their success as well as my contributions.",
  search: {
    label: "Search",
    placeholder: "Search case studies...",
    not_found: "No case study found.",
  },
  read_time: "Estimated reading time",
  date: "Date",
  project_type: "Project Type",
  role: "Role",
  see_case_study: "See Case Study",
  open: "Open",
  wip: "Work in progress, check back soon!",
  back: "Retour",
  sort: {
    label: "Sort",
    by: "Sort by",
    title: "Title",
    date: "Date",
    score: "Score"
  },
  coming_soon: "Soon"
};

const fr: I18n = {
  title: "Études de cas",
  description: "Les études de cas présentent des projets passés et offrent également l'opportunité d'évaluer leur succès ainsi que ma contribution.",
  search: {
    label: "Recherche",
    placeholder: "Chercher des études de cas...",
    not_found: "Aucune étude de cas trouvée.",
  },
  read_time: "Temps de lecture estimé",
  date: "Date",
  project_type: "Type de projet",
  role: "Rôle",
  see_case_study: "Voir l'étude de cas",
  open: "Ouvrir",
  wip: "En cours de rédaction, revenez bientôt!",
  back: "Retour",
  sort: {
    label: "Trier",
    by: "Trier par",
    title: "Titre",
    date: "Date",
    score: "Score"
  },
  coming_soon: "Bientôt"
};

const locales = { en, fr };
export default locales;
