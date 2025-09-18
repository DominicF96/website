import { Locale } from "@/i18n.config";
import Articles from "@/components/pages/articles";
import { PageContainer } from "@/components/Container";
import metadata from "./metadata";

type WebPageProps = {
    params: {
        locale: Locale;
    };
};
export const generateMetadata = metadata;

export default function ArticlesPage({ params }: WebPageProps) {
    const { locale } = params;
    return (
        <PageContainer>
            <Articles locale={locale} />
        </PageContainer>
    );
}



