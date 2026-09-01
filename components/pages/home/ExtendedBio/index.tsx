import React from "react";
import { H3, Muted } from "../../../Typography";
import { CenteredContainer } from "../../../Container";
import { Locale } from "@/i18n.config";
import i18n from "./i18n";

type Props = { locale: Locale };

function ExtendedBio({ locale }: Props) {
  const t = i18n[locale];
  const sections = [t.product, t.design, t.strategy, t.frontend];
  return (
    <CenteredContainer>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-40 md:mt-48">
        {sections.map((section) => (
          <div key={section.title}>
            <H3>{section.title}</H3>
            <Muted>{section.description}</Muted>
          </div>
        ))}
      </div>
    </CenteredContainer>
  );
}

export default ExtendedBio;
