import { Locale } from "@/i18n.config";
import React from "react";
import i18n from "./i18n";

type Props = {
  locale: Locale;
};

function Copyrights({ locale }: Props) {
  const t = i18n[locale];
  return (
    <div>
      ©&nbsp;Dominic&nbsp;Fournier&nbsp;{new Date().getFullYear()}.&nbsp;{t.all_rights_reserved}.
    </div>
  );
}

export default Copyrights;
