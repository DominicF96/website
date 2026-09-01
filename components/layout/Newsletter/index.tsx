"use client";
import React, { useEffect, useRef, useState } from "react";
import { H2, P, Small } from "../../Typography";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { CenteredContainer } from "../../Container";
import Image from "next/image";
import { Locale } from "@/i18n.config";
import i18n from "./i18n";
import { toast } from "sonner";
import { CheckCircle, CheckIcon, CircleX, CircleXIcon } from "lucide-react";

type Props = {
  locale: Locale;
};

function Newsletter({ locale }: Props) {
  const t = i18n[locale];
  // Two refs on purpose. The wrapper is never transformed, so it is the only
  // stable thing to measure. Measuring the card itself fed its own transform
  // back into the next calculation, which settled at a fixed point and froze
  // the animation.
  const wrapperRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const emailRe =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const isEmailValid = emailRe.test(email);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleEmailSubmit = async () => {
    if (isEmailValid) {
      console.log("Submitting email", email);
      await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.status === 200) {
            toast.success(t.success);
            setSuccess(true);
            setError(false);
            // Attempt to play success sound
            const audio = new Audio("/sounds/success.mp3");
            audio.volume = 0.2;
            audio.play().catch((error) => {
              console.error("Error playing sound:", error);
            });
          } else {
            throw new Error("Unable to subscribe to newsletter");
          }
        })
        .catch((err) => {
          setSuccess(false);
          setError(true);
          console.error(err);
          toast.error(t.error.subscribe);
          const audio = new Audio("/sounds/error.mp3");
          audio.play().catch((error) => {
            console.error("Error playing sound:", error);
          });
        });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      const card = newsletterRef.current;
      if (!wrapper || !card) return;

      // Measured on the untransformed wrapper, so the result never depends on
      // the transform we are about to write.
      const wrapperTop = wrapper.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Single progress value: 0 while the card is still below the fold, 1 once
      // its wrapper has reached the top of the viewport. Clamping here means no
      // branch is needed for the off-screen case.
      const progress = Math.min(Math.max(1 - wrapperTop / windowHeight, 0), 1);

      // Reaches full size at ~33% of the travel, up from 50%.
      const scale = Math.min(0.8 + 0.9 * progress, 1.1);
      // Starts 700px high, further over the glossary, and drops 550px to land
      // on the same -150px it always ended at.
      const translateY = -700 + 550 * progress;
      // Fully opaque by ~20% of the travel; it used to top out at 0.9.
      const opacity = Math.min(0.6 + 2 * progress, 1);

      card.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      card.style.opacity = `${opacity}`;
    };

    // Run once on mount: without this the card has no transform at all until
    // the first scroll event, so it sits unstyled on load and on any route
    // change that does not scroll.
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <CenteredContainer>
      <div ref={wrapperRef} className="mt-56 mb-32">
      <div
        ref={newsletterRef}
        className="relative z-10 bg-primary text-background rounded-xl will-change-transform"
      >
        <Image
          src="/vectors/envelope.svg"
          width={300}
          height={150}
          alt=""
          className="block md:hidden absolute top-0 right-0 translate-y-[-1px] translate-x-[1px]"
        />
        <Image
          src="/vectors/envelope.svg"
          width={300}
          height={200}
          alt=""
          className="hidden md:block lg:hidden absolute top-0 right-0 translate-y-[-1px] translate-x-[1px]"
        />
        <Image
          src="/vectors/envelope.svg"
          width={480}
          height={300}
          alt=""
          className="hidden lg:block absolute top-0 right-0 translate-y-[-1px] translate-x-[1px]"
        />
        <div className="pt-64 sm:pt-56 pb-12 px-8 md:py-40 md:pb-24 lg:pt-32 md:px-24">
          <H2 className="font-extrabold">{t.title}</H2>
          <P className="text-lg md:max-w-[380px]">{t.description}</P>
          <div className="mt-8 flex flex-row md:max-w-[400px]">
            <Input
              placeholder={t.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && isEmailValid) {
                  handleEmailSubmit();
                }
              }}
              className="border-background text-background placeholder:text-background placeholder:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background rounded-r-none"
            />
            <Button
              disabled={!isEmailValid || !email || email.length <= 0}
              onClick={handleEmailSubmit}
              className="bg-background text-white hover:bg-white hover:text-background rounded-l-none"
            >
              {t.action}
            </Button>
          </div>
          {!isEmailValid && email && email.length > 0 && (
            <div className="pt-4">
              <CircleXIcon height={18} width={18} className="inline mr-2" />
              <Small className="text-background">{t.error.email_invalid}</Small>
            </div>
          )}
          {success && (
            <div className="pt-4">
              <CheckCircle height={18} width={18} className="inline mr-2" />
              <Small className="text-background">{t.success}</Small>
            </div>
          )}
          {error && (
            <div className="pt-4">
              <CircleXIcon height={18} width={18} className="inline mr-2" />
              <Small className="text-background">{t.error.subscribe}</Small>
            </div>
          )}
        </div>
      </div>
      </div>
    </CenteredContainer>
  );
}

export default Newsletter;
