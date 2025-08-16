"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const AnimationInitializer = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".reveal-animation-clip",
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
      },
    );
  });

  return null; // This component just sets up animations
};

export default AnimationInitializer;
