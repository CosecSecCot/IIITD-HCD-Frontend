"use client";

import { formatDateToMonthYear } from "@/utils/formatDate";
import Image from "next/image";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type NewsEvent = {
  id: number;
  type: "News" | "Event";
  date: Date;
  title: string;
  description: string;
  img: string;
};

export default function NewsCard({ content }: { content: NewsEvent }) {
  const [expanded, setExpanded] = useState(false);

  const { wordCount, shouldClamp } = useMemo(() => {
    const text = (content.description || "").trim();
    const words = text.length === 0 ? [] : text.split(/\s+/).filter(Boolean);
    const wc = words.length;
    return { wordCount: wc, shouldClamp: wc > 100 };
  }, [content.description]);

  const descId = `desc-${content.id}`;

  // You can change this to the actual link for the news/event if available
  const newsHref = `/about/news-events/${content.id}`;

  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-8">
      <Link
        href={newsHref}
        className="relative w-full md:w-1/3 h-auto aspect-video md:aspect-[4/3] flex-shrink-0 bg-neutral-300 rounded-xl overflow-hidden group"
        tabIndex={-1}
      >
        <Image
          src={content.img}
          alt={content.title + " cover image"}
          width={427}
          height={240}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 z-10 rounded-xl bg-black/0 group-hover:bg-black/30 transition-colors duration-200" />
        <div className="absolute top-0 right-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 m-3">
          <ArrowUpRight size={32} className="text-white drop-shadow-lg" />
        </div>
      </Link>
      <div className="mt-3">
        <p className="text-[14px] lg:text-[18px] text-brand-accent2/80">
          {formatDateToMonthYear(content.date.toDateString())}
        </p>
        <Link href={newsHref}>
          <h3 className="font-medium text-[20px] lg:text-[20px] text-brand-accent2 leading-tight hover:underline">
            {content.title}
          </h3>
        </Link>

        <p
          id={descId}
          className={`font-light text-[14px] lg:text-[18px] opacity-60 mt-2 transition-all duration-300 ${
            shouldClamp && !expanded ? "line-clamp-4" : ""
          }`}
        >
          {content.description}
        </p>

        {/* show button only for long descriptions */}
        {shouldClamp ? (
          <button
            className="font-helvetica_now_display text-[14px] lg:text-[18px] text-brand-accent1 underline cursor-pointer"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            aria-controls={descId}
          >
            {expanded ? "Show Less" : "Read More..."}
          </button>
        ) : null}
      </div>
    </div>
  );
}
