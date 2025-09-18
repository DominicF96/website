import { JetBrains_Mono } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";

const jetbrainsMono = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" className={jetbrainsMono.className}>
        <body>
          <ClientProviders>{children}</ClientProviders>
          <div className="hidden md:block">
          </div>
        </body>
      </html>
    </ViewTransitions>

  );
}
