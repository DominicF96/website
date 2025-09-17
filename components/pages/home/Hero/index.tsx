"use client";
import React from "react";
import { CenteredContainer } from "../../../Container";
import { H1, Lead, P } from "../../../Typography";
import { Button } from "../../../ui/button";
import ScrollCTA from "../ScrollCTA";
import { Locale } from "@/i18n.config";
import HeroGraphic from "../HeroGraphic";
import i18n from "./i18n";
import Slideshow from "../../../common/Slideshow/Slideshow";
import PARTNERS from "@/constants/partners";
import Link from "../../../Link";

type Props = {
  locale: Locale;
};

function Hero({ locale }: Props) {
  const t = i18n[locale];
  return (
    <>
      <CenteredContainer>
        <div className="relative z-50 pb-32">
          <Lead>
            {t.flavor.part_1}&nbsp;
            <span className="font-bold">{t.flavor.part_2}</span>.
          </Lead>
          <H1 className="pt-0 font-black" style={{ lineHeight: "100%" }}>
            {t.title.part_1}
            <br />
            <span className="text-primary">{t.title.part_2}</span>
          </H1>
          <P className="mt-4 max-w-[465px] text-muted-foreground">
            {t.description(new Date().getFullYear() - 2016)}
          </P>
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Button size="lg" className="w-fit hover:px-16" asChild>
              <Link unstyled href="#contact" className="h-auto py-2">
                {t.cta.primary}
              </Link>
            </Button>
          </div>
        </div>
        <div className="md:pr-24">
          <Slideshow
            className="hidden md:block relative z-0"
            items={PARTNERS.map((partner) => {
              return {
                name: partner.name,
                img: `/vectors/partners/${partner.id}.svg`,
                href: partner.url,
              };
            })}
            itemsSize={{ width: 200, height: 64 }}
          />
        </div>
        <ScrollCTA
          locale={locale}
          className="absolute -bottom-20 md:bottom-3 right-0 z-40"
        />
      </CenteredContainer>
    </>

  );
}

export default Hero;
