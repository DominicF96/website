import Hero from "@/components/pages/home/Hero";
import ExtendedBio from "@/components/pages/home/ExtendedBio";
import CardShortcuts from "@/components/pages/home/CardShortcuts";
import { PageContainer } from "@/components/Container";
import { Locale } from "@/i18n.config";
import { SecretImage } from "@/components/pages/home/SecretImage";
import metadata from "./metadata";

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
      <SecretImage />
      <Hero locale={locale} />
      <ExtendedBio locale={locale} />
      <CardShortcuts locale={locale} />
    </PageContainer>
  );
}
