"use client";

import Dropdown from "@/components/Dropdown";
import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import { ArrowRight, Users } from "lucide-react";
import { useMemo, useState } from "react";

export type ResearchPublication = {
  id: number;
  year: number;
  // faculties: string[];
  authors: string[];
  lab?: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export default function PublicationsSection({
  publications,
}: {
  publications: ResearchPublication[];
}) {
  const years = [...new Set(publications.map((pub) => pub.year))].sort(
    (a, b) => b - a
  );

  const [search, setSearch] = useState("");
  const [selectedPublication, setPublication] = useState("ALL PUBLICATIONS");
  const [selectedCategory, setCategory] = useState("ALL CATEGORIES");
  const [selectedResearchArea, setResearchArea] =
    useState("ALL RESEARCH AREAS");

  const publicationOptions = useMemo(
    () => ["ALL PUBLICATIONS", ...years.map((y) => `${y} PUBLICATIONS`)],
    [years]
  );

  const categoryOptions = useMemo(
    () => [
      "ALL CATEGORIES",
      ...Array.from(new Set(publications.map((pub) => pub.category))),
    ],
    [publications]
  );

  const researchAreaOptions = useMemo(
    () => [
      "ALL RESEARCH AREAS",
      ...Array.from(new Set(publications.flatMap((pub) => pub.tags))),
    ],
    [publications]
  );

  const filtered = useMemo(() => {
    return publications
      .filter((pub) =>
        pub.title.toLowerCase().includes(search.trim().toLowerCase())
      )
      .filter((pub) =>
        selectedPublication === "ALL PUBLICATIONS"
          ? true
          : pub.year === parseInt(selectedPublication)
      )
      .filter((pub) =>
        selectedCategory === "ALL CATEGORIES"
          ? true
          : pub.category === selectedCategory
      )
      .filter((pub) =>
        selectedResearchArea === "ALL RESEARCH AREAS"
          ? true
          : pub.tags.includes(selectedResearchArea)
      );
  }, [
    publications,
    search,
    selectedCategory,
    selectedPublication,
    selectedResearchArea,
  ]);

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-3">
        <div className="col-span-full">
          <p className="text-[24px]">Search</p>
          <div className="mt-[0.25em] mb-[1em] text-[16px]">
            <input
              type="text"
              placeholder="Start entering publication title..."
              className="w-full px-[1.75em] py-[0.5em] border border-black/30"
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
          </div>
        </div>
        <Dropdown
          label="ALL PUBLICATIONS"
          options={publicationOptions}
          selected={selectedPublication}
          onClickAction={(year) => setPublication(year)}
        />
        <Dropdown
          label="ALL CATEGORIES"
          options={categoryOptions}
          selected={selectedCategory}
          onClickAction={(category) => setCategory(category)}
        />
        <Dropdown
          label="ALL RESEARCH AREAS"
          options={researchAreaOptions}
          selected={selectedResearchArea}
          onClickAction={(resArea) => setResearchArea(resArea)}
        />
      </div>
      <div className="mt-[30px] space-y-[5em]">
        {years.map((year) => {
          const pubsThisYear = filtered.filter((p) => p.year === year);
          if (!pubsThisYear.length) return null;

          return (
            <section key={year}>
              <h2 className="font-medium text-[28px] lg:text-[42px] text-brand-accent2">
                | {year}
              </h2>
              <div className="">
                {pubsThisYear.map((pub) => (
                  <PublicationCard key={pub.id} publication={pub} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

function PublicationCard({
  publication,
}: {
  publication: ResearchPublication;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative z-[9990] px-[2em] py-[1.5em] lg:px-[4em] lg:py-[2.5em] border border-black/20 backdrop-blur-sm">
      {publication.lab && (
        <span className="uppercase text-[14px] lg:text-[18px] text-brand-accent2">
          {publication.lab}
        </span>
      )}
      <h3 className="text-[16px] lg:text-[20px] font-medium">
        {publication.title}
      </h3>
      <p className="font-helvetica_now_display text-[14px] lg:text-[18px] opacity-80 flex gap-2">
        <Users className="w-[14px] lg:w-[18px] aspect-square" />{" "}
        {publication.authors.join(", ")}
      </p>
      <p
        className={`font-helvetica_now_display mt-[8px] lg:mt-[12px] text-[14px] lg:text-[18px] leading-tight opacity-60 transition-all duration-300 ${
          expanded ? "" : "line-clamp-2"
        }`}
      >
        {publication.description}
      </p>

      <button
        className="font-helvetica_now_display lg:mt-[8px] text-[14px] lg:text-[18px] text-brand-accent1 underline cursor-pointer"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-controls={`desc-${publication.id}`}
      >
        {expanded ? "Show Less" : "Read More..."}
      </button>

      <div className="flex justify-between flex-wrap gap-[2em] w-full mt-[2em]">
        <div className="flex gap-[1em] flex-wrap">
          {publication.tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-block uppercase text-[14px] lg:text-[18px] bg-brand-accent2 text-white px-[1.5em] py-[0.5em] hover:bg-brand-accent2-130"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={publication.link}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal-animation-opacity-only flex items-center text-[14px] lg:text-[18px] gap-[0.5em]"
        >
          <LetterSwapForward label="VIEW DETAILS" staggerDuration={0.005} />
          <ArrowRight className="w-[16px] h-[16px]" />
        </a>
      </div>
    </div>
  );
}
