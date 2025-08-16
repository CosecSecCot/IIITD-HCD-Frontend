"use client";

import CenterUnderline from "@/components/fancy/text/underline-center";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

/**
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - The main heading text displayed prominently.
 * @param {string} props.subtitle - A secondary heading displayed above the title.
 * @param {string} props.sideText - Optional right-aligned quote or side text, hidden on small screens.
 */
export default function Banner({
  title,
  subtitle,
  sideText,
}: {
  title: string;
  subtitle: string;
  sideText: string;
}) {
  const router = useRouter();
  return (
    <section
      role="banner"
      className="relative z-20 w-full min-h-[30vh] lg:min-h-[40vh] xl:min-h-[60vh] flex justify-start xl:justify-center shadow-2xl shadow-white"
    >
      <div className="relative z-10 xl:w-[1280px] p-8 flex justify-between items-center">
        <div className="xl:w-1/3">
          <Link
            href=""
            className="reveal-animation-opacity-only flex gap-[0.5em] text-[12px] lg:text-[20px] text-brand-accent2-130"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-[14px] lg:w-[24px] h-auto" />
            <CenterUnderline>Go Back</CenterUnderline>
          </Link>
          <div className="mt-[24px] lg:mt-[40px] leading-tight">
            <p className="text-[16px] lg:text-[26px] text-brand-accent2-130">
              {subtitle}
            </p>
            <h1 className="font-light text-[28px] lg:text-[48px]">{title}</h1>
          </div>
        </div>
        <blockquote className="max-xl:hidden italic font-light text-right flex-shrink w-1/3">
          &quot;{sideText}&quot;
        </blockquote>
      </div>
      <Image
        src="/study-banner-cover.svg"
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        width={1920}
        height={797}
      />
    </section>
  );
}
