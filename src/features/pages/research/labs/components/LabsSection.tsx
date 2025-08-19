"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Globe, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import Link from "next/link";

gsap.registerPlugin(Flip, useGSAP);

export type Lab = {
  id: number;
  title: string;
  short: string;
  lead: string;
  logo: string;
  full: string;
  type: string;
  website: string;
  foreground: string;
  background: string;
  backgroundDim: string;
};

export default function LabsSection({ labs }: { labs: Lab[] }) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const cardsContainerRef = useRef<HTMLElement>(null);
  const flipStateRef = useRef<Flip.FlipState>(null); // store flip state between render & GSAP callback

  const { contextSafe } = useGSAP({
    scope: cardsContainerRef,
    dependencies: [],
  });

  const handleExpand = contextSafe((id: number) => {
    // Capture BEFORE state (all cards)
    const cards = gsap.utils.toArray<Element>("[data-lab-card]");
    flipStateRef.current = Flip.getState(cards);

    // Trigger React layout change
    setExpandedId(id);
  });

  const handleCollapse = contextSafe(() => {
    const cards = gsap.utils.toArray<Element>("[data-lab-card]");
    flipStateRef.current = Flip.getState(cards);
    setExpandedId(null);
  });

  // Animate layout change whenever expandedId changes
  useGSAP(
    () => {
      if (!flipStateRef.current) return;

      Flip.from(flipStateRef.current, {
        duration: 0.5,
        ease: "power4.out",
        absolute: false,
      });

      // clear stored state so stale references aren't reused
      flipStateRef.current = null;
    },
    { scope: cardsContainerRef, dependencies: [expandedId] }
  );

  return (
    <section
      ref={cardsContainerRef}
      className="grid grid-cols-1 xl:grid-cols-3"
    >
      {labs
        // .filter((lab) => lab.type === activeTab)
        .map((lab) => (
          <LabCard
            key={lab.id}
            lab={lab}
            expanded={lab.id === expandedId}
            onExpand={() => handleExpand(lab.id)}
            onCollapse={handleCollapse}
          />
        ))}
    </section>
  );
}

function LabCard({
  lab,
  expanded,
  onExpand,
  onCollapse,
}: {
  lab: Lab;
  expanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}) {
  const [hover, setHover] = useState(false);
  const expanded_class = expanded
    ? "z-[99] xl:col-span-2 xl:row-span-2"
    : "cursor-pointer";

  return (
    <div
      data-lab-card
      style={
        expanded
          ? {
              backgroundColor: lab.background,
              color: lab.foreground,
            }
          : {
              backgroundColor: hover ? lab.backgroundDim : "white",
            }
      }
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={expanded ? () => {} : onExpand}
      className={`w-full flex flex-col justify-between gap-[32px] lg:gap-[48px] p-[28px] lg:p-[40px] border border-black/10 ${expanded_class}`}
    >
      {expanded ? (
        <>
          <div className="flex flex-col gap-[18px] lg:gap-[24px]">
            <div className="flex flex-col gap-[12px] lg:gap-[16px]">
              <div className="flex items-center gap-[12px] lg:gap-[16px]">
                <Image
                  className="reveal-animation-opacity-only h-[40px] lg:h-[60px] w-auto"
                  style={{
                    // WARNING: for now we are assuming that foreground color will be black and white
                    // if you want to change it to custom color, modify the svg or make two images and change img src
                    filter:
                      lab.foreground === "#FFFFFF" ? "invert(100%)" : "none",
                  }}
                  src={lab.logo}
                  alt={`${lab.title} logo`}
                  width={86}
                  height={86}
                />
                <h3 className="reveal-animation-text text-[16px] lg:text-[32px] font-medium">
                  {lab.title}
                </h3>
              </div>
              <p className="reveal-animation-text font-helvetica_now_display text-[14px] lg:text-[24px] opacity-80">
                {lab.full}
              </p>
            </div>
            <p className="reveal-animation-text text-[14px] lg:text-[24px] font-medium opacity-80">
              {lab.lead}
            </p>
          </div>
          <div className="flex justify-between flex-row-reverse flex-wrap w-full">
            <button
              type="button"
              onClick={onCollapse}
              className="reveal-animation-opacity-only flex items-center text-[14px] lg:text-[20px] gap-[0.5em] cursor-pointer"
              aria-label={`Close ${lab.title} details`}
            >
              <span>CLOSE</span>
              <X className="w-[16px] h-[16px]" />
            </button>
            {lab.website === "" ? (
              <div aria-hidden />
            ) : (
              <Link
                href={lab.website}
                target="_blank"
                className="reveal-animation-opacity-only text-[14px] lg:text-[20px] px-[1em] lg:px-[2em] py-[0.5em] border inline-flex gap-[16px] items-center justify-center transition-all duration-200"
                style={{
                  borderColor: lab.foreground,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = lab.foreground;
                  e.currentTarget.style.color = lab.background;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = lab.foreground;
                }}
              >
                <LetterSwapForward
                  label="VISIT WEBSITE"
                  staggerDuration={0.005}
                  className="w-max"
                />
                <Globe className="max-lg:hidden w-[12px] lg:w-[16px] aspect-square h-auto" />
              </Link>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-[18px] lg:gap-[24px]">
            <div className="flex flex-col gap-[12px] lg:gap-[16px]">
              <div className="flex items-center gap-[12px] lg:gap-[16px]">
                <Image
                  className="reveal-animation-opacity-only h-[40px] lg:h-[60px] w-auto"
                  src={lab.logo}
                  alt={`${lab.title} logo`}
                  width={86}
                  height={86}
                />
                <h3 className="reveal-animation-text text-[16px] lg:text-[20px] font-medium">
                  {lab.title}
                </h3>
              </div>
              <p className="reveal-animation-text font-helvetica_now_display text-[14px] lg:text-[18px] opacity-60">
                {lab.short}
              </p>
            </div>
            <p className="reveal-animation-text text-[14px] lg:text-[18px] opacity-60">
              {lab.lead}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
