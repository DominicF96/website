import { GLOSSARY } from "@/constants/glossary";
import React from "react";

type Props = {};

// The cloud is deliberately wider than the viewport so terms bleed off both
// edges. The outer element is pinned to exactly 100vw and clips the overflow,
// so nothing here can widen the page or introduce horizontal scrolling.
const BLEED_VW = 112;

function Glossary({}: Props) {
  // copy before sorting: GLOSSARY is a shared module import
  const sortedGlossary = [...GLOSSARY].sort((a, b) => {
    // Compare by score
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;

    // If scores are equal, compare alphabetically by name
    return a.name.localeCompare(b.name);
  });

  return (
    <div
      className="relative w-screen max-w-[100vw] overflow-x-hidden overflow-y-hidden mt-4 py-1"
      style={{ marginLeft: "calc(50% - 50vw)" }}
    >
      <div
        className="flex flex-row justify-center flex-wrap gap-x-5 gap-y-1 sm:gap-x-8 sm:gap-y-2 mix-blend-multiply max-h-[420px] sm:max-h-[560px] text-muted-foreground"
        style={{
          width: `${BLEED_VW}vw`,
          marginLeft: `${(100 - BLEED_VW) / 2}vw`,
        }}
      >
        {sortedGlossary.map((keyword) => (
          <div
            key={`keyword_${keyword.name}`}
            className="inline-block whitespace-nowrap"
            style={{
              // floor the opacity: fully transparent text reads as keyword stuffing
              opacity: 0.4 + keyword.score * 0.4,
              fontWeight: keyword.score >= 1 ? "bold" : "normal",
              // scales with viewport width, capped so it stays sane on desktop
              fontSize: `clamp(${(1.14 + keyword.score * 0.3).toFixed(2)}rem, ${(
                4.8 +
                keyword.score * 1.92
              ).toFixed(2)}vw, ${(1.15 + keyword.score * 0.55).toFixed(2)}rem)`,
            }}
          >
            {keyword.name.toLocaleUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Glossary;
