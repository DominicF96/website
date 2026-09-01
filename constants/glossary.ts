// Ordered by category, then by weight. Render order is the display order, so
// the categories cluster visually without needing labels.
//
// weight 1    = headline terms, the positioning itself
// weight 0.7  = supporting skills
// weight 0.45 = context

export type GlossaryCategory =
  | "product"
  | "design"
  | "ai"
  | "leadership"
  | "tech";

export interface GlossaryTerm {
  name: string;
  score: number;
  category: GlossaryCategory;
}

export const GLOSSARY: GlossaryTerm[] = [
  // --- Produit ---
  { name: "Product Strategy", score: 1, category: "product" },
  { name: "Product Management", score: 1, category: "product" },
  { name: "Roadmapping", score: 1, category: "product" },
  { name: "Discovery", score: 0.7, category: "product" },
  { name: "OKRs", score: 0.7, category: "product" },
  { name: "KPIs", score: 0.7, category: "product" },
  { name: "User Research", score: 0.45, category: "product" },
  { name: "Prioritization", score: 0.45, category: "product" },
  { name: "Backlog", score: 0.45, category: "product" },
  { name: "Stakeholder Management", score: 0.45, category: "product" },

  // --- Design ---
  { name: "Design Systems", score: 1, category: "design" },
  { name: "UX Design", score: 1, category: "design" },
  { name: "UI Design", score: 0.7, category: "design" },
  { name: "Design Tokens", score: 0.7, category: "design" },
  { name: "Figma", score: 0.7, category: "design" },
  { name: "Accessibility", score: 0.7, category: "design" },
  { name: "Information Architecture", score: 0.45, category: "design" },
  { name: "Prototyping", score: 0.45, category: "design" },
  { name: "Storybook", score: 0.45, category: "design" },
  { name: "WCAG", score: 0.45, category: "design" },

  // --- IA & automatisation ---
  { name: "AI-Assisted Development", score: 1, category: "ai" },
  { name: "Agentic Workflows", score: 1, category: "ai" },
  { name: "AI Agents", score: 0.7, category: "ai" },
  { name: "Prompt Engineering", score: 0.45, category: "ai" },
  { name: "Workflow Automation", score: 0.45, category: "ai" },
  { name: "LLM", score: 0.45, category: "ai" },

  // --- Leadership ---
  { name: "Team Leadership", score: 1, category: "leadership" },
  { name: "Agile", score: 0.7, category: "leadership" },
  { name: "Mentoring", score: 0.7, category: "leadership" },
  { name: "Hiring", score: 0.45, category: "leadership" },

  // --- Technique ---
  { name: "TypeScript", score: 1, category: "tech" },
  { name: "React", score: 0.7, category: "tech" },
  { name: "Next.js", score: 0.7, category: "tech" },
  { name: "Angular", score: 0.45, category: "tech" },
  { name: "Tailwind", score: 0.45, category: "tech" },
  { name: "shadcn/ui", score: 0.45, category: "tech" },
  { name: "REST", score: 0.45, category: "tech" },
  { name: "PostgreSQL", score: 0.45, category: "tech" },
  { name: "Git", score: 0.45, category: "tech" },
  { name: "Vercel", score: 0.45, category: "tech" },
];
