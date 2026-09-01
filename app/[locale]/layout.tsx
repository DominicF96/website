import React from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Newsletter from "@/components/layout/Newsletter";
import ContactForm from "@/components/layout/ContactForm";
import { Locale, locales, defaultLocale } from "@/i18n.config";
import SlidingBanner from "@/components/pages/home/SlidingBanner";

type Props = {
  // Next 16 types route params as string; narrow to Locale below.
  params: Promise<{
    locale: string;
  }>;
  children: React.ReactNode;
};

async function LocalizedLayout(props: Props) {
  const params = await props.params;

  const {
    children
  } = props;

  const { locale: rawLocale } = params;
  const locale = (locales.includes(rawLocale as Locale)
    ? rawLocale
    : defaultLocale) as Locale;
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
