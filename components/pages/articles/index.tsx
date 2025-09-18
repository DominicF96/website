"use client";
import React, { useEffect, useState } from "react";
// import { Input } from "@/components/ui/input";
import enArticles from "@/content/en/articles/index";
import frArticles from "@/content/fr/articles/index";
import i18n from "./i18n";
import { DatedArticleMetadata } from "@/types/article.types";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { Locale } from "@/i18n.config";
import ArticleRow from "./PostRow";
import { CenteredContainer } from "@/components/Container";
import { H1, Muted, P } from "@/components/Typography";
// import { Label } from "@/components/ui/label";

interface ArticlesListProps {
    locale: Locale;
}

const articlesDataMap: Record<Locale, DatedArticleMetadata[]> = {
    en: enArticles,
    fr: frArticles,
};

const ArticlesList: React.FC<ArticlesListProps> = ({ locale }) => {
    const t = i18n[locale];
    //   const [search, setSearch] = useState("");
    const [articles, setArticles] = useState<DatedArticleMetadata[]>([]);
    //   const [sortMode, setSortMode] = useState<'title' | 'score' | 'date'>("score");

    useEffect(() => {
        const articlesData = articlesDataMap[locale];
        setArticles(articlesData.sort((a,b) => b.date > a.date ? 1 : -1));
    }, [locale]);

    const filteredArticles = articles;

    return (
        <div>
            <CenteredContainer className="pb-40 mt-4">
                <H1>{t.title}</H1>
                <Muted className="max-w-[450px] mb-8">{t.description}</Muted>
                {/* <div className="flex flex-col sm:flex-row gap-4 mb-2">
          <div className="flex flex-1 flex-col gap-2">
            <Label className="ml-4">{t.search.label}</Label>
            <Input
              placeholder={t.search.placeholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="ml-4">{t.sort.label}</Label>
            <Select value={sortMode} onValueChange={v => setSortMode(v as 'title' | 'score' | 'date')}>
              <SelectTrigger className="min-w-[200px]">
                <SelectValue>{t.sort[sortMode]}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="score">{t.sort.by}&nbsp;{t.sort.score}</SelectItem>
                <SelectItem value="date">{t.sort.by}&nbsp;{t.sort.date}</SelectItem>
                <SelectItem value="title">{t.sort.by}&nbsp;{t.sort.title}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div> */}
            </CenteredContainer>
            {filteredArticles.length > 0 ? (
                filteredArticles.map((article, index) => {
                    return (
                        <ArticleRow article={article} locale={locale} key={`article_row_${index}`} />
                    )
                })
            ) : (
                <CenteredContainer>
                    <Muted className="text-lg mt-8 mb-48">
                        {t.search.not_found}
                    </Muted>
                </CenteredContainer>
            )}
        </div>
    );
};

export default ArticlesList;