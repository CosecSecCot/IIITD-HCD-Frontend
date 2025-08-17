"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ArrowLeft, ChevronRight, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

type NavigationItem = {
  title: string;
  url?: string;
  children?: {
    title: string;
    url: string;
  }[];
};

const navigationMap: NavigationItem[] = [
  {
    title: "about",
    children: [
      { title: "overview", url: "/about/overview" },
      { title: "collaborations", url: "/about/collaborations" },
      { title: "News & Events", url: "/about/newsEvents" },
      { title: "placements", url: "/about/placements" },
      { title: "", url: "" },
      { title: "", url: "" },
    ],
  },
  {
    title: "Research",
    children: [
      { title: "", url: "" },
      { title: "Labs", url: "/research/labs" },
      { title: "Projects", url: "/research/projects" },
      { title: "Publications", url: "/research/publications" },
      { title: "", url: "" },
      { title: "", url: "" },
    ],
  },
  {
    title: "Study",
    children: [
      { title: "", url: "" },
      { title: "", url: "" },
      { title: "Courses", url: "/study/courses" },
      { title: "B.Tech", url: "/study/btech" },
      { title: "PhD", url: "/study/phd" },
      { title: "", url: "" },
    ],
  },
  { title: "our work", url: "/ourwork" },
  {
    title: "people",
    children: [
      { title: "", url: "" },
      { title: "", url: "" },
      { title: "faculty", url: "/people/faculty" },
      { title: "students", url: "/people/students" },
      { title: "alumni", url: "/people/alumni" },
      { title: "", url: "" },
    ],
  },
  { title: "connect", url: "/connect" },
];

