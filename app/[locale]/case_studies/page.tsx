import { Locale } from "@/i18n.config";
import CaseStudies from "@/components/pages/case_studies";
import { PageContainer } from "@/components/Container";
import metadata from "./metadata";

type WebPageProps = {
    params: Promise<{
        locale: Locale;
    }>;
};
export const generateMetadata = metadata;

export default async function CaseStudiesPage(props: WebPageProps) {
    const params = await props.params;
    const { locale } = params;
    return (
        <PageContainer>
            <CaseStudies locale={locale} />
        </PageContainer>
    );
}



