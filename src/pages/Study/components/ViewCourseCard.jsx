import TextReveal from "../../../components/TextReveal";
import { ArrowRight } from "lucide-react";
import gradientRing from "../../../assets/gradient-ring.svg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OpacityReveal from "../../../components/OpacityReveal";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ViewCoursesCard() {
  return (
    <div className="relative font-light border border-brand-accent2 bg-brand-accent2/5 backdrop-blur-lg hover:backdrop-blur-2xl">
      <div className="absolute w-full h-full pointer-events-none">
        <img
          src={gradientRing}
          alt=""
          className="absolute bottom-0 right-0 h-2/3 w-auto"
        />
      </div>
      <div className="space-y-[2em] px-[28px] py-[34px] lg:px-[40px] lg:py-[48px]">
        <div className="space-y-[0.5em]">
          <div>
            <TextReveal>
              <p className="text-[14px] lg:text-[20px] leading-tight">
                Bachelor’s Degree
              </p>
            </TextReveal>
            <TextReveal>
              <h3 className="font-medium text-[24px] lg:text-[40px] text-brand-accent2">
                View Courses
              </h3>
            </TextReveal>
          </div>
          <TextReveal>
            <p className="text-[16px] lg:text-[24px]">
              The first level of the university system:
              <br />
              three-year study courses.
            </p>
          </TextReveal>
        </div>
        <OpacityReveal delay={0.2}>
          <button
            type="button"
            className="flex items-center text-[14px] lg:text-[18px] gap-[0.5em]"
            aria-label="View course details"
          >
            <span>VIEW DETAILS</span>
            <ArrowRight className="w-[16px] h-[16px]" />
          </button>
        </OpacityReveal>
      </div>
    </div>
  );
}
