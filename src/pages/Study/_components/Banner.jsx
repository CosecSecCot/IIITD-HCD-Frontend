import TextReveal from "../../../components/TextReveal";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";

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
      gsap.from(".reveal-animation-opacity-only", {
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: "expo.out",
      });
    },
    { scope: bannerRef }, // this will rerun on tab switch
  );

  return (
    <section
      ref={bannerRef}
      role="banner"
      className="relative z-20 min-h-[50vh] lg:min-h-[70vh]"
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
          <TextReveal>
            <div className="mt-[24px] lg:mt-[40px] leading-tight w-[75vw] xl:w-[25vw]">
              <p className="text-[16px] lg:text-[26px] text-brand-accent2-130">
                {subtitle}
              </p>
              <h1 className="font-light text-[28px] lg:text-[48px]">{title}</h1>
            </div>
          </TextReveal>
        </div>
        <TextReveal>
          <blockquote className="max-xl:hidden italic font-light text-right flex-shrink w-1/3">
            "{sideText}"
          </blockquote>
        </TextReveal>
      </div>
      <img
        src="/banner-2.svg"
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
    </section>
  );
}
