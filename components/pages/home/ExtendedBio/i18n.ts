export interface I18n {
  frontend: {
    title: string;
    description: string;
  };
  ux: {
    title: string;
    description: string;
  };
  team_player: {
    title: string;
    description: string;
  };
}

const en = {
  frontend: {
    title: "Frontend Expertise",
    description:
      "Over the years, I've developed strong expertise in Frontend development, mastering modern technologies such as Next.js, React, TypeScript, SASS, and Storybook. Working in startups with versatile roles, I've also learned to collaborate effectively and contribute on the backend.",
  },
  project_management: {
    title: "Project Management",
    description:
      "I set objectives aligned with the company's vision and lead technical teams to deliver on them. I coordinate efforts, streamline communication, and drive projects forward, with experience managing up to 20 collaborators across several teams in a dynamic startup environment.",
  },
  digital_strategy: {
    title: "Digital Strategy",
    description:
      "I approach every role with dedication and a broader perspective beyond daily tasks, which has allowed me to guide executives and partners effectively; something I thrive on and that others consistently value in my skillset.",
  },
  ux: {
    title: "UI & UX",
    description:
      "I have extensive experience creating low- and high-fidelity mockups in Figma, enabling rapid idea visualization and smooth collaboration with development teams. I design effective user experiences by balancing technical constraints, deadlines, and UX quality.",
  },
};

const fr = {
  frontend: {
    title: "Expertise Frontend",
    description:
      "Au fil des années, j'ai développé une solide expertise en développement Frontend, maîtrisant des technologies modernes telles que Next.js, React, TypeScript, SASS et Storybook. Évoluant dans des startups aux responsabilités polyvalentes, j'ai également appris à collaborer efficacement et à contribuer côté backend.",
  },
  project_management: {
    title: "Gestion de projet",
    description:
      "Je définis des objectifs alignés sur la vision de l'entreprise et je dirige les équipes techniques pour les atteindre. Je coordonne les efforts, facilite la communication et fais avancer les projets, avec une expérience de gestion allant jusqu'à 20 collaborateurs répartis sur plusieurs équipes, dans un environnement startup dynamique.",
  },
  digital_strategy: {
    title: "Stratégie numérique",
    description:
      "J'aborde chaque rôle avec sérieux et une vision qui dépasse les tâches quotidiennes, ce qui m'a permis d'accompagner efficacement des dirigeants et des partenaires. Cette compétence, appréciée de mes collègues, est également une source d'épanouissement personnel.",
  },
  ux: {
    title: "UI / UX",
    description:
      "J'ai une solide expérience dans la création de maquettes low et high fidelity sur Figma, permettant de matérialiser rapidement des idées et de faciliter la collaboration avec les équipes de développement. Je conçois des expériences utilisateurs efficaces en trouvant le juste équilibre entre contraintes techniques, délais et qualité UX.",
  },
};

const locales = { en, fr };
export default locales;
