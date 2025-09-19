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

// This works, assuming that;
// A. https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#supported-pattern-passing-server-components-to-client-components-as-props:~:text=To%20fix%20this%2C%20create%20your%20context%20and%20render%20its%20provider%20inside%20of%20a%20Client%20Component%3A
// B. https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#supported-pattern-passing-server-components-to-client-components-as-props:~:text=%7D-,%3CClientComponent%3E,will%20eventually%20be%20placed.,-In%20a%20parent
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
