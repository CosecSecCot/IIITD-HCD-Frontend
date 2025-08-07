import { useRef } from "react";
import Footer from "../../components/Footer";
import GridLines from "../../components/GridLines";
import Navbar from "../../components/Navbar";
import TextReveal from "../../components/TextReveal";
import OpacityReveal from "../../components/OpacityReveal";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import { ArrowRight } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);

const projects = [
  {
    domain: "CIPD LAB",
    title: "Intelligent Product Development Research",
    description:
      "The program will prepare students to work in the IT industry as well as digital media industry like gaming, animation.",
    img: work1,
  },
  {
    domain: "CIPD LAB",
    title: "Intelligent Product Development Research",
    description:
      "The program will prepare students to work in the IT industry as well as digital media industry like gaming, animation.",
    img: work2,
  },
  {
    domain: "CIPD LAB",
    title: "Intelligent Product Development Research",
    description:
      "The program will prepare students to work in the IT industry as well as digital media industry like gaming, animation.",
    img: work3,
  },
  {
    domain: "CIPD LAB",
    title: "Intelligent Product Development Research",
    description:
      "The program will prepare students to work in the IT industry as well as digital media industry like gaming, animation.",
    img: work1,
  },
];

const OurWorkPage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1280px)");
  const containerRef = useRef();
  useGSAP(
    () => {
      const config = {
        carouselPanelSwitchThreshold: 0.25,
      };

      const stickySection = document.querySelector("#sticky-section");
      const slider = document.querySelector("#slider");
      const slidesContainer = document.querySelector("#slides");
      const slides = document.querySelectorAll(".slide");

      const stickyHeight = window.innerHeight * projects.length;
      const totalMove = slidesContainer.offsetWidth - slider.offsetWidth;
      const slideWidth = slider.offsetWidth;

      const clipPathStart = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
      const clipPathEnd = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

      gsap.set(".slide-title", {
        yPercent: 100,
        opacity: 0,
        clipPath: clipPathStart,
      });

      let currentVisibleIndex = null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const currentIndex = Array.from(slides).indexOf(entry.target);
            const titles = Array.from(slides).map((slide) =>
              slide.querySelectorAll(".slide-title"),
            );

            if (
              entry.intersectionRatio >= config.carouselPanelSwitchThreshold
            ) {
              currentVisibleIndex = currentIndex;
              titles.forEach((title, idx) => {
                gsap.to(title, {
                  yPercent: idx === currentIndex ? 0 : 100,
                  clipPath: idx === currentIndex ? clipPathEnd : clipPathStart,
                  opacity: idx === currentIndex ? 1 : 0,
                  duration: 0.5,
                  stagger: 0.1,
                  ease: "power2.out",
                  overwrite: true,
                });
              });
            } else if (
              entry.intersectionRatio < config.carouselPanelSwitchThreshold &&
              currentVisibleIndex === currentIndex
            ) {
              const previousIndex = currentIndex - 1;
              currentVisibleIndex = previousIndex >= 0 ? previousIndex : null;

              titles.forEach((title, idx) => {
                gsap.to(title, {
                  yPercent: idx === previousIndex ? 0 : 100,
                  clipPath: idx === currentIndex ? clipPathEnd : clipPathStart,
                  opacity: idx === currentIndex ? 1 : 0,
                  duration: 0.5,
                  stagger: 0.1,
                  ease: "power2.out",
                  overwrite: true,
                });
              });
            }
          });
        },
        {
          root: slider,
          threshold: [0, 0.25],
        },
      );

      slides.forEach((slide) => observer.observe(slide));

      ScrollTrigger.create({
        trigger: stickySection,
        start: "top top",
        end: `+=${stickyHeight}px`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const mainMove = progress * totalMove;
          gsap.set(slidesContainer, {
            x: -mainMove,
          });

          const currentSlide = Math.floor(mainMove / slideWidth);
          const sliderProgress = (mainMove % slideWidth) / slideWidth;

          console.log(currentSlide, sliderProgress);

          slides.forEach((slide, idx) => {
            if (idx === currentSlide || idx === currentSlide + 1) {
              const image = slide.querySelector("img");
              if (image) {
                const relativeProgress =
                  idx === currentSlide ? sliderProgress : sliderProgress - 1;
                const parallaxAmount = relativeProgress * 25;
                gsap.set(image, {
                  xPercent: parallaxAmount,
                });
              }
            }
          });
        },
        snap: {
          snapTo: 1 / (projects.length - 1),
          duration: { min: 0.2, max: 0.5 },
          ease: "power2.out",
        },
      });
    },
    {
      scope: containerRef,
      dependencies: [],
    },
  );

  return (
    <div className="w-full font-anybody">
      <div className="texture-overlay" />
      <Navbar />
      <GridLines count={isSmallScreen ? 3 : 4} />
      <div className="bg-brand-accent2 w-full h-[84px] lg:h-[146px] xl:h-[176px]" />
      <section
        ref={containerRef}
        id="sticky-section"
        className="relative bg-brand-accent2 w-[100vw] h-[100vh]"
      >
        <div className="absolute z-10 w-[50vw] xl:w-[37.5vw] top-0 right-0 p-[2em] text-right text-white bg-black/20 backdrop-blur-md">
          <TextReveal>
            <h1 className="font-medium text-[32px] lg:text-[64px] leading-none">
              Our Work
            </h1>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="font-light text-[12px] lg:text-[18px]">
              The program will prepare students to work in the IT industry as
              well as digital media industry like gaming, animation.
            </p>
          </TextReveal>
        </div>
        <div id="slider" className="relative w-full h-full overflow-hidden">
          <div
            id="slides"
            className="relative h-full flex will-change-transform"
            style={{
              width: `${projects.length * 100}%`,
              transform: "translateX(0)",
            }}
          >
            {projects.map((project, idx) => (
              <MainProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>
      <section className="my-[40px] mx-[12.5vw] space-y-[40px]">
        <section className="relative font-light p-[40px] border border-brand-accent2 bg-brand-accent2/5 backdrop-blur-lg hover:backdrop-blur-2xl">
          <TextReveal>
            <h2 className="font-medium text-[20px] lg:text-[28px] text-brand-accent2-130">
              View Student Portfolio’s
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="mt-[0.5em] text-[16px] lg:text-[18px]">
              The program will prepare students to work in the IT industry as
              well as digital media industry like gaming, animation,
              virtual/augmented reality, etc. The program will also allow
              students, who want to pursue higher studies, to take up higher
              studies in CS/IT or in Design.
            </p>
          </TextReveal>
          <OpacityReveal delay={0.4}>
            <button className="font-normal w-full xl:w-[25vw] mt-[2em] flex justify-center items-center gap-[24px] py-[0.75em] text-[12px] xl:text-[18px] bg-brand-accent2 hover:bg-brand-accent2-130/5 border border-brand-accent2-130 text-white hover:text-brand-accent2-130 transition-all duration-300">
              <span>View Portfolios</span>
              <ArrowRight className="w-[12px] lg:w-[18px] h-auto" />
            </button>
          </OpacityReveal>
        </section>
        <section>
          <TextReveal>
            <h2 className="text-[20px] lg:text-[28px]">Highlighted Projects</h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="font-light text-[16px] lg:text-[18px]">
              The program will prepare students to work in the IT industry as
              well as digital media industry like gaming, animation,
              virtual/augmented reality, etc. The program will also allow
              students.
            </p>
          </TextReveal>
          <div className="mt-[1em] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[2em]">
            {projects.map((project, idx) => (
              <SmallProjectCard key={idx} project={project} />
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};
export default OurWorkPage;

function MainProjectCard({ project }) {
  return (
    <div className="slide relative w-full h-full">
      <div className="absolute w-full h-full overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="relative w-full h-full object-cover will-change-transform scale-[1.35]"
          style={{
            transform: "translateX(0)",
          }}
        />
      </div>
      <div className="relative w-full h-full flex flex-col justify-end p-[2em] lg:p-[4em] text-white bg-gradient-to-b from-black/60 via-black/0 to-black/90">
        <p className="slide-title text-[16px] lg:text-[18px] text-white/60">
          {project.domain}
        </p>
        <h2 className="slide-title text-[18px] lg:text-[24px]">
          {project.title}
        </h2>
        <p className="slide-title font-light text-[14px] lg:text-[16px]">
          {project.description}
        </p>
      </div>
    </div>
  );
}

function SmallProjectCard({ project }) {
  return (
    <div className="md:mr-[2em] space-y-[1em]">
      <OpacityReveal>
        <div className="w-full h-auto aspect-video bg-brand-gray1/20" />
      </OpacityReveal>
      <div className="space-y-[0.25em]">
        <TextReveal delay={0.2}>
          <p className="text-[16px] lg:text-[20px] text-black/60">
            Sagar Gupta
          </p>
        </TextReveal>
        <TextReveal>
          <h3 className="font-medium text-[18px] lg:text-[24px] text-brand-accent2 leading-tight">
            {project.title}
          </h3>
        </TextReveal>
        <TextReveal delay={0.4}>
          <p className="font-light text-[14px] lg:text-[18px]">
            {project.description}
          </p>
        </TextReveal>
      </div>
      <OpacityReveal>
        <button className="font-normal w-full flex justify-center items-center gap-[24px] py-[0.75em] text-[12px] xl:text-[18px] bg-brand-accent2-130/5 hover:bg-brand-accent2 border border-brand-accent2-130 text-brand-accent2-130 hover:text-white transition-all duration-300">
          <span>View Project</span>
          <ArrowRight className="w-[12px] lg:w-[18px] h-auto" />
        </button>
      </OpacityReveal>
    </div>
  );
}
