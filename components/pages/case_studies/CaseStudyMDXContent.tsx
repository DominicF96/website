import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/mdx-components";
import { CalendarIcon, ChevronLeftIcon, FolderIcon, UserRoundCogIcon } from "lucide-react";
import { NavLink } from "../../common/NavLink";
import { CenteredContainer } from "../../Container";
import Image from "next/image";
import { H1, Muted } from "../../Typography";
import { IconLabelAttribute } from "@/components/common/IconLabelAttribute";
import { format, parseISO } from "date-fns";
import { mapLocaleToDateFns } from "@/utils/time";
import { Locale } from "@/i18n.config";
import CaseStudyCategories from "./CaseStudyCategories";
import i18n from "./i18n";
import { capitalize } from "@/utils/formatting";

interface CaseStudyMDXContentProps {
    contentPath: string;
    backHref?: string;
    backLabel?: string;
    children?: React.ReactNode;
    locale: Locale
}

export default async function CaseStudyMDXContent({
    contentPath,
    backHref,
    backLabel,
    children,
    locale
}: CaseStudyMDXContentProps) {
    if (!fs.existsSync(contentPath)) {
        notFound();
    }
    const t = i18n[locale];
    const contentRaw = fs.readFileSync(contentPath, "utf-8");
    const { content, data } = matter(contentRaw);

    return (
        <CenteredContainer className="mt-2">
            <div className="grid grid-cols-4">
                <div className="col-span-1">
                    <div className="sticky top-24">
                        {backHref && backLabel && (
                            <div className="mt-8">
                                <NavLink href={backHref} className="inline-flex items-center text-primary font-medium group no-underline">
                                    <ChevronLeftIcon />&nbsp;{backLabel}
                                </NavLink>
                            </div>
                        )}
                        <Muted className="mt-8 flex flex-col gap-2">
                            {/* <IconLabelAttribute
                                Icon={CalendarIcon}
                                label={t.date}
                                value={format(parseISO(data.date), "LLLL yyyy", {
                                    locale: mapLocaleToDateFns(locale),
                                })}
                            /> */}
                            <IconLabelAttribute
                                Icon={FolderIcon}
                                label={t.project_type}
                                value={data.project_type}
                            />
                            <IconLabelAttribute
                                Icon={UserRoundCogIcon}
                                label={t.role}
                                value={data.role}
                            />
                            <div className="flex gap-2 py-2 flex-wrap"><CaseStudyCategories categories={data.tags.flat()} /></div>
                        </Muted>
                    </div>
                </div>
                <div className="col-span-3 flex flex-col gap-4">
                    <H1>{data.title}</H1>
                    <Muted>{data.excerpt}</Muted>
                    <Image src={`/images/cases/${data.id}.png`} alt={data.title} width={500} height={500} className="w-full rounded-3xl" />
                    <div className="prose prose-lg dark:prose-invert max-w-none pt-4 pb-16 rendered-content">
                        <MDXRemote source={content} components={components} />
                    </div>
                    {children}
                </div>
            </div>
        </CenteredContainer>
    );
}