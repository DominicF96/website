"use client";
import React from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "./ui/sonner";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { TooltipProvider } from "./ui/tooltip";
import { CookiesProvider } from "react-cookie";

type Props = {
  children: React.ReactNode;
};

function ClientProviders({ children }: Props) {
  return (
    <CookiesProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics trackPageViews />
        )}
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <Toaster />
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default ClientProviders;
