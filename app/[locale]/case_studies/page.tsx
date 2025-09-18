import { Locale } from "@/i18n.config";
import CaseStudies from "@/components/pages/case_studies/CaseStudies";
import { PageContainer } from "@/components/Container";
import metadata from "./metadata";

type WebPageProps = {
    params: {
        locale: Locale;
    };
};
export const generateMetadata = metadata;

export default function CaseStudiesPage({ params }: WebPageProps) {
    const { locale } = params;
    return (
        <PageContainer>
            <CaseStudies locale={locale} />
        </PageContainer>
    );
}



