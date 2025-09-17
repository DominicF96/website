import React from "react";
import { H3, P } from "../../../Typography";
import { CenteredContainer } from "../../../Container";
import { Locale } from "@/i18n.config";
import i18n from "./i18n";

type Props = { locale: Locale };

function ExtendedBio({ locale }: Props) {
  const t = i18n[locale];
  return (
    <CenteredContainer>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-80 md:mt-48">
        <div>
          <H3>{t.frontend.title}</H3>
          <P className="!mt-0 text-muted-foreground">{t.frontend.description}</P>
        </div>
        <div>
          <H3>{t.ux.title}</H3>
          <P className="!mt-0 text-muted-foreground">{t.ux.description}</P>
        </div>
        <div>
          <H3>{t.project_management.title}</H3>
          <P className="!mt-0 text-muted-foreground">{t.project_management.description}</P>
        </div>
        <div>
          <H3>{t.innovation.title}</H3>
          <P className="!mt-0 text-muted-foreground">{t.innovation.description}</P>
        </div>
      </div>
    </CenteredContainer>
  );
}

export default ExtendedBio;
