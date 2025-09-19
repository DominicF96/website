"use client";
import React, { useEffect, useState } from "react";
import { CenteredContainer } from "../../../Container";
import { H1, Lead, Muted } from "../../../Typography";
import { Button } from "../../../ui/button";
import ScrollCTA from "../ScrollCTA";
import { Locale } from "@/i18n.config";
import i18n from "./i18n";
import Slideshow from "../../../common/Slideshow/Slideshow";
import PARTNERS from "@/constants/partners";
import { NavLink } from "@/components/common/NavLink";

const shuffleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*?!";

type Props = {
  locale: Locale;
};

function Hero({ locale }: Props) {
  const t = i18n[locale];
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const [titlePart2, setTitlePart2] = useState(t.title.part_2);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (document.cookie.includes("secretUnlocked=true")) {
      shuffleToSecretTitlePart2(t.title.part_2);
    }
  }, [t.title.part_2]);

  const setSecretCookie = () => {
    document.cookie = "secretUnlocked=true; path=/; max-age=" + 60 * 60 * 24 * 365;
  };

  const shuffleToSecretTitlePart2 = (startString?: string) => {
    if (animating) return;
    setAnimating(true);
    setSecretUnlocked(true);

    const secret = t.title.part_2_secret;
    const prev = startString || titlePart2;
    const maxLength = Math.max(prev.length, secret.length);
    let index = 0;

    const nextChar = () => {
      if (index >= maxLength) {
        setAnimating(false);
        setTitlePart2(secret);
        setSecretCookie();
        return;
      }

      let step = 0;
      const stepsPerChar = 10;

      const interval = setInterval(() => {
        step++;

        const newDisplay = [];
        for (let i = 0; i < maxLength; i++) {
          if (i < index) {
            newDisplay[i] = i < secret.length ? secret[i] : "";
          } else if (i === index) {
            newDisplay[i] =
              step < stepsPerChar
                ? shuffleChars[Math.floor(Math.random() * shuffleChars.length)]
                : i < secret.length
                  ? secret[i]
                  : "";
          } else {
            newDisplay[i] =
              i < prev.length
                ? prev[i]
                : shuffleChars[Math.floor(Math.random() * shuffleChars.length)];
          }
        }

        setTitlePart2(newDisplay.join(""));

        if (step >= stepsPerChar) {
          clearInterval(interval);
          index++;
          setTimeout(nextChar, 50);
        }
      }, 40);
    };

    nextChar();
  };

  const glitchClass = secretUnlocked ? "glitch" : "";

  return (
    <CenteredContainer>
      <div className="relative z-50 md:pb-32">
        <Lead>
          {t.flavor.part_1}&nbsp;
          <span className="font-bold">{t.flavor.part_2}</span>.
        </Lead>
        <H1 className="pt-2 font-black" style={{ lineHeight: "100%" }}>
          {t.title.part_1}
          <br />
          <span className={`text-primary ${glitchClass}`}>{titlePart2}</span>
        </H1>
        <Muted className="mt-4 max-w-[465px]">
          {t.description(new Date().getFullYear() - 2016)}
        </Muted>
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Button size="lg" className="w-fit hover:px-16" asChild>
            <NavLink href="#contact" className="h-auto py-2">
              {t.cta.primary}
            </NavLink>
          </Button>
        </div>
      </div>
      <div className="xl:pr-24 pt-24">
        <Slideshow
          className="relative z-0"
          items={PARTNERS.map((partner) => ({
            name: partner.name,
            img: `/vectors/partners/${partner.id}.svg`,
            href: partner.url,
          }))}
          itemsSize={{ width: 200, height: 64 }}
        />
      </div>
      <ScrollCTA
        locale={locale}
        className="absolute -bottom-20 -top-32 lg:top-auto lg:bottom-48 xl:top-auto xl:bottom-3 left-36 lg:left-auto lg:right-36 xl:-right-8 z-40"
      />
    </CenteredContainer>
  );
}

export default Hero;
