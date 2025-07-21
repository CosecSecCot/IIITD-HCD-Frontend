import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import GridLines from "../../components/GridLines";
import Footer from "../../components/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import panel from "../../assets/rightPanel.png";
import statsChart1 from "../../assets/placement-stats-1.png";
import statsChart2 from "../../assets/placement-stats-2.png";
import gradientRing from "../../assets/gradient-ring.svg";

const PlacementsPage = () => {
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
    <div className="relative w-full font-anybody">
      <Navbar type="solid" />
      <GridLines count={4} />
      {/* Overlay texture */}
      <div className="texture-overlay absolute inset-0 pointer-events-none" />
      <main ref={containerRef} className="w-[50vw] pt-[216px] ml-[12.5vw] mb-[80px] pr-16">
        <p className="uppercase text-sm text-brand-accent2-130 opacity-50 reveal-text">
          Human Centred Design
        </p>
        <h1 className="text-[52px] font-light reveal-text">
          Placements
        </h1>
        <div className="w-[50vw] h-[0.5em] bg-brand-accent2" />

        <div className="space-y-6 mb-8 reveal-text">
          <p className="text-[18px] mt-[40px] reveal-text mr-[48px]">
            IIIT-Delhi provides a platform to facilitate interaction between students and companies, so both can find the best match as per their aspirations and requirements.
          </p>
          <p className="text-[18px] mt-[40px] reveal-text mr-[48px]">
            Our graduates combine rigorous thinking, hard work, and strong fundamentals. The campus promotes student activities to improve soft skills, imperative for excellence in any workspace.
          </p>
          <p className="text-[18px] mt-[40px] reveal-text mr-[48px]">
            We highly value our partnership with recruiters and remain committed to making your recruiting experience productive and positive. We welcome firms to visit the campus and engage with our talent.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8 reveal-text">
          <img src={statsChart1} alt="Placement Statistics 1" className="w-full" />
          <img src={statsChart2} alt="Placement Statistics 2" className="w-full" />
        </div>

        <div className="mt-[16px] px-[2em] py-[1em] bg-brand-accent2-130/5 border border-y-brand-accent2-130 border-l-brand-accent2-130 reveal-text">
          <p className="text-[20px] uppercase opacity-60">
            Graduated From Campus
          </p>
          <h2 className="text-[54px] font-medium text-brand-accent2-130">
            10+ B.Tech &amp; M.Tech
          </h2>
        </div>

        <p className="text-[18px] mt-[40px] reveal-text mr-[48px]">
          The industry demands highly skilled fresh talent. At IIITD we address this need through comprehensive education and a professional atmosphere—reflected in consistently excellent placement outcomes since our first graduating batch.
        </p>

      </main>

      <aside className="fixed top-0 left-[62.5vw] w-[37.5vw] h-[100vh] overflow-hidden">
        <img
          src={panel}
          alt="Right Panel"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </aside>

      <Footer type="second" />
    </div>
  );
};

export default PlacementsPage;
