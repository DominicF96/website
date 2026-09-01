import { Locale } from "@/i18n.config";
import { CenteredContainer, PageContainer } from "@/components/Container";
import metadata from "./metadata";
import { H1 } from "@/components/Typography";
import i18n from "./i18n";

type GamesPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};
export const generateMetadata = metadata;

export default async function GamesPage(props: GamesPageProps) {
  const params = await props.params;
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



