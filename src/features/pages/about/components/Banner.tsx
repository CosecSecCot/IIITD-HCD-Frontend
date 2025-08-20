import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import ClipReveal from "@/features/animation/ClipReveal";
import TextReveal from "@/features/animation/TextReveal";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Banner({
  title,
  subtitle,
  imageSrc,
  links,
  breadcrumbs,
}: {
  title: string;
  subtitle: string;
  imageSrc: string;
  links?: { title: string; href: string }[];
  breadcrumbs: string[];
}) {
  return (
    <>
      <ClipReveal>
        <p className="font-normal text-[12px] lg:text-[20px] text-brand-accent2">
          {breadcrumbs.map((breadcrumb, index) => {
            if (index < breadcrumbs.length - 1) {
              return (
                <span key={index}>
                  <span
                    // href={"/" + breadcrumbs.slice(0, index + 1).join("/")}
                    className="uppercase"
                    style={{
                      //   color: `rgb(255, 255, 255, ${
                      //     (index + 1) / breadcrumbs.length
                      //   })`,
                      color: `color-mix(in oklab, var(--color-brand-accent2) ${
                        ((index + 1) / breadcrumbs.length) * 100
                      }%, transparent)`,
                    }}
                  >
                    {breadcrumb}
                    {index == breadcrumbs.length - 1 ? "" : " / "}
                  </span>
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
      </ClipReveal>
      <section
        role="banner"
        className="relative mt-2 lg:mt-5 w-full h-auto lg:aspect-video bg-neutral-300 rounded-xl lg:rounded-[30px] overflow-hidden"
      >
        <div className="relative z-20 w-full h-full px-5 pt-[10vh] pb-6 lg:px-10 lg:py-12 flex flex-col justify-end gap-[1em] text-white">
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
                <Link
                  href={links[0].href}
                  className="w-max flex justify-center items-center gap-4 px-[2em] py-[0.5em] text-[12px] lg:text-[18px] rounded-full bg-brand-accent2 text-white border border-brand-accent2 hover:bg-brand-accent2-130 transition-all duration-200"
                >
                  <LetterSwapForward
                    label={links[0].title}
                    staggerDuration={0.005}
                    className="w-max"
                  />
                  <Search className="w-[12px] lg:w-[18px] aspect-square h-auto" />
                </Link>
              )}
              {links.length > 1 && (
                <Link
                  href={links[1].href}
                  className="w-max flex justify-center items-center gap-4 px-[2em] py-[0.5em] text-[12px] lg:text-[18px] rounded-full text-white border border-white backdrop-blur-lg hover:backdrop-blur-2xl transition-all duration-200"
                >
                  <LetterSwapForward
                    label={links[1].title}
                    staggerDuration={0.005}
                    className="w-max"
                  />
                  <Search className="w-[12px] lg:w-[18px] aspect-square h-auto" />
                </Link>
              )}
            </div>
          )}
        </div>
        <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-b from-black/50 lg:from-black/0 to-black/50 lg:to-black/50" />
        <Image
          src={imageSrc}
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          width={1280}
          height={720}
        />
      </section>
    </>
  );
}
