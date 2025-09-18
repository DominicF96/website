export interface I18n {
  back_to_list: string;
}

export const en: I18n = {
  back_to_list: "Back to Articles",
};

export const fr: I18n = {
  back_to_list: "Retour aux articles",
};

const locales = { en, fr };
export default locales;