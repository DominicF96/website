export interface ArticleMetadata {
  id: string;
  title: string;
  date: string;
  img: string;
  img_alt: string;
  img_src: string;
  excerpt: string;
  read_time_seconds: number;
  tags: string[];

}

export interface DatedArticleMetadata extends ArticleMetadata {
  hash: string;
  last_updated: string;
}
