"use client";

import { cloneElement, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/**
 * `TextReveal` marks a text element for scroll-triggered animation
 * by adding the `reveal-animation-text` class.
 *
 * @param {Object} props
 * @param {React.ReactElement} props.children - The single React element (like <p> or <h2>).
 * @param {string?} props.className - Optional additional class names.
 */
const TextReveal = ({
  children,
  start = 100,
  delay = 0,
  duration = 0.6,
  className = "",
}: {
  children: React.ReactElement<{ ref?: unknown; className?: string }>;
  start?: number;
  delay?: number;
  duration?: number;
  className?: string;
}) => {
  const elementRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const split = SplitText.create(elementRef.current, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit: (self) => {
        return gsap.from(self.lines, {
          duration: duration,
          y: "100%",
          opacity: 0,
          scrollTrigger: {
            trigger: elementRef.current,
            start: `top ${start}%`,
          },
          stagger: 0.1,
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
    className: `${children.props.className || ""} ${className}`,
  });
};

export default TextReveal;
