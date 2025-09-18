import React from "react";
import { H1, Muted, P } from "../../Typography";
import { CenteredContainer } from "../../Container";
import { BrandSquare } from "./BrandSquare";
import { Locale } from "@/i18n.config";
import i18n from "./i18n";

type Props = {
    locale: Locale;
};

function Brands({ locale }: Props) {
    const t = i18n[locale];
    return (
        <div>
            <CenteredContainer className="mt-4 pb-40">
                <H1 id="brands">{t.title}</H1>
                <Muted className="max-w-[450px]">{t.description}</Muted>
            </CenteredContainer>
            <div className="relative z-10 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
                <BrandSquare src="/vectors/brands/masters" alt="Masters Logo" />
                <BrandSquare src="/vectors/brands/kingstate" alt="Kingstate Logo" />
                <BrandSquare src="/vectors/brands/anthony-king" alt="Anthony King Logo" className="md:invert lg:invert-0" />
                <BrandSquare src="/vectors/brands/scintillar" alt="Scintillar Logo" className="md:invert lg:invert-0" />
                <BrandSquare src="/vectors/brands/oreus" alt="Oreus Logo" />
                <BrandSquare src="/vectors/brands/quickdocs" alt="QuickDocs Logo" />
                <BrandSquare src="/vectors/brands/spyglass" alt="Spyglass Logo" className="md:invert lg:invert-0" />
            </div>
        </div>
    );
}

export default Brands;
