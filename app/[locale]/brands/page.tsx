import { Locale } from "@/i18n.config";
import { PageContainer } from "@/components/Container";
import metadata from "./metadata";
import Brands from "@/components/pages/brands";

type BrandsPageProps = {
  params: {
    locale: Locale;
  };
};
export const generateMetadata = metadata;

export default function BrandsPage({ params }: BrandsPageProps) {
  const { locale } = params;
  return (
    <PageContainer>
      <Brands locale={locale} />
    </PageContainer>
  );
}



