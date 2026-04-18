"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

type Tenet = {
  numeral: string;
  kicker: string;
  title: string;
  body: string;
  img: string;
  alt: string;
};

const tenets: Tenet[] = [
  {
    numeral: "01",
    kicker: "Research",
    title: "Start with people.",
    body: "Every project begins with fieldwork — conversations, observations, and time spent with the humans whose lives the work will touch.",
    img: "/museo-visit.jpeg",
    alt: "HCD students on a field visit at Museo Camera",
  },
  {
    numeral: "02",
    kicker: "Build",
    title: "Think with your hands.",
    body: "We learn by making. Sketches, rough code, and physical prototypes settle more questions than any deck, and show us what we actually know.",
    img: "/page-reveal/img4.png",
    alt: "Student inking a relief block in the studio",
  },
  {
    numeral: "03",
    kicker: "Critique",
    title: "Work in the open.",
    body: "Studios, talks, and student chapters keep the thinking public. Early feedback is how ideas — and the people behind them — get sharper.",
    img: "/page-reveal/img3.png",
    alt: "Fireside chat hosted by HCD",
  },
];

export default function PhilosophyShowcase() {
  const [active, setActive] = useState<number>(0);

  return (
    <section
      aria-label="How we work"
      className="relative w-full py-[10vh] lg:py-[14vh] overflow-hidden bg-[#FBF7EF]"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.22] pointer-events-none dot-grid"
      />

      <div className="relative mx-auto xl:w-[1280px] px-8">
        <div className="max-w-[820px] mb-10 lg:mb-14">
          <h2 className="font-light text-[32px] lg:text-[56px] leading-[1.05] text-brand-accent2 text-balance">
            Our way of <span className="font-normal">working</span>.
          </h2>
          <p className="mt-4 lg:mt-6 font-light text-[14px] lg:text-[18px] text-black/60 leading-snug max-w-[560px]">
            The three moves behind every project we take on at HCD.
          </p>
        </div>

        {/* Desktop: interactive image accordion */}
        <div
          className="hidden md:flex gap-2 h-[560px] lg:h-[640px]"
          onMouseLeave={() => setActive(0)}
        >
          {tenets.map((t, i) => (
            <AccordionPanel
              key={t.numeral}
              tenet={t}
              isActive={active === i}
              onHover={() => setActive(i)}
            />
          ))}
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden grid gap-6">
          {tenets.map((t, i) => (
            <MobileCard key={t.numeral} tenet={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionPanel({
  tenet,
  isActive,
  onHover,
}: {
  tenet: Tenet;
  isActive: boolean;
  onHover: () => void;
}) {
  return (
    <article
      onMouseEnter={onHover}
      onFocus={onHover}
      tabIndex={0}
      aria-label={`${tenet.kicker} — ${tenet.title}`}
      className={`relative overflow-hidden cursor-pointer outline-none transition-[flex-grow] duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
        isActive ? "grow-[3]" : "grow"
      } basis-0`}
    >
      <Image
        src={tenet.img}
        alt={tenet.alt}
        fill
        sizes="(max-width: 1280px) 50vw, 640px"
        className={`object-cover transition-transform duration-[1200ms] ease-out ${
          isActive ? "scale-[1.06]" : "scale-100"
        }`}
      />

      {/* Darken + accent wash */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isActive
            ? "bg-gradient-to-t from-brand-accent2/95 via-brand-accent2/55 to-brand-accent2/20"
            : "bg-gradient-to-t from-brand-accent2/80 via-brand-accent2/40 to-brand-accent2/20"
        }`}
      />
      <div
        className={`absolute inset-0 bg-terracotta/20 mix-blend-multiply transition-opacity duration-700 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Collapsed-state vertical label */}
      <div
        className={`absolute top-6 lg:top-8 left-0 right-0 px-6 lg:px-8 flex items-start justify-between text-white transition-opacity duration-500 ${
          isActive ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="text-[12px] lg:text-[13px] tracking-[0.3em] uppercase font-medium tabular-nums">
          {tenet.numeral}
        </span>
        <span
          className="text-[18px] lg:text-[22px] tracking-[0.25em] uppercase font-medium"
          style={{ writingMode: "vertical-rl" }}
        >
          {tenet.kicker}
        </span>
      </div>

      {/* Expanded-state content */}
      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-10 text-white">
        <div
          className={`flex items-center gap-3 transition-all duration-500 ${
            isActive
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-[12px] lg:text-[13px] tracking-[0.3em] uppercase font-medium tabular-nums text-terracotta-light">
            {tenet.numeral} · {tenet.kicker}
          </span>
          <span className="h-px flex-1 bg-white/30" />
        </div>
        <h3
          className={`mt-3 lg:mt-4 font-light text-[26px] lg:text-[40px] leading-[1.05] transition-all duration-[600ms] ${
            isActive
              ? "opacity-100 translate-y-0 delay-100"
              : "opacity-0 translate-y-4"
          }`}
        >
          {tenet.title}
        </h3>
        <p
          className={`mt-3 lg:mt-4 max-w-[480px] font-light text-[14px] lg:text-[17px] leading-snug text-white/85 transition-all duration-[600ms] ${
            isActive
              ? "opacity-100 translate-y-0 delay-200"
              : "opacity-0 translate-y-4"
          }`}
        >
          {tenet.body}
        </p>
      </div>

      {/* Right-edge rule that glows when active */}
      <div
        className={`absolute top-0 right-0 h-full w-px transition-colors duration-500 ${
          isActive ? "bg-terracotta-light/70" : "bg-white/15"
        }`}
      />
    </article>
  );
}

function MobileCard({ tenet, index }: { tenet: Tenet; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden aspect-[4/5]"
    >
      <Image
        src={tenet.img}
        alt={tenet.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-accent2/95 via-brand-accent2/45 to-brand-accent2/10" />
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-white">
        <span className="text-[11px] tracking-[0.3em] uppercase font-medium tabular-nums">
          {tenet.numeral}
        </span>
        <span className="text-[12px] tracking-[0.3em] uppercase font-medium text-terracotta-light">
          {tenet.kicker}
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <h3 className="font-light text-[24px] leading-[1.1]">{tenet.title}</h3>
        <p className="mt-2 font-light text-[14px] leading-snug text-white/85">
          {tenet.body}
        </p>
      </div>
    </motion.article>
  );
}
