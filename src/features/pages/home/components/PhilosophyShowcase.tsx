"use client";

import Image from "next/image";
import { motion } from "motion/react";

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
    kicker: "Listen",
    title: "People before product.",
    body: "Every project starts in the field — with the people whose lives the work will touch.",
    img: "/museo-visit.jpeg",
    alt: "HCD students on a field visit at Museo Camera",
  },
  {
    numeral: "02",
    kicker: "Make",
    title: "Prototypes, not pitches.",
    body: "We think with our hands. Sketches and rough builds settle debates faster than slide decks.",
    img: "/page-reveal/img4.png",
    alt: "Student inking a relief block in the studio",
  },
  {
    numeral: "03",
    kicker: "Share",
    title: "Practice in public.",
    body: "We host talks, workshops, and chapters so the work travels — and gets sharper for it.",
    img: "/page-reveal/img3.png",
    alt: "Fireside chat hosted by HCD",
  },
];

export default function PhilosophyShowcase() {
  return (
    <section
      aria-label="Our philosophy"
      className="relative w-full py-[10vh] lg:py-[14vh] overflow-hidden bg-[#FBF7EF]"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.22] pointer-events-none dot-grid"
      />

      <div className="relative mx-auto xl:w-[1280px] px-8">
        {/* Header */}
        <div className="flex max-lg:flex-col lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-[640px]">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-[24px] h-px bg-terracotta" />
              <span className="text-[11px] lg:text-[12px] tracking-[0.3em] uppercase text-terracotta-130 font-medium">
                How we practice
              </span>
            </div>
            <h2 className="font-light text-[32px] lg:text-[56px] leading-[1.05] text-brand-accent2">
              A posture, not a{" "}
              <span className="italic font-normal text-terracotta">
                method
              </span>
              .
            </h2>
          </div>
          <p className="lg:text-right max-w-[360px] font-light text-[14px] lg:text-[17px] text-black/60 leading-snug">
            Three commitments behind every studio, lab, and class we run.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tenets.map((t, i) => (
            <TenetCard key={t.numeral} tenet={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TenetCard({ tenet, index }: { tenet: Tenet; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-accent2/5">
        <Image
          src={tenet.img}
          alt={tenet.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute top-0 left-0 m-3 lg:m-4 px-2.5 py-1 bg-[#FBF7EF]/95 backdrop-blur-sm">
          <span className="text-[11px] lg:text-[12px] tracking-[0.25em] uppercase text-brand-accent2 font-medium tabular-nums">
            {tenet.numeral} · {tenet.kicker}
          </span>
        </div>
      </div>
      <h3 className="mt-5 lg:mt-6 font-light text-[22px] lg:text-[28px] leading-[1.1] text-brand-accent2">
        {tenet.title}
      </h3>
      <p className="mt-2 lg:mt-3 font-light text-[14px] lg:text-[16px] leading-snug text-black/60">
        {tenet.body}
      </p>
    </motion.article>
  );
}
