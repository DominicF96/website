"use client";
import React from "react";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import ArticleCategories from "./ArticleCategories";
import { H3, Muted } from "@/components/Typography";
import { Locale } from "@/i18n.config";
import { CenteredContainer } from "@/components/Container";
import { ArticleMetadata } from "@/types/article.types";
import { NavLink } from "@/components/common/NavLink";
import { formatDuration, mapLocaleToDateFns } from "@/utils/time";
import { CalendarIcon, ChevronRight, ClockIcon } from "lucide-react";

type Props = {
    article: ArticleMetadata;
    locale: Locale;
};

function ArticleRow({ article, locale }: Props) {
    return (
        <NavLink href={`/articles/${article.id}`}>
            <div
                className="relative z-40 p-4 py-16 border border-primary border-l-0 border-r-0 transition-all duration-300 hover:bg-primary/10"
                style={{ marginTop: "-1px" }}
            >
                <CenteredContainer>
                    <div className="md:grid md:grid-flow-row md:grid-cols-6 gap-8">
                        <div className="md:col-span-4">
                            <H3 className="pb-0">{article.title}&nbsp;<ChevronRight className="inline" strokeWidth={3}/></H3>
                            <Muted className="mt-2 flex flex-col gap-2">
                                <span>
                                    <CalendarIcon className="inline" size={16} />&nbsp;
                                    <time>
                                        {format(parseISO(article.date), "PPP", {
                                            locale: mapLocaleToDateFns(locale),
                                        })}
                                    </time>
                                </span>
                                <span><ClockIcon className="inline" size={16} />&nbsp;{formatDuration(article.read_time_seconds, locale)}</span>
                            </Muted>
                            <Muted className=" py-4 opacity-90">{article.excerpt}</Muted>
                            <div className="mt-4 flex flex-wrap gap-2 mb-4">
                                <ArticleCategories categories={article.tags.flat()} />
                            </div>
                        </div>
                        <Image
                            src={`/images/articles/${article.img}`}
                            className="md:my-6 md:col-span-2 shadow-lg rounded-xl"
                            alt={article.img_alt}
                            width={900}
                            height={300}
                        />
                    </div>
                </CenteredContainer>
            </div>
        </NavLink>
    );
}

export default ArticleRow;