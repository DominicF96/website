import React from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Newsletter from "@/components/layout/Newsletter";
import ContactForm from "@/components/layout/ContactForm";
import { Locale } from "@/i18n.config";
import SlidingBanner from "@/components/pages/home/SlidingBanner";
import Glossary from "@/components/pages/home/Glossary/Glossary";

type Props = {
  params: {
    locale: Locale;
  };
  children: React.ReactNode;
};

function LocalizedLayout({ params, children }: Props) {
  const { locale } = params;
  return (
    <div>
      <Navbar locale={locale} />
      <div className="relative z-30">
        <Image
          src="/vectors/bg.svg"
          height={2500}
          width={2500}
          alt=""
          className="fixed z-0 top-1/2 left-1/2 blur-[250px] animate-spin"
          style={{ animationDuration: "30s" }}
        />
        {children}
        <SlidingBanner locale={locale} className="-mt-[1px]" />
        <Glossary />
        <Newsletter locale={locale} />
        <ContactForm locale={locale} />
        <Footer locale={locale} />
        <div
          className="absolute top-0 left-0 w-full h-full z-0 bg-repeat bg-blend-multiply mix-blend-multiply pointer-events-none opacity-40"
          style={{ background: "url(/images/noise.png)" }}
        />
      </div>
    </div>
  );
}

export default LocalizedLayout;
