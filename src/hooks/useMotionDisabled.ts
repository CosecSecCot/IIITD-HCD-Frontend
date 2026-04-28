"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Tracks whether the user has opted into reduced motion via either the
 * OS-level `prefers-reduced-motion` media query or the `a11y-reduce-motion`
 * class toggled by the accessibility panel. Live, so toggling the panel
 * updates in-flight animations.
 */
export function useMotionDisabled(): boolean {
  const prefersReduced = useReducedMotion();
  const [classFlag, setClassFlag] = useState(false);
  useEffect(() => {
    const check = () =>
      setClassFlag(
        document.documentElement.classList.contains("a11y-reduce-motion"),
      );
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  return Boolean(prefersReduced) || classFlag;
}
