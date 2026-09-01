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

// Deterministic displacement. Seeded from the term itself so the server and
// the client always produce the same offsets: Math.random() here would be a
// guaranteed hydration mismatch. Applied as a transform rather than a margin,
// so terms shift visually without disturbing the flex flow around them.
const hash = (input: string) => {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};

// Three uncorrelated values per term, each in [-1, 1].
const noise = (name: string, salt: number) =>
  ((hash(name + ":" + salt) % 2000) / 1000) - 1;

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
        className="flex flex-row justify-center flex-wrap gap-x-5 gap-y-4 sm:gap-x-7 sm:gap-y-5 mix-blend-multiply text-muted-foreground leading-[1.05]"
        style={{
          width: `${BLEED_VW}vw`,
          marginLeft: `${(100 - BLEED_VW) / 2}vw`,
        }}
      >
        {GLOSSARY.map((keyword) => {
          const rem = sizeRem(keyword.score);
          const dy = noise(keyword.name, 1) * 14;
          const dx = noise(keyword.name, 2) * 8;
          const rot = noise(keyword.name, 3) * 1.6;
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
                transform: `translate(${dx.toFixed(1)}px, ${dy.toFixed(
                  1
                )}px) rotate(${rot.toFixed(2)}deg)`,
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
