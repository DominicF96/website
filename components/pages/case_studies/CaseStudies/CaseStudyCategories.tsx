import React from "react";
import { Badge } from "@/components/ui/badge";
import { CaseStudyMetadata } from "@/types/case_study.types";


type Props = {
    categories: CaseStudyMetadata["tags"];
};

function CaseStudyCategories({ categories }: Props) {
    const uniqueCategories = [...new Set(categories)];

    return uniqueCategories.map((category, idx) => (
        <Badge key={idx} className="w-fit whitespace-nowrap pointer-events-none" variant="secondary">
            {category}
        </Badge>
    ));
}

export default CaseStudyCategories;