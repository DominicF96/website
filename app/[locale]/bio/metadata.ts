// @ts-nocheck
import { Locale, defaultLocale, locales } from "@/i18n.config";
import * as t from "./metadata.i18n";
import { Metadata } from "next";

export default function generateMetadata({
    params,
}: {
    params: { locale: Locale };
}): Metadata {
    const locale = locales.includes(params.locale)
        ? params.locale
        : defaultLocale;

    return {
        title: t[locale].title,
        description: t[locale].description(new Date().getFullYear() - 2017),
        keywords: t[locale].keywords,
        metadataBase: new URL(
            process.env.NODE_ENV === "production"
                ? "https://dominicfournier.com"
                : "http://localhost:3000"
        ),
        openGraph: {
            siteName: "Dominic Fournier",
            type: "website",
            locale,
            title: t[locale].title,
            description: t[locale].description,
            images: [
                {
                    // Facebook/LinkedIn OG
                    url: `/${locale}/og/1200x630.png`,
                    width: 1200,
                    height: 630,
                    alt: t[locale].title,
                },
                {
                    // Instagram OG
                    url: `/${locale}/og/800x1000.png`,
                    width: 800,
                    height: 1000,
                    alt: t[locale].title,
                },
                {
                    // Twitter OG
                    url: `/${locale}/og/800x418.png`,
                    width: 800,
                    height: 418,
                    alt: t[locale].title,
                },
            ],
        },
    };
}
