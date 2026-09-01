import { GLOSSARY } from "@/constants/glossary";
import React from "react";

type Props = {};

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
    <div className="flex flex-row justify-start flex-wrap gap-x-4 gap-y-1 sm:gap-x-6 sm:gap-y-2 mt-4 mix-blend-multiply max-h-[420px] sm:max-h-[560px] overflow-hidden py-1 text-muted-foreground">
      {sortedGlossary.map((keyword) => (
        <div
          key={`keyword_${keyword.name}`}
          className="inline-block text-sm"
          style={{
            // floor the opacity: fully transparent text reads as keyword stuffing
            opacity: 0.4 + keyword.score * 0.4,
            fontWeight: keyword.score >= 1 ? "bold" : "normal",
            // clamp: scales with viewport width so the cloud stays readable on
            // phones. A little horizontal overflow is acceptable; even spacing
            // between terms matters more.
            fontSize: `clamp(${(0.85 + keyword.score * 0.2).toFixed(2)}rem, ${(
              3.4 +
              keyword.score * 1.4
            ).toFixed(2)}vw, ${(1.0 + keyword.score * 0.6).toFixed(2)}rem)`,
          }}
        >
          {keyword.name.toLocaleUpperCase()}
        </div>
      ))}
    </div>
  );
}

export default Glossary;
