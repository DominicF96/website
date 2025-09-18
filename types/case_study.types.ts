export interface CaseStudyMetadata {
  id: string;
  title: string;
  role: string;
  date: string;
  description: string;
  url?: string;
  score: number;
}

export interface DatedCaseStudyMetadata extends CaseStudyMetadata {
  hash: string;
  last_updated: string;
}
