import React, { useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import GridLines from "../../components/GridLines";
import project1 from "../../assets/project-1.png";
import project2 from "../../assets/project-2.png";
import project3 from "../../assets/project-3.png";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import { ArrowRight, X } from "lucide-react";
import Footer from "../../components/Footer";

gsap.registerPlugin(Flip, useGSAP);

const projects = [
  {
    id: 1,
    title: "AI Empowered Attention Evaluation among Children with ADHD",
    description:
      "We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful.",
    source: "TIH-Anubhuti",
    faculty: "Dr. Jainendra Shukla",
    duration: "September 2021 - August 2024",
    imageUrl: project1,
    fullDescription: `Specific Learning Disabilities (SLDs) conditions manifest as a deficit in processing language, spoken or written, that may manifest itself as a difficulty to comprehend, speak, read, write, spell, or to do mathematical calculations and includes such conditions as perceptual disabilities, dyslexia, dysgraphia, dyscalculia, dyspraxia, and developmental aphasia. The cognitive flexibility associated with SLDs can manifest itself in noteworthy talents, which include a multi-sensory lens for creative and lateral thinking, resulting in out-of-the-box solutions for problems. The untapped potential of SLDs causes a high opportunity cost for the Nation’s progress. However, children with SLDs experience repeated failures and poor performance despite their continuous efforts and practice in learning. At the same time, worldwide, the condition will SLDs has been exacerbated due to the COVID-19 pandemic when education delivery shifted online. Thus, strengthening online education delivery will be important and impacting. However, research has indicated that educators might not always be aware of their students’ attentional focus, and this may be particularly true for novice teachers. The aim of this project is to develop an AI-empowered tool that will offer personalized, monitored, and evidence-based identification of attention levels among children with SLD. The project will first develop a multimodal dataset of audio-visual and physiological signals among 150 children with SLD to understand the attention and engagement of children with SLD during digital learning. It will further perform a systematic comparison of physiological, audio-visual, and eye-dilation signals for the attention monitoring of children with SLD to identify the valid indicators of attention. Based on these, the project will develop an AI-empowered system for real-time continuous monitoring of attention among children with SLD. Finally, the project will deploy and evaluate the efficacy of the developed AI-empowered system among 50 children with SLD and 25 typically developing children in naturalistic settings. Once validated the findings of this project can improve and monitor the attention of children with SLDs and can play a significant role in their inclusion during digital learning.`,
  },
  {
    id: 2,
    title: "AI Empowered Attention Evaluation among Children with ADHD",
    description:
      "We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful.",
    source: "TIH-Anubhuti",
    faculty: "Dr. Jainendra Shukla",
    duration: "September 2021 - August 2024",
    imageUrl: project2,
    fullDescription: `Specific Learning Disabilities (SLDs) conditions manifest as a deficit in processing language, spoken or written, that may manifest itself as a difficulty to comprehend, speak, read, write, spell, or to do mathematical calculations and includes such conditions as perceptual disabilities, dyslexia, dysgraphia, dyscalculia, dyspraxia, and developmental aphasia. The cognitive flexibility associated with SLDs can manifest itself in noteworthy talents, which include a multi-sensory lens for creative and lateral thinking, resulting in out-of-the-box solutions for problems. The untapped potential of SLDs causes a high opportunity cost for the Nation’s progress. However, children with SLDs experience repeated failures and poor performance despite their continuous efforts and practice in learning. At the same time, worldwide, the condition will SLDs has been exacerbated due to the COVID-19 pandemic when education delivery shifted online. Thus, strengthening online education delivery will be important and impacting. However, research has indicated that educators might not always be aware of their students’ attentional focus, and this may be particularly true for novice teachers. The aim of this project is to develop an AI-empowered tool that will offer personalized, monitored, and evidence-based identification of attention levels among children with SLD. The project will first develop a multimodal dataset of audio-visual and physiological signals among 150 children with SLD to understand the attention and engagement of children with SLD during digital learning. It will further perform a systematic comparison of physiological, audio-visual, and eye-dilation signals for the attention monitoring of children with SLD to identify the valid indicators of attention. Based on these, the project will develop an AI-empowered system for real-time continuous monitoring of attention among children with SLD. Finally, the project will deploy and evaluate the efficacy of the developed AI-empowered system among 50 children with SLD and 25 typically developing children in naturalistic settings. Once validated the findings of this project can improve and monitor the attention of children with SLDs and can play a significant role in their inclusion during digital learning.`,
  },
  {
    id: 3,
    title: "AI Empowered Attention Evaluation among Children with ADHD",
    description:
      "We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful.",
    source: "TIH-Anubhuti",
    faculty: "Dr. Jainendra Shukla",
    duration: "September 2021 - August 2024",
    imageUrl: project3,
    fullDescription: `Specific Learning Disabilities (SLDs) conditions manifest as a deficit in processing language, spoken or written, that may manifest itself as a difficulty to comprehend, speak, read, write, spell, or to do mathematical calculations and includes such conditions as perceptual disabilities, dyslexia, dysgraphia, dyscalculia, dyspraxia, and developmental aphasia. The cognitive flexibility associated with SLDs can manifest itself in noteworthy talents, which include a multi-sensory lens for creative and lateral thinking, resulting in out-of-the-box solutions for problems. The untapped potential of SLDs causes a high opportunity cost for the Nation’s progress. However, children with SLDs experience repeated failures and poor performance despite their continuous efforts and practice in learning. At the same time, worldwide, the condition will SLDs has been exacerbated due to the COVID-19 pandemic when education delivery shifted online. Thus, strengthening online education delivery will be important and impacting. However, research has indicated that educators might not always be aware of their students’ attentional focus, and this may be particularly true for novice teachers. The aim of this project is to develop an AI-empowered tool that will offer personalized, monitored, and evidence-based identification of attention levels among children with SLD. The project will first develop a multimodal dataset of audio-visual and physiological signals among 150 children with SLD to understand the attention and engagement of children with SLD during digital learning. It will further perform a systematic comparison of physiological, audio-visual, and eye-dilation signals for the attention monitoring of children with SLD to identify the valid indicators of attention. Based on these, the project will develop an AI-empowered system for real-time continuous monitoring of attention among children with SLD. Finally, the project will deploy and evaluate the efficacy of the developed AI-empowered system among 50 children with SLD and 25 typically developing children in naturalistic settings. Once validated the findings of this project can improve and monitor the attention of children with SLDs and can play a significant role in their inclusion during digital learning.`,
  },
];

const DepartmentProjects = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1280px)");
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
    const cards = gsap.utils.toArray("[data-project-card]");
    flipStateRef.current = Flip.getState(cards);

    // Trigger React layout change
    setExpandedId(id);
  });

  const handleCollapse = contextSafe(() => {
    const cards = gsap.utils.toArray("[data-project-card]");
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
      <Banner text={"DEPARTMENT PROJECTS"} />
      <main className="w-[75vw] mx-[12.5vw] mt-[30px]">
        <section
          ref={cardsContainerRef}
          className="grid grid-cols-1 xl:grid-cols-3 divide-y divide-black/10 mt-[30px] auto-rows-auto gap-y-px xl:gap-x-px"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              expanded={project.id === expandedId}
              onExpand={() => handleExpand(project.id)}
              onCollapse={handleCollapse}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default DepartmentProjects;

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
        <span> PROJECTS</span>
      </p>
      <h1 className="reveal-animation-text absolute bottom-4 left-[12.5vw] max-w-[75vw] text-[28px] lg:text-[72px] text-white">
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

function ProjectCard({ project, expanded, onExpand, onCollapse }) {
  const cardRef = useRef();
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");

  useGSAP(
    () => {
      gsap.set(".reveal-animation, .reveal-animation-text", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });

      gsap.from(".reveal-animation, .reveal-animation-text", {
        y: "10%",
        opacity: 0,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        stagger: 0.1,
        duration: 0.5,
        ease: "expo.out",
      });

      gsap.from(".reveal-animation-opacity-only", {
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: "expo.out",
      });
    },
    { scope: cardRef, dependencies: [expanded] }, // this will rerun when this card mounts
  );

  const expandedClass = expanded
    ? "z-[99] xl:col-span-3 xl:row-span-2 bg-brand-accent2 text-white"
    : "";
  return (
    <div
      data-project-card
      ref={cardRef}
      className={`w-full flex gap-[28px] lg:gap-[40px] p-[28px] lg:p-[40px] ${expandedClass}`}
      style={{
        flexDirection: expanded && !isSmallScreen ? "row" : "column",
      }}
    >
      {expanded ? (
        <>
          <div className="reveal-animation-opacity-only w-full lg:max-w-[25%]">
            <img
              className="w-full h-full object-cover"
              src={project.imageUrl}
              alt=""
            />
          </div>
          <div className="w-full flex flex-col justify-between gap-[32px] lg:gap-[48px]">
            <div className="flex flex-col gap-[12px] lg:gap-[16px]">
              <div className="flex flex-col gap-[16px] lg:gap-[24px]">
                <h3 className="reveal-animation-text text-[16px] lg:text-[32px] font-medium">
                  {project.title}
                </h3>
                <div className="reveal-animation-text flex gap-[12px] lg:gap-[32px] flex-wrap">
                  <div>
                    <h4 className="text-[14px] lg:text-[16px] opacity-80">
                      Faculty Name
                    </h4>
                    <p className="text-[16px] lg:text-[18px] font-medium">
                      {project.faculty}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[14px] lg:text-[16px] opacity-80">
                      Project Funding
                    </h4>
                    <p className="text-[16px] lg:text-[18px] font-medium">
                      {project.source}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[14px] lg:text-[16px] opacity-80">
                      Duration
                    </h4>
                    <p className="text-[16px] lg:text-[18px] font-medium">
                      {project.duration}
                    </p>
                  </div>
                </div>
              </div>
              <p className="reveal-animation-text font-helvetica_now_display text-[14px] lg:text-[16px] opacity-80">
                {project.fullDescription}
              </p>
            </div>
            <div className="flex justify-end w-full">
              <button
                type="button"
                onClick={onCollapse}
                className="reveal-animation-opacity-only flex items-center text-[14px] lg:text-[20px] gap-[0.5em]"
                aria-label={`Close ${project.title} details`}
              >
                <span>CLOSE</span>
                <X className="w-[16px] h-[16px]" />
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="reveal-animation-opacity-only w-full">
            <img
              className="w-full h-full object-cover"
              src={project.imageUrl}
              alt=""
            />
          </div>
          <div className="w-full flex flex-col justify-between gap-[32px] lg:gap-[48px]">
            <div className="flex flex-col gap-[18px] lg:gap-[24px]">
              <div className="flex flex-col gap-[12px] lg:gap-[16px]">
                <div className="flex flex-col gap-[12px] lg:gap-[16px]">
                  <h3 className="reveal-animation-text text-[16px] lg:text-[20px] font-medium">
                    {project.title}
                  </h3>
                </div>
                <p className="reveal-animation-text font-helvetica_now_display text-[14px] lg:text-[18px] opacity-60">
                  {project.description}
                </p>
              </div>
              <p className="reveal-animation-text text-[14px] lg:text-[18px] opacity-60">
                {project.source}
              </p>
            </div>
            <div className="flex justify-end w-full">
              <button
                type="button"
                onClick={onExpand}
                className="reveal-animation-opacity-only flex items-center text-[14px] lg:text-[18px] gap-[0.5em]"
                aria-label={`View ${project.title} details`}
              >
                <span>VIEW DETAILS</span>
                <ArrowRight className="w-[16px] h-[16px]" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
