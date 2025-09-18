export interface I18n {
    title: string;
    description: string;
}

const en: I18n = {
    title: "Brands",
    description: "Showcase of brands I've had the pleasure to design, highlighting their identity and visual style."
};

const fr: I18n = {
    title: "Marques",
    description: "Vitrine des marques pour lesquelles j'ai eu le plaisir de créer l'identité et le style visuel."
};

const locales = { en, fr }; 
export default locales;
