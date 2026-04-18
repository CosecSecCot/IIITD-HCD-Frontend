"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const moments = [
  { src: "/rnd-building.png", caption: "R&D Building", meta: "IIIT-Delhi campus" },
  { src: "/students.png", caption: "Studio practice", meta: "CSD undergraduates" },
  { src: "/hcd/5Z4A17.webp", caption: "The faculty", meta: "Core & visiting" },
  { src: "/page-reveal/img3.png", caption: "1Pixel conference", meta: "Design discourse" },
  { src: "/museo-visit.jpeg", caption: "Museo visit", meta: "Field study" },
  { src: "/aid-lab-nu-visit.jpeg", caption: "AID Lab · NU", meta: "Collaboration visit" },
];

export default function MomentsGallery() {
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: false,
      containScroll: false,
    },
    [autoplay.current]
  );
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnapCount(emblaApi.scrollSnapList().length);
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // restart the autoplay timer after the user nudges the carousel — avoids a
  // jarring quick advance right after a manual interaction
  const resetAutoplay = useCallback(() => {
    const ap = autoplay.current as unknown as { reset?: () => void };
    ap.reset?.();
  }, []);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    resetAutoplay();
  }, [emblaApi, resetAutoplay]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    resetAutoplay();
  }, [emblaApi, resetAutoplay]);

  const scrollTo = useCallback(
    (i: number) => {
      emblaApi?.scrollTo(i);
      resetAutoplay();
    },
    [emblaApi, resetAutoplay]
  );

  return (
    <section
      ref={sectionRef}
      aria-label="Moments from HCD"
      className="relative w-full bg-terracotta/[0.06] py-[10vh] lg:py-[14vh] overflow-hidden"
    >
      <div className="mx-auto xl:w-[1280px] px-8 mb-8 lg:mb-12 flex items-end justify-between gap-8">
        <h2 className="font-light text-[32px] lg:text-[64px] leading-[1.05] text-brand-accent2 text-balance">
          Moments from{" "}
          <span className="font-normal">the HCD department</span>
        </h2>
        <p className="max-md:hidden font-light text-[14px] lg:text-[18px] text-black/60 max-w-[360px] text-right">
          Visits, conferences, classrooms, and everything in between.
        </p>
      </div>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {moments.map((m) => (
            <figure
              key={m.src}
              className="relative flex-shrink-0 w-[75vw] md:w-[45vw] lg:w-[32vw] aspect-[4/5] mx-2 lg:mx-3"
            >
              <Image
                src={m.src}
                alt={m.caption}
                fill
                sizes="(max-width: 768px) 75vw, 32vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 bg-gradient-to-t from-brand-accent2-130/95 via-brand-accent2-130/50 to-transparent text-white">
                <p className="text-[16px] lg:text-[22px] font-medium">{m.caption}</p>
                <p className="text-[12px] lg:text-[14px] opacity-80">{m.meta}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mx-auto xl:w-[1280px] px-8 mt-6 lg:mt-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {Array.from({ length: snapCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to moment ${i + 1}`}
              className={`h-[6px] rounded-full transition-all duration-300 cursor-pointer ${
                i === selected
                  ? "w-[32px] bg-terracotta"
                  : "w-[12px] bg-brand-accent2/25 hover:bg-brand-accent2/50"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous moment"
            className="w-[44px] h-[44px] flex items-center justify-center border border-brand-accent2 text-brand-accent2 hover:bg-brand-accent2 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <ArrowLeft className="w-[18px] h-auto" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next moment"
            className="w-[44px] h-[44px] flex items-center justify-center border border-brand-accent2 text-brand-accent2 hover:bg-brand-accent2 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <ArrowRight className="w-[18px] h-auto" />
          </button>
        </div>
      </div>
    </section>
  );
}
