export interface I18n {
  contact: string;
  firstname: {
    label: string;
    placeholder: string;
  };
  lastname: {
    label: string;
    placeholder: string;
  };
  email: {
    label: string;
    placeholder: string;
  };
  company: {
    label: string;
    placeholder: string;
  };
  reason_select: {
    label: string;
    options: {
      freelance: string;
      job: string;
      partnership: string;
      other: string;
    };
    placeholder: string;
  };
  message: {
    label: string;
    placeholder: string;
  };
  newsletter: {
    label: string;
    tips: {
      success: string;
      error: string;
    };
  };
  errors: {
    min_2_chars: string;
    min_5_chars: string;
    max_50_chars: string;
    max_500_chars: string;
    email_valid: string;
    only_letters: string;
    submit: string;
  };
  submit: string;
  submit_successful: string;
}

export const en: I18n = {
  contact: "Say hello!",
  firstname: {
    label: "First Name",
    placeholder: "John",
  },
  lastname: {
    label: "Last Name",
    placeholder: "Snow",
  },
  email: {
    label: "Email Address",
    placeholder: "john@abc.com",
  },
  company: {
    label: "Company Website",
    placeholder: "https://abc.com",
  },
  reason_select: {
    label: "What can I do to help?",
    options: {
      freelance: "Freelance Work",
      job: "Job Offer",
      partnership: "Partnership",
      other: "Other",
    },
    placeholder: "Select...",
  },
  message: {
    label: "Your message",
    placeholder: "The north remembers!",
  },
  newsletter: {
    label: "Subscribe to the newsletter",
    tips: {
      success: "You are now subscribed to our newsletter!",
      error:
        "An error occurred while subscribing to the newsletter. Please try again later.",
    },
  },
  errors: {
    min_2_chars: "Must be at least 2 characters",
    min_5_chars: "Must be at least 5 characters",
    max_50_chars: "Must be at most 50 characters",
    max_500_chars: "Must be at most 500 characters",
    email_valid: "Must be a valid email",
    only_letters: "Must contain only letters",
    submit:
      "An error occurred while submitting the form. Please try again later.",
  },
  submit: "Submit",
  submit_successful:
    "Thank you for reaching out! I will get back to you shortly.",
};

export const fr: I18n = {
  contact: "Un petit mot?",
  firstname: {
    label: "Prénom",
    placeholder: "John",
  },
  lastname: {
    label: "Nom de famille",
    placeholder: "Snow",
  },
  email: {
    label: "Adresse courriel",
    placeholder: "john@abc.com",
  },
  company: {
    label: "Site Web de la compagnie",
    placeholder: "https://abc.com",
  },
  reason_select: {
    label: "Comment puis-je vous aider?",
    options: {
      freelance: "Contrat de travail indépendant",
      job: "Offre d'emploi",
      partnership: "Partenariat",
      other: "Autre",
    },
    placeholder: "Sélectionnez...",
  },
  message: {
    label: "Votre message",
    placeholder: "Le nord se souvient!",
  },
  newsletter: {
    label: "S'inscrire à l'infolettre",
    tips: {
      success: "Vous êtes maintenant inscrit à notre infolettre!",
      error:
        "Une erreur s'est produite lors de l'inscription à l'infolettre. Veuillez réessayer plus tard.",
    },
  },
  errors: {
    min_2_chars: "Doit contenir au moins 2 caractères",
    min_5_chars: "Doit contenir au moins 5 caractères",
    max_50_chars: "Doit contenir au plus 50 caractères",
    max_500_chars: "Doit contenir au plus 500 caractères",
    email_valid: "Doit être une adresse courriel valide",
    only_letters: "Doit contenir uniquement des lettres",
    submit:
      "Une erreur s'est produite lors de la soumission du formulaire. Veuillez réessayer plus tard.",
  },
  submit: "Soumettre",
  submit_successful:
    "Merci de m'avoir contacté! Je vous répondrai sous peu.",
};
