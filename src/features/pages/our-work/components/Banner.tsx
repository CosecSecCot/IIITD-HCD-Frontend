"use client";

import { useEffect, useRef, useState } from "react";
import { StudentProject } from "./SmallProjectCard";
import MediaBetweenText from "@/components/fancy/blocks/media-between-text";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ChevronLeft, ChevronRight } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
gsap.registerPlugin(useGSAP);

export default function Banner({ projects }: { projects: StudentProject[] }) {
  if (projects.length === 0) return;

  const containerRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const clipPathStart = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
  const clipPathEnd = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

  const { contextSafe } = useGSAP(
    () => {
      gsap.fromTo(
        ".slide-title",
        {
          yPercent: 20,
          clipPath: clipPathStart,
          opacity: 0,
        },
        {
          yPercent: 0,
          clipPath: clipPathEnd,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    },
    {
      scope: containerRef,
      dependencies: [currentIndex],
    }
  );

  const moveToIndex = (index: number) => {
    const slidesContainer = document.querySelector("#slides");
    if (!slidesContainer) {
      return;
    }

    // Clamp index between 0 and projects.length - 1
    const clampedIndex = Math.max(0, Math.min(index, projects.length - 1));

    // Animate slides container

    if (clampedIndex === currentIndex) {
      return;
    }

    gsap
      .set(".slide-title", {
        yPercent: 20,
        clipPath: clipPathStart,
        opacity: 0,
      })
      .then(() => {
        gsap
          .to(slidesContainer, {
            xPercent: -(100 / projects.length) * clampedIndex,
            duration: 0.6,
            ease: "power3.inOut",
          })
          .then(() => {
            setCurrentIndex(clampedIndex);
          });
      });
  };

  const moveNext = contextSafe(() => {
    moveToIndex(currentIndex + 1);
  });
  const movePrev = contextSafe(() => {
    moveToIndex(currentIndex - 1);
  });

  return (
    <section
      ref={containerRef}
      id="sticky-section"
      className="relative bg-brand-accent2 w-[100vw] h-[80vh] lg:h-[calc(100vh-128px)] xl:h-[calc(100vh-160px)]"
    >
      <div className="absolute z-10 w-[50vw] xl:w-[37.5vw] top-0 right-0 p-[2em] text-right text-white border-r-[4px] lg:border-r-[12px] border-white bg-black/20 backdrop-blur-md">
        <h1 className="font-medium text-[32px] lg:text-[64px] leading-none">
          Our Work
        </h1>
        <p className="font-light text-[12px] lg:text-[18px]">
          The program will prepare students to work in the IT industry as well
          as digital media industry like gaming, animation.
        </p>
      </div>
      <div className="absolute z-10 bottom-0 right-0 w-full lg:w-max flex text-white bg-black/20 backdrop-blur-md">
        <button
          onClick={movePrev}
          className="w-full flex justify-center items-center gap-4 border border-white/20 cursor-pointer group"
        >
          {mounted &&
            (isSmallScreen ? (
              <div className="flex items-center p-4 lg:p-8">
                <ChevronLeft
                  size={40}
                  className="w-[24px] lg:w-[40px] h-auto aspect-square"
                />
                <span className="text-[18px] lg:text-[24px] uppercase pl-4">
                  Prev
                </span>
              </div>
            ) : (
              <MediaBetweenText
                firstText={
                  <ChevronLeft
                    size={40}
                    className="w-[24px] lg:w-[40px] h-auto aspect-square"
                  />
                }
                secondText=""
                triggerType="hover"
                mediaContainerClassName="w-max h-auto"
                className="p-4 lg:p-8"
              >
                <LetterSwapForward
                  label="Prev"
                  staggerDuration={0.005}
                  className="text-[18px] lg:text-[24px] uppercase pl-4"
                />
              </MediaBetweenText>
            ))}
        </button>
        <button
          onClick={moveNext}
          className="w-full flex justify-center items-center gap-4 border border-white/20 cursor-pointer group"
        >
          {mounted &&
            (isSmallScreen ? (
              <div className="flex items-center p-4 lg:p-8">
                <span className="text-[18px] lg:text-[24px] uppercase pr-4">
                  Next
                </span>
                <ChevronRight
                  size={40}
                  className="w-[24px] lg:w-[40px] h-auto aspect-square"
                />
              </div>
            ) : (
              <MediaBetweenText
                firstText={""}
                secondText={
                  <ChevronRight
                    size={40}
                    className="w-[24px] lg:w-[40px] h-auto aspect-square"
                  />
                }
                triggerType="hover"
                mediaContainerClassName="w-max h-auto"
                className="p-4 lg:p-8"
              >
                <LetterSwapForward
                  label="Next"
                  staggerDuration={0.005}
                  className="text-[18px] lg:text-[24px] uppercase pr-4"
                />
              </MediaBetweenText>
            ))}
        </button>
      </div>
      <div id="slider" className="relative w-full h-full overflow-hidden">
        <div
          id="slides"
          className="relative h-full flex will-change-transform"
          style={{
            width: `${projects.length * 100}%`,
            transform: "translateX(0)",
          }}
        >
          {projects.map((project) => (
            <MainProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MainProjectCard({ project }: { project: StudentProject }) {
  return (
    <div className="slide relative w-full h-full">
      <div className="absolute w-full h-full overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="relative w-full h-full object-cover will-change-transform scale-[1.35]"
          style={{
            transform: "translateX(0)",
          }}
        />
      </div>
      <div className="relative w-full h-full flex flex-col justify-end p-[2em] pb-[5em] lg:p-[4em] lg:pr-[212px] text-white bg-gradient-to-b from-black/60 via-black/0 to-black/90">
        <p className="slide-title font-normal text-[16px] lg:text-[18px] text-white/60">
          {project.domain}
        </p>
        <h2 className="slide-title font-medium text-[18px] lg:text-[24px]">
          {project.title}
        </h2>
        <p className="slide-title font-light text-[14px] lg:text-[16px]">
          {project.description}
        </p>
      </div>
    </div>
  );
}
