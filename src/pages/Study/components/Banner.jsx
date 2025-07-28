import { ArrowLeft } from "lucide-react";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

/**
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - The main heading text displayed prominently.
 * @param {string} props.subtitle - A secondary heading displayed above the title.
 * @param {string} props.sideText - Optional right-aligned quote or side text, hidden on small screens.
 *
 * @returns {JSX.Element}
 */
export default function Banner({ title, subtitle, sideText }) {
  const bannerRef = useRef();
  useGSAP(
    () => {
      gsap.fromTo(
        ".reveal-animation-text",
        {
          y: "10%",
          opacity: 0,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          stagger: 0.1,
          duration: 1.5,
          ease: "expo.out",
        }
      );

      gsap.from(".reveal-animation-opacity-only", {
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: "expo.out",
      });
    },
    { scope: bannerRef } // this will rerun on tab switch
  );

  return (
    <section
      ref={bannerRef}
      role="banner"
      className="relative z-20 min-h-[40vh] lg:min-h-[70vh]"
    >
      <div className="absolute z-10 top-[50%]  w-[75vw] mx-[12.5vw] flex justify-between items-center">
        <div className="flex-shrink-0">
          <a
            href=""
            className="reveal-animation-opacity-only flex gap-[0.5em] text-[12px] lg:text-[20px] text-brand-accent2-130"
          >
            <ArrowLeft className="w-[14px] lg:w-[24px] h-auto" />
            <span>Go Back</span>
          </a>
          <div className="reveal-animation-text mt-[24px] lg:mt-[40px] leading-tight">
            <p className="text-[16px] lg:text-[26px] text-brand-accent2-130">
              {subtitle}
            </p>
            <h1 className="font-light text-[28px] lg:text-[48px]">{title}</h1>
          </div>
        </div>
        <blockquote className="reveal-animation-opacity-only max-xl:hidden italic font-light text-right flex-shrink w-1/3">
          "{sideText}"
        </blockquote>
      </div>
      <img
        src="/banner-2.svg"
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
    </section>
  );
}
