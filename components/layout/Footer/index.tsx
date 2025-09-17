import React from "react";
import Copyrights from "../Copyrights";
import { CenteredContainer } from "../../Container";
import Socials from "../../common/Socials";
import ButtonScrollTop from "../../common/ButtonScrollTop";
import { Locale } from "@/i18n.config";

type Props = {
  locale: Locale;
};

function Footer({ locale }: Props) {
  return (
    <footer className="relative pt-16 pb-16 z-10">
      <CenteredContainer className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center">
        <Copyrights locale={locale} />
        <div className="flex justify-start md:justify-end items-center pt-8 md:py-0">
          <Socials className="mr-16" locale={locale} />
          <ButtonScrollTop />
        </div>
      </CenteredContainer>
    </footer>
  );
}

export default Footer;
