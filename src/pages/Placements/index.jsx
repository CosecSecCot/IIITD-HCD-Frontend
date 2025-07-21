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
    <div className="relative w-full font-anybody bg-brand-dark flex flex-col min-h-screen pt-[80px]">
      <Navbar type="solid" />
      <GridLines count={4} color="rgba(255,255,255,0.05)" />

      <div className="grid grid-cols-4 flex-1 items-stretch h-full">
        <main ref={containerRef} className="mt-[120px] col-span-2 w-full py-[40px] px-[12.5vw]">
          <p className="uppercase text-sm text-[#096964] opacity-50 reveal-text">
            Human Centred Design
          </p>
          <h1 className="text-[32px] lg:text-[48px] font-light mt-2 mb-6 reveal-text">
            Placements
          </h1>

          <div className="space-y-6 mb-8 reveal-text">
            <p>
              IIIT-Delhi provides a platform to facilitate interaction between students and companies, so both can find the best match as per their aspirations and requirements.
            </p>
            <p>
              Our graduates combine rigorous thinking, hard work, and strong fundamentals. The campus promotes student activities to improve soft skills, imperative for excellence in any workspace.
            </p>
            <p>
              We highly value our partnership with recruiters and remain committed to making your recruiting experience productive and positive. We welcome firms to visit the campus and engage with our talent.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8 reveal-text">
            <img src={statsChart1} alt="Placement Statistics 1" className="w-full border border-brand-accent" />
            <img src={statsChart2} alt="Placement Statistics 2" className="w-full border border-brand-accent" />
          </div>

          <div className="border-t border-brand-accent pt-6 mb-8 reveal-text">
            <p className="uppercase text-sm text-[#096964] opacity-50">
              Graduated From Campus
            </p>
            <h2 className="text-[32px] lg:text-[48px] font-semibold">
              10+ B.Tech &amp; M.Tech
            </h2>
          </div>

          <p className="opacity-80 mb-12 reveal-text">
            The industry demands highly skilled fresh talent. At IIITD we address this need through comprehensive education and a professional atmosphere—reflected in consistently excellent placement outcomes since our first graduating batch.
          </p>

          <div className="mt-auto border border-brand-accent p-6 flex items-center justify-between bg-[#f7fdfb] relative overflow-hidden reveal-text w-[75%] ml-0 mr-auto">
            <img src={gradientRing} alt="Accent" className="absolute right-[-40px] bottom-[-40px] w-[200px] opacity-50 pointer-events-none" />
            <div>
              <p className="text-[#096964] font-medium">Add your Portfolio</p>
              <h3 className="text-[24px] lg:text-[30px] font-semibold text-[#096964]">
                Student Portfolio
              </h3>
              <p className="text-[14px] mt-1 opacity-70">
                Add your Portfolio to the IIITD Database.
              </p>
            </div>
            <div>
              <button className="uppercase text-[14px] font-medium text-[#096964] hover:underline">
                Student Portfolio →
              </button>
            </div>
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

export default PlacementsPage;
