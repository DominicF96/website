import { Poppins } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ClientProviders>{children}</ClientProviders>
        <div className="hidden md:block">
        </div>
      </body>
    </html>
  );
}
