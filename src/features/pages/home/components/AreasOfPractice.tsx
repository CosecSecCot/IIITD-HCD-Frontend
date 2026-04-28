"use client";

import HeroShader from "./HeroShaderMount";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useHoverGoPill } from "@/components/HoverGoPill";
import LinkButton from "@/components/LinkButton";

/**
 * Tracks whether the user has opted into reduced motion via either the
 * OS-level `prefers-reduced-motion` media query or the `a11y-reduce-motion`
 * class toggled by the accessibility panel. Live, so toggling the panel
 * updates in-flight animations.
 */
function useMotionDisabled() {
  const prefersReduced = useReducedMotion();
  const [classFlag, setClassFlag] = useState(false);
  useEffect(() => {
    const check = () =>
      setClassFlag(
        document.documentElement.classList.contains("a11y-reduce-motion"),
      );
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  return Boolean(prefersReduced) || classFlag;
}

export type AreaItem = {
  title: string;
  logo?: string;
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
            Areas of <span className="font-normal">practice</span>
          </h2>
          <p className="mt-4 lg:mt-6 max-w-[640px] font-light text-[14px] lg:text-[22px] text-white/80 leading-snug">
            Our work cuts across disciplines — from interaction and interface
            design to HCI, accessibility, AI, and emerging media. Each area
            below is a lab where faculty and students prototype, research, and
            build together.
          </p>
        </div>

        <div className="mt-[8vh] lg:mt-[12vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {areas.map((a, i) => (
            <AreaCard key={a.title} {...a} index={i} />
          ))}
        </div>

        <div className="mt-10 lg:mt-14 flex justify-center">
          <LinkButton
            href="/research/labs"
            text="View all labs"
            type="transparent"
            rounded
            icon={<ArrowRight className="w-[14px] lg:w-[18px] h-auto" />}
          />
        </div>
      </div>
    </section>
  );
}

function AreaCard({
  title,
  logo,
  body,
  href,
  external,
  index,
}: AreaItem & { index: number }) {
  const { pill, handlers } = useHoverGoPill();
  const motionDisabled = useMotionDisabled();
  // With reduced motion, skip motion.div entirely. Otherwise an SSR/first
  // render with motion enabled latches `initial: opacity 0` inline styles
  // that never get driven back to 1 once the hook flips disabled=true.
  const Wrapper = motionDisabled ? "div" : motion.div;
  const wrapperProps = motionDisabled
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.5, delay: index * 0.07 },
      };
  return (
    <Wrapper {...wrapperProps}>
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...handlers}
        className="group relative block h-full p-6 lg:p-8 bg-white hover:bg-terracotta transition-colors duration-300 overflow-hidden"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="relative h-[40px] lg:h-[48px] w-[40px] lg:w-[48px] flex items-center justify-center">
            {logo ? (
              <Image
                src={logo}
                alt={`${title} logo`}
                fill
                sizes="48px"
                className="object-contain"
              />
            ) : null}
          </div>
          <ArrowUpRight
            className="w-[18px] h-auto text-brand-accent2 group-hover:text-white transition-colors duration-300"
            strokeWidth={1.5}
          />
        </div>
        <h3 className="mt-6 lg:mt-12 text-[20px] lg:text-[28px] leading-[1.15] font-medium text-brand-accent2 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-3 lg:mt-4 text-[13px] lg:text-[15px] font-light text-black/70 group-hover:text-white/90 transition-colors duration-300 leading-snug line-clamp-4">
          {body}
        </p>
        {pill}
      </Link>
    </Wrapper>
  );
}
