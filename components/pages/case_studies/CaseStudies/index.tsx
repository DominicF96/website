"use client";
import React, { useEffect, useState } from "react";
// import { Input } from "@/components/ui/input";
import enCaseStudies from "@/content/en/case_studies/index";
import frCaseStudies from "@/content/fr/case_studies/index";
import i18n from "./i18n";
import { DatedCaseStudyMetadata } from "@/types/case_study.types";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { Locale } from "@/i18n.config";
import CaseStudyRow from "./CaseStudyRow";
import { CenteredContainer } from "@/components/Container";
import { H1, Muted, P } from "@/components/Typography";
// import { Label } from "@/components/ui/label";

interface CaseStudyListProps {
  locale: Locale;
}

const caseStudyDataMap: Record<Locale, DatedCaseStudyMetadata[]> = {
  en: enCaseStudies,
  fr: frCaseStudies,
};

const CaseStudyList: React.FC<CaseStudyListProps> = ({ locale }) => {
  const t = i18n[locale];
  const [search, setSearch] = useState("");
  const [caseStudies, setCaseStudies] = useState<DatedCaseStudyMetadata[]>([]);
  const [sortMode, setSortMode] = useState<'title' | 'score' | 'date'>("score");

  useEffect(() => {
    const caseStudyData = caseStudyDataMap[locale];
    setCaseStudies(caseStudyData);
  }, [locale]);

  const filteredCaseStudies = caseStudies.filter((caseStudy) => {
    const searchLower = search.toLowerCase();
    const matchesSearch = caseStudy.title.toLowerCase().includes(searchLower);
    return matchesSearch;
  })
    .sort((a, b) => {
      switch (sortMode) {
        case 'score': return b.score - a.score;
        case 'date': return new Date(b.date) > new Date(a.date) ? 1 : -1;
        default: return a.title.localeCompare(b.title);
      }
    });

  return (
    <div>
      <CenteredContainer className="pb-40 mt-4">
        <H1>{t.title}</H1>
        <Muted className="max-w-[450px] mb-8">{t.description}</Muted>
        {/* <div className="flex flex-col sm:flex-row gap-4 mb-2">
          <div className="flex flex-1 flex-col gap-2">
            <Label className="ml-4">{t.search.label}</Label>
            <Input
              placeholder={t.search.placeholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="ml-4">{t.sort.label}</Label>
            <Select value={sortMode} onValueChange={v => setSortMode(v as 'title' | 'score' | 'date')}>
              <SelectTrigger className="min-w-[200px]">
                <SelectValue>{t.sort[sortMode]}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="score">{t.sort.by}&nbsp;{t.sort.score}</SelectItem>
                <SelectItem value="date">{t.sort.by}&nbsp;{t.sort.date}</SelectItem>
                <SelectItem value="title">{t.sort.by}&nbsp;{t.sort.title}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div> */}
      </CenteredContainer>
      {filteredCaseStudies.length > 0 ? (
        filteredCaseStudies.map((caseStudy, index) => {
          return (
            <CaseStudyRow caseData={caseStudy} locale={locale} key={`case_study_row_${index}`} />
          )
        })
      ) : (
        <CenteredContainer>
          <Muted className="text-lg mt-8 mb-48">
            {t.search.not_found}
          </Muted>
        </CenteredContainer>
      )}
    </div>
  );
};

export default CaseStudyList;