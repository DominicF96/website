import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
};

function HeroGraphic({ className }: Props) {
  return (
    <div className={`${className || ""}`}>
      <Image
        src="/vectors/circle_deco_profile_desktop.png"
        width="400"
        height="325"
        alt="Dominic Fournier"
        className="hidden md:block absolute z-30 right-0 top-40"
      />
      <Image
        src="/vectors/circle_deco_profile_mobile.png"
        width="300"
        height="300"
        alt="Dominic Fournier"
        className="md:hidden block absolute z-30 right-4 -bottom-40 md:right-24 top-84 sm:top-36 md:-top-64 md:scale-150"
      />
    </div>
  );
}

export default HeroGraphic;
