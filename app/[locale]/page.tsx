import Hero from "@/components/Hero";
import SlidingBanner from "@/components/SlidingBanner";
import { Locale } from "@/i18n.config";
import metadata from "./metadata";
import CaseStudies from "@/components/CaseStudies";
import { PageContainer } from "@/components/Container";
import ExtendedBio from "@/components/ExtendedBio";
import Glossary from "@/components/Glossary/Glossary";

type HomePageProps = {
  params: {
    locale: Locale;
  };
};
export const generateMetadata = metadata;

export default function HomePage({ params }: HomePageProps) {
  const { locale } = params;
  return (
    <PageContainer>
      <Hero locale={locale} />
      <ExtendedBio locale={locale} />
      <CaseStudies locale={locale} />
      <SlidingBanner locale={locale} className="mt-32 md:mt-48" />
      <Glossary />
    </PageContainer>
  );
}
