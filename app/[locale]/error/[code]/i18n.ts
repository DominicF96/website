export interface ErrorI18n {
  title: string;
  subtitle: string;
  content_1: {
    description: string;
    actions: {
      home: string;
    };
  };
}

export interface I18n {
  error_definitions: {
    "400": ErrorI18n;
    "401": ErrorI18n;
    "403": ErrorI18n;
    "404": ErrorI18n;
    "405": ErrorI18n;
    "408": ErrorI18n;
    "409": ErrorI18n;
    "410": ErrorI18n;
    "418": ErrorI18n;
    "429": ErrorI18n;
    "500": ErrorI18n;
    "501": ErrorI18n;
    "502": ErrorI18n;
    "503": ErrorI18n;
    "504": ErrorI18n;
  };
  fun_facts: string[];
}

export const en: I18n = {
  error_definitions: {
    "400": {
      title: "Bad Request",
      subtitle: "Something went wrong with your request.",
      content_1: {
        description: "Check your input and try again.",
        actions: { home: "Return to the homepage" },
      },
    },
    "401": {
      title: "Unauthorized",
      subtitle: "You don't have permission to access this resource.",
      content_1: {
        description: "Please log in or authenticate to continue.",
        actions: { home: "Return to the homepage" },
      },
    },
    "403": {
      title: "Forbidden",
      subtitle: "This area is restricted.",
      content_1: {
        description: "Ensure you have the right permissions or contact support.",
        actions: { home: "Return to the homepage" },
      },
    },
    "404": {
      title: "Not Found",
      subtitle: "The page you're looking for doesn't exist or has moved.",
      content_1: {
        description: "You've wandered... Perfect time to enjoy some ramen!",
        actions: { home: "Go home with a full belly" },
      },
    },
    "405": {
      title: "Method Not Allowed",
      subtitle: "The method used isn't supported here.",
      content_1: {
        description: "Try a different action or return to the homepage.",
        actions: { home: "Return to the homepage" },
      },
    },
    "408": {
      title: "Request Timeout",
      subtitle: "Your request took too long to complete.",
      content_1: {
        description: "Please try again with a stable connection.",
        actions: { home: "Return to the homepage" },
      },
    },
    "409": {
      title: "Conflict",
      subtitle: "There was a conflict between requests.",
      content_1: {
        description: "Resolve the conflict and try again.",
        actions: { home: "Return to the homepage" },
      },
    },
    "410": {
      title: "Gone",
      subtitle: "This resource is no longer available.",
      content_1: {
        description: "Try searching for something else.",
        actions: { home: "Return to the homepage" },
      },
    },
    "418": {
      title: "I'm a Teapot",
      subtitle: "This server refuses to brew coffee.",
      content_1: {
        description: "Try a different request.",
        actions: { home: "Return to the homepage" },
      },
    },
    "429": {
      title: "Too Many Requests",
      subtitle: "You've sent too many requests in a short time.",
      content_1: {
        description: "Please wait a bit before trying again.",
        actions: { home: "Return to the homepage" },
      },
    },
    "500": {
      title: "Internal Server Error",
      subtitle: "Something went wrong on our side.",
      content_1: {
        description: "We're working on it—please try again later.",
        actions: { home: "Return to the homepage" },
      },
    },
    "501": {
      title: "Not Implemented",
      subtitle: "This feature isn't available yet.",
      content_1: {
        description: "This functionality is currently unavailable.",
        actions: { home: "Return to the homepage" },
      },
    },
    "502": {
      title: "Bad Gateway",
      subtitle: "A gateway error occurred.",
      content_1: {
        description: "Please wait a moment and try again.",
        actions: { home: "Return to the homepage" },
      },
    },
    "503": {
      title: "Service Unavailable",
      subtitle: "The service is temporarily unavailable.",
      content_1: {
        description: "Please check back soon.",
        actions: { home: "Return to the homepage" },
      },
    },
    "504": {
      title: "Gateway Timeout",
      subtitle: "The request took too long to complete.",
      content_1: {
        description: "Try again later when conditions improve.",
        actions: { home: "Return to the homepage" },
      },
    },
  },
  fun_facts: [
    "✨ Fun fact: The first website ever built is still online at info.cern.ch.",
    "🌍 Fun fact: About 250,000 new websites are created every day.",
    "⚡ Fun fact: JavaScript was created in just 10 days in 1995.",
    "💡 Fun fact: The term 'bug' in software comes from a real insect found in a computer in 1947.",
  ],
};

