"use client";

import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export type SearchContent = {
  title: string;
  description: string;
  link: string;
};

export default function SearchSection({
  content,
}: {
  content: SearchContent[];
}) {
  const [search, setSearch] = useState("");

  let filteredContent = content.slice(0, Math.min(content.length, 10));
  if (search !== "") {
    filteredContent = [
      ...content.filter((item) => {
        if (!search) return true;
        const query = search.toLowerCase();
        return item.title.toLowerCase().includes(query);
      }),
      ...content.filter((item) => {
        if (!search) return true;
        const query = search.toLowerCase();
        return (
          !item.title.toLowerCase().includes(query) &&
          item.description.toLowerCase().includes(query)
        );
      }),
    ];
  }
  return (
    <article>
      <div>
        <input
          type="text"
          placeholder="Start Typing..."
          className="w-full px-[1.75em] py-[0.5em] text-[28px] text-brand-accent2 border border-brand-accent2/30 backdrop-blur-lg rounded-full"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>

      <section className="mt-[48px]">
        {filteredContent.length > 0 ? (
          filteredContent.map((data, idx) => (
            <SearchCard key={idx} content={data} query={search} />
          ))
        ) : (
          <div className="min-h-[40vh]">
            <p className="font-light text-[14px] lg:text-[20px] text-center">
              No results found.
            </p>
          </div>
        )}
      </section>
    </article>
  );
}

function highlightMatch(text: string, query: string) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, idx) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={idx} className="bg-brand-accent1/80 text-black">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

function SearchCard({
  content,
  query,
}: {
  content: SearchContent;
  query: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative z-[9990] px-[2em] py-[1.5em] lg:px-[4em] lg:py-[2.5em] border border-black/20 backdrop-blur-sm">
      <div className="flex max-lg:flex-col gap-[1em] items-end lg:items-center">
        <div>
          <h3 className="text-[18px] lg:text-[24px] font-medium">
            {highlightMatch(content.title, query)}
          </h3>
        </div>
      </div>
      <p
        className="font-helvetica_now_display text-[14px] lg:text-[20px] text-black/60 leading-tight transition-all duration-300"
        // expanded ? "" : "line-clamp-2"
      >
        {highlightMatch(content.description, query)}
      </p>

      {/* <button
        className="font-helvetica_now_display text-[14px] lg:text-[20px] text-brand-accent1 cursor-pointer"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-controls={`desc-${content.id}`}
      >
        <CenterUnderline
          underlineHeightRatio={0.075}
          underlinePaddingRatio={-0.25}
        >
          {expanded ? "Show Less" : "Read More..."}
        </CenterUnderline>
      </button> */}

      <Link
        href={content.link}
        className="mt-[0.75em] flex items-center text-[14px] lg:text-[18px] gap-[0.5em]"
      >
        <LetterSwapForward label="GO TO PAGE" staggerDuration={0.005} />
        <ArrowRight className="w-[16px] h-[16px]" />
      </Link>
    </div>
  );
}
