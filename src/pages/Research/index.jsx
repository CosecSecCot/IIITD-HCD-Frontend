import React, { useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import LabLogo from "../../assets/research-lab-logo.svg";
import GridLines from "../../components/GridLines";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ArrowRight, Search, X } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import Footer from "../../components/Footer";

gsap.registerPlugin(Flip, useGSAP);

const dummyLabs = [
  {
    id: 1,
    title: "Accessibility and Inclusive Design Lab",
    short:
      "We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful.",
    lead: "Dr. Richa Gupta, A - 418",
    logo: LabLogo,
    full: "Accessibility and Inclusive Design Lab aims at enabling independent living and empowering persons with special needs by making the world more inclusive and accessible. It attempts to address the challenges that hamper independent and easy access to educational resources as well as information that facilitates navigation (both indoor and outdoor). This lab leverage the principles of human-centred design to create convenient and pleasant day-to-day experiences while solving problems particularly for persons with special needs.",
    type: "research",
    website: "#",
    foreground: "#FFFFFF",
    background: "#47638A",
  },
  {
    id: 2,
    title: "Creative Interfaces Lab",
    short:
      "We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful.",
    lead: "Dr. Anmol Srivastava, A – 416",
    logo: LabLogo,
    full: "Creative Interfaces Lab aims at making technology interaction fun and intuitive for all. The lab investigates new interaction paradigms, prototyping methods, and novel interface technologies for a diverse range of users.",
    type: "research",
    website: "#",
    foreground: "#000000",
    background: "#A4DAC3",
  },
  {
    id: 3,
    title: "Design for Social Innovation Lab",
    short:
      "Fostering innovation for social good using design thinking approaches and participatory research.",
    lead: "Dr. Priya Sharma, A – 417",
    logo: LabLogo,
    full: "Design for Social Innovation Lab focuses on leveraging design thinking for social impact projects, working with NGOs, governments, and grassroots innovators.",
    type: "research",
    website: "#",
    foreground: "#000000",
    background: "#89C4ED",
  },
  {
    id: 4,
    title: "Human Factors and Ergonomics Lab",
    short:
      "Optimizing environments, products, and systems to suit human abilities and limitations.",
    lead: "Dr. S. Iyer, A – 420",
    logo: LabLogo,
    full: "The Human Factors and Ergonomics Lab explores how design can reduce risk and enhance usability, comfort, and safety across domains from healthcare to transport.",
    type: "research",
    website: "#",
    foreground: "#000000",
    background: "#F18800",
  },
  {
    id: 5,
    title: "Emotional AI Lab",
    short:
      "Bridging affective computing and user-centered design for empathetic technology.",
    lead: "Dr. Sunil Reddy, A – 422",
    logo: LabLogo,
    full: "The Emotional AI Lab pioneers work at the intersection of affective computing, psychology, and design, developing technologies that respond to emotional needs.",
    type: "research",
    website: "#",
    foreground: "#FFFFFF",
    background: "#111827",
  },
  {
    id: 6,
    title: "Playful Learning Lab",
    short:
      "Rethinking education and learning environments through play, creativity, and new media.",
    lead: "Dr. Vandana Singh, A – 424",
    logo: LabLogo,
    full: "The Playful Learning Lab invents playful, interactive learning environments and experiences, blending pedagogy, digital media, and fun.",
    type: "research",
    website: "#",
    foreground: "#FFFFFF",
    background: "#430055",
  },
  {
    id: 7,
    title: "Digital Humanities Lab",
    short:
      "Integrating technology and humanities for richer, more inclusive research and learning.",
    lead: "Dr. Kiran Pandey, A – 426",
    logo: LabLogo,
    full: "Digital Humanities Lab investigates digital methods for the study and dissemination of culture, history, and literature, focusing on inclusivity and accessibility.",
    type: "research",
    website: "#",
    foreground: "#FFFFFF",
    background: "#D833C2",
  },
  {
    id: 8,
    title: "AI and Ethics Research Group",
    short:
      "Exploring the societal impacts of artificial intelligence through interdisciplinary approaches.",
    lead: "Prof. Meera Sinha, B – 312",
    logo: LabLogo,
    full: "AI and Ethics Research Group examines how artificial intelligence influences human behavior, decision-making, and societal norms, with an emphasis on fairness, accountability, and transparency.",
    type: "teaching",
    website: "#",
    foreground: "#000000",
    background: "#F8C381",
  },
  {
    id: 9,
    title: "Virtual Heritage Lab",
    short:
      "Digitally preserving cultural heritage using VR, AR, and 3D modeling technologies.",
    lead: "Dr. Raghav Nair, C – 205",
    logo: LabLogo,
    full: "Virtual Heritage Lab focuses on the digital reconstruction of historical sites and artifacts to create immersive educational experiences and support heritage conservation.",
    type: "teaching",
    website: "#",
    foreground: "#FFFFFF",
    background: "#898A93",
  },
  {
    id: 10,
    title: "Computational Linguistics Studio",
    short:
      "Bridging linguistics and computer science to analyze and process human language.",
    lead: "Dr. Nandini Rao, D – 118",
    logo: LabLogo,
    full: "Computational Linguistics Studio develops tools and models for analyzing language data, contributing to natural language processing, machine translation, and language preservation efforts.",
    type: "teaching",
    website: "#",
    foreground: "#000000",
    background: "#D1BED5",
  },
];

