export interface CaseStudyMetadata {
  id: string;
  title: string;
  project_type: string;
  role: string;
  date: string;
  description: string;
  url?: string;
  score: number;
  tags: string[];
}

export interface DatedCaseStudyMetadata extends CaseStudyMetadata {
  hash: string;
  last_updated: string;
}
