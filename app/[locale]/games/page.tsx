import { Locale } from "@/i18n.config";
import { CenteredContainer, PageContainer } from "@/components/Container";
import metadata from "./metadata";
import { H1 } from "@/components/Typography";
import i18n from "./i18n";

type GamesPageProps = {
  params: {
    locale: Locale;
  };
};
export const generateMetadata = metadata;

export default function GamesPage({ params }: GamesPageProps) {
  const { locale } = params;
  const t = i18n[locale];
  return (
    <PageContainer>
      <CenteredContainer>
        <H1>{t.title}</H1>
      </CenteredContainer>
    </PageContainer>
  );
}