export const fr: I18n = {
  error_definitions: {
    "400": {
      title: "Mauvaise requête",
      subtitle: "Un problème est survenu avec votre demande.",
      content_1: {
        description: "Vérifiez vos informations et réessayez.",
        actions: { home: "Retour à la page d'accueil" },
      },
    },
    "401": {
      title: "Non autorisé",
      subtitle: "Vous n'avez pas la permission d'accéder à cette ressource.",
      content_1: {
        description: "Veuillez vous connecter ou vous authentifier.",
        actions: { home: "Retour à la page d'accueil" },
      },
    },
    "403": {
      title: "Interdit",
      subtitle: "Cet espace est restreint.",
      content_1: {
        description: "Vérifiez vos permissions ou contactez le support.",
        actions: { home: "Retour à la page d'accueil" },
      },
    },
    "404": {
      title: "Page non trouvée",
      subtitle: "La page demandée n'existe pas ou a été déplacée.",
      content_1: {
        description: "Vous vous êtes égaré... C'est le temps de savourer un délicieux bol de ramen!",
        actions: { home: "Retourner à l'accueil avec un ventre plein" },
      },
    },
    "405": {
      title: "Méthode non autorisée",
      subtitle: "La méthode utilisée n'est pas supportée.",
      content_1: {
        description: "Essayez une autre action ou retournez à la page d'accueil.",
        actions: { home: "Retour à la page d'accueil" },
      },
    },
    "408": {
      title: "Délai dépassé",
      subtitle: "Votre requête a mis trop de temps à s'exécuter.",
      content_1: {
        description: "Essayez à nouveau avec une connexion stable.",
        actions: { home: "Retour à la page d'accueil" },
      },
    },
    "409": {
      title: "Conflit",
      subtitle: "Un conflit est survenu entre les demandes.",
      content_1: {
        description: "Résolvez le conflit et réessayez.",
        actions: { home: "Retour à la page d'accueil" },
      },
    },
    "410": {
      title: "Supprimé",
      subtitle: "Cette ressource n'est plus disponible.",
      content_1: {
        description: "Essayez de rechercher autre chose.",
        actions: { home: "Retour à la page d'accueil" },
      },
    },
    "418": {
      title: "Je suis une théière",
      subtitle: "Ce serveur refuse de préparer du café.",
      content_1: {
        description: "Essayez une autre requête.",
        actions: { home: "Retour à la page d'accueil" },
      },
    },
    "429": {
      title: "Trop de requêtes",
      subtitle: "Vous avez envoyé trop de requêtes en peu de temps.",
      content_1: {
        description: "Veuillez patienter avant de réessayer.",
        actions: { home: "Retour à la page d'accueil" },
      },
    },
    "500": {
      title: "Erreur interne du serveur",
      subtitle: "Un problème est survenu de notre côté.",
      content_1: {
        description: "Nous y travaillons—veuillez réessayer plus tard.",
        actions: { home: "Retour à la page d'accueil" },
      },
    },
    "501": {
      title: "Non implémenté",
      subtitle: "Cette fonctionnalité n'est pas encore disponible.",
      content_1: {
        description: "Cette fonctionnalité est en cours de développement.",
        actions: { home: "Retour à la page d'accueil" },
      },
    },
    "502": {
      title: "Mauvaise passerelle",
      subtitle: "Une erreur de passerelle est survenue.",
      content_1: {
        description: "Attendez un moment, puis réessayez.",
        actions: { home: "Retour à la page d'accueil" },
      },
    },
    "503": {
      title: "Service indisponible",
      subtitle: "Le service est temporairement indisponible.",
      content_1: {
        description: "Veuillez revenir bientôt.",
        actions: { home: "Retour à la page d'accueil" },
      },
    },
    "504": {
      title: "Délai dépassé de la passerelle",
      subtitle: "La requête a pris trop de temps à s'exécuter.",
      content_1: {
        description: "Réessayez plus tard lorsque les conditions seront meilleures.",
        actions: { home: "Retour à la page d'accueil" },
      },
    },
  },
  fun_facts: [
    "✨ Le premier site web créé est toujours en ligne à l'adresse info.cern.ch.",
    "🌍 Environ 250 000 nouveaux sites web sont créés chaque jour.",
    "⚡ JavaScript a été créé en seulement 10 jours en 1995.",
    "💡 Le terme 'bug' en informatique vient d'un véritable insecte trouvé dans un ordinateur en 1947.",
  ],
};
