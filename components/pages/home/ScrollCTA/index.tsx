import React from "react";
import { Locale } from "@/i18n.config";
import ScrollDesktopEN from "./ScrollDesktopEN";
import ScrollDesktopFR from "./ScrollDesktopFR";
import ScrollMobileFR from "./ScrollMobileFR";
import ScrollMobileEN from "./ScrollMobileEN";
type Props = {
  locale: Locale;
  className?: string;
};

function ScrollCTA({ locale, className }: Props) {
  const LocaleScrollSVG = () => {
    switch (locale) {
      case "fr":
        return (
          <>
            <ScrollDesktopFR />
            <ScrollMobileFR />
          </>
        );
      default:
        return (
          <>
            <ScrollDesktopEN />
            <ScrollMobileEN />
          </>
        );
    }
  };

  return <div className={className || ""}>{LocaleScrollSVG()}</div>;
}

export default ScrollCTA;
