import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/common/NavLink";
import { H1, Lead } from "@/components/Typography";

type Props = {};

function NotFound({ }: Props) {
  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center text-center">
      <div className="mb-8">
        <H1>404</H1>
        <Lead>You&apos;ve wandered... Perfect time to enjoy some ramen!</Lead>
      </div>
      <Image src="/vectors/ramen.svg" width={500} height={500} alt="RAMEN" className="hover:rotate-3 transition-all" />
      <Button asChild className="mt-8">
        <NavLink href="/">Go home with a full belly</NavLink>
      </Button>
    </div>
  );
}

export default NotFound;
