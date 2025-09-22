export interface I18n {
  back_to_list: string;
}

export const en: I18n = {
  back_to_list: "Back to the list",
};

export const fr: I18n = {
  back_to_list: "Retour à la liste",
};

const locales = { en, fr };
export default locales;