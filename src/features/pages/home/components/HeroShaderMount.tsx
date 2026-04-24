"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroShader = dynamic(() => import("./HeroShader"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-brand-accent2-130" />,
});

/**
 * Mounts the cursor-reactive WebGL shader backdrop for the Areas of
 * Practice section. When the user has reduced-motion or high-contrast
 * enabled (via OS preference or the accessibility panel), we skip the
 * shader entirely and render the solid-colour fallback instead. This
 * keeps the section visually calm and respects the accessibility intent.
 */
export default function HeroShaderMount() {
  const [disableShader, setDisableShader] = useState(true);

  useEffect(() => {
    const check = () => {
      const cls = document.documentElement.classList;
      const reducedMotionMedia =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setDisableShader(
        cls.contains("a11y-high-contrast") ||
          cls.contains("a11y-reduce-motion") ||
          reducedMotionMedia,
      );
    };
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    const mm = window.matchMedia("(prefers-reduced-motion: reduce)");
    mm.addEventListener("change", check);
    return () => {
      observer.disconnect();
      mm.removeEventListener("change", check);
    };
  }, []);

  if (disableShader) {
    return <div className="absolute inset-0 bg-brand-accent2-130" />;
  }
  return <HeroShader />;
}
