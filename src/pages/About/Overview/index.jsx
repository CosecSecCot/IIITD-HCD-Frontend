import React, { useRef } from "react";
import Navbar from "../../../components/Navbar";
import GridLines from "../../../components/GridLines";
import Footer from "../../../components/Footer";
import TextReveal from "../../../components/TextReveal";
import OpacityReveal from "../../../components/OpacityReveal";
import Sidebar from "../components/Sidebar";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import gradientRing from "../../../assets/gradient-ring.svg";
import { ArrowRight } from "lucide-react";

const stats = [
  { label: "ALUMNI", value: "2000+" },
  { label: "STUDENTS", value: "2000+" },
  { label: "PAPERS", value: "20+" },
  { label: "FACULTY", value: "200+" },
];

const OverviewPage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1280px)");
  const containerRef = useRef(null);

  return (
    <div className="relative w-full font-anybody">
      <Navbar type="solid" />
      <GridLines count={isSmallScreen ? 3 : 4} />
      <div className="texture-overlay" />
      <main
        ref={containerRef}
        className="w-[75vw] xl:w-[50vw] pt-[216px] ml-[12.5vw]"
      >
        <p className="text-[16px] lg:text-[24px] text-brand-accent2-130">
          Human Centred Design
        </p>
        <h1 className="text-[36px] lg:text-[52px] font-light">Overview</h1>
        <div className="w-[75vw] xl:w-[50vw] h-[0.5em] bg-brand-accent2" />
        <p className="text-[12px] lg:text-[18px] mt-[40px] mr-[48px]">
          Admission to this program will be through two channels – approximately
          half of the seats will be through the Joint Admission Counselling
          (JAC) of Delhi.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-[16px] px-[2em] py-[1em] bg-brand-accent2-130/5 border border-y-brand-accent2-130 border-l-brand-accent2-130 max-xl:border-r-brand-accent2-130">
          {stats.map((stat, idx) => (
            <div key={idx} className="leading-tight">
              <p className="text-[14px] lg:text-[20px] uppercase opacity-60">
                {stat.label}
              </p>
              <h2 className="text-[37px] lg:text-[54px] font-medium text-brand-accent2-130">
                {stat.value}
              </h2>
            </div>
          ))}
        </div>
        <h2 className="text-[16px] lg:text-[24px] font-medium mt-[60px] text-brand-accent2-130">
          Human Centred Design
        </h2>
        <p className="text-[14px] lg:text-[20px] font-light mr-[48px]">
          Admission to this program will be through two channels – approximately
          half of the seats will be through the Joint Admission Counselling
          (JAC) of Delhi.
        </p>
        <button className="w-[75vw] xl:w-[25vw] mt-[32px] flex justify-center items-center gap-[24px] py-[0.75em] text-[9px] lg:text-[14px] xl:text-[18px] bg-brand-accent2-130/5 border border-brand-accent2-130 text-brand-accent2-130">
          <span>UCEED PORTAL</span>
          <ArrowRight className="w-[18px] h-auto" />
        </button>
        <p className="text-[14px] lg:text-[20px] mt-[64px] font-light mr-[48px]">
          The program will prepare students to work in the IT industry as well
          as digital media industry like gaming, animation, virtual/augmented
          reality, etc. The program will also allow students, who want to pursue
          higher studies, to take up higher studies in CS/IT or in Design.
        </p>
        <div className="my-[80px] w-[75vw] xl:w-[25vw]">
          <ViewCoursesCard />
        </div>
      </main>
      <Sidebar />
      <Footer type="second" />
    </div>
  );
};
export default OverviewPage;

function ViewCoursesCard() {
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
              <p className="text-[9px] lg:text-[14px] leading-tight">
                Bachelor’s Degree
              </p>
            </TextReveal>
            <TextReveal>
              <h3 className="font-medium text-[16px] lg:text-[28px] text-brand-accent2">
                View Courses
              </h3>
            </TextReveal>
          </div>
          <TextReveal>
            <p className="text-[11px] lg:text-[16px]">
              The first level of the university system:
              <br />
              three-year study courses.
            </p>
          </TextReveal>
        </div>
        <OpacityReveal delay={0.2}>
          <button
            type="button"
            className="flex items-center text-[9px] lg:text-[12px] gap-[0.5em]"
            aria-label="View course details"
          >
            <span>VIEW DETAILS</span>
            <ArrowRight className="w-[12px] h-[12px]" />
          </button>
        </OpacityReveal>
      </div>
    </div>
  );
}
