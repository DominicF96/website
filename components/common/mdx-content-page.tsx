import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/mdx-components";
import { ChevronLeftIcon } from "lucide-react";
import { NavLink } from "./NavLink";
import { CenteredContainer } from "../Container";
import Image from "next/image";
import { H1, H2, Large, Lead, Muted } from "../Typography";

interface MdxContentPageProps {
    contentPath: string;
    backHref?: string;
    backLabel?: string;
    children?: React.ReactNode;
}

export default async function MdxContentPage({
    contentPath,
    backHref,
    backLabel,
    children,
}: MdxContentPageProps) {
    if (!fs.existsSync(contentPath)) {
        notFound();
    }
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
                    </div>
                </div>
                <div className="col-span-3 flex flex-col gap-4">
                    <H1>{data.title}</H1>
                    <Muted>{data.excerpt}</Muted>
                    <Image src={`/images/cases/${data.id}.png`} alt={data.title} width={500} height={500} className="w-full rounded-3xl" />
                    <div className="prose prose-lg dark:prose-invert max-w-none pt-4 pb-16">
                        <MDXRemote source={content} components={components} />
                    </div>
                    {children}
                </div>
            </div>
        </CenteredContainer>
    );
}