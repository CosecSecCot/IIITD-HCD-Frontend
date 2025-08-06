import { useState } from "react";
import Navbar from "../../components/Navbar";
import PageReveal from "../../components/PageReveal";
import Footer from "../../components/Footer";
import GridLines from "../../components/GridLines";
import TextReveal from "../../components/TextReveal";
import OpacityReveal from "../../components/OpacityReveal";
import StatsBlock from "../_components/StatsBlock";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import home1 from "../../assets/home-1.png";
import home2 from "../../assets/home-2.png";
import { ArrowRight } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const tabs = [
  {
    id: "Newcomers",
    label: (
      <>
        Designed for <br /> Newcomers
      </>
    ),
  },
  {
    id: "Students",
    label: (
      <>
        Designed for <br /> Students
      </>
    ),
  },
  {
    id: "Collaborators",
    label: (
      <>
        Designed for <br /> Collaborators
      </>
    ),
  },
];
const content = {
  Hero: [
    {
      id: 7,
      For: "Newcomers",
      Subtitle: "Human Centred Design",
      Title: "Where Creativity Meets Innovation.",
      ShortDescription:
        "We are a collective of diverse thinkers reimagining how human-technology interactions.",
      Link: "/study/btech",
    },
    {
      id: 8,
      For: "Students",
      Subtitle: "Shaping the Future",
      Title: "Equipping Students for Real-World Impact.",
      ShortDescription:
        "With hands-on learning, interdisciplinary projects, and mentorship, students thrive as critical thinkers and makers.",
      Link: "/study/btech",
    },
    {
      id: 9,
      For: "Collaborators",
      Subtitle: "Partner With Us",
      Title: "Designed for Collaborators",
      ShortDescription:
        "Work with our faculty, students, and researchers to solve problems  at the intersection of design, tech, and society.",
      Link: "/study/btech",
    },
  ],
};

