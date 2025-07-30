import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../../components/Navbar";
import GridLines from "../../../components/GridLines";
import Banner from "../components/Banner";
import Footer from "../../../components/Footer";
import TextReveal from "../../../components/TextReveal";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { ArrowRight, Search } from "lucide-react";

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
        <TextReveal>
          <p className="text-[12px] lg:text-[16px] text-brand-accent2">
            {course.credits}
          </p>
        </TextReveal>
        <TextReveal>
          <h3 className="text-[18px] lg:text-[24px] leading-tight">
            {course.title}
          </h3>
        </TextReveal>
        <div className="mt-[1em] text-[14px] lg:text-[18px] text-brand-gray4">
          <div className="flex justify-between">
            <TextReveal>
              <p>
                <span className="text-brand-accent2">Acronym: </span>
                {course.acronym}
              </p>
            </TextReveal>
            <TextReveal>
              <p>
                <span className="text-brand-accent2 text-right">Code: </span>
                {course.code}
              </p>
            </TextReveal>
          </div>
          <div className="flex justify-between">
            <TextReveal>
              <p>
                <span className="text-brand-accent2">Prerequisites: </span>
                {course.prerequisites}
              </p>
            </TextReveal>
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
