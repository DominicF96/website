import React from "react";
import { Locale } from "@/i18n.config";
import i18n from "./i18n";
import { CenteredContainer } from "../../../Container";
import "./index.css";

type Props = {
  locale: Locale;
  className?: string;
};

function SlidingBanner({ locale, className }: Props) {
  const t = i18n[locale];

  const repeatArrayNTimes = (arr: string[], n: number) => {
    const res = [];
    for (let i = 0; i < n; i++) {
      res.push(...arr);
    }
    return res;
  };

  return (
    <div className={`${className || ""}`}>
      <div className="max-w-full overflow-hidden w-full font-bold whitespace-nowrap text-4xl md:text-8xl">
        <div className="bg-background border border-l-0 border-r-0 border-primary text-primary w-full py-8">
          <CenteredContainer className="sliding-text-ltr">
            {repeatArrayNTimes(t.row1, 100).join("   •   ")}
          </CenteredContainer>
        </div>
        <div className="bg-primary text-background w-full py-8">
          <CenteredContainer className="sliding-text-rtl max-w-[1024px]">
            {repeatArrayNTimes(t.row2, 100).join("   •   ")}
          </CenteredContainer>
        </div>
        <div className="bg-background border border-l-0 border-r-0 border-primary text-primary w-full py-8">
          <CenteredContainer className="sliding-text-ltr max-w-[1024px]">
            {repeatArrayNTimes(t.row3, 100).join("   •   ")}
          </CenteredContainer>
        </div>
      </div>
    </div>
  );
}

export default SlidingBanner;
