import React from "react";
import { Badge } from "@/components/ui/badge";
import { ArticleMetadata } from "@/types/article.types";

type Props = {
    categories: ArticleMetadata["tags"];
};

function PostCategories({ categories }: Props) {
    const uniqueCategories = [...new Set(categories)].sort((a, b) =>
        a.localeCompare(b)
    );

    return uniqueCategories.sort().map((category, idx) => (
        <Badge key={idx} className="w-fit whitespace-nowrap pointer-events-none">
            {category}
        </Badge>
    ));
}

export default PostCategories;