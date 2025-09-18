import React from "react";
import { CenteredContainer } from "../../../Container";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import { Locale } from "@/i18n.config";
import i18n from "./i18n";
import { H2 } from "../../../Typography";
import { ChevronRightIcon, ClipboardIcon, GamepadIcon, NewspaperIcon, SplinePointerIcon } from "lucide-react";
import { NavLink } from "@/components/common/NavLink";
import "./index.scss";

type Props = {
    locale: Locale;
};

function CardShortcuts({ locale }: Props) {
    const t = i18n[locale];


    const getIcon = (key: string) => {

        const iconProps = {
            size: 128,
            strokeWidth: 0.5,
            className: "absolute bottom-0 right-0 opacity-20 sm:opacity-100 transition-all card-icon"
        };

        switch (key) {
            case 'case_studies': return <ClipboardIcon {...iconProps} />
            case 'brands': return <SplinePointerIcon {...iconProps} />
            case 'articles': return <NewspaperIcon {...iconProps} />
            case 'games': return <GamepadIcon {...iconProps} />
            default: return <></>
        }
    }

    return (
        <section>
            <CenteredContainer className="my-32">
                <H2 className="mb-8">{t.title}</H2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {Object.keys(t.project_types).map((k: string) => {
                        if (k !== "games") {
                            return <NavLink href={`/${k}`} key={`feature-card-${k}`}>
                                <Card className="border border-transparent bg-card/50 hover:border-primary cursor-pointer hover:text-primary transition-all overflow-hidden rotate-icon">
                                    <CardHeader>
                                        <CardTitle className="whitespace-nowrap">{t.project_types[k as keyof typeof t.project_types]}&nbsp;<ChevronRightIcon className="inline" size={36} /></CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative min-h-16">
                                        {getIcon(k)}
                                    </CardContent>
                                </Card>
                            </NavLink>
                        } else {
                            return <Card key={`feature-card-${k}`} className="border-2 border-transparent bg-card/50 overflow-hidden opacity-50">
                                <CardHeader>
                                    <CardTitle className="whitespace-nowrap">{t.project_types[k as keyof typeof t.project_types]}&nbsp;<ChevronRightIcon className="inline" size={36} /></CardTitle>
                                </CardHeader>
                                <CardContent className="relative min-h-16">
                                    {getIcon(k)}
                                    {t.coming_soon}
                                </CardContent>
                            </Card>
                        }
                    })}
                </div>
            </CenteredContainer>
        </section>
    );
}

export default CardShortcuts;
