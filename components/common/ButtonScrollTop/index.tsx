"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../../ui/button";
import { ArrowUpIcon } from "@radix-ui/react-icons";

type Props = {};

function ButtonScrollTop({}: Props) {
  const [showButton, setShowButton] = useState(false);

  function getScrollPercent() {
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    // @ts-ignore
    return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(getScrollPercent() > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Button
        variant="secondary"
        className={`fixed z-40 right-8 xl:right-16 scale-150 bottom-16 transition-all ${
          showButton ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={scrollToTop}
      >
        <ArrowUpIcon />
      </Button>
    </>
  );
}

export default ButtonScrollTop;
