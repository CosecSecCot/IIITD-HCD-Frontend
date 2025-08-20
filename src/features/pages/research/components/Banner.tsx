import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Banner({
  text,
  breadcrumbs,
}: {
  text: string;
  breadcrumbs: string[];
}) {
  return (
    <section role="banner" className="relative min-h-[45vh] bg-brand-accent2">
      <p className="absolute top-[84px] lg:top-[146px] xl:top-[176px] mt-[2em] mr-8 right-0 xl:right-[calc(50vw-640px)] text-[12px] lg:text-[20px] text-white">
        {breadcrumbs.map((breadcrumb, index) => {
          if (index < breadcrumbs.length - 1) {
            return (
              <span key={index}>
                <span
                  // href={"/" + breadcrumbs.slice(0, index + 1).join("/")}
                  className="uppercase"
                  style={{
                    color: `rgb(255, 255, 255, ${
                      (index + 1) / breadcrumbs.length
                    })`,
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
      <h1 className="uppercase absolute bottom-4 left-8 xl:left-[calc(50vw-640px)] xl:ml-8 text-[28px] lg:text-[72px] text-white">
        {text}
      </h1>
      <Image
        src="/research-banner-cover.png"
        alt="banner"
        className="w-full min-h-[45vh] object-cover pointer-events-none"
        width={1920}
        height={603}
      />
    </section>
  );
}
