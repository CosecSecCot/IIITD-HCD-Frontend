"use client";

import HeroShader from "./HeroShaderMount";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useHoverGoPill } from "@/components/HoverGoPill";

export type AreaItem = {
  title: string;
  short: string;
  body: string;
  href: string;
  external?: boolean;
};

export default function AreasOfPractice({ areas }: { areas: AreaItem[] }) {
  return (
    <section className="relative w-full overflow-hidden py-[10vh] lg:py-[14vh]">
      {/* cursor-reactive shader backdrop */}
      <div className="absolute inset-0 opacity-[0.85] pointer-events-none">
        <HeroShader />
      </div>
      {/* pointer-events layer so the shader canvas still receives mouse moves */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <div className="relative z-10 mx-auto xl:w-[1280px] px-8">
        <div className="max-w-[900px]">
          <h2 className="font-light text-[32px] lg:text-[64px] leading-[1.05] text-white">
            Areas of{" "}
            <span className="text-terracotta-light font-normal">practice</span>
          </h2>
          <p className="mt-4 lg:mt-6 max-w-[640px] font-light text-[14px] lg:text-[22px] text-white/80 leading-snug">
            Move your cursor — the field reacts. Explore the directions we
            research, teach, and build in.
          </p>
        </div>

        <div className="mt-[8vh] lg:mt-[12vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {areas.map((a, i) => (
            <AreaCard key={a.title} {...a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AreaCard({
  title,
  short,
  body,
  href,
  external,
  index,
}: AreaItem & { index: number }) {
  const { pill, handlers } = useHoverGoPill();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...handlers}
        className="group relative block h-full p-6 lg:p-8 bg-white/95 hover:bg-terracotta transition-colors duration-300 overflow-hidden"
      >
        <div className="flex items-start justify-between gap-3">
          <span className="text-[11px] lg:text-[13px] tracking-[0.25em] uppercase text-brand-accent2 group-hover:text-white transition-colors duration-300">
            {short}
          </span>
          <ArrowUpRight
            className="w-[18px] h-auto text-brand-accent2 group-hover:text-white/0 transition-all duration-300"
            strokeWidth={1.5}
          />
        </div>
        <h3 className="mt-6 lg:mt-12 text-[20px] lg:text-[28px] leading-[1.15] font-medium text-brand-accent2 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-3 lg:mt-4 text-[13px] lg:text-[15px] font-light text-black/70 group-hover:text-white/90 transition-colors duration-300 leading-snug">
          {body}
        </p>
        {pill}
      </Link>
    </motion.div>
  );
}
