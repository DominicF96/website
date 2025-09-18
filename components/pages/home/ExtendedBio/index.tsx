import React from "react";
import { H3, Muted, P } from "../../../Typography";
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
          <Muted>{t.frontend.description}</Muted>
        </div>
        <div>
          <H3>{t.ux.title}</H3>
          <Muted>{t.ux.description}</Muted>
        </div>
        <div>
          <H3>{t.project_management.title}</H3>
          <Muted>{t.project_management.description}</Muted>
        </div>
        <div>
          <H3>{t.innovation.title}</H3>
          <Muted>{t.innovation.description}</Muted>
        </div>
      </div>
    </CenteredContainer>
  );
}

export default ExtendedBio;
