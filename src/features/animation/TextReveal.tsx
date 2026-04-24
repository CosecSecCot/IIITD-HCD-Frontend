"use client";

import { cloneElement, useRef } from "react";
import {cn} from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/**
 * Returns true when the user has opted into reduced motion, either via
 * the OS-level `prefers-reduced-motion: reduce` media query or via the
 * `a11y-reduce-motion` class our accessibility panel toggles on <html>.
 * Safe for SSR (returns false on the server).
 */
function shouldReduceMotion(): boolean {
  if (typeof window === "undefined") return false;
  const mediaReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const classReduced =
    document.documentElement.classList.contains("a11y-reduce-motion");
  return mediaReduced || classReduced;
}

/**
 * `TextReveal` marks a text element for scroll-triggered animation.
 *
 * @param {Object} props
 * @param {React.ReactElement} props.children - The single React element (like \<p\> or \<h2\>).
 * @param {string?} props.className - Optional additional class names.
 */
const TextReveal = ({
  children,
  start = 100,
  delay = 0,
  duration = 0.6,
  stagger = 0.02,
  className = "",
}: {
  children: React.ReactElement<{ ref?: unknown; className?: string }>;
  start?: number;
  delay?: number;
  duration?: number;
  stagger?: number;
  className?: string;
}) => {
  const elementRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Respect the user's reduced-motion preference. Skip the split-text
    // animation entirely so the text just renders in its final position.
    if (shouldReduceMotion()) return;

    const split = SplitText.create(elementRef.current, {
      type: "words",
      mask: "words",
      autoSplit: true,
      onSplit: (self) => {
        return gsap.from(self.words, {
          duration: duration,
          y: "100%",
          opacity: 0,
          scrollTrigger: {
            trigger: elementRef.current,
            start: `top ${start}%`,
          },
          stagger: stagger,
          delay: delay,
          ease: "circ.out",
        });
      },
    });

    return () => {
      split.revert();
    };
  }, []);

  return cloneElement(children, {
    ref: elementRef,
    className: cn(children.props.className || "", className),
  });
};

export default TextReveal;
