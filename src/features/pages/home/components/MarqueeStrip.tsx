"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const tokens = [
  "Design",
  "Compute",
  "Research",
  "Prototype",
  "Teach",
  "Make",
];

// A bold scroll-linked marquee. The band moves right-to-left as the user scrolls
// past it, with a slight tilt that lets it feel like signage. Uses motion.div so
// the motion is coupled to scroll progress rather than a dumb CSS loop — the
// strip stands still when the user stands still.
export default function MarqueeStrip() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // we render the token sequence 3x so there's always content on-screen while we translate
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

  // repeat enough to cover the scroll distance
  const repeated = Array.from({ length: 3 }, () => tokens).flat();

  return (
    <section
      ref={ref}
      aria-label="What we do"
      className="relative w-full py-[8vh] lg:py-[12vh] bg-brand-accent2 text-white overflow-hidden"
    >
      {/* thin rules above and below the band for a newspaper-banner feel */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/15" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/15" />

      <motion.div
        style={{ x }}
        className="flex items-center gap-12 lg:gap-24 whitespace-nowrap will-change-transform"
      >
        {repeated.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="inline-flex items-center gap-12 lg:gap-24 flex-shrink-0"
          >
            <span className="text-[60px] md:text-[96px] lg:text-[160px] font-light leading-none tracking-tight">
              {t}
            </span>
            <span
              aria-hidden
              className="block w-[14px] h-[14px] lg:w-[22px] lg:h-[22px] rounded-full bg-terracotta-light shrink-0"
            />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
