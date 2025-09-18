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
      "Over the years, I've developed strong expertise in frontend development, mastering modern technologies such as Next.js, React, TypeScript, SASS, and Storybook. Working in startups with versatile roles, I've also learned to collaborate effectively and contribute on the backend.",
  },
  ux: {
    title: "UI & UX",
    description:
      "I have extensive experience creating low- and high-fidelity mockups in Figma, enabling rapid idea visualization and smooth collaboration with development teams. I design effective user experiences by balancing technical constraints, deadlines, and UX quality.",
  },
  project_management: {
    title: "Project Management",
    description:
      "I set objectives aligned with company vision and lead technical teams to achieve them. I coordinate efforts, facilitate communication, and ensure projects progress efficiently.",
  },
  innovation: {
    title: "Innovation",
    description:
      "Curious and proactive, I explore new technologies and approaches to enhance frontend development, UI/UX, and project management. This mindset allows me to contribute innovative solutions and build products that are both effective and forward-looking.",
  },
};

const fr = {
  frontend: {
    title: "Expertise Frontend",
    description:
      "Au fil des années, j'ai développé une solide expertise en développement frontend, maîtrisant des technologies modernes telles que Next.js, React, TypeScript, SASS et Storybook. Évoluant dans des startups aux responsabilités polyvalentes, j'ai également appris à collaborer efficacement et à contribuer côté backend.",
  },
  ux: {
    title: "UI / UX",
    description:
      "J'ai une solide expérience dans la création de maquettes low et high fidelity sur Figma, permettant de matérialiser rapidement des idées et de faciliter la collaboration avec les équipes de développement. Je conçois des expériences utilisateurs efficaces en trouvant le juste équilibre entre contraintes techniques, délais et qualité UX.",
  },
  project_management: {
    title: "Gestion de projet",
    description:
      "Je définis des objectifs alignés sur la vision de l'entreprise et dirige des équipes techniques pour les atteindre. Je coordonne les efforts, facilite la communication et assure l'avancement efficace des projets.",
  },
  innovation: {
    title: "Innovation",
    description:
      "Curieux et proactif, j'explore constamment de nouvelles technologies et approches pour enrichir mes compétences en frontend, UI/UX et gestion de projets. Cette démarche me permet d'apporter des solutions innovantes et de concevoir des produits à la fois efficaces et tournés vers 'avenir.",
  },
};

const locales = { en, fr }; 
export default locales;
