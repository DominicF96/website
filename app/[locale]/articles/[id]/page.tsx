import path from "path";
import type { Metadata } from "next";
import { generateMdxMetadata } from "@/utils/generate-mdx-metadata";
import { PageContainer } from "@/components/Container";
import { Locale } from "@/i18n.config";
import i18n from "./i18n";
import ArticleMdxContent from "@/components/pages/articles/ArticleMDXContent";

interface ArticlePageProps {
    params: Promise<{
        locale: Locale;
        id: string;
    }>;
}

export async function generateMetadata({
    params,
}: ArticlePageProps): Promise<Metadata> {
    const { locale, id } = await params;
    const contentPath = path.join(
        process.cwd(),
        "content",
        locale,
        "articles",
        id,
        "page.mdx"
    );
    const meta = generateMdxMetadata({
        contentPath,
        id,
        ogImagePrefix: "/images/articles/",
    });
    return meta;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { locale, id } = await params;
    const t = i18n[locale];

    const contentPath = path.join(
        process.cwd(),
        "content",
        locale,
        "articles",
        id,
        "page.mdx"
    );

    return (
        <PageContainer>
            <ArticleMdxContent
                contentPath={contentPath}
                backHref={`/${locale}/articles`}
                backLabel={t.back_to_list}
                locale={locale}
            />
        </PageContainer>
    );
}