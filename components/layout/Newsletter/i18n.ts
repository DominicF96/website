export interface I18n {
  title: string;
  description: string;
  placeholder: string;
  action: string;
  error: {
    email_invalid: string;
    email_required: string;
  };
}

const en = {
  title: "Get Notified",
  description:
    "Interested in what I do? Subscribe to my newsletter to receive updates on my latest work.",
  placeholder: "Email",
  action: "Subscribe",
  success: "You are now subscribed to my newsletter!",
  error: {
    email_invalid: "Please enter a valid email address.",
    email_required: "Please enter an email address.",
    subscribe: "An error occurred. Please try again later.",
  },
};

const fr = {
  title: "Restez informé",
  description:
    "Vous êtes intéressé par ce que je fais? Abonnez-vous à mon infolettre pour recevoir des nouvelles de mes travaux récents.",
  placeholder: "Courriel",
  action: "S'abonner",
  success: "Vous êtes maintenant abonné à mon infolettre!",
  error: {
    email_invalid: "Veuillez saisir une adresse courriel valide.",
    email_required: "Veuillez saisir une adresse courriel.",
    subscribe: "Une erreur est survenue. Veuillez réessayer plus tard.",
  },
};

const locales = { en, fr };
export default locales;
