import { GLOSSARY } from "@/constants/glossary";
import React from "react";

type Props = {};

function Glossary({}: Props) {
  const sortedGlossary = GLOSSARY.sort((a, b) => {
    // Compare by score
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;

    // If scores are equal, compare alphabetically by name
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="flex flex-row justify-between flex-wrap gap-8 gap-y-4 mt-4 mix-blend-multiply max-h-[400px] overflow-hidden py-1">
      {sortedGlossary.map((keyword) => (
        <div
          key={`keyword_${keyword.name}`}
          className="inline-block text-sm"
          style={{
            opacity: keyword.score * 0.4,
            fontWeight: keyword.score > 0.7 ? "bold" : "normal",
            fontSize: `${0.8 + keyword.score * 1}rem`,
          }}
        >
          {keyword.name}
        </div>
      ))}
    </div>
  );
}

export default Glossary;