function HomePage() {
  const isSmallScreen = useMediaQuery("(max-width: 1280px)");
  const [revealAnimationComplete, setRevealAnimationComplete] = useState(false);
  const [activeTab, setActiveTab] = useState("Newcomers");

  useGSAP(() => {
    const timeline = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 2 },
    });

    if (!revealAnimationComplete) {
      timeline.to("#page-reveal-container", {
        y: "-100%",
        delay: 3,
        onComplete: () => setRevealAnimationComplete(true),
      });
    }
  });

  return (
    <>
      {/* revealAnimationComplete ? "" : <PageReveal /> */}
      <div className="background-element font-anybody">
        <Navbar type="solid" />
        <GridLines count={isSmallScreen ? 3 : 4} />
        <div className="texture-overlay" />
        <main className="mt-[84px] lg:mt-[146px] xl:mt-[176px]">
          <section className="pt-[100px] mx-[12.5vw] flex max-[1630px]:flex-col justify-between gap-[2em]">
            {tabs.map((tab) => {
              const currentHero = content?.Hero?.find(
                (entry) => entry.For === activeTab,
              );

              return (
                activeTab === tab.id && (
                  <>
                    <div>
                      <TextReveal>
                        <h2 className="font-light text-[24px] lg:text-[32px] text-brand-accent2">
                          {currentHero.Subtitle}
                        </h2>
                      </TextReveal>
                      <TextReveal delay={0.2}>
                        <h1 className="font-light text-[60px] lg:text-[86px] leading-tight">
                          {currentHero.Title}
                        </h1>
                      </TextReveal>
                      <TextReveal delay={0.4}>
                        <blockquote className="mt-[1em] font-light italic text-[18px] lg:text-[24px]">
                          {currentHero.ShortDescription}
                        </blockquote>
                      </TextReveal>
                    </div>
                    <div className="flex flex-col items-end space-y-[1em]">
                      <div className="flex gap-[1em]">
                        <CoverImage src={home1} alt="Home1" />
                        <CoverImage src={home2} alt="Home1" />
                      </div>
                      <StatsBlock
                        stats={[
                          { label: "ALUMNI", value: "2000+" },
                          { label: "STUDENTS", value: "2000+" },
                          { label: "FACULTY", value: "200+" },
                        ]}
                      />
                      <OpacityReveal duration={0.5}>
                        <a
                          href={currentHero.Link}
                          className="font-normal w-max flex justify-center items-center gap-[24px] px-[1.5em] py-[1em] text-[12px] xl:text-[18px] bg-brand-accent2 hover:bg-brand-accent2-130/5 border border-brand-accent2 text-white hover:text-brand-accent2 transition-all duration-300"
                        >
                          <span>View Study Options</span>
                          <ArrowRight className="w-[12px] lg:w-[18px] h-auto" />
                        </a>
                      </OpacityReveal>
                    </div>
                  </>
                )
              );
            })}
          </section>

          <section className="relative mt-[40px] mx-[12.5vw] w-[75vw] xl:w-[50vw]">
            <div className="absolute inset-0 w-full h-1 overflow-hidden">
              <div className="absolute inset-0 w-full h-[2px] bg-brand-gray1" />
              <div
                className="absolute inset-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-accent2 to-transparent will-change-transform"
                style={{
                  transform: `translateX(${
                    {
                      Newcomers: "-50%",
                      Students: "0%",
                      Collaborators: "50%",
                    }[activeTab]
                  })`,
                }}
              />
            </div>
            <div className="w-full flex justify-between -translate-y-[calc(50%-2px)]">
              {tabs.map((tab, idx) => (
                <ControlPanelTabButton
                  key={idx}
                  text={tab.label}
                  active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                />
              ))}
            </div>
          </section>

          <section className="mx-[12.5vw] my-[64px] lg:my-[120px] space-y-[3em]">
            <TextReveal>
              <h2 className="text-[56px] lg:text-[80px]">
                The Department of <br />{" "}
                <span className="text-brand-accent2">Human Centred Design</span>
              </h2>
            </TextReveal>
            <TextReveal>
              <p className="ml-auto w-2/3 font-light text-right text-[22px] lg:text-[30px]">
                We are a collective of diverse thinkers reimagining how{" "}
                <span className="font-normal text-brand-accent2">
                  human-technology interactions
                </span>{" "}
                can be seamless and meaningful. We are a collective of diverse
                thinkers reimagining how human-technology interactions.
              </p>
            </TextReveal>
            <section className="flex flex-wrap justify-between gap-[2em] lg:gap-[5em] px-[3em] py-[1.5em] bg-brand-accent2-130/5 border border-brand-accent2 max-xl:border-r-brand-accent2">
              {[
                { label: "ALUMNI", value: "2000+" },
                { label: "STUDENTS", value: "2000+" },
                { label: "PAPERS", value: "20+" },
                { label: "FACULTY", value: "200+" },
              ].map((stat, idx) => (
                <div key={idx} className="leading-tight">
                  <TextReveal delay={0.3}>
                    <p className="text-[14px] lg:text-[30px] uppercase opacity-60">
                      {stat.label}
                    </p>
                  </TextReveal>
                  <TextReveal delay={0.3}>
                    <h2 className="text-[37px] lg:text-[80px] font-medium text-brand-accent2">
                      {stat.value}
                    </h2>
                  </TextReveal>
                </div>
              ))}
            </section>
            <div className="flex max-lg:flex-col justify-between gap-[1em] lg:gap-[8em]">
              <TextReveal>
                <p className="lg:w-1/2 font-light text-[22px] lg:text-[30px]">
                  We are a collective of diverse thinkers reimagining how{" "}
                  <span className="font-normal text-brand-accent2">
                    human-technology interactions
                  </span>{" "}
                  can be seamless and meaningful. We are a collective of diverse
                  thinkers reimagining how human-technology interactions.
                </p>
              </TextReveal>
              <TextReveal>
                <p className="lg:w-1/2 text-right text-[40px] lg:text-[58px] leading-tight">
                  Welcome to a new era of HCD, powered{" "}
                  <span className="font-light italic text-brand-accent2">
                    by you.
                  </span>
                </p>
              </TextReveal>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
export default HomePage;

function CoverImage({ src, alt }) {
  return (
    <div className="relative w-[375px] h-auto aspect-square border-2 border-brand-accent2 group">
      <div className="absolute z-10 inset-0 w-full h-full bg-brand-accent2/30 group-hover:opacity-0 transition-all duration-300" />
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  );
}

function ControlPanelTabButton({ text, active, onClick }) {
  return (
    <button className="relative" onClick={onClick}>
      <div
        className={`h-[1em] rounded-full transition-all duration-300 ${
          active ? "w-[3em] bg-brand-accent2" : "w-[1.5em] bg-brand-gray1"
        }`}
      />
      <span
        className={`w-max absolute top-[1em] -translate-x-[calc(50%-0.5em)] ${active ? "text-brand-accent2" : "text-brand-gray1"}`}
      >
        {text}
      </span>
    </button>
  );
}
