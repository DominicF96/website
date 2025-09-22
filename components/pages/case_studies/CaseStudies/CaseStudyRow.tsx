"use client";
import React, { useState, useEffect, useRef } from "react";
import { H3, Muted } from "../../../Typography";
import { CenteredContainer } from "../../../Container";
import i18n from "./i18n";
import { Locale } from "@/i18n.config";
import Image from "next/image";
import { Button } from "../../../ui/button";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { format, parseISO } from "date-fns";
import { NavLink } from "@/components/common/NavLink";
import { ArrowRightIcon, CalendarIcon, FolderIcon, UserRoundCogIcon } from "lucide-react";
import { CaseStudyMetadata } from "@/types/case_study.types";
import { mapLocaleToDateFns } from "@/utils/time";
import { capitalize } from "@/utils/formatting";
import { IconLabelAttribute } from "@/components/common/IconLabelAttribute";
import CaseStudyCategories from "./CaseStudyCategories";
import "./index.css";

type Props = {
  caseData: CaseStudyMetadata;
  locale: Locale;
};

function CaseStudyRow({ caseData, locale }: Props) {
  const t = i18n[locale];
  const [isInView, setIsInView] = useState(false);
  const rowRef = useRef<any>(null);

  useEffect(() => {
    const checkIfInView = () => {
      if (rowRef.current) {
        const rect = rowRef.current.getBoundingClientRect();
        if (
          // Check if the component is less than 45% from the top of the viewport
          rect.top < window.innerHeight * 0.45 &&
          rect.top > window.innerHeight * 0.45 - rect.height
        ) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      }
    };

    window.addEventListener("scroll", checkIfInView);

    checkIfInView();

    return () => {
      // Cleanup
      window.removeEventListener("scroll", checkIfInView);
    };
  }, []);

  const collapsibleStyle = {
    display: "grid",
    transition: "grid-template-rows 500ms",
    width: "100%",
    minHeight: "10px",
  };

  const collapsibleClosedStyle = {
    gridTemplateRows: "0fr",
  };

  const collapsibleOpenStyle = {
    gridTemplateRows: "1fr",
  };

  console.log(caseData);

  return (
    <div
      className={`transition-all text-foreground duration-500 ${isInView ? "bg-primary/10" : ""
        }`}
      ref={rowRef}
    >
      <CenteredContainer className="relative">
        <div
          className={`absolute z-10 right-0 pointer-events-none transition-all duration-500 ${isInView ? "opacity-100 top-16" : "opacity-0 top-24"
            }`}
        >
          <div className="fixed top-64 lg:right-4 xl:right-12 2xl:right-24 border border-primary max-h-[800px] overflow-hidden rounded-xl shadow-2xl pointer-events-none hidden lg:block z-30">
            <Image
              className="hidden xl:block"
              src={`/images/cases/${caseData.id}.png`}
              width={700}
              height={1000}
              alt={caseData.title}
            />
            <Image
              className="block xl:hidden"
              src={`/images/cases/${caseData.id}.png`}
              width={500}
              height={1000}
              alt={caseData.title}
            />
          </div>
        </div>
      </CenteredContainer>
      <div
        className={`relative py-16 border border-primary border-l-0 border-r-0 ${isInView ? "bg-primary/20" : ""
          }`}
        style={{ marginTop: "-1px" }}
      >
        <CenteredContainer className="relative z-10">
          <H3>{caseData.title}</H3>
          <div
            style={
              isInView
                ? { ...collapsibleStyle, ...collapsibleOpenStyle }
                : { ...collapsibleStyle, ...collapsibleClosedStyle }
            }
          >
            <div>
              <Muted className="lg:max-w-[450px]">
                {caseData.description}
              </Muted>
              <Muted className="mt-4 flex flex-col gap-2 text-sm">
                <IconLabelAttribute
                  Icon={CalendarIcon}
                  label={t.date}
                  value={capitalize(format(parseISO(caseData.date), "LLLL yyyy", {
                    locale: mapLocaleToDateFns(locale),
                  }))}
                />
                <IconLabelAttribute
                  Icon={FolderIcon}
                  label={t.project_type}
                  value={caseData.project_type}
                />
                <IconLabelAttribute
                  Icon={UserRoundCogIcon}
                  label={t.role}
                  value={caseData.role}
                />
              </Muted>
              <div className="mt-4 flex flex-wrap gap-2 mb-4 lg:max-w-[450px]">
                <CaseStudyCategories categories={caseData.tags.flat()} />
              </div>
              <div className="my-8 border border-primary max-h-[600px] overflow-hidden rounded-lg shadow-2xl pointer-events-none block lg:hidden">
                <Image
                  src={`/images/cases/${caseData.id}.png`}
                  width={500}
                  height={400}
                  className={`transition-all duration-500 w-full ${isInView ? "brightness-100" : "brightness-50"
                    }`}
                  alt={caseData.title}
                />
              </div>
              <div className="mt-8 flex flex-col md:flex-row gap-2">
                {caseData.active ? <Button className={`shadow-none`} asChild >
                  <NavLink href={`/case_studies/${caseData.id}`} >
                    {t.see_case_study}
                    <ArrowRightIcon className="ml-4" />
                  </NavLink>
                </Button>
                  : <Button className={`shadow-none`} disabled>{t.see_case_study}&nbsp;({t.coming_soon})</Button>}
                {caseData.url && (
                  <Button asChild variant="outline" className={`shadow-none`}>
                    <NavLink
                      href={caseData.url}
                      target={"_blank"}
                      rel="noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      {t.open}
                      <ExternalLinkIcon className="ml-4" />
                    </NavLink>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CenteredContainer>
      </div>
    </div>
  );
}

export default CaseStudyRow;
