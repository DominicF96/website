import Hero from "@/components/pages/home/Hero";
import ExtendedBio from "@/components/pages/home/ExtendedBio";
import CardShortcuts from "@/components/pages/home/CardShortcuts";
import { PageContainer } from "@/components/Container";
import { Locale } from "@/i18n.config";
import metadata from "./metadata";
import Image from "next/image";

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
      <Image src="/images/dominic_fournier.webp" height={256} width={256} alt="Dominic Fournier" className="block lg:hidden px-4 py-8 relative z-10" />
      <Image src="/images/dominic_fournier.webp" height={500} width={1500} alt="Dominic Fournier" className="hidden lg:block w-[500px] absolute top-60 right-32" />
      <Hero locale={locale} />
      <ExtendedBio locale={locale} />
      <CardShortcuts locale={locale} />
    </PageContainer>
  );
}
