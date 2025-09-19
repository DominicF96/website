export interface I18n {
    title: string;
    description: string;
    date: string;
    read_time: string;
    search: {
        not_found: string;
    }
}

const en: I18n = {
    title: "Articles / Devlogs",
    date: "Date",
    read_time: "Estimated reading time",
    description: "Articles about Frontend development, product strategy, design, and anything else that crosses my mind!",
    search: {
        not_found: "No article found.",
    }
};

const fr: I18n = {
    title: "Articles / Devlogs",
    date: "Date",
    read_time: "Temps de lecture estimé",
    description: "Articles sur le développement Frontend, la stratégie de produit, le design et et tout ce qui me passe par la tête!",
    search: {
        not_found: "Aucun article trouvé."
    }
};

const locales = { en, fr };
export default locales;
