"use client";
import { Locale } from "@/i18n.config";
import React, { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import i18n from "./i18n";

const fullName = "Dominic Fournier";
const hoverName = "DominicF96";
const secretName = "Scintillar";
const shuffleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*?!";

interface NavAvatarProps {
  locale: Locale
};

export default function NavAvatar({ locale }: NavAvatarProps) {
  const t = i18n[locale];
  const [displayName, setDisplayName] = useState(fullName);
  const [animating, setAnimating] = useState(false);
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  const hoverTimer = useRef<NodeJS.Timeout | null>(null);
  const hoverCounter = useRef<number>(0);
  const hoverInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (document.cookie.includes("secretUnlocked=true")) {
      // Start with fullName, then animate to secretName
      setDisplayName(fullName);
      shuffleToSecret(true); // pass a flag to skip sound if needed
    }
  }, []);

  const setSecretCookie = () => {
    document.cookie = "secretUnlocked=true; path=/; max-age=" + 60 * 60 * 24 * 365;
  };

  const shuffleToSecret = (skipSound = false, startString?: string) => {
    if (animating) return;
    console.log("🔓 Secret discovered. Congratulations!");
    toast(t.secret_found);
    setAnimating(true);
    setGlitchActive(true);

    if (!skipSound) {
      const audio = new Audio("/sounds/secret_intro.mp3");
      audio.play().catch((error) => console.error("Error playing sound:", error));
    }

    const prev = startString || displayName;
    const maxLength = Math.max(prev.length, secretName.length);
    let index = 0;

    const nextChar = () => {
      if (index >= maxLength) {
        setAnimating(false);
        setSecretUnlocked(true);
        setSecretCookie();
        return;
      }

      let step = 0;
      const stepsPerChar = 10;

      const interval = setInterval(() => {
        step++;

        const newDisplay = [];
        for (let i = 0; i < maxLength; i++) {
          if (i < index) {
            newDisplay[i] = i < secretName.length ? secretName[i] : "";
          } else if (i === index) {
            newDisplay[i] =
              step < stepsPerChar
                ? shuffleChars[Math.floor(Math.random() * shuffleChars.length)]
                : i < secretName.length
                  ? secretName[i]
                  : "";
          } else {
            newDisplay[i] =
              i < prev.length
                ? prev[i]
                : shuffleChars[Math.floor(Math.random() * shuffleChars.length)];
          }
        }

        setDisplayName(newDisplay.join(""));

        if (step >= stepsPerChar) {
          clearInterval(interval);
          index++;
          setTimeout(nextChar, 50);
        }
      }, 40);
    };

    nextChar();
  };

  const animateToHover = () => {
    if (secretUnlocked) return;
    setAnimating(true);
    let current = displayName;
    const removeTo = "Dominic";
    const removeInterval = setInterval(() => {
      if (current.length > removeTo.length) {
        current = current.slice(0, -1);
        setDisplayName(current);
      } else {
        clearInterval(removeInterval);
        let add = "";
        let i = 0;
        const addStr = "F96";
        const addInterval = setInterval(() => {
          if (i < addStr.length) {
            add += addStr[i];
            setDisplayName(removeTo + add);
            i++;
          } else {
            clearInterval(addInterval);
            setAnimating(false);
          }
        }, 60);
      }
    }, 40);
  };

  const animateToFull = () => {
    if (secretUnlocked) return;
    setAnimating(true);
    let current = displayName;
    const removeTo = "Dominic";
    const removeInterval = setInterval(() => {
      if (current.length > removeTo.length) {
        current = current.slice(0, -1);
        setDisplayName(current);
      } else {
        clearInterval(removeInterval);
        let add = "";
        let i = 0;
        const addStr = fullName.slice(removeTo.length);
        const addInterval = setInterval(() => {
          if (i < addStr.length) {
            add += addStr[i];
            setDisplayName(removeTo + add);
            i++;
          } else {
            clearInterval(addInterval);
            setAnimating(false);
          }
        }, 40);
      }
    }, 40);
  };

  return (
    <span
      className={`whitespace-nowrap transition-all duration-500 inline-block font-mono ${glitchActive ? "glitch" : ""
        }`}
      style={{ display: "inline-block", width: "170px", color: "#fff" }}
      onMouseEnter={() => {
        if (secretUnlocked) return;
        if (!animating && displayName !== hoverName) {
          animateToHover();

          // Reset counter
          hoverCounter.current = 0;

          // Log every second
          if (hoverInterval.current) clearInterval(hoverInterval.current);
          hoverInterval.current = setInterval(() => {
            console.log(`Hover seconds: ${hoverCounter.current + 1}`);
            hoverCounter.current++;
          }, 1000);

          // Trigger shuffle after 10s
          if (hoverTimer.current) clearTimeout(hoverTimer.current);
          hoverTimer.current = setTimeout(() => {
            if (!secretUnlocked) {
              shuffleToSecret(false, "DominicF96");
            }
            if (hoverInterval.current) {
              clearInterval(hoverInterval.current);
              hoverInterval.current = null;
            }
          }, 10000);
        }
      }}
      onMouseLeave={() => {
        if (secretUnlocked) return;
        if (!animating && displayName !== fullName) animateToFull();

        // Clear timers
        if (hoverTimer.current) {
          clearTimeout(hoverTimer.current);
          hoverTimer.current = null;
        }
        if (hoverInterval.current) {
          clearInterval(hoverInterval.current);
          hoverInterval.current = null;
        }
      }}
    >
      {displayName}
    </span>
  );
}