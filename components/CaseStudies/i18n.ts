export interface I18n {
  title: string;
  see_case_study: string;
  open: string;
  wip: string;
  back: string;
  cases: {
    [key: string]: {
      title: string;
      description: string;
    };
  };
}

const en = {
  title: "Projects",
  see_case_study: "See Case Study",
  open: "Open",
  wip: "Work in progress, check back soon!",
  back: "Retour",
  cases: {
    monark_website: {
      title: "Monark • Website",
      description:
        "Monark co-founder, we incubate the next generation of Web3 innovators, launching startups by students, recent graduates, and independent developers, aligned from day one with the ecosystems of our funding partners.",
    },
    anthony_king_website: {
      title: "Anthony King • Website",
      description:
        "Anthony King is a Mortgage Broker and financial planner in the Greater Montreal Area.",
    },
    // quickdocs_website: {
    //   title: "QuickDocs • Website (WIP)",
    //   description:
    //     "Quickdocs' website is a document management platform for professionals that I plan, design and develop entirely. The project started in February 2024.",
    // },
    // quickdocs_blog: {
    //   title: "QuickDocs • Blog (WIP)",
    //   description:
    //     "Quickdocs's blog, the platform for managing professional documents that I develop since February 2024.",
    // },
    dominicf96_portfolio_2024: {
      title: "Dominic Fournier • Portfolio & Blog 2024",
      description:
        "You are Here! This is the 3rd version of my personal portfolio. Built with Next.js and Tailwind CSS, it is also much more representative of my current skills.",
    },
    pinax_app: {
      title: "Pinax • Web Platform",
      description:
        "Pinax's cloud services platform allows users to access various decentralized services, such as RPC endpoints, Firehose, and Substreams.",
    },
    eosnation_ens: {
      title: "EOS Nation • Name Service",
      description:
        "EOS Nation's name service allows users to associate domain names with EOSIO wallet addresses.",
    },
    pinax_website: {
      title: "Pinax • Website",
      description:
        "Pinax's website showcases the various services offered by the company.",
    },
    pinax_subtivity: {
      title: "Pinax • Subtivity",
      description:
        "Subtivity is an experimental project by Pinax to demonstrate the power of Substreams by accessing real-time Blockchain data.",
    },
    eosnation_spyglass: {
      title: "EOS Nation • Spyglass",
      description:
        "Spyglass is a decentralized transaction traces explorer. A transaction trace allows you to follow a transaction attempt on the Blockchain, before it is validated.",
    },
    oreus_website: {
      title: "Oreus • Website",
      description:
        "Oreus is a web product development consulting company that I co-founded in 2021 (Closed).",
    },
    oreus_balance_website: {
      title: "Oreus • Balance",
      description:
        "Oreus Balance is my first fully designed project. It was planned to be the first Oreus product, a personal finance web application (Closed).",
    },
    // streamingfast_substreams_registry: {
    //   title: "StreamingFast • Substreams Registry",
    //   description:
    //     "StreamingFast's Substreams Registry allows users to access an inventory of Substreams packages to extract data from the Blockchain in a modular way.",
    // },
    fanslab_webapp: {
      title: "Fanslab • Web Platform",
      description:
        "Fanslab offers a community management platform for networking events. I built the first version of the web application's Frontend in less than a month (Closed).",
    },
  },
};

const fr = {
  title: "Projets",
  see_case_study: "Voir l'étude de cas",
  open: "Ouvrir",
  wip: "En cours de rédaction, revenez bientôt!",
  back: "Retour",
  cases: {
    monark_website: {
      title: "Monark • Site Web",
      description:
        "Co-fondation de Monark, nous incubons la prochaine génération d'innovateurs Web3, lançant des startups par des étudiants, de jeunes diplômés et des développeurs indépendants, alignés dès le premier jour avec les écosystèmes de nos partenaires financiers.",
    },
    anthony_king_website: {
      title: "Anthony King • Site Web",
      description:
        "Anthony King est un courtier hypothécaire et planificateur financier dans la région du Grand Montréal.",
    },
    // quickdocs_website: {
    //   title: "QuickDocs • Site Web (WIP)",
    //   description:
    //     "Le site web de Quickdocs est une plateforme de gestion de documents pour professionnels que je conçoit en entier. Le projet a démarré en février 2024.",
    // },
    // quickdocs_blog: {
    //   title: "QuickDocs • Blogue (WIP)",
    //   description:
    //     "Le blog de Quickdocs, la plateforme de gestion de gestion de documents professionnels que je conçoit depuis février 2024.",
    // },
    dominicf96_portfolio_2024: {
      title: "Dominic Fournier • Portfolio & Blog 2024",
      description:
        "Vous êtes ici! Il s'agit de la 3e version de mon portfolio personnel. Construit avec Next.js et Tailwind CSS, il est également beaucoup plus représentatif de mes compétences actuelles.",
    },
    pinax_app: {
      title: "Pinax • Plateforme Web",
      description:
        "La plateforme web de Pinax permet à ses utilisateurs d'accéder à différents services décentralisés, tels que des points d'accès RPC, Firehose et Substreams.",
    },
    eosnation_ens: {
      title: "EOS Nation • Name Service",
      description:
        "Le service de nom EOS Nation permet à ses utilisateurs d'associer des noms de domaine à des adresses de portefeuille EOSIO.",
    },
    pinax_website: {
      title: "Pinax • Site Web",
      description:
        "Le site web de Pinax présente les différents services offerts par l'entreprise.",
    },
    pinax_subtivity: {
      title: "Pinax • Subtivity",
      description:
        "Subtivity est un projet expérimental de Pinax pour démontrer la puissance de Substreams en accédant à des données de la Blockchain en temps réel.",
    },
    eosnation_spyglass: {
      title: "EOS Nation • Spyglass",
      description:
        "Spyglass est un explorateur traces de transactions décentralisées. Une trace de transaction permet de suivre une tentative de transaction sur la Blockchain, avant qu'elle ne soit validée.",
    },
    oreus_website: {
      title: "Oreus • Site Web",
      description:
        "Oreus est une entreprise de services-conseils en développement de produits web que j'ai co-fondé en 2021 (Fermée).",
    },
    oreus_balance_website: {
      title: "Oreus • Balance",
      description:
        "Oreus Balance est mon premier projet entièrement conçu. Il était prévu pour être le premier produit Oreus, une application web de gestion de finances personnelles (Fermé).",
    },
    // streamingfast_substreams_registry: {
    //   title: "StreamingFast • Registre Substreams",
    //   description:
    //     "Le registre des Substreams de StreamingFast permet à ses utilisateurs d'accéder à un inventaire de paquets Substreams permettant d'extraire des données de la Blockchain de façon modulaire.",
    // },
    fanslab_webapp: {
      title: "Fanslab • Plateforme Web",
      description:
        "Fanslab offre une plateforme de gestion de communautés pour les événements de réseautage. J'ai bâti la première version du Frontend de l'application web en moins d'un mois (Fermé).",
    },
  },
};

export default { en, fr };
