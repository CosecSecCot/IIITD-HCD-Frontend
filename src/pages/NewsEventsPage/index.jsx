import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import GridLines from "../../components/GridLines";
import Footer from "../../components/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import panel from "../../assets/rightPanel.png";

// Replace these with actual image imports
import mainEventImage from "../../assets/main-event.jpg";
import thumbImage from "../../assets/thumb-event.png";

const eventsData = [
  {
    date: "January 2024",
    title: "1Pixel Design Conference '24 at IIIT-Delhi Shaping the Future",
    description:
      "Admission to this program will be through two channels - approximately half of the.",
    image: thumbImage,
  },
  {
    date: "January 2024",
    title: "1Pixel Design Conference '24 at IIIT-Delhi Shaping the Future",
    description:
      "Admission to this program will be through two channels - approximately half of the.",
    image: thumbImage,
  },
];

const NewsEventsPage = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".reveal-text",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power4.out" }
      );
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <div className="relative w-full font-anybody">
      <Navbar type="solid" />
      <GridLines count={4} />
      <div className="texture-overlay" />

      <main ref={containerRef} className="w-[50vw] pt-[216px] ml-[12.5vw] mb-[80px] pr-20">
        <p className="text-[24px] text-brand-accent2-130 reveal-text mt-[55px]">
          Human Centred Design
        </p>
        <h1 className="text-[52px] font-light reveal-text">
          News &amp; Events
        </h1>
        <div className="w-[50vw] h-[0.5em] bg-brand-accent2 reveal-text" />
        <p className="text-[18px] mt-[40px] reveal-text mr-[48px]">
          Admission to this program will be through two channels - approximately
          half of the seats will be through the Joint Admission counselling (JAC)
          of Delhi.
        </p>

        {/* Main Event Card */}
        <div className="relative mt-[32px] reveal-text">
          <img
            src={mainEventImage}
            alt="Main Event"
            className="w-full rounded-lg object-cover"
          />
          <div className="absolute inset-0 bg-black/30 rounded-lg" />
          <div className="absolute bottom-[16px] left-[16px] text-white p-10 pr-80">
            <p className="text-[20px] mt-[8px] text-black-600 opacity-55 uppercase">January 2024</p>
            <h3 className="text-[24px] mt-2 font-medium leading-tight">
              1Pixel Design Conference '24 at IIIT-Delhi Shaping the Future
            </h3>
            <p className="text-[18px] mt-4 text-black-600 opacity-55">
              Admission to this program will be through two channels -
              approximately half of the.
            </p>
          </div>
        </div>

        {/* Event Lists */}
        <div className="mt-[64px]">
          <h2 className="text-[24px] text-brand-accent2-130 reveal-text">
            Genre Definition
          </h2>
          <div className="mt-[24px] space-y-[24px]">
            {eventsData.map((event, idx) => (
              <div
                key={idx}
                className="flex items-start reveal-text"
              >
                <img
                  src={event.image}
                  alt="Event Thumbnail"
                  className="w-[230px] h-[166px] rounded-sm object-cover flex-shrink-0"
                />
                <div className="ml-[16px]">
                  <p className="text-[20px] mt-[8px] text-black-600 opacity-55 mb-[8px] uppercase">
                    {event.date}
                  </p>
                  <h3 className="text-[22px] font-semibold text-brand-accent2-130 leading-tight pr-40">
                    {event.title}
                  </h3>
                  <p className="text-[16px] mt-[8px] text-black-600 opacity-55 pr-40">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Repeat Group */}
        <div className="mt-[64px]">
          <h2 className="text-[24px] text-brand-accent2-130 reveal-text">
            Genre Definition
          </h2>
          <div className="mt-[24px] space-y-[24px]">
            {eventsData.map((event, idx) => (
              <div
                key={idx}
                className="flex items-start reveal-text"
              >
                <img
                  src={event.image}
                  alt="Event Thumbnail"
                  className="w-[230px] h-[166px] rounded-sm object-cover flex-shrink-0"
                />
                <div className="ml-[16px]">
                  <p className="text-[20px] mt-[8px] text-black-600 opacity-55 mb-[8px] uppercase">
                    {event.date}
                  </p>
                  <h1 className="text-[22px] font-semibold text-brand-accent2-130 leading-tight pr-40">
                    {event.title}
                  </h1>
                  <p className="text-[16px] mt-[8px] text-black-600 opacity-55 pr-40">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <aside className="fixed top-0 left-[62.5vw] w-[37.5vw] h-[100vh] overflow-hidden">
        <img
          src={panel}
          alt="Right Panel"
          className="absolute inset-0 object-cover"
        />
      </aside>

      <Footer type="second" />
    </div>
  );
};

export default NewsEventsPage;