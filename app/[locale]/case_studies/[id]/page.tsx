import path from "path";
import type { Metadata } from "next";
import { generateMdxMetadata } from "@/utils/generate-mdx-metadata";
import MdxContentPage from "@/components/common/mdx-content-page";
import { PageContainer } from "@/components/Container";
import { Locale } from "@/i18n.config";
import i18n from "./i18n";

interface CaseStudyPageProps {
    params: Promise<{
        locale: Locale;
        id: string;
    }>;
}

export async function generateMetadata({
    params,
}: CaseStudyPageProps): Promise<Metadata> {
    const { locale, id } = await params;
    const contentPath = path.join(
        process.cwd(),
        "content",
        locale,
        "case_studies",
        id,
        "page.mdx"
    );
    const meta = generateMdxMetadata({
        contentPath,
        id,
        ogImagePrefix: "/images/case_studies/",
    });
    return meta;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
    const { locale, id } = await params;
    const t = i18n[locale];

    const contentPath = path.join(
        process.cwd(),
        "content",
        locale,
        "case_studies",
        id,
        "page.mdx"
    );

    return (
        <PageContainer>
            <MdxContentPage
                contentPath={contentPath}
                backHref={`/${locale}/case_studies`}
                backLabel={t.back_to_list}
                locale={locale}
            />
        </PageContainer>
    );
}