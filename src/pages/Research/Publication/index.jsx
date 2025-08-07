import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../../../components/Navbar";
import GridLines from "../../../components/GridLines";
import Footer from "../../../components/Footer";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { ArrowRight, ChevronDown } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const PublicationPage = () => {
  const isSmallScreen = useMediaQuery("(max-width:1280px)");
  const [publications, setPublications] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/publications?populate=*")
      .then((res) => {
        const normalized = res.data.data.map((item) => ({
          id: item.id,
          year: new Date(item.Date).getFullYear(),
          faculties: item.Faculties.map((faculty) => faculty.Name),
          title: item.Title,
          description: item.LongDescription,
          tags: item.Tags.map((tag) => tag.Tag),
          link: item.Link,
        }));
        console.log(normalized);
        setPublications(normalized);
      })
      .then(() => {})
      .catch(console.error);

    setYears(
      [...new Set(publications.map((pub) => pub.year))].sort((a, b) => b - a),
    );
  }, [publications, years]);

  const pubOptions = useMemo(
    () => ["ALL PUBLICATIONS", ...years.map((y) => `${y} PUBLICATIONS`)],
    [years],
  );

  const resOptions = useMemo(
    () => [
      "RESEARCH AREA",
      ...Array.from(new Set(publications.flatMap((pub) => pub.tags))),
    ],
    [publications],
  );

  // Filter state
  const [search, setSearch] = useState("");
  const [selectedPub, setSelectedPub] = useState("ALL PUBLICATIONS");
  const [selectedGenre, setSelectedGenre] = useState("GENRE");
  const [selectedRes, setSelectedRes] = useState("RESEARCH AREA");

  const filtered = useMemo(() => {
    return publications
      .filter((pub) =>
        pub.title.toLowerCase().includes(search.trim().toLowerCase()),
      )
      .filter((pub) =>
        selectedPub === "ALL PUBLICATIONS"
          ? true
          : pub.year === parseInt(selectedPub),
      )
      .filter((pub) =>
        selectedRes === "RESEARCH AREA" ? true : pub.tags.includes(selectedRes),
      );
  }, [publications, search, selectedPub, selectedRes]);

  return (
    <div className="w-full font-anybody">
      <Navbar />
      <div className="texture-overlay" />
      <GridLines count={isSmallScreen ? 3 : 4} />
      <Banner text="PUBLICATIONS" />
      <main className="w-[75vw] mx-[12.5vw] mt-[30px] mb-[10vh]">
        <div className="grid grid-cols-1 xl:grid-cols-3">
          <div className="col-span-full">
            <p className="text-[24px]">Search</p>
            <input
              type="text"
              placeholder="Enter Course Name or Code..."
              className="w-full mt-[0.25em] mb-[1em] px-[1.75em] py-[0.5em] border border-black/30 text-[16px]"
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
          </div>
          <Dropdown
            label="ALL PUBLICATIONS"
            options={pubOptions}
            selected={selectedPub}
            setSelected={setSelectedPub}
          />
          <Dropdown
            label="GENRE"
            options={["GENRE", "Journal", "Conference", "Book", "Other"]}
            selected={selectedGenre}
            setSelected={setSelectedGenre}
          />
          <Dropdown
            label="RESEARCH AREA"
            options={resOptions}
            selected={selectedRes}
            setSelected={setSelectedRes}
          />
        </div>
        <div className="mt-[30px] space-y-[5em]">
          {years.map((year) => {
            const pubsThisYear = filtered.filter((p) => p.year === year);
            if (!pubsThisYear.length) return null;

            return (
              <section key={year}>
                <h2 className="font-medium text-[28px] lg:text-[42px] text-brand-accent2">
                  | {year}
                </h2>
                <div className="">
                  {pubsThisYear.map((pub) => (
                    <PublicationCard key={pub.id} pub={pub} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PublicationPage;

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
    { scope: bannerRef, dependencies: [text] },
  );

  return (
    <section
      ref={bannerRef}
      role="banner"
      className="relative min-h-[45vh] bg-brand-accent2"
    >
      <p className="absolute top-[84px] lg:top-[146px] xl:top-[176px] mt-[2em] right-[12.5vw] text-[12px] lg:text-[20px] text-white">
        <span className="opacity-50">RESEARCH /</span>
        <span> PUBLICATIONS</span>
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

function Dropdown({ label, options, selected, setSelected }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full">
      <button
        type="button"
        className="relative w-full px-[2em] py-[1em] border border-brand-gray1 flex items-center justify-center text-[12px] lg:text-[18px] uppercase"
        onClick={() => setOpen((o) => !o)}
      >
        {selected || label}

        <ChevronDown
          className={`absolute top-[calc(50%-9px)] lg:top-[calc(50%-12px)] right-[1em] w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] ml-2 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul className="absolute z-[9995] left-0 w-full bg-white border border-black/30">
          {options.map((opt) => (
            <li
              key={opt}
              className={`px-[2em] py-[1em] hover:bg-brand-gray1/30 cursor-pointer text-[12px] lg:text-[18px] uppercase ${selected === opt ? "bg-brand-gray1/50" : ""}`}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function PublicationCard({ pub }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative z-[9990] px-[2em] py-[1.5em] lg:px-[4em] lg:py-[2.5em] border border-black/20 backdrop-blur-sm">
      <span className="uppercase text-[14px] lg:text-[18px] text-brand-accent2">
        {pub.faculties[0]}
      </span>
      <h3 className="reveal-animation-text text-[16px] lg:text-[20px] font-medium">
        {pub.title}
      </h3>
      <p
        className={`font-helvetica_now_display mt-[6px] lg:mt-[8px] text-[14px] lg:text-[18px] leading-tight opacity-60 transition-all duration-300 ${
          expanded ? "" : "line-clamp-2"
        }`}
      >
        {pub.description}
      </p>

      <button
        className="font-helvetica_now_display lg:mt-[8px] text-[14px] lg:text-[18px] text-brand-accent1 underline"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-controls={`desc-${pub.id}`}
      >
        {expanded ? "Show Less" : "Read More..."}
      </button>

      <div className="flex justify-between flex-wrap gap-[2em] w-full mt-[2em]">
        <div className="flex gap-[1em] flex-wrap">
          {pub.tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-block uppercase text-[14px] lg:text-[18px] bg-brand-accent2 text-white px-[1.5em] py-[0.5em] cursor-pointer hover:bg-brand-accent2-130"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={pub.link}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal-animation-opacity-only flex items-center text-[14px] lg:text-[18px] gap-[0.5em]"
        >
          <span>VIEW DETAILS</span>
          <ArrowRight className="w-[16px] h-[16px]" />
        </a>
      </div>
    </div>
  );
}
