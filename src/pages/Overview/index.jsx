import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import GridLines from "../../components/GridLines";
import Footer from "../../components/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import gradientRing from "../../assets/gradient-ring.svg";
import panel from "../../assets/rightPanel.png";
import { ArrowRight } from "lucide-react";

const stats = [
  { label: "ALUMNI", value: "2000+" },
  { label: "STUDENTS", value: "2000+" },
  { label: "PAPERS", value: "20+" },
  { label: "FACULTY", value: "200+" },
];

const OverviewPage = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".reveal-text",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power4.out" },
      );
    },
    { scope: containerRef, dependencies: [] },
  );

  return (
    <div className="relative w-full font-anybody">
      <Navbar type="solid" />
      <GridLines count={4} />
      <div className="texture-overlay" />
      <main ref={containerRef} className="w-[50vw] pt-[216px] ml-[12.5vw]">
        <p className="text-[24px] text-brand-accent2-130 reveal-text">
          Human Centred Design
        </p>
        <h1 className="text-[52px] font-light reveal-text">Overview</h1>
        <div className="w-[50vw] h-[0.5em] bg-brand-accent2" />
        <p className="text-[18px] mt-[40px] reveal-text mr-[48px]">
          Admission to this program will be through two channels – approximately
          half of the seats will be through the Joint Admission Counselling
          (JAC) of Delhi.
        </p>
        <div className="flex justify-between mt-[16px] px-[2em] py-[1em] bg-brand-accent2-130/5 border border-y-brand-accent2-130 border-l-brand-accent2-130 reveal-text">
          {stats.map((stat, idx) => (
            <div key={idx} className="leading-tight">
              <p className="text-[20px] uppercase opacity-60">{stat.label}</p>
              <h2 className="text-[54px] font-medium text-brand-accent2-130">
                {stat.value}
              </h2>
            </div>
          ))}
        </div>
        <h2 className="text-[24px] font-medium mt-[60px] text-brand-accent2-130 reveal-text">
          Human Centred Design
        </h2>
        <p className="text-[20px] font-light reveal-text mr-[48px]">
          Admission to this program will be through two channels – approximately
          half of the seats will be through the Joint Admission Counselling
          (JAC) of Delhi.
        </p>
        <button className="w-[25vw] mt-[32px] flex justify-center items-center gap-[24px] py-[0.75em] text-[14px] xl:text-[18px] bg-brand-accent2-130/5 border border-brand-accent2-130 text-brand-accent2-130 reveal-text">
          <span>UCEED PORTAL</span>
          <ArrowRight className="w-[18px] h-auto" />
        </button>
        <p className="text-[20px] mt-[64px] font-light reveal-text mr-[48px]">
          The program will prepare students to work in the IT industry as well
          as digital media industry like gaming, animation, virtual/augmented
          reality, etc. The program will also allow students, who want to pursue
          higher studies, to take up higher studies in CS/IT or in Design.
        </p>
        <div className="my-[80px] border border-brand-accent2 bg-brand-accent2-130/5 backdrop-blur-sm pl-10 pr-12 py-10 w-1/2 relative overflow-hidden">
          {/* Quarter Arc SVG */}
          <img
            src={gradientRing}
            alt="Quarter Arc"
            className="absolute right-[-60px] bottom-[-80px] w-[300px] opacity-80 pointer-events-none"
          />

          <div className="relative z-10">
            <p className="text-[14px] font-light">Bachelor’s Degree</p>
            <h3 className="text-[28px] text-brand-accent2-130 font-medium leading-tight mb-[16px]">
              View Courses
            </h3>
            <p className="text-[17px] font-light mb-[35px]">
              The first level of the university system: three-year study
              courses.
            </p>
            <button className="text-[13px] font-bold text-black uppercase tracking-wide flex items-center gap-[8px]">
              <span>View Details</span>
              <ArrowRight className="w-[1em] h-auto" />
            </button>
          </div>
        </div>
      </main>
      <aside className="fixed top-0 left-[62.5vw] w-[37.5vw] h-[100vh] overflow-hidden">
        <img
          src={panel}
          alt="Right Panel"
          className="absolute inset-0 object-cover"
        />
      </aside>
      <Footer type="second" />
    </div>
  );
};

export default OverviewPage;
