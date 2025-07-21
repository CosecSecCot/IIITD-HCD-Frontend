import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import GridLines from "../../components/GridLines";
import Footer from "../../components/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import gradientRing from "../../assets/gradient-ring.svg";
import panel from "../../assets/rightPanel.png";

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
        containerRef.current.querySelectorAll(".reveal-text"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power4.out" }
      );
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <div className="relative w-full font-anybody bg-brand-dark min-h-screen">
      <Navbar type="solid" />
      <GridLines count={4} color="rgba(255,255,255,0.05)" />

      <div className="grid grid-cols-4">
        <main ref={containerRef} className="mt-[180px] col-span-2 w-full py-[40px] px-[12.5vw]">
          <p className="uppercase text-sm text-[#096964] opacity-50 reveal-text">
            Human Centred Design
          </p>
          <h1 className="text-[32px] lg:text-[48px] font-light mt-2 mb-6 reveal-text">
            Overview
          </h1>
          <p className="text-[14px] lg:text-[16px] opacity-80 mb-8 reveal-text mr-[48px]">
            Admission to this program will be through two channels – approximately half of the seats will be through the Joint Admission Counselling (JAC) of Delhi.
          </p>
          <div className="grid grid-cols-4 divide-x divide-brand-accent divide-opacity-20 mb-8 reveal-text">
            {stats.map((stat, idx) => (
              <div key={idx} className="py-4 text-center">
                <h2 className="text-[28px] lg:text-[32px] font-bold text-[#096964]">
                  {stat.value}
                </h2>
                <p className="text-[12px] uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <h2 className="text-[20px] lg:text-[24px] font-medium mb-3 text-[#096964] reveal-text">
            Human Centred Design
          </h2>
          <p className="text-[14px] lg:text-[16px] opacity-80 mb-4 reveal-text mr-[48px]">
            Admission to this program will be through two channels – approximately half of the seats will be through the Joint Admission Counselling (JAC) of Delhi.
          </p>
          <div className="grid grid-cols-4 mb-[24px]">
            <button className="col-span-2 reveal-text flex items-center justify-center border border-[#094D49] bg-[rgba(9,105,100,0.05)] text-brand-accent uppercase font-medium transition-colors duration-300 ease-in-out w-[100%] py-[15px] px-[24px] gap-[27px]">
              UCEED Portal →
            </button>
          </div>
          <p className="mt-6 text-[14px] lg:text-[16px] opacity-80 reveal-text mr-[48px]">
            The program will prepare students to work in the IT industry as well as digital media industry like gaming, animation, virtual/augmented reality, etc. The program will also allow students, who want to pursue higher studies, to take up higher studies in CS/IT or in Design.
          </p>
          <div className="mt-12 border border-brand-accent p-6 flex items-center justify-between bg-[#f7fdfb] relative overflow-hidden reveal-text w-[102.5%] ml-0 mr-auto">
            <img src={gradientRing} alt="Quarter Arc" className="absolute right-[-40px] bottom-[-40px] w-[200px] opacity-50 pointer-events-none" />
            <div>
              <p className="text-brand-accent font-medium">Bachelor’s Degree</p>
              <h3 className="text-[24px] lg:text-[30px] font-semibold text-[#096964]">View Courses</h3>
              <p className="text-[14px] mt-1 opacity-70">
                The first level of the university system: three-year study courses.
              </p>
            </div>
            <div>
              <button className="uppercase text-[14px] font-medium text-brand-accent hover:underline">
                View Details →
              </button>
            </div>
          </div>
        </main>

        <aside className="col-span-2 col-start-3 hidden lg:block relative overflow-hidden">
          <img
            src={panel}
            alt="Right Panel"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </aside>
      </div>

      <Footer dark />
    </div>
  );
};

export default OverviewPage;