export default function Navbar({
  type = "default",
}: {
  type?: "default" | "solid";
}) {
  const [activeGroup, setActiveGroup] = useState<NavigationItem | null>();
  const [firstSidebarOpen, setFirstSidebarOpen] = useState(false);
  const [secondSidebarOpen, setSecondSidebarOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const isMobileNavbarActive = useMediaQuery("(max-width: 1280px)");

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { contextSafe } = useGSAP(() => {});

  const openFirstSidebar = contextSafe(() => {
    setFirstSidebarOpen(true);
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        "#nav-bg",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "expo.out",
          duration: "0.5",
        }
      )
      .to(
        "#nav-container",
        {
          x: isMobileNavbarActive ? "0%" : "50%",
          ease: "expo.out",
        },
        "-=0.5"
      )
      .fromTo(
        "#nav-link-primary",
        {
          opacity: 0,
          y: 30,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.1,
        },
        "-=0.5"
      );
  });

  const closeSidebar = contextSafe(() => {
    const timeline = gsap.timeline();
    timeline
      .to("#nav-container", {
        x: "50%",
        ease: "expo.in",
        duration: isMobileNavbarActive || secondSidebarOpen ? 0.2 : 0,
      })
      .to("#nav-container", {
        x: "100%",
        ease: "expo.out",
      })
      .fromTo(
        "#nav-bg",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          ease: "expo.out",
          duration: "0.5",
        },
        "-=0.5"
      )
      .then(() => {
        if (secondSidebarOpen) {
          setSecondSidebarOpen(false);
        }
        setFirstSidebarOpen(false);
        setActiveGroup(null);
      });
  });

  const openSecondSidebar = contextSafe(() => {
    setSecondSidebarOpen(true);
    const timeline = gsap.timeline();
    timeline.to("#nav-container", {
      x: isMobileNavbarActive ? "-50%" : 0,
      ease: "expo.out",
    });
  });

  return (
    <div id="navigation-menu" className="sticky top-0 z-[9999] font-anybody">
      <header
        className={`${type == "solid" ? "" : "absolute z-[999] top-0"} w-full`}
      >
        <div
          className={`relative text-white flex justify-between items-center xl:py-7 py-3 ${
            type == "solid"
              ? "bg-brand-accent2-130"
              : "bg-brand-accent2-130/90 backdrop-blur-sm"
          }`}
        >
          <Link
            className="relative left-[12.5vw] xl:left-[calc(12.5vw-96px)]"
            href="/"
          >
            <Image
              src={"/logo-with-text-large.svg"}
              alt="IIITD HCD Department Logo"
              className="w-auto h-[104px] max-lg:hidden "
              width={352}
              height={116}
              priority
            />
            <Image
              src={"/logo.svg"}
              alt="IIITD HCD Department Logo"
              className="w-auto h-[54px] lg:hidden"
              width={352}
              height={116}
              priority
            />
          </Link>
          <div className="relative right-[12.5vw] xl:right-[calc(12.5vw-82px)] flex items-center gap-28">
            <div className="flex items-center xl:gap-[36px] gap-[20px]">
              <div className="flex justify-between items-center lg:gap-[14px] gap-[8px] lg:px-6 px-3 lg:py-4 py-2 border border-white rounded-full overflow-hidden">
                <input
                  type="text"
                  placeholder="SEARCH"
                  className="max-lg:w-[5em] max-lg:text-[0.75em] bg-transparent outline-none placeholder:text-white/80"
                />
                <Search size={16} />
              </div>
              <button className="cursor-pointer" onClick={openFirstSidebar}>
                <Menu
                  size={40}
                  className="lg:w-[40px] w-[24px] aspect-square"
                  aria-haspopup="menu"
                />
              </button>
            </div>
            <Image
              src="/IIITD-logo-solid.svg"
              alt="IIITD Logo"
              className="max-xl:hidden"
              width={82}
              height={41}
              priority
            />
          </div>
        </div>
      </header>
      <div
        id="nav-bg"
        className={`${
          firstSidebarOpen ? "" : "hidden"
        } fixed z-[9998] top-0 left-0 h-[100vh] w-full bg-black/20 backdrop-blur-sm`}
        onClick={closeSidebar}
      />
      {mounted && isMobileNavbarActive ? (
        <div
          id="nav-container"
          role="menu"
          className="flex fixed z-[9999] inset-0 w-[200vw] h-[100vh]"
          style={{
            transform: "translate(50%, 0)",
          }}
        >
          <nav
            id="nav-sidebar-first"
            className="relative flex flex-col justify-center w-full h-full bg-brand-accent2 text-white"
          >
            <div className="absolute top-0 right-0 pr-[70px] pt-[60px]">
              <button
                onClick={closeSidebar}
                className="flex items-center gap-[2px] border border-white rounded-full p-[1em]"
              >
                <X size={32} />
              </button>
            </div>
            <ul>
              {navigationMap.map((linkGroup, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={() => {
                      if (linkGroup.children) {
                        setActiveGroup(linkGroup);
                        openSecondSidebar();
                      } else {
                        setActiveGroup(null);
                      }
                    }}
                    className="flex justify-between w-full px-[70px] py-[1em]"
                  >
                    <a
                      id="nav-link-primary"
                      href={linkGroup.url}
                      className="uppercase text-[28px] leading-tight font-medium"
                    >
                      {linkGroup.title}
                    </a>
                    {linkGroup.children && (
                      <ChevronRight size={32} color="white" />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
          <nav
            id="nav-sidebar-second"
            className="relative flex flex-col justify-center w-full bg-[#033836] text-white"
          >
            <div className="absolute top-0 right-0 pr-[70px] pt-[60px]">
              <button
                onClick={() => {
                  contextSafe(() =>
                    gsap.to("#nav-container", {
                      x: 0,
                      ease: "expo.out",
                    })
                  )();
                }}
                className="flex items-center gap-[2px] border border-white rounded-full p-[1em]"
              >
                <ArrowLeft size={32} />
              </button>
            </div>
            {activeGroup &&
              activeGroup.children &&
              activeGroup.children.map((child, idx) => (
                <a key={idx} href={child.url} className="px-[70px] py-[1em]">
                  <span
                    id="nav-link-secondary"
                    key={idx}
                    className="uppercase text-[28px] leading-tight font-medium"
                  >
                    {child.title}
                  </span>
                </a>
              ))}
          </nav>
        </div>
      ) : (
        <div
          id="nav-container"
          role="menu"
          className={`${
            firstSidebarOpen ? "" : "hidden"
          } fixed z-[9999] top-0 right-0 h-[100vh] flex justify-end`}
          style={{
            transform: "translate(100%, 0)",
          }}
        >
          <div
            id="nav-sidebar-first"
            className="relative flex flex-col justify-center w-[30vw] bg-[#096964] text-white"
          >
            <div className="absolute top-0 right-0 flex justify-end px-[70px] py-[60px]">
              <button
                onClick={closeSidebar}
                className="flex items-center gap-[2px] border border-white rounded-full p-[1em] hover:bg-white hover:text-[#096964] transition-all ease-out duration-150"
              >
                <X size={40} />
              </button>
            </div>
            <ul>
              {navigationMap.map((linkGroup, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={() => {
                      if (linkGroup.children) {
                        setActiveGroup(linkGroup);
                        openSecondSidebar();
                      } else {
                        contextSafe(() =>
                          gsap.to("#nav-container", {
                            x: "50%",
                            ease: "expo.out",
                          })
                        )();
                        setActiveGroup(null);
                      }
                    }}
                    className={`relative flex justify-between w-full px-[70px] py-[20px] ${
                      linkGroup.children ? "cursor-pointer" : ""
                    } group hover:pl-[80px] transition-all duration-[300ms]`}
                  >
                    <a
                      id="nav-link-primary"
                      href={linkGroup.url}
                      className="relative z-10 uppercase text-[32px] leading-tight font-medium"
                    >
                      {linkGroup.title}
                    </a>
                    {linkGroup.children && (
                      <ChevronRight
                        size={36}
                        color="white"
                        className={`z-10 ${
                          activeGroup === linkGroup ? "rotate-180" : ""
                        } transition-all duration-250`}
                      />
                    )}
                    <div
                      className={`absolute top-0 left-0 ${
                        activeGroup === linkGroup ? "h-full" : "h-0"
                      } w-full group-hover:h-full ${
                        activeGroup === linkGroup
                          ? "bg-[#033836]"
                          : "bg-[#033836]/75"
                      } transition-all ease-[cubic-bezier(.06,.92,.35,1)] duration-1000`}
                    />
                  </li>
                );
              })}
            </ul>
            <div className="absolute bottom-0 px-[70px] py-[60px] opacity-40">
              <Image
                src="/logo-with-text-large-solid.svg"
                alt="IIITD HCD Department Logo"
                width={352}
                height={116}
                priority
              />
            </div>
          </div>
          <div
            id="nav-sidebar-second"
            className="flex flex-col justify-center w-[30vw] bg-[#033836] text-white"
          >
            {activeGroup &&
              activeGroup.children &&
              activeGroup.children.map((child, idx) => {
                if (child.url === "" && child.title === "") {
                  return (
                    <div key={idx} className="h-[calc(80px)]" aria-hidden></div>
                  );
                } else {
                  return (
                    <a
                      key={idx}
                      href={child.url}
                      className="relative px-[70px] py-[20px] group hover:pl-[80px] transition-all duration-[300ms]"
                    >
                      <span
                        id="nav-link-secondary"
                        className="relative z-10 uppercase text-[32px] leading-tight font-medium"
                      >
                        {child.title}
                      </span>
                      <div className="absolute top-0 left-0 h-0 w-full group-hover:h-full bg-[#096964]/75 transition-all ease-[cubic-bezier(.06,.92,.35,1)] duration-1000" />
                    </a>
                  );
                }
              })}
          </div>
        </div>
      )}
    </div>
  );
}
