"use client";

import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";

// Words that should pop in terracotta rather than the default cobalt when "active"
const ACCENT = new Set([
  "creative",
  "medium",
  "engineering",
  "people",
]);

const paragraph =
  "At IIIT-Delhi, we teach computing as a creative medium — and design as a form of engineering. Technology, built for the people who use it.";

export default function ScrollManifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const words = paragraph.split(/(\s+)/); // keep whitespace tokens so spacing stays exact
  const wordIndices: number[] = [];
  words.forEach((w, i) => {
    if (w.trim().length > 0) wordIndices.push(i);
  });

  return (
    // tall container gives the sticky block distance to animate across
    <section
      ref={containerRef}
      aria-label="Department manifesto"
      className="relative w-full"
      style={{ height: "220vh" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 lg:px-16">
        <div className="mx-auto xl:w-[1180px] w-full">
          <p className="text-[28px] md:text-[44px] lg:text-[62px] leading-[1.25] font-light text-brand-accent2">
            {words.map((token, i) => {
              if (token.trim().length === 0) return <span key={i}>{token}</span>;
              const idx = wordIndices.indexOf(i);
              const total = wordIndices.length;
              // pack reveals into the first 75% of the scroll; last 25% holds fully-revealed
              const start = (idx / total) * 0.75;
              const end = Math.min(0.78, start + 1.8 / total);
              const accent = ACCENT.has(
                token.toLowerCase().replace(/[^a-z]/g, "")
              );
              return (
                <Word
                  key={i}
                  text={token}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                  accent={accent}
                />
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

function Word({
  text,
  progress,
  start,
  end,
  accent,
}: {
  text: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  accent: boolean;
}) {
  const opacity = useTransform(progress, [start, end], [0.12, 1]);
  const color = useTransform(
    progress,
    [start, end],
    accent
      ? ["var(--color-brand-accent2)", "var(--color-terracotta)"]
      : ["var(--color-brand-accent2)", "var(--color-brand-accent2)"]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block will-change-[opacity,color]"
    >
      {text}
    </motion.span>
  );
}
