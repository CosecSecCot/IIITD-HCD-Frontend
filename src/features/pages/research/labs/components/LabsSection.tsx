"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Globe, X } from "lucide-react";
import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { Lab } from "@/types";
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip, useGSAP);

export default function LabsSection({
  labs,
  initialSlug,
}: {
  labs: Lab[];
  initialSlug?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialExpandedId =
    (initialSlug && labs.find((l) => l.slug === initialSlug)?.id) ?? null;

  const [expandedId, setExpandedId] = useState<number | null>(
    initialExpandedId
  );

  const cardsContainerRef = useRef<HTMLElement>(null);
  const flipStateRef = useRef<Flip.FlipState>(null);

  const updateLabParam = (slug: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) params.set("lab", slug);
    else params.delete("lab");
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const { contextSafe } = useGSAP({
    scope: cardsContainerRef,
    dependencies: [],
  });

  const handleExpand = contextSafe((id: number) => {
    const cards = gsap.utils.toArray<Element>("[data-lab-card]");
    flipStateRef.current = Flip.getState(cards);
    setExpandedId(id);
    const lab = labs.find((l) => l.id === id);
    if (lab) updateLabParam(lab.slug);
  });

  const handleCollapse = contextSafe(() => {
    const cards = gsap.utils.toArray<Element>("[data-lab-card]");
    flipStateRef.current = Flip.getState(cards);
    setExpandedId(null);
    updateLabParam(null);
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

      flipStateRef.current = null;
    },
    { scope: cardsContainerRef, dependencies: [expandedId] }
  );

  // On first render, if we landed with ?lab=<slug>, smooth-scroll to the expanded card.
  // The card carries a CSS scroll-margin-top so it sits below the navbar instead of
  // flush against the viewport top.
  useEffect(() => {
    if (initialExpandedId == null) return;
    const el = cardsContainerRef.current?.querySelector<HTMLElement>(
      `[data-lab-id="${initialExpandedId}"]`
    );
    if (!el) return;
    // wait two frames so the Flip animation doesn't fight us
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      })
    );
  }, [initialExpandedId]);

  // If the slug in the URL changes externally (e.g. back/forward), sync the expanded state
  useEffect(() => {
    const slug = searchParams.get("lab");
    const matched = slug ? labs.find((l) => l.slug === slug)?.id ?? null : null;
    setExpandedId((prev) => (prev === matched ? prev : matched));
  }, [searchParams, labs]);

  return (
    <section
      ref={cardsContainerRef}
      className="grid grid-cols-1 xl:grid-cols-3"
    >
      {labs.map((lab) => (
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
  const canHover = useMediaQuery("(pointer: fine)");

  const LabCardExpanded = () => (
    <>
      <div className="flex flex-col gap-[18px] lg:gap-[24px]">
        <div className="flex flex-col gap-[12px] lg:gap-[16px]">
          <div className="flex items-center gap-[12px] lg:gap-[16px]">
            <Image
              className="reveal-animation-opacity-only h-[40px] lg:h-[60px] w-auto grayscale"
              style={{
                mixBlendMode:
                  lab.foreground === "#FFFFFF" ? "screen" : "overlay",
              }}
              src={lab.logo}
              alt={`${lab.title} logo`}
              width={86}
              height={86}
            />
            <h3 className="text-[16px] lg:text-[32px] font-medium">
              {lab.title}
            </h3>
          </div>
          <p className="font-helvetica_now_display text-[14px] lg:text-[24px] opacity-80">
            {lab.full}
          </p>
        </div>
        <p className="text-[14px] lg:text-[24px] font-medium opacity-80">
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
              if (!canHover) return;
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
  );

  const LabCardCollapsed = () => (
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
              style={{
                // WARNING: for now we are assuming that foreground color will be black and white
                // if you want to change it to custom color, modify the svg or make two images and change img src
                filter: canHover && hover ? "grayscale(100%)" : "none",
                mixBlendMode:
                  canHover && hover
                    ? lab.foreground === "#FFFFFF"
                      ? "screen"
                      : "overlay"
                    : "normal",
              }}
            />
            <h3 className="text-[16px] lg:text-[20px] font-medium">
              {lab.title}
            </h3>
          </div>
          <p className="font-helvetica_now_display text-[14px] lg:text-[18px] opacity-60">
            {lab.short}
          </p>
        </div>
        <p className="text-[14px] lg:text-[18px] opacity-60">{lab.lead}</p>
      </div>
    </>
  );

  const expanded_class = expanded
    ? "z-[99] xl:col-span-2 xl:row-span-2"
    : "cursor-pointer";

  return (
    <div
      data-lab-card
      data-lab-id={lab.id}
      style={{
        scrollMarginTop: "120px",
        ...(expanded
          ? { backgroundColor: lab.background, color: lab.foreground }
          : {
              backgroundColor: canHover && hover ? lab.backgroundDim : "white",
            }),
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={expanded ? () => {} : onExpand}
      className={cn(
        "w-full flex flex-col justify-between gap-[32px] lg:gap-[48px] p-[28px] lg:p-[40px] border border-black/10",
        expanded_class
      )}
    >
      {expanded ? <LabCardExpanded /> : <LabCardCollapsed />}
    </div>
  );
}
