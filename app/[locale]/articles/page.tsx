import { Locale } from "@/i18n.config";
import Articles from "@/components/pages/articles";
import { PageContainer } from "@/components/Container";
import metadata from "./metadata";

type WebPageProps = {
    params: Promise<{
        locale: Locale;
    }>;
};
export const generateMetadata = metadata;

export default async function ArticlesPage(props: WebPageProps) {
    const params = await props.params;
    const { locale } = params;
    return (
        <PageContainer>
            <Articles locale={locale} />
        </PageContainer>
    );
}



