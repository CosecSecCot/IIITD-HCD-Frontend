import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Footer from "../../components/Footer";
import GridLines from "../../components/GridLines";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const CourseDirectory = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1280px)");
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("DES");

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("/courses.json")
      .then((response) => {
        const data = response.data.data; // Adjust if response structure differs
        const formatted = data.map((course, index) => {
          const [name, link] = course["Course Name"].split(
            "#http://127.0.0.1:5000/",
          );
          const cluster = course["Cluster"];
          return {
            id: index + 1,
            credits: `${course["Credits"]} Credit course`,
            title: name,
            cluster: cluster == "HCD" || cluster == "CSD" ? "DES" : cluster,
            acronym: course["Course Acronym"],
            code: course["Course Code"],
            prerequisites: course["Prerequisites"],
            url: "https://techtree.iiitd.edu.in/" + link,
          };
        });
        setCourses(formatted);
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
      });
  }, []);

  return (
    <div className="w-full font-anybody">
      <div className="texture-overlay" />
      <div className="background-element translate-y-[30vh]" />
      <Navbar type="solid" />
      <GridLines count={isSmallScreen ? 3 : 4} />
      <Banner
        title={"Course Directory"}
        subtitle={"B.Tech & PhD Options"}
        sideText={
          "Design tomorrow's information technology products, services and systems which combine emerging technologies"
        }
      />
      <main className="w-[75vw] mx-[12.5vw] mt-[30px]">
        <ControlPanel
          setSearch={setSearch}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-[30px]">
          {courses
            .filter((course) => course.cluster === activeTab)
            .filter((course) => course.title.toLowerCase().includes(search))
            .map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
        </section>
      </main>
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
      className="relative min-h-[40vh] lg:min-h-[70vh]"
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

function ControlPanel({ setSearch, activeTab, setActiveTab }) {
  return (
    <div
      className={`grid grid-cols-2 xl:grid-cols-3 grid-rows-1 text-[12px] lg:text-[18px]`}
      role="tablist"
    >
      <div className="col-span-full">
        <p className="text-[24px]">Search</p>
        <input
          type="text"
          placeholder="Enter Course Name or Code..."
          className="w-full mt-[0.25em] mb-[1em] px-[1.75em] py-[0.5em] border border-black/30 text-[16px]"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>
      <ControlPanelTabButton
        text="DES Courses"
        active={activeTab === "DES"}
        onClick={() => setActiveTab("DES")}
      />
      <ControlPanelTabButton
        text="CSE Courses"
        active={activeTab === "CSE"}
        onClick={() => setActiveTab("CSE")}
      />
      <ControlPanelTabButton
        text="SSH Courses"
        active={activeTab === "SSH"}
        onClick={() => setActiveTab("SSH")}
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

function CourseCard({ course }) {
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
    { scope: cardRef }, // this will rerun when this card mounts
  );
  return (
    <div
      ref={cardRef}
      className="w-full flex flex-col justify-between gap-[32px] lg:gap-[48px] p-[28px] lg:p-[40px] border border-brand-accent2/25 bg-brand-accent2/[0.02] backdrop-blur-md hover:backdrop-blur-2xl hover:bg-brand-accent2/5"
    >
      <div>
        <p className="reveal-animation-text text-[12px] lg:text-[16px] text-brand-accent2">
          {course.credits}
        </p>
        <h3 className="reveal-animation-text text-[18px] lg:text-[24px] leading-tight">
          {course.title}
        </h3>
        <div className="reveal-animation-text mt-[1em] text-[14px] lg:text-[18px] text-brand-gray4">
          <div className="flex justify-between">
            <p>
              <span className="text-brand-accent2">Acronym: </span>
              {course.acronym}
            </p>
            <p>
              <span className="text-brand-accent2 text-right">Code: </span>
              {course.code}
            </p>
          </div>
          <div className="flex justify-between">
            <p>
              <span className="text-brand-accent2">Prerequisites: </span>
              {course.prerequisites}
            </p>
          </div>
        </div>
      </div>
      <div className="reveal-animation-opacity-only flex justify-between flex-row-reverse flex-wrap w-full text-brand-accent2-130">
        <a
          href={course.url}
          target="_blank"
          className="reveal-animation-opacity-only flex items-center text-[14px] lg:text-[18px] gap-[0.5em]"
        >
          <span>VIEW DETAILS</span>
          <ArrowRight className="w-[16px] h-[16px]" />
        </a>
      </div>
    </div>
  );
}
