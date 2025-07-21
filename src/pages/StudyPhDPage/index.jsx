import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import gradientRing from "../../assets/gradient-ring.svg"; // <-- Your quarter arc SVG
import leftrectangleLine from "../../assets/leftRectangle.svg";
import rightrectangleLine from "../../assets/rightRectangle.svg";
import Footer from "../../components/Footer";
import { ArrowLeft } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const CourseDirectory = () => {
  return (
    <div className="relative min-h-screen font-anybody bg-white overflow-x-hidden">
      <div className="texture-overlay" />
      <div className="background-element z-10" />
      <Navbar type="solid" />
      <Banner
        title={"Human Centered Design"}
        subtitle={"Doctor of Philosophy  |  PhD"}
        sideText={
          "Design tomorrow's information technology products, services and systems which combine emerging technologies"
        }
      />

      {/* PhD Section */}
      <div className="relative z-10 w-full pb-20 pt-10 bg-white ">
        {/* Replace Image Heading with this custom line-heading */}
        <div className="w-full flex items-baseline mb-10 px-[0px]">
          <img
            src={leftrectangleLine}
            alt="Left Line"
            className="h-auto w-[200px] mr-auto"
          />

          <h2 className="text-[45px] font-light text-black tracking-wide">
            Study <span className="text-[#0b5e5e] font-semibold">PhD</span>{" "}
            @IIITD
          </h2>

          <img
            src={rightrectangleLine}
            alt="Right Line"
            className="h-auto w-[960px] ml-auto"
          />
        </div>

        <div className="px-[160px] ml-[600px]">
          <p className="text-[17px] text-[#333] font-light leading-[1.8] max-w-[780px] text-left">
            The PhD program at IIIT-Delhi is focused towards research like any
            other PhD program – limited coursework to enhance the breadth and
            depth of a student, followed by focused research. Admissions are
            made through regular admission process as well as rolling mode.
            Regular admissions for all disciplines are made in March-April and
            Nov-Dec every year. For rolling admission, the interested candidates
            are expected to interact with the concerned faculty member(s) in
            IIIT- Delhi and get their consent for working with him/her. However,
            such candidates will undergo a full selection process before being
            admitted to the PhD program.
          </p>
        </div>
      </div>

      {/* View Courses Cards */}
      <div className="relative z-10 bg-white px-[160px] py-10">
        <div className="flex gap-6 w-full">
          {/* Card 1 */}
          <div
            className="border border-[#9fc5c5] px-12 py-10 w-1/2 relative overflow-hidden shadow-sm min-h-[320px] flex flex-col justify-center"
            style={{ backgroundColor: "rgba(9, 105, 100, 0.1)" }}
          >
            {/* Quarter Arc SVG */}
            <img
              src={gradientRing}
              alt="Quarter Arc"
              className="absolute right-[-60px] bottom-[-80px] w-[300px] opacity-80 pointer-events-none"
            />

            <div className="relative z-10">
              <p className="text-[14px] text-gray-800 mb-1">
                Bachelor’s Degree
              </p>
              <h3 className="text-[34px] text-[#0b5e5e] font-bold leading-snug mb-4">
                View Courses
              </h3>
              <p className="text-[17px] text-gray-800 font-normal mb-10">
                The first level of the university system:
                <br />
                three-year study courses.
              </p>
              <button className="text-[13px] font-bold text-black uppercase tracking-wide flex items-center gap-1">
                View Details <span className="text-[18px]">→</span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="border border-[#9fc5c5] px-12 py-10 w-1/2 relative overflow-hidden shadow-sm min-h-[320px] flex flex-col justify-center"
            style={{ backgroundColor: "rgba(9, 105, 100, 0.1)" }}
          >
            {/* Quarter Arc SVG */}
            <img
              src={gradientRing}
              alt="Quarter Arc"
              className="absolute right-[-60px] bottom-[-80px] w-[300px] opacity-80 pointer-events-none"
            />

            <div className="relative z-10">
              <p className="text-[14px] text-gray-800 mb-1">
                Bachelor’s Degree
              </p>
              <h3 className="text-[34px] text-[#0b5e5e] font-bold leading-snug mb-4">
                View Courses
              </h3>
              <p className="text-[17px] text-gray-800 font-normal mb-10">
                The first level of the university system:
                <br />
                three-year study courses.
              </p>
              <button className="text-[13px] font-bold text-black uppercase tracking-wide flex items-center gap-1">
                View Details <span className="text-[18px]">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CourseDirectory;

function Banner({ title, subtitle, sideText }) {
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

      gsap.from(".reveal-animation-opacity-only", {
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: "expo.out",
      });
    },
    { scope: bannerRef }, // this will rerun on tab switch
  );

  return (
    <section
      ref={bannerRef}
      role="banner"
      className="relative z-20 min-h-[40vh] lg:min-h-[70vh]"
    >
      <div className="absolute z-10 top-[50%]  w-[75vw] mx-[12.5vw] flex justify-between items-center">
        <div className="flex-shrink-0">
          <a
            href=""
            className="reveal-animation-opacity-only flex gap-[0.5em] text-[12px] lg:text-[20px] text-brand-accent2-130"
          >
            <ArrowLeft className="w-[14px] lg:w-[24px] h-auto" />
            <span>Go Back</span>
          </a>
          <div className="reveal-animation-text mt-[24px] lg:mt-[40px] leading-tight">
            <p className="text-[16px] lg:text-[26px] text-brand-accent2-130">
              {subtitle}
            </p>
            <h1 className="font-light text-[28px] lg:text-[48px]">{title}</h1>
          </div>
        </div>
        <blockquote className="reveal-animation-opacity-only max-xl:hidden italic font-light text-right flex-shrink w-1/3">
          "{sideText}"
        </blockquote>
      </div>
      <img
        src="/banner-2.svg"
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
}