const Research = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1280px)");
  const [activeTab, setActiveTab] = useState("research");
  const [expandedId, setExpandedId] = useState(null);

  const cardsContainerRef = useRef(null);
  const flipStateRef = useRef(null); // store flip state between render & GSAP callback

  // Create context-safe callback helpers
  // (We pass a config object to useGSAP below to access contextSafe)
  const { contextSafe } = useGSAP(
    () => {
      // Nothing to do on mount; animation handled in dependency update below
    },
    { scope: cardsContainerRef, dependencies: [] },
  );

  const handleExpand = contextSafe((id) => {
    // Capture BEFORE state (all cards)
    const cards = gsap.utils.toArray("[data-lab-card]");
    flipStateRef.current = Flip.getState(cards);

    // Trigger React layout change
    setExpandedId(id);
  });

  const handleCollapse = contextSafe(() => {
    const cards = gsap.utils.toArray("[data-lab-card]");
    flipStateRef.current = Flip.getState(cards);
    setExpandedId(null);
  });

  // Animate layout change whenever expandedId changes
  useGSAP(
    () => {
      if (!flipStateRef.current) return;

      Flip.from(flipStateRef.current, {
        duration: 0.3,
        ease: "power4.out",
        absolute: false,
      });

      // clear stored state so stale references aren't reused
      flipStateRef.current = null;
    },
    { scope: cardsContainerRef, dependencies: [expandedId] },
  );

  return (
    <div className="w-full font-anybody">
      <div className="texture-overlay" />
      <Navbar />
      <GridLines count={isSmallScreen ? 3 : 4} />
      <Banner
        text={activeTab === "research" ? "RESEARCH LABS" : "TEACHING LABS"}
      />
      <main className="w-[75vw] mx-[12.5vw] mt-[30px]">
        <ControlPanel activeTab={activeTab} setActiveTab={setActiveTab} />
        <section
          ref={cardsContainerRef}
          className="grid grid-cols-1 xl:grid-cols-3 divide-y divide-black/10 mt-[30px] auto-rows-auto gap-y-px xl:gap-x-px"
        >
          {dummyLabs
            .filter((lab) => lab.type === activeTab)
            .map((lab) => (
              <LabCard
                key={lab.id}
                lab={lab}
                expanded={lab.id === expandedId}
                onExpand={() => handleExpand(lab.id)}
                onCollapse={handleCollapse}
              />
            ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Research;

function Banner({ text }) {
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
    },
    { scope: bannerRef, dependencies: [text] }, // this will rerun on tab switch
  );

  return (
    <section
      ref={bannerRef}
      role="banner"
      className="relative min-h-[45vh] bg-brand-accent2"
    >
      <p className="absolute top-[84px] lg:top-[146px] xl:top-[176px] mt-[2em] right-[12.5vw] text-[12px] lg:text-[20px] text-white">
        <span className="opacity-50">RESEARCH /</span>
        <span> LABS</span>
      </p>
      <h1 className="reveal-animation-text absolute bottom-4 left-[12.5vw] text-[28px] lg:text-[72px] text-white">
        {text}
      </h1>
      <img
        src="/main-banner-back.png"
        alt="banner"
        className="w-full min-h-[45vh] object-cover"
      />
    </section>
  );
}

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
      className={`flex gap-[12px] lg:gap-[24px] items-center justify-center py-[0.5em] border border-black/30 ${
        active ? "bg-brand-accent2 text-white" : ""
      }`}
      onClick={onClick}
    >
      <Search className="w-[12px] lg:w-[16px] aspect-square h-auto" />
      <span>{text}</span>
    </button>
  );
}

