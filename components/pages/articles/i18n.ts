export interface I18n {
    title: string;
    description: string;
    search: {
        not_found: string;
    }
}

const en: I18n = {
    title: "Articles / Devlogs",
    description: "I write about product strategy, User Experience, Design and Frontend Development and anything else that crosses my mind.",
    search: {
        not_found: "No article found.",
    }
};

const fr: I18n = {
    title: "Articles / Devlogs",
    description: "J'écris sur la stratégie de produit, l'expérience utilisateur, le design et le développement frontend et tout ce qui me passe par la tête.",
    search: {
        not_found: "Aucun article trouvé."
    }
};

export default { en, fr };
