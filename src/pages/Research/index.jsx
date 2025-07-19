import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import LabLogo from "../../assets/research-lab-logo.svg";
import GridLines from "../../components/GridLines";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ArrowRight, X } from "lucide-react";

const dummyLabs = [
  {
    id: 1,
    title: "Accessibility and Inclusive Design Lab",
    short:
      "We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful.",
    lead: "Dr. Richa Gupta, A - 418",
    logo: LabLogo,
    full: "Accessibility and Inclusive Design Lab aims at enabling independent living and empowering persons with special needs by making the world more inclusive and accessible. It attempts to address the challenges that hamper independent and easy access to educational resources as well as information that facilitates navigation (both indoor and outdoor). This lab leverage the principles of human-centred design to create convenient and pleasant day-to-day experiences while solving problems particularly for persons with special needs.",
    website: "#",
  },
  {
    id: 2,
    title: "Creative Interfaces Lab",
    short:
      "We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful.",
    lead: "Dr. Anmol Srivastava, A – 416",
    logo: LabLogo,
    full: "Creative Interfaces Lab aims at making technology interaction fun and intuitive for all. The lab investigates new interaction paradigms, prototyping methods, and novel interface technologies for a diverse range of users.",
    website: "#",
  },
  {
    id: 3,
    title: "Design for Social Innovation Lab",
    short:
      "Fostering innovation for social good using design thinking approaches and participatory research.",
    lead: "Dr. Priya Sharma, A – 417",
    logo: LabLogo,
    full: "Design for Social Innovation Lab focuses on leveraging design thinking for social impact projects, working with NGOs, governments, and grassroots innovators.",
    website: "#",
  },
  {
    id: 4,
    title: "Human Factors and Ergonomics Lab",
    short:
      "Optimizing environments, products, and systems to suit human abilities and limitations.",
    lead: "Dr. S. Iyer, A – 420",
    logo: LabLogo,
    full: "The Human Factors and Ergonomics Lab explores how design can reduce risk and enhance usability, comfort, and safety across domains from healthcare to transport.",
    website: "#",
  },
  {
    id: 5,
    title: "Emotional AI Lab",
    short:
      "Bridging affective computing and user-centered design for empathetic technology.",
    lead: "Dr. Sunil Reddy, A – 422",
    logo: LabLogo,
    full: "The Emotional AI Lab pioneers work at the intersection of affective computing, psychology, and design, developing technologies that respond to emotional needs.",
    website: "#",
  },
  {
    id: 6,
    title: "Playful Learning Lab",
    short:
      "Rethinking education and learning environments through play, creativity, and new media.",
    lead: "Dr. Vandana Singh, A – 424",
    logo: LabLogo,
    full: "The Playful Learning Lab invents playful, interactive learning environments and experiences, blending pedagogy, digital media, and fun.",
    website: "#",
  },
  {
    id: 7,
    title: "Digital Humanities Lab",
    short:
      "Integrating technology and humanities for richer, more inclusive research and learning.",
    lead: "Dr. Kiran Pandey, A – 426",
    logo: LabLogo,
    full: "Digital Humanities Lab investigates digital methods for the study and dissemination of culture, history, and literature, focusing on inclusivity and accessibility.",
    website: "#",
  },
];

const Research = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1280px)");
  const [activeTab, setActiveTab] = useState("research");

  return (
    <div className="w-full overflow-x-hidden font-anybody">
      <div className="texture-overlay" />
      <Navbar />
      <GridLines count={isSmallScreen ? 3 : 4} />
      <section role="banner" className="relative bg-brand-accent2">
        <p className="absolute top-[40%] right-[12.5vw] text-[20px] text-white">
          <span className="opacity-50">RESEARCH /</span>
          <span> LABS</span>
        </p>
        <h1 className="absolute bottom-4 left-[12.5vw] text-[72px] text-white">
          {activeTab == "research" ? "RESEARCH LABS" : "TEACHING LABS"}
        </h1>
        <img
          src="/main-banner-back.png"
          alt="banner"
          className="w-full object-cover"
        />
      </section>
      <main className="w-[75vw] mx-[12.5vw] mt-[30px]">
        <ControlPanel activeTab={activeTab} setActiveTab={setActiveTab} />
        <section className="grid grid-cols-1 lg:grid-cols-3 divide-y divide-black/10 mt-[30px]">
          {dummyLabs.map((lab, idx) => (
            <LabCard key={idx} lab={lab} expanded={lab.id == 1} />
          ))}
        </section>
      </main>
    </div>
  );
};
export default Research;

function ControlPanel({ activeTab, setActiveTab }) {
  return (
    <div
      className={`grid grid-cols-2 xl:grid-cols-3 grid-rows-1 text-[12px] lg:text-[18px]`}
      role="tablist"
    >
      <ControlPanelTabButton
        text="RESEARCH LABS"
        active={activeTab === "research"}
        onClick={() => setActiveTab("research")}
      />
      <ControlPanelTabButton
        text="TEACHING LABS"
        active={activeTab === "teaching"}
        onClick={() => setActiveTab("teaching")}
      />
    </div>
  );
}

function ControlPanelTabButton({ text, active, onClick }) {
  return (
    <button
      className={`py-[0.5em] border border-black/30 ${
        active ? "bg-brand-accent2 text-white" : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function LabCard({ lab, expanded }) {
  return (
    <div
      className={`w-full flex flex-col justify-between gap-[32px] lg:gap-[48px] p-[28px] lg:p-[40px] ${expanded ? "z-[9999] lg:col-span-2 lg:row-span-2 bg-[#47638A] text-white" : ""}`}
    >
      <div className="flex flex-col gap-[18px] lg:gap-[24px]">
        <div className="flex flex-col gap-[12px] lg:gap-[16px]">
          <div className="flex items-center gap-[12px] lg:gap-[16px]">
            <img
              className="h-[40px] lg:h-auto w-auto"
              src={lab.logo}
              alt={lab.title + " logo"}
            />
            {expanded ? (
              <h3 className="text-[16px] lg:text-[32px] font-medium">
                {lab.title}
              </h3>
            ) : (
              <h3 className="text-[16px] lg:text-[20px] font-medium">
                {lab.title}
              </h3>
            )}
          </div>
          {expanded ? (
            <p className="font-helvetica_now_display text-[14px] lg:text-[24px] opacity-80">
              {lab.full}
            </p>
          ) : (
            <p className="font-helvetica_now_display text-[14px] lg:text-[18px] opacity-60">
              {lab.short}
            </p>
          )}
        </div>
        {expanded ? (
          <p className="text-[14px] lg:text-[24px] font-medium opacity-80">
            {lab.lead}
          </p>
        ) : (
          <p className="text-[14px] lg:text-[18px] opacity-60">{lab.lead}</p>
        )}
      </div>
      <div className="flex justify-between flex-row-reverse flex-wrap w-full">
        {expanded ? (
          <button className="flex items-center text-[14px] lg:text-[20px] gap-[0.5em]">
            <span>CLOSE</span>
            <X className="w-[16px] h-[16px]" />
          </button>
        ) : (
          <button className="flex items-center text-[14px] lg:text-[18px] gap-[0.5em]">
            <span>VIEW DETAILS</span>
            <ArrowRight className="w-[16px] h-[16px]" />
          </button>
        )}
        {expanded ? (
          <button className="text-[14px] lg:text-[20px] px-[1em] lg:px-[2em] py-[0.5em] border border-brand-gray1">
            VISIT WEBSITE
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