function LabCard({ lab, expanded, onExpand, onCollapse }) {
  const cardRef = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        ".reveal-animation, .reveal-animation-text",
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
          duration: 0.5,
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
    { scope: cardRef, dependencies: [expanded] }, // this will rerun when this card mounts
  );

  const expanded_class = expanded ? "z-[99] xl:col-span-2 xl:row-span-2" : ``;

  return (
    <div
      data-lab-card
      ref={cardRef}
      style={
        expanded
          ? {
              backgroundColor: lab.background,
              color: lab.foreground,
            }
          : {
              backgroundColor: "white",
            }
      }
      className={`w-full flex flex-col justify-between gap-[32px] lg:gap-[48px] p-[28px] lg:p-[40px] ${expanded_class}`}
    >
      {expanded ? (
        <>
          <div className="flex flex-col gap-[18px] lg:gap-[24px]">
            <div className="flex flex-col gap-[12px] lg:gap-[16px]">
              <div className="flex items-center gap-[12px] lg:gap-[16px]">
                <img
                  className="reveal-animation-opacity-only h-[40px] lg:h-auto w-auto"
                  style={{
                    // WARNING: for now we are assuming that foreground color will be black and white
                    // if you want to change it to custom color, modify the svg or make two images and change img src
                    filter:
                      lab.foreground === "#FFFFFF" ? "invert(100%)" : "none",
                  }}
                  src={lab.logo}
                  alt={`${lab.title} logo`}
                />
                <h3 className="reveal-animation-text text-[16px] lg:text-[32px] font-medium">
                  {lab.title}
                </h3>
              </div>
              <p className="reveal-animation-text font-helvetica_now_display text-[14px] lg:text-[24px] opacity-80">
                {lab.full}
              </p>
            </div>
            <p className="reveal-animation-text text-[14px] lg:text-[24px] font-medium opacity-80">
              {lab.lead}
            </p>
          </div>
          <div className="flex justify-between flex-row-reverse flex-wrap w-full">
            <button
              type="button"
              onClick={onCollapse}
              className="reveal-animation-opacity-only flex items-center text-[14px] lg:text-[20px] gap-[0.5em]"
              aria-label={`Close ${lab.title} details`}
            >
              <span>CLOSE</span>
              <X className="w-[16px] h-[16px]" />
            </button>
            <a
              href={lab.website}
              className="reveal-animation-opacity-only text-[14px] lg:text-[20px] px-[1em] lg:px-[2em] py-[0.5em] border inline-flex gap-[16px] items-center justify-center"
              style={{
                borderColor: lab.foreground,
              }}
            >
              <span>VISIT WEBSITE</span>
              <Search className="max-lg:hidden w-[12px] lg:w-[16px] aspect-square h-auto" />
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-[18px] lg:gap-[24px]">
            <div className="flex flex-col gap-[12px] lg:gap-[16px]">
              <div className="flex items-center gap-[12px] lg:gap-[16px]">
                <img
                  className="reveal-animation-opacity-only h-[40px] lg:h-auto w-auto"
                  src={lab.logo}
                  alt={`${lab.title} logo`}
                />
                <h3 className="reveal-animation-text text-[16px] lg:text-[20px] font-medium">
                  {lab.title}
                </h3>
              </div>
              <p className="reveal-animation-text font-helvetica_now_display text-[14px] lg:text-[18px] opacity-60">
                {lab.short}
              </p>
            </div>
            <p className="reveal-animation-text text-[14px] lg:text-[18px] opacity-60">
              {lab.lead}
            </p>
          </div>
          <div className="flex justify-between flex-row-reverse flex-wrap w-full">
            <button
              type="button"
              onClick={onExpand}
              className="reveal-animation-opacity-only flex items-center text-[14px] lg:text-[18px] gap-[0.5em]"
              aria-label={`View ${lab.title} details`}
            >
              <span>VIEW DETAILS</span>
              <ArrowRight className="w-[16px] h-[16px]" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
