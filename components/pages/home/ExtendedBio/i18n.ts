export interface Section {
  title: string;
  description: string;
}

export interface I18n {
  product: Section;
  design: Section;
  strategy: Section;
  frontend: Section;
}

const en = {
  product: {
    title: "Product & Delivery",
    description:
      "I own roadmaps and set the objectives and metrics that go with them. I run Agile delivery, prioritize against real constraints, and keep engineering, design and business pointed at the same thing. I've led a team of 5 developers, run hiring, and supervised 8 student project teams.",
  },
  design: {
    title: "Design & Design Systems",
    description:
      "I work in Figma from low fidelity through to production specs, and I build design systems developers actually adopt: components, tokens and documented guidelines. Most of my work is dense, complex interfaces where accessibility and business logic constrain every screen.",
  },
  strategy: {
    title: "Strategy & Advisory",
    description:
      "I bring a wider perspective than the daily task list, which is what has let me advise executives and partners directly. Having co-founded a company and helped build another, I've had to scope against real constraints rather than ideal ones.",
  },
  frontend: {
    title: "Frontend & AI Tooling",
    description:
      "I write production frontend in Next.js, React and TypeScript, so I can prototype an idea, challenge a feasibility claim, and hand developers something buildable. Most of that work now runs through AI-assisted and agentic workflows, including the internal tooling I build for myself.",
  },
};

const fr = {
  product: {
    title: "Produit et livraison",
    description:
      "Je pilote la feuille de route et définis les objectifs et les indicateurs qui l'accompagnent. Je mène la livraison en Agile, priorise en fonction des contraintes réelles et garde le développement, le design et les affaires alignés sur la même cible. J'ai dirigé une équipe de 5 développeurs, piloté l'embauche et encadré 8 équipes projet étudiantes.",
  },
  design: {
    title: "Design et systèmes de design",
    description:
      "Je travaille dans Figma, de la basse fidélité jusqu'aux spécifications de production, et je bâtis des systèmes de design que les développeurs adoptent réellement : composants, tokens et lignes directrices documentées. Je conçois surtout des interfaces denses et complexes, où l'accessibilité et la logique d'affaires contraignent chaque écran.",
  },
  strategy: {
    title: "Stratégie et conseil",
    description:
      "J'apporte une perspective plus large que la liste de tâches quotidienne, ce qui m'a permis d'accompagner directement des dirigeants et des partenaires. Ayant cofondé une entreprise et participé à en bâtir une autre, j'ai appris à définir la portée en fonction des contraintes réelles plutôt qu'idéales.",
  },
  frontend: {
    title: "Frontend et outillage IA",
    description:
      "J'écris du code frontend de production en Next.js, React et TypeScript. Je peux donc prototyper une idée, remettre en question une estimation de faisabilité et remettre aux développeurs quelque chose de constructible. La majorité de ce travail passe maintenant par des workflows assistés par IA et agentiques, incluant l'outillage interne que je me construis.",
  },
};

const locales = { en, fr };
export default locales;
