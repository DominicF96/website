"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { CenteredContainer } from "../../Container";
import { H1, Lead, P } from "../../Typography";
import ScrollCTA from "../../ScrollCTA";
import { Locale } from "@/i18n.config";
import HeroGraphic from "../../HeroGraphic";
import i18n from "./i18n";
import Image from "next/image";

type Props = {
  locale: Locale;
};

function BlogHero({ locale }: Props) {
  const t = i18n[locale];
  return (
    <CenteredContainer>
      <div className="relative z-40">
        <Lead>
          {t.flavor.part_1}&nbsp;
          <span className="font-bold">{t.flavor.part_2}</span>.&nbsp;
        </Lead>
        <H1 className="pt-0 font-black">
          {t.title.part_1}
          <br />
          <span className="text-primary">{t.title.part_2}</span>
        </H1>
        <P className="mt-4 max-w-[465px]">{t.description}</P>
      </div>
      <Image
        src="/vectors/blog_graphic_desktop.svg"
        width={500}
        height={500}
        alt="Blog Hero"
        className="absolute hidden md:block md:right-20 lg:right-48 top-0"
      />
      <Image
        src="/vectors/blog_graphic_mobile.svg"
        width={200}
        height={200}
        alt="Blog Hero"
        className="absolute md:hidden right-8 top-0 opacity-50"
      />
    </CenteredContainer>
  );
}

export default BlogHero;
