import Image from "next/image";
import React from "react";
import LoaderPage from "./layout/PageLoader";
import "./container.scss";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

function CenteredContainer({ children, className }: ContainerProps) {
  return (
    <div
      className={`relative md:max-w-[1024px] lg:max-w-[1200px] mx-auto px-4 md:px-8 ${className || ""
        }`}
    >
      {children}
    </div>
  );
}

function PageContainer({ children, className }: ContainerProps) {
  return (
    <main className={`relative pt-16 md:pt-36 ${className || ""}`}>
      <LoaderPage />
      <Image priority src="/images/hero-bg.webp" height={500} width={1500} alt="" className="w-full absolute top-0 fade-out-linear" />
      {children}
    </main>
  );
}

export { CenteredContainer, PageContainer };
