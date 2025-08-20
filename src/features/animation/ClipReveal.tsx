"use client";

import { cloneElement, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

/**
 * `ClipReveal` marks a element for clip-path reveal animation
 *
 * @param {Object} props
 * @param {React.ReactElement} props.children - The single React element (like <p> or <h2>).
 * @param {string?} props.className - Optional additional class names.
 */
const ClipReveal = ({
  children,
  className = "",
}: {
  children: React.ReactElement<{ ref?: unknown; className?: string }>;
  className?: string;
}) => {
  const elementRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      elementRef.current,
      {
        y: 20,
        opacity: 0,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      {
        y: 0,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        stagger: 0.1,
        duration: 0.6,
        ease: "circ.out",
      }
    );
  }, []);

  return cloneElement(children, {
    ref: elementRef,
    className: `${children.props.className || ""} ${className}`,
  });
};

export default ClipReveal;
