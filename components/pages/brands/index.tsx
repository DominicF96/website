import React from "react";
import { H1 } from "../../Typography";
import { CenteredContainer } from "../../Container";
import { Locale } from "@/i18n.config";
import i18n from "./i18n";
import { BrandSquare } from "./BrandSquare";

type Props = {
    locale: Locale;
};

function Brands({ locale }: Props) {
    const t = i18n[locale];
    return (
        <div>
            <CenteredContainer className="mt-2">
                <H1 id="brands">{t.title}</H1>
            </CenteredContainer>
            <div className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                <BrandSquare src="/vectors/brands/masters" alt="Masters Logo" />
                <BrandSquare src="/vectors/brands/kingstate" alt="Kingstate Logo" />
                <BrandSquare src="/vectors/brands/anthony-king" alt="Anthony King Logo" className="md:invert lg:invert-0" />
                <BrandSquare src="/vectors/brands/scintillar" alt="Scintillar Logo" className="md:invert lg:invert-0" />
                <BrandSquare src="/vectors/brands/oreus" alt="Oreus Logo" />
                <BrandSquare src="/vectors/brands/quickdocs" alt="QuickDocs Logo" />
                <BrandSquare src="/vectors/brands/spyglass" alt="Spyglass Logo" className="md:invert lg:invert-0"/>
            </div>
        </div>
    );
}

export default Brands;
