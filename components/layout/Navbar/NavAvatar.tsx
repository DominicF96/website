"use client";
import React, { useState, useEffect, useRef } from "react";

const fullName = "Dominic Fournier";
const hoverName = "DominicF96";
const secretName = "Scintillar";
const shuffleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*?!";

export default function NavAvatar() {
  const [displayName, setDisplayName] = useState(fullName);
  const [animating, setAnimating] = useState(false);
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  // Check cookie on mount
  useEffect(() => {
    if (document.cookie.includes("secretUnlocked=true")) {
      setSecretUnlocked(true);
      setDisplayName(secretName);
      setGlitchActive(true);
    }
  }, []);

  const setSecretCookie = () => {
    document.cookie = "secretUnlocked=true; path=/; max-age=" + 60 * 60 * 24 * 365;
  };

  const shuffleToSecret = () => {
    setAnimating(true);
    setGlitchActive(true); // glitch starts immediately
    const audio = new Audio("/sounds/secret_intro.mp3");
    audio.play().catch((error) => {
      console.error("Error playing sound:", error);
    });
    
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      let result = "";
      for (let i = 0; i < secretName.length; i++) {
        if (step < steps - i * 2) {
          const randIndex = Math.floor(Math.random() * shuffleChars.length);
          result += shuffleChars[randIndex];
        } else {
          result += secretName[i];
        }
      }
      setDisplayName(result);

      if (step >= steps + secretName.length) {
        clearInterval(interval);
        setAnimating(false);
        setSecretUnlocked(true);
        setSecretCookie();
        // glitch stays active
      }
    }, stepTime);
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
          if (hoverTimer.current) clearTimeout(hoverTimer.current);
          hoverTimer.current = setTimeout(() => {
            if (!secretUnlocked) shuffleToSecret();
          }, 10000);
        }
      }}
      onMouseLeave={() => {
        if (secretUnlocked) return;
        if (!animating && displayName !== fullName) animateToFull();
        if (hoverTimer.current) {
          clearTimeout(hoverTimer.current);
          hoverTimer.current = null;
        }
      }}
    >
      {displayName}
    </span>
  );
}