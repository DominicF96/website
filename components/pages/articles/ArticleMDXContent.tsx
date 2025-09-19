import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/mdx-components";
import { CalendarIcon, ChevronLeftIcon, ClockIcon } from "lucide-react";
import { NavLink } from "../../common/NavLink";
import { CenteredContainer } from "../../Container";
import Image from "next/image";
import { H1, Muted } from "../../Typography";
import { format, parseISO } from "date-fns";
import { Locale } from "@/i18n.config";
import ArticleCategories from "./ArticleCategories";
import { formatDuration, mapLocaleToDateFns } from "@/utils/time";
import { IconLabelAttribute } from "@/components/common/IconLabelAttribute";
import i18n from "./i18n";

interface ArticleMdxContentProps {
    contentPath: string;
    backHref?: string;
    backLabel?: string;
    children?: React.ReactNode;
    locale: Locale
}

export default async function ArticleMdxContent({
    contentPath,
    backHref,
    backLabel,
    children,
    locale,
}: ArticleMdxContentProps) {
    if (!fs.existsSync(contentPath)) {
        notFound();
    }
    const t = i18n[locale];
    const contentRaw = fs.readFileSync(contentPath, "utf-8");
    const { content, data } = matter(contentRaw);

    return (
        <CenteredContainer className="mt-2">
            <div className="grid grid-cols-3 lg:grid-cols-4">
                <div className="hidden lg:block lg:col-span-1 pb-16">
                    <div className="sticky top-24">
                        {backHref && backLabel && (
                            <div className="mt-8">
                                <NavLink href={backHref} className="inline-flex items-center text-primary font-medium group no-underline">
                                    <ChevronLeftIcon />&nbsp;{backLabel}
                                </NavLink>
                            </div>
                        )}
                        <Muted className="mt-8 flex flex-col gap-2">
                            <IconLabelAttribute
                                Icon={CalendarIcon}
                                label={t.date}
                                value={format(parseISO(data.date.toISOString()), "PPP", {
                                    locale: mapLocaleToDateFns(locale),
                                })}
                            />
                            <IconLabelAttribute
                                Icon={ClockIcon}
                                label={t.read_time}
                                value={formatDuration(data.read_time_seconds, locale)}
                            />
                            <div className="flex gap-2 py-2"><ArticleCategories categories={data.tags.flat()} /></div>
                        </Muted>
                    </div>
                </div>
                <div className="col-span-3 flex flex-col gap-4">
                    {backHref && backLabel && (
                        <div className="block lg:hidden mt-8">
                            <NavLink href={backHref} className="inline-flex items-center text-primary font-medium group no-underline">
                                <ChevronLeftIcon />&nbsp;{backLabel}
                            </NavLink>
                        </div>
                    )}
                    <H1>{data.title}</H1>
                    <Muted className="lg:hidden flex flex-col gap-2">
                        <IconLabelAttribute
                            Icon={CalendarIcon}
                            label={t.date}
                            value={format(parseISO(data.date.toISOString()), "PPP", {
                                locale: mapLocaleToDateFns(locale),
                            })}
                        />
                        <IconLabelAttribute
                            Icon={ClockIcon}
                            label={t.read_time}
                            value={formatDuration(data.read_time_seconds, locale)}
                        />
                        <div className="flex gap-2 py-2"><ArticleCategories categories={data.tags.flat()} /></div>
                    </Muted>
                    <Muted>{data.excerpt}</Muted>
                    <Image src={`/images/articles/${data.img}`} alt={data.img_alt} width={500} height={500} className="w-full rounded-3xl" />
                    <div className="prose prose-lg dark:prose-invert max-w-none pt-4 pb-16">
                        <MDXRemote source={content} components={components} />
                    </div>
                    {children}
                </div>
            </div>
        </CenteredContainer>
    );
}