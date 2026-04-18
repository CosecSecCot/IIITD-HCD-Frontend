"use client";

import { ArrowLeft, ArrowUpRight, Search } from "lucide-react";
import LinkButton from "@/components/LinkButton";
import CenterUnderline from "@/components/fancy/text/underline-center";
import TextReveal from "@/features/animation/TextReveal";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Banner({
  title,
  subtitle,
  imageSrc,
  links,
  breadcrumbs,
  asLink = false,
  href,
}: {
  title: string;
  subtitle: string;
  imageSrc: string;
  links?: { title: string; href: string; icon?: React.ReactNode }[];
  breadcrumbs: string[];
  asLink?: boolean;
  href?: string;
}) {
  const router = useRouter();

  const bannerContent = (
    <section
      role="banner"
      className="relative mt-2 lg:mt-5 w-full h-auto lg:aspect-video bg-neutral-300 rounded-xl lg:rounded-[30px] overflow-hidden"
    >
      <div className="relative z-50 w-full h-full px-5 pt-[10vh] pb-6 lg:px-10 lg:py-12 flex flex-col justify-end gap-[1em] text-white">
        <div className="lg:w-[70%]">
          <TextReveal>
            <h1 className="font-semibold text-[28px] lg:text-[48px] leading-none">
              {title}
            </h1>
          </TextReveal>
          <TextReveal>
            <p className="mt-[0.5em] font-normal text-[14px] lg:text-[20px] leading-tight">
              {subtitle}
            </p>
          </TextReveal>
        </div>
        {links && (
          <div className="font-normal flex gap-x-[1em] gap-y-[0.5em] flex-wrap">
            {links.length > 0 && (
              <LinkButton
                href={links[0].href}
                text={links[0].title}
                type="solid"
                rounded
                icon={
                  links[0].icon ? (
                    links[0].icon
                  ) : (
                    <Search className="w-[12px] lg:w-[18px] aspect-square h-auto" />
                  )
                }
                iconPosition="right"
                className="w-max px-[2em] lg:px-[2em] py-[0.5em]"
              />
            )}
            {links.length > 1 && (
              <LinkButton
                href={links[1].href}
                text={links[1].title}
                type="transparent"
                rounded
                icon={
                  links[1].icon ? (
                    links[1].icon
                  ) : (
                    <Search className="w-[12px] lg:w-[18px] aspect-square h-auto" />
                  )
                }
                iconPosition="right"
                className="w-max px-[2em] lg:px-[2em] py-[0.5em]"
              />
            )}
          </div>
        )}
      </div>
      <div className="absolute inset-0 z-10 w-full h-full bg-[linear-gradient(to_bottom,rgba(36,95,120,0.4)_0%,rgba(36,95,120,0.15)_30%,rgba(26,74,94,0.7)_60%,rgba(26,74,94,0.97)_100%)] lg:bg-[linear-gradient(to_bottom,rgba(36,95,120,0)_0%,rgba(36,95,120,0)_25%,rgba(26,74,94,0.6)_55%,rgba(26,74,94,0.95)_100%)]" />
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          width={1280}
          height={720}
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-brand-accent2" />
      )}
    </section>
  );

  return (
    <>
      <div className="flex gap-[1em] justify-between items-end">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <button
          type="button"
          onClick={() => router.back()}
          className="flex gap-[0.5em] flex-shrink-0 text-[12px] lg:text-[20px] text-brand-accent2 font-normal cursor-pointer"
        >
          <ArrowLeft className="w-[14px] lg:w-[24px] h-auto" />
          <CenterUnderline>Go Back</CenterUnderline>
        </button>
      </div>
      {asLink && href ? (
        <Link href={href} className="relative group">
          <div className="absolute inset-0 z-40 rounded-xl lg:rounded-[30px] group-hover:bg-black/30 transition-colors duration-200" />
          <div className="absolute top-0 right-0 z-50 lg:hidden lg:group-hover:block transition-all duration-200">
            <ArrowUpRight
              size={40}
              className="text-white m-[var(--radius-xl)] lg:m-[30px]"
            />
          </div>
          {bannerContent}
        </Link>
      ) : (
        bannerContent
      )}
    </>
  );
}

const breadcrumbHrefMap: Record<string, string> = {
  about: "/about/overview",
  "news & events": "/about/news-events",
  overview: "/about/overview",
  collaborations: "/about/collaborations",
  placements: "/about/placements",
};

function Breadcrumbs({ breadcrumbs }: { breadcrumbs: string[] }) {
  return (
    <p className="font-normal text-[12px] lg:text-[20px] text-brand-accent2">
      {breadcrumbs.map((breadcrumb, index) => {
        const href = breadcrumbHrefMap[breadcrumb.toLowerCase()];
        if (index < breadcrumbs.length - 1) {
          const content = (
            <span
              className="uppercase"
              style={{
                color: `color-mix(in oklab, var(--color-brand-accent2) ${
                  ((index + 1) / breadcrumbs.length) * 100
                }%, transparent)`,
              }}
            >
              {breadcrumb}
            </span>
          );
          return (
            <span key={index}>
              {href ? (
                <Link href={href} className="hover:underline">
                  {content}
                </Link>
              ) : (
                content
              )}
              {" / "}
            </span>
          );
        }

        return (
          <span key={index} className="uppercase">
            {breadcrumb}
          </span>
        );
      })}
    </p>
  );
}
