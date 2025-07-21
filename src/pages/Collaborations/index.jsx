import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import GridLines from "../../components/GridLines";
import Footer from "../../components/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import panel from "../../assets/rightPanel.png";

// Import your collaboration logos
import logo1 from "../../assets/collab-logo-1.png";
import logo2 from "../../assets/collab-logo-1.png";
import logo3 from "../../assets/collab-logo-1.png";
import logo4 from "../../assets/collab-logo-1.png";
import logo5 from "../../assets/collab-logo-1.png";
import logo6 from "../../assets/collab-logo-1.png";

const collaborationLogos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
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
    <div className="relative w-full font-anybody bg-brand-dark flex flex-col min-h-screen pt-[80px]">
      <Navbar type="solid" />
      <GridLines count={4} color="rgba(255,255,255,0.05)" />

      <div className="grid grid-cols-4 flex-1 items-stretch h-full">
        <main ref={containerRef} className="mt-[120px] col-span-2 w-full py-[40px] px-[12.5vw]">
          <p className="uppercase text-sm text-[#096964] opacity-50 reveal-text">
            Human Centred Design
          </p>
          <h1 className="text-[32px] lg:text-[48px] font-light mt-2 mb-6 reveal-text">
            Collaborations
          </h1>

          <p className="mb-8 opacity-80 reveal-text">
            Admission to this program will be through two channels – approximately half of the seats will be through the Joint Admission Counselling (JAC) of Delhi.
          </p>

          <div className="border border-brand-accent p-6 mb-8 reveal-text">
            <h3 className="text-[20px] lg:text-[24px] font-medium mb-4">
              Reach out for Collaboration
            </h3>
            <p className="opacity-80 mb-4">
              Admission to this program will be through two channels – approximately half of the seats will be through the Joint Admission Counselling (JAC) of Delhi.
            </p>
            <button className="uppercase bg-[#096964] text-white font-medium py-3 px-6 hover:opacity-90 transition">
              UCEED Portal →
            </button>
          </div>

          <h2 className="text-[20px] lg:text-[24px] font-medium mb-4 reveal-text">
            Current Collaborations
          </h2>
          <div className="grid grid-cols-3 gap-6 reveal-text">
            {collaborationLogos.map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center p-4 border border-brand-accent bg-[#f7fdfb]">
                <img src={logo} alt={`Collaboration ${idx + 1}`} className="max-h-[60px]" />
              </div>
            ))}
          </div>
        </main>

        <aside className="col-span-2 col-start-3 hidden lg:block relative overflow-hidden h-full">
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

export default CollaborationsPage;
