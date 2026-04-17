"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useHoverGoPill } from "@/components/HoverGoPill";

export type PubRow = {
  id: number;
  year: number;
  title: string;
  authors: string[];
  venue: string;
  link: string;
};

function formatAuthors(authors: string[]): string {
  if (authors.length === 0) return "";
  if (authors.length <= 3) return authors.join(", ");
  return `${authors.slice(0, 3).join(", ")} et al.`;
}

export default function PublicationRow({ pub }: { pub: PubRow }) {
  const { pill, handlers } = useHoverGoPill({ size: "sm" });
  const external = pub.link.startsWith("http");

  const inner = (
    <>
      <span className="text-[14px] lg:text-[20px] font-light tabular-nums text-brand-accent2/70 w-[4ch]">
        {pub.year || "—"}
      </span>
      <div className="min-w-0">
        <h3 className="text-[18px] md:text-[24px] lg:text-[32px] leading-[1.2] font-light text-brand-accent2 group-hover:text-terracotta transition-colors duration-300">
          {pub.title}
        </h3>
        {(pub.authors.length > 0 || pub.venue) && (
          <p className="mt-2 text-[13px] lg:text-[15px] font-light text-black/55">
            {formatAuthors(pub.authors)}
            {pub.authors.length > 0 && pub.venue && " · "}
            {pub.venue && <span className="italic">{pub.venue}</span>}
          </p>
        )}
      </div>
      <ArrowUpRight
        className="w-[20px] lg:w-[28px] h-auto text-brand-accent2/50 group-hover:text-terracotta/0 transition-all duration-300"
        strokeWidth={1.5}
      />
    </>
  );

  const wrapperClass =
    "group relative grid grid-cols-[auto_1fr_auto] gap-6 lg:gap-12 items-center py-6 lg:py-8 px-2 transition-colors duration-300 hover:bg-terracotta/[0.06] overflow-hidden";

  if (!pub.link) {
    return (
      <div className={wrapperClass} {...handlers}>
        {inner}
        {pill}
      </div>
    );
  }

  return (
    <Link
      href={pub.link}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`block ${wrapperClass}`}
      {...handlers}
    >
      {inner}
      {pill}
    </Link>
  );
}
