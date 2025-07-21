import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import GridLines from "../../components/GridLines";
import Footer from "../../components/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import panel from "../../assets/rightPanel.png";

// Import your collaboration logos
import logo1 from "../../assets/collab-logo-1.png";  // University of Oulu
import logo2 from "../../assets/collab-logo-2.png";  // Monash University
import logo3 from "../../assets/collab-logo-3.png";  // University of Maryland
import logo4 from "../../assets/collab-logo-4.png";  // URV
import logo5 from "../../assets/collab-logo-5.png";  // Universiteit Leiden

// Repeat the five logos three times for a 5x3 grid (15 items)
const collaborationLogos = [
  logo1, logo2, logo3, logo4, logo5,
  logo1, logo2, logo3, logo4, logo5,
  logo1, logo2, logo3, logo4, logo5,
];

const CollaborationsPage = () => {
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
    <div className="relative w-full font-anybody bg-brand-dark">
      <Navbar type="solid" />
      <GridLines count={4} color="rgba(255,255,255,0.05)" />
      <div className="texture-overlay" />

      <main ref={containerRef} className="w-[50vw] pt-[216px] ml-[12.5vw] pr-16">
        <p className="uppercase text-sm text-[#096964] opacity-50 reveal-text">
          Human Centred Design
        </p>
        <h1 className="text-[52px] font-light reveal-text">
          Collaborations
        </h1>
        <div className="w-[50vw] h-[0.5em] bg-brand-accent2" />

        <p className="text-[18px] mt-[40px] reveal-text mr-[48px]">
          Admission to this program will be through two channels – approximately half of the seats will be through the Joint Admission Counselling (JAC) of Delhi.
        </p>

        <div className="mt-[16px] px-[3em] py-[2em] bg-brand-accent2-130/5 border border-y-brand-accent2-130 border-l-brand-accent2-130 reveal-text">
          <h3 className="text-[28px] font-medium mb-4">
            Reach out for Collaboration
          </h3>
          <p className="text-[18px] mt-[16px] reveal-text mr-[48px]">
            Admission to this program will be through two channels – approximately half of the seats will be through the Joint Admission Counselling (JAC) of Delhi.
          </p>
          <button className="mt-8 w-full md:w-64 lg:w-[480px] uppercase bg-[#096964] text-white font-medium py-3 px-6 hover:opacity-90 transition reveal-text">
            UCEED Portal →
          </button>
        </div>

        <h2 className="text-[24px] font-medium mt-[60px] text-brand-accent2-130 reveal-text">
          Current Collaborations
        </h2>
        <div className="mt-[30px] grid grid-cols-5 gap-6 reveal-text">
          {collaborationLogos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center">
              <img src={logo} alt={`Collaboration ${idx + 1}`} className="max-h-[95px]" />
            </div> 
          ))}
        </div>
      </main>

      <aside className="fixed top-0 left-[62.5vw] w-[37.5vw] h-[100vh] overflow-hidden">
        <img
          src={panel}
          alt="Right Panel"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </aside>

      <Footer dark />
    </div>
  );
};

export default CollaborationsPage;
