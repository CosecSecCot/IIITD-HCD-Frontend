import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ViewCoursesCard() {
  return (
    <div className="relative font-light border border-brand-accent2 bg-brand-accent2/5 backdrop-blur-lg hover:backdrop-blur-2xl transition-all duration-200">
      <div className="absolute w-full h-full pointer-events-none">
        <GradientRing className="absolute bottom-0 right-0 h-2/3 w-auto" />
      </div>
      <div className="space-y-[2em] px-[28px] py-[34px] lg:px-[40px] lg:py-[48px]">
        <div className="space-y-[0.5em]">
          <div>
            <p className="text-[14px] lg:text-[20px] leading-tight">
              Bachelor’s Degree
            </p>
            <h3 className="font-medium text-[24px] lg:text-[40px] text-brand-accent2">
              View Courses
            </h3>
          </div>
          <p className="text-[14px] lg:text-[24px]">
            The first level of the university system:
            <br />
            three-year study courses.
          </p>
        </div>
        <Link
          href="/study/courses"
          type="button"
          className="flex items-center text-[12px] lg:text-[18px] gap-[0.5em] cursor-pointer"
          aria-label="View course details"
        >
          <LetterSwapForward label="VIEW DETAILS" staggerDuration={0.005} />
          <ArrowRight className="w-[14px] h-[14px]" />
        </Link>
      </div>
    </div>
  );
}

function GradientRing({ className }: { className: string }) {
  return (
    <svg
      width="216"
      height="214"
      viewBox="0 0 216 214"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.5"
        d="M347 173.5C347 269.321 269.321 347 173.5 347C77.6786 347 0 269.321 0 173.5C0 77.6786 77.6786 0 173.5 0C269.321 0 347 77.6786 347 173.5ZM64.7159 173.5C64.7159 233.58 113.42 282.284 173.5 282.284C233.58 282.284 282.284 233.58 282.284 173.5C282.284 113.42 233.58 64.7159 173.5 64.7159C113.42 64.7159 64.7159 113.42 64.7159 173.5Z"
        fill="url(#paint0_linear_713_5937)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_713_5937"
          x1="202"
          y1="-13"
          x2="75.5"
          y2="268"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#096964" stopOpacity="0" />
          <stop offset="0.586816" stopColor="#096964" />
        </linearGradient>
      </defs>
    </svg>
  );
}
