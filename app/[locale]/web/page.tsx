import { Locale } from "@/i18n.config";
import metadata from "./metadata";
import CaseStudies from "@/components/pages/web/CaseStudies";
import { PageContainer } from "@/components/Container";

type WebPageProps = {
  params: {
    locale: Locale;
  };
};
export const generateMetadata = metadata;

export default function WebPage({ params }: WebPageProps) {
  const { locale } = params;
  return (
    <PageContainer>
      <CaseStudies locale={locale} />
    </PageContainer>
  );
}



