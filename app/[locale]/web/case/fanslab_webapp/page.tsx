import i18n from "@/components/pages/web/CaseStudies/i18n";
import { CenteredContainer, PageContainer } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n.config";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import metadata from "./metadata";
import React from "react";

type Props = {
  params: {
    locale: Locale;
  };
};

export const generateMetadata = metadata;
function CaseStudyFanslabWebAppPage({ params }: Props) {
  const { locale } = params;
  const t = i18n[locale];
  return (
    <PageContainer>
      <CenteredContainer>
        {t.wip}
        <div className="mt-4">
          <Button asChild>
            <Link href="/">
              <ArrowLeftIcon className="mr-2" />
              {t.back}
            </Link>
          </Button>
        </div>
      </CenteredContainer>
    </PageContainer>
  );
}

export default CaseStudyFanslabWebAppPage;
