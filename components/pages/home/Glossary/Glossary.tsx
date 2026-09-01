import { GLOSSARY } from "@/constants/glossary";
import React from "react";

type Props = {};

// The cloud is deliberately wider than the viewport so terms bleed off both
// edges. The outer element is pinned to exactly 100vw and clips the overflow,
// so nothing here can widen the page or introduce horizontal scrolling.
const BLEED_VW = 130;

// Squaring the weight is what gives the hierarchy its bite. The previous linear
// ramp separated the three tiers by about 20% in size and 0.22 in opacity,
// which is below the threshold where an eye reads hierarchy at all, so 131
// terms arrived as one flat grey mass. Squared, the headline terms come out
// roughly twice the size and nearly three times the contrast of the context
// terms, and the eye lands on them first.
const sizeRem = (score: number) => 0.9 + 1.5 * score * score;
const opacityOf = (score: number) => 0.3 + 0.7 * score * score;

function Glossary({}: Props) {
  // No sorting. Source order is category order (product, design, AI,
  // leadership, tech), so related terms cluster together instead of being
  // scattered alphabetically. Sorting by score was what broke the grouping.
  return (
    <div
      className="relative w-screen max-w-[100vw] overflow-x-hidden mt-4 py-1"
      style={{ marginLeft: "calc(50% - 50vw)" }}
    >
      <div
        className="flex flex-row justify-center flex-wrap gap-x-5 gap-y-1 sm:gap-x-7 sm:gap-y-2 mix-blend-multiply text-muted-foreground leading-[1.05]"
        style={{
          width: `${BLEED_VW}vw`,
          marginLeft: `${(100 - BLEED_VW) / 2}vw`,
        }}
      >
        {GLOSSARY.map((keyword) => {
          const rem = sizeRem(keyword.score);
          return (
            <div
              key={`keyword_${keyword.name}`}
              className="inline-block whitespace-nowrap"
              style={{
                opacity: opacityOf(keyword.score),
                fontWeight: keyword.score >= 1 ? "bold" : "normal",
                // Scales with viewport width on small screens, capped at the
                // desktop size above.
                fontSize: `clamp(${(rem * 0.62).toFixed(2)}rem, ${(
                  rem * 2.9
                ).toFixed(2)}vw, ${rem.toFixed(2)}rem)`,
              }}
            >
              {keyword.name.toLocaleUpperCase()}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Glossary;
