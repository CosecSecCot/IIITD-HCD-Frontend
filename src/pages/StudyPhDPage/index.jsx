import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import GridLines from "../../components/GridLines";
import gradientRing from "../../assets/gradient-ring.svg";
import Footer from "../../components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const StudyPhD = () => {
  return (
    <div className="relative font-anybody">
      <div className="texture-overlay" />
      <div className="background-element z-10" />
      <Navbar type="solid" />
      <GridLines count={4} />
      <Banner
        title={"Human Centered Design"}
        subtitle={"Doctor of Philosophy  |  PhD"}
        sideText={
          "Design tomorrow's information technology products, services and systems which combine emerging technologies"
        }
      />

      {/* Heading */}
      <div
        role="heading"
        aria-describedby="study-phd-heading"
        className="flex items-center gap-[1em] mt-[100px]"
      >
        <div className="h-[16px] w-[12.5vw] bg-gradient-to-r from-brand-accent2/30 to-transparent" />
        <h2
          id="study-phd-heading"
          className="text-[64px] font-light flex-shrink-0"
        >
          Study <span className="text-brand-accent2 font-semibold">PhD</span>{" "}
          @IIITD
        </h2>
        <div className="h-[16px] w-full mr-auto bg-gradient-to-l from-brand-accent2/60 to-transparent" />
      </div>

      <p className="ml-[37.5vw] mt-[80px] w-[50vw] text-[24px] font-light">
        The PhD program at IIIT-Delhi is focused towards research like any other
        PhD program – limited coursework to enhance the breadth and depth of a
        student, followed by focused research. Admissions are made through
        regular admission process as well as rolling mode. Regular admissions
        for all disciplines are made in March-April and Nov-Dec every year. For
        rolling admission, the interested candidates are expected to interact
        with the concerned faculty member(s) in IIIT-Delhi and get their consent
        for working with him/her. However, such candidates will undergo a full
        selection process before being admitted to the PhD program.
      </p>

      <div className="w-[75vw] ml-[12.5vw] mt-[128px] grid grid-cols-2 gap-x-[1em]">
        <ViewCoursesCard />
        <ViewCoursesCard />
      </div>
      <Footer />
    </div>
  );
};
export default StudyPhD;

function Banner({ title, subtitle, sideText }) {
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
        },
      );

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
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
}

function ViewCoursesCard() {
  return (
    <div className="relative font-light border border-brand-accent2/25 bg-brand-accent2/5 backdrop-blur-md hover:backdrop-blur-2xl">
      <div className="absolute w-full h-full">
        <img src={gradientRing} alt="" className="absolute bottom-0 right-0" />
      </div>
      <div className="space-y-[2em] pl-[40px] pr-[80px] py-[48px]">
        <div className="space-y-[0.5em]">
          <div>
            <p className="text-[20px] leading-tight">Bachelor’s Degree</p>
            <h3 className="font-medium text-[40px] text-brand-accent2">
              View Courses
            </h3>
          </div>
          <p className="text-[24px]">
            The first level of the university system:
            <br />
            three-year study courses.
          </p>
        </div>
        <button
          type="button"
          className="reveal-animation-opacity-only flex items-center text-[14px] lg:text-[18px] gap-[0.5em]"
          aria-label="View course details"
        >
          <span>VIEW DETAILS</span>
          <ArrowRight className="w-[16px] h-[16px]" />
        </button>
      </div>
    </div>
  );
}
