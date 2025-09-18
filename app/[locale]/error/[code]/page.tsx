import { Locale } from "@/i18n.config";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/common/NavLink";
import { HomeIcon } from "lucide-react";
import * as i18n from "./i18n";
import { CenteredContainer, PageContainer } from "@/components/Container";
import { H1, H2, H3 } from "@/components/Typography";
import Image from "next/image";

type Params = Promise<{ locale: Locale; code: string }>;

export default async function ErrorPage({ params }: { params: Params }) {
    const { locale, code } = await params;
    const t = i18n[locale];

    const supportedCodes = Object.keys(t.error_definitions) as Array<
        keyof typeof t.error_definitions
    >;

    let sanitizedCode: keyof typeof t.error_definitions =
        "500" as keyof typeof t.error_definitions;
    if (supportedCodes.includes(code as keyof typeof t.error_definitions)) {
        sanitizedCode = code as keyof typeof t.error_definitions;
    }

    return (
        <PageContainer>
            <CenteredContainer className="text-center flex items-center flex-col mb-32">
                <H1>{sanitizedCode}</H1>
                <H2 className="mt-4 max-w-[700px]">
                    {t.error_definitions[sanitizedCode].title}
                </H2>
                <div className="max-w-[500px]">
                    <div className="text-lg text-muted-foreground normal-case mt-4">
                        {t.error_definitions[sanitizedCode].content_1.description}
                    </div>
                    <div className="my-8">
                        {sanitizedCode === "404" ? <Image src="/vectors/ramen.svg" width={500} height={500} alt="RAMEN" className="hover:rotate-3 transition-all" /> : null}
                        <Button asChild className="mt-8 w-fit">
                            <NavLink href="/">
                                <HomeIcon />
                                &nbsp;
                                {t.error_definitions[sanitizedCode].content_1.actions.home}
                            </NavLink>
                        </Button>
                    </div>
                </div>
            </CenteredContainer>
        </PageContainer >
    );
}