"use client";
import React, { useState } from "react";

const fullName = "Dominic Fournier";
const hoverName = "DominicF96";

export default function NavAvatar() {
  const [displayName, setDisplayName] = useState(fullName);
  const [animating, setAnimating] = useState(false);

  const animateToHover = () => {
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
    <>
      <span
        className="whitespace-nowrap transition-all duration-500 "
        style={{ display: "inline-block", width: "170px" }}
        onMouseEnter={() => {
          if (!animating && displayName !== hoverName) animateToHover();
        }}
        onMouseLeave={() => {
          if (!animating && displayName !== fullName) animateToFull();
        }}
      >
        {displayName}
      </span>
    </>
  );
}
