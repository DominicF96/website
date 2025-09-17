import React from "react";
import { H1 } from "../../../Typography";
import { CenteredContainer } from "../../../Container";
import CaseStudyRow from "./CaseStudyRow";
import caseStudies from "@/constants/case.studies";
import { Locale } from "@/i18n.config";
import i18n from "./i18n";

type Props = {
  locale: Locale;
};

function CaseStudies({ locale }: Props) {
  const t = i18n[locale];
  return (
    <div>
      <CenteredContainer className="mt-2">
        <H1 id="projects">{t.title}</H1>
      </CenteredContainer>
      <div className="mt-16">
        {caseStudies
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((caseStudy) => (
            <CaseStudyRow
              key={caseStudy.id}
              locale={locale}
              caseData={caseStudy}
            />
          ))}
      </div>
    </div>
  );
}

export default CaseStudies;
