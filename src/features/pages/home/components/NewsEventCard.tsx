"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ImageOff } from "lucide-react";
import { NewsEvent } from "@/types";
import { useHoverGoPill } from "@/components/HoverGoPill";

export default function NewsEventCard({ content }: { content: NewsEvent }) {
  const { pill, handlers } = useHoverGoPill({ size: "sm" });
  return (
    <Link
      href={`/about/news-events/${content.id}`}
      {...handlers}
      className="group relative flex flex-col gap-4"
    >
      <div className="relative aspect-video overflow-hidden bg-brand-accent2/5">
        {content.img ? (
          <Image
            src={content.img}
            alt={content.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <ImageOff className="w-[32px] h-auto text-brand-accent2/25" />
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 text-[12px] lg:text-[13px] tracking-wide uppercase text-terracotta-130">
        <span>{content.type}</span>
        <span className="opacity-40">·</span>
        <span className="text-black/50 normal-case tracking-normal">
          {content.date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>
      <h3 className="text-[20px] lg:text-[26px] font-medium leading-[1.15] text-brand-accent2 group-hover:text-terracotta transition-colors duration-200">
        {content.title}
      </h3>
      <p className="font-light text-[14px] lg:text-[16px] line-clamp-3 text-black/70 leading-snug">
        {content.description}
      </p>
      <span className="mt-auto inline-flex items-center gap-1 text-[13px] lg:text-[14px] text-brand-accent2 opacity-70 group-hover:opacity-100 transition-opacity">
        Read <ArrowRight className="w-[14px] h-auto" />
      </span>
      {pill}
    </Link>
  );
}
