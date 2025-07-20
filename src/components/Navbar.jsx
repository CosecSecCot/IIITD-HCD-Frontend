import HCDLogoLarge from "../assets/HCD_logo_with_text_large.svg";
import IIITDLogo from "../assets/IIITD_logo.svg";
import { ChevronRight, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const navigationMap = [
  {
    title: "about",
    url: "/about",
    children: [
      { title: "updates", url: "/about/updates" },
      { title: "overview", url: "/about/overview" },
      { title: "collaborations", url: "/about/collaborations" },
      { title: "courses & electives", url: "/about/courses" },
      { title: "placement", url: "/about/placement" },
      { title: "brochure", url: "/about/brochure" },
    ],
  },
  {
    title: "Research",
    url: "/research",
  },
  {
    title: "Publications",
    url: "/publications",
  },
  { title: "our work", url: "/departmentprojects" },
  {
    title: "people",
    url: "/people",
    children: [
      { title: "faculty", url: "/people/faculty" },
      { title: "students", url: "/people/students" },
      { title: "alumni", url: "/people/alumni" },
    ],
  },
  { title: "connect", url: "/connect" },
];

const Navbar = () => {
  const [activeGroup, setActiveGroup] = useState();
  const [firstSidebarOpen, setFirstSidebarOpen] = useState(false);
  const [secondSidebarOpen, setSecondSidebarOpen] = useState(false);

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
        },
      )
      .to(
        "#nav-container",
        {
          x: "50%",
          ease: "expo.out",
        },
        "-=0.5",
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
        "-=0.5",
      );
  });

  const closeSidebar = contextSafe(() => {
    const timeline = gsap.timeline();
    timeline
      .to("#nav-container", {
        x: "50%",
        ease: "expo.in",
        duration: secondSidebarOpen ? 0.2 : 0,
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
        "-=0.5",
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
      x: 0,
      ease: "expo.out",
    });
  });

  return (
    <div id="navigation-menu" className="font-anybody">
      <header className="absolute z-[999] top-0 w-full">
        <nav className="relative text-white flex justify-between items-center xl:py-[30px] py-[15px] bg-black/30 backdrop-blur-sm">
          <a
            className="relative left-[12.5vw] xl:left-[calc(12.5vw-96px)]"
            href="/"
          >
            <img
              src={HCDLogoLarge}
              alt="HCD IIITD"
              className="max-lg:h-[54px]"
            />
          </a>
          <div className="relative right-[12.5vw] xl:right-[calc(12.5vw-82px)] flex items-center gap-[110px]">
            <div className="flex items-center xl:gap-[40px] gap-[20px]">
              <div className="flex justify-between items-center lg:gap-[16px] gap-[8px] lg:px-[1.5em] px-[0.75em] lg:py-[1em] py-[0.5em] border border-white rounded-full overflow-hidden">
                <input
                  type="text"
                  placeholder="SEARCH"
                  className="max-lg:w-[5em] max-lg:text-[0.75em] bg-transparent outline-none placeholder:text-white/80"
                />
                <Search size={16} />
              </div>
              {/* Two buttons for toggling desktop and mobile menu respectively */}
              <div className="xl:hidden cursor-pointer" onClick={() => {}}>
                <Menu
                  size={40}
                  className="lg:w-[40px] w-[24px] aspect-square"
                  aria-haspopup="menu"
                />
              </div>
              <div
                className="max-xl:hidden cursor-pointer"
                onClick={openFirstSidebar}
              >
                <Menu size={40} aria-haspopup="menu" />
              </div>
            </div>
            <img src={IIITDLogo} alt="IIITD" className="max-xl:hidden" />
          </div>
        </nav>
      </header>
      <div
        id="nav-bg"
        className={`${firstSidebarOpen ? "" : "hidden"} fixed z-[9998] top-0 left-0 h-[100vh] w-full bg-black/20 backdrop-blur-sm`}
        onClick={closeSidebar}
      />
      <div
        id="nav-container"
        className={`${firstSidebarOpen ? "" : "hidden"} fixed z-[9999] top-0 right-0 h-[100vh] flex justify-end`}
        style={{
          transform: "translate(100%, 0)",
        }}
      >
        <div
          id="nav-sidebar-first"
          className="relative flex flex-col justify-center w-[30vw] bg-[#096964] text-white"
        >
          <button
            onClick={closeSidebar}
            className="absolute top-[65px] right-[70px] flex items-center gap-[2px] border border-white rounded-full p-[1em] hover:bg-white hover:text-[#096964] transition-all ease-out duration-150"
          >
            <X size={40} />
          </button>
          <div>
            {navigationMap.map((linkGroup, idx) => {
              return (
                <div
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
                        }),
                      )();
                      setActiveGroup(null);
                    }
                  }}
                  className={`relative flex justify-between w-full px-[70px] py-[20px] ${linkGroup.children ? "cursor-pointer" : ""} group hover:pl-[80px] transition-all duration-[300ms]`}
                >
                  <a
                    id="nav-link-primary"
                    href={linkGroup.url}
                    className="relative z-10 uppercase text-[32px] leading-tight font-medium hover:underline"
                  >
                    {linkGroup.title}
                  </a>
                  {linkGroup.children && (
                    <ChevronRight
                      size={36}
                      color="white"
                      className={`z-10 ${activeGroup === linkGroup ? "rotate-180" : ""} transition-all duration-250`}
                    />
                  )}
                  <div
                    className={`absolute top-0 left-0 ${activeGroup === linkGroup ? "h-full" : "h-0"} w-full group-hover:h-full ${activeGroup === linkGroup ? "bg-[#033836]" : "bg-[#033836]/75"} transition-all ease-[cubic-bezier(.06,.92,.35,1)] duration-1000`}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div
          id="nav-sidebar-second"
          className="flex flex-col justify-center min-h-[50%] w-[30vw] bg-[#033836] text-white"
        >
          {activeGroup &&
            activeGroup.children &&
            activeGroup.children.map((child, idx) => (
              <div className="relative px-[70px] py-[20px] group">
                <a
                  id="nav-link-secondary"
                  key={idx}
                  href={child.url}
                  className="relative z-10 uppercase text-[32px] leading-tight font-medium hover:underline"
                >
                  {child.title}
                </a>
                <div className="absolute top-0 left-0 h-0 w-full group-hover:h-full bg-[#096964]/75 transition-all ease-[cubic-bezier(.06,.92,.35,1)] duration-1000" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
