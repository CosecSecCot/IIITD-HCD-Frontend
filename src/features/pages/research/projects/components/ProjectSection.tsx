"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import { formatDateToMonthYear } from "@/utils/formatDate";

gsap.registerPlugin(Flip, useGSAP);

export type ResearchProject = {
  id: number;
  title: string;
  description: string;
  source?: string;
  faculty?: string;
  duration: {
    from: string;
    to?: string;
  };
  image: {
    width?: number;
    height?: number;
    url: string;
  };
  fullDescription: string;
};

export default function ProjectSection({
  projects,
}: {
  projects: ResearchProject[];
}) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const cardsContainerRef = useRef<HTMLElement>(null);
  const flipStateRef = useRef<Flip.FlipState>(null); // store flip state between render & GSAP callback

  const { contextSafe } = useGSAP({
    scope: cardsContainerRef,
    dependencies: [],
  });

  const handleExpand = contextSafe((id: number) => {
    // Capture BEFORE state (all cards)
    const cards = gsap.utils.toArray<Element>("[data-project-card]");
    flipStateRef.current = Flip.getState(cards);

    // Trigger React layout change
    setExpandedId(id);
  });

  const handleCollapse = contextSafe(() => {
    const cards = gsap.utils.toArray<Element>("[data-project-card]");
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
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          expanded={project.id === expandedId}
          onExpand={() => handleExpand(project.id)}
          onCollapse={handleCollapse}
        />
      ))}
    </section>
  );
}

function ProjectCard({
  project,
  expanded,
  onExpand,
  onCollapse,
}: {
  project: ResearchProject;
  expanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}) {
  const expandedClass = expanded
    ? "z-[99] xl:col-span-3 xl:row-span-2 bg-brand-accent2 text-white flex-col lg:flex-row"
    : "hover:bg-brand-accent2/10 flex-col";
  return (
    <div
      data-project-card
      className={`w-full flex justify-between gap-[28px] lg:gap-[40px] p-[28px] lg:p-[40px] border border-black/10 ${expandedClass}`}
    >
      {expanded ? (
        <>
          <div className="reveal-animation-opacity-only w-full lg:max-w-[25%]">
            <Image
              className="w-full h-full object-cover"
              src={project.image.url}
              alt=""
              width={project.image.width}
              height={project.image.height}
            />
          </div>
          <div className="w-full flex flex-col justify-between gap-[32px] lg:gap-[48px]">
            <div className="flex flex-col gap-[12px] lg:gap-[16px]">
              <div className="flex flex-col gap-[16px] lg:gap-[24px]">
                <h3 className="text-[16px] lg:text-[32px] font-medium">
                  {project.title}
                </h3>
                <div className="flex gap-[12px] lg:gap-[32px] flex-wrap">
                  {project.faculty && (
                    <div>
                      <h4 className="text-[14px] lg:text-[16px] opacity-80">
                        Faculty Name
                      </h4>
                      <p className="text-[16px] lg:text-[18px] font-medium">
                        {project.faculty}
                      </p>
                    </div>
                  )}
                  {project.source && (
                    <div>
                      <h4 className="text-[14px] lg:text-[16px] opacity-80">
                        Project Funding
                      </h4>
                      <p className="text-[16px] lg:text-[18px] font-medium">
                        {project.source}
                      </p>
                    </div>
                  )}
                  <div>
                    <h4 className="text-[14px] lg:text-[16px] opacity-80">
                      Duration
                    </h4>
                    <p className="text-[16px] lg:text-[18px] font-medium">
                      {formatDateToMonthYear(project.duration.from)} -{" "}
                      {project.duration.to
                        ? formatDateToMonthYear(project.duration.to)
                        : "Present"}
                    </p>
                  </div>
                </div>
              </div>
              <p className="font-helvetica_now_display text-[14px] lg:text-[16px] opacity-80">
                {project.fullDescription}
              </p>
            </div>
            <div className="flex justify-end w-full">
              <button
                type="button"
                onClick={onCollapse}
                className="reveal-animation-opacity-only flex items-center text-[14px] lg:text-[20px] gap-[0.5em] cursor-pointer"
                aria-label={`Close ${project.title} details`}
              >
                <span>CLOSE</span>
                <X className="w-[16px] h-[16px]" />
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="reveal-animation-opacity-only w-full">
            <Image
              className="w-full h-full object-cover"
              src={project.image.url}
              alt=""
              width={project.image.width}
              height={project.image.height}
            />
          </div>
          <div className="w-full flex flex-col justify-between gap-[32px] lg:gap-[48px]">
            <div className="flex flex-col gap-[18px] lg:gap-[24px]">
              <div className="flex flex-col gap-[12px] lg:gap-[16px]">
                <div className="flex flex-col gap-[12px] lg:gap-[16px]">
                  <h3 className="text-[16px] lg:text-[20px] font-medium">
                    {project.title}
                  </h3>
                </div>
                <p className="font-helvetica_now_display text-[14px] lg:text-[18px] opacity-60 line-clamp-3">
                  {project.description}
                </p>
              </div>
              <p className="text-[14px] lg:text-[18px] opacity-60">
                {project.source}
              </p>
            </div>
            <div className="flex justify-end w-full">
              <button
                type="button"
                onClick={onExpand}
                className="reveal-animation-opacity-only flex items-center text-[14px] lg:text-[18px] gap-[0.5em] cursor-pointer"
                aria-label={`View ${project.title} details`}
              >
                <span>VIEW DETAILS</span>
                <ArrowRight className="w-[16px] h-[16px]" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
