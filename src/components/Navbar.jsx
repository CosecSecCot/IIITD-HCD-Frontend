import HCDLogo from "../assets/logo.svg";
import IIITDLogo from "../assets/IIITD_logo.svg";
import { ChevronRight, Menu, Search, X } from "lucide-react";
import { useState } from "react";

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
    title: "study",
    url: "/study",
    children: [
      { title: "overview", url: "/study/overview" },
      { title: "courses & electives", url: "/study/courses" },
    ],
  },
  {
    title: "research",
    url: "/research",
    children: [
      { title: "areas", url: "/research/areas" },
      { title: "publications", url: "/research/publications" },
      { title: "labs", url: "/research/labs" },
    ],
  },
  { title: "our work", url: "/work" },
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
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <header className="absolute w-full">
      <nav className="text-white flex justify-between items-center xl:px-[200px] px-[30px] xl:py-[30px] py-[15px] bg-black/30">
        <a href="/" className="flex items-center gap-1">
          <img
            src={HCDLogo}
            alt="HCD IIITD"
            className="lg:h-[116px] h-auto lg:w-auto w-[30px]"
          />
          <span className="lg:text-[24px] text-[12px] leading-tight">
            HUMAN CENTRED
            <br />
            DESIGN DEPARTMENT
          </span>
        </a>
        <div className="flex items-center gap-[110px]">
          <div className="flex items-center xl:gap-[40px] gap-[20px]">
            <div className="max-md:w-[86px] flex justify-between lg:gap-[16px] gap-[8px] px-[1em] py-[0.5em] border border-white rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="SEARCH"
                className="max-md:w-[38px] max-lg:text-[10px] bg-transparent outline-none placeholder:text-white/80"
              />
              <Search />
            </div>
            {/* Two buttons for toggling desktop and mobile menu respectively */}
            <div className="xl:hidden cursor-pointer">
              <Menu size={40} />
            </div>
            <div
              className="max-xl:hidden cursor-pointer"
              onClick={() => setSideBarOpen(true)}
            >
              <Menu size={40} />
            </div>
          </div>
          <img src={IIITDLogo} alt="IIITD" className="max-xl:hidden" />
        </div>
        {sideBarOpen && (
          <div className="fixed z-50 top-0 right-0 h-[100vh] w-full flex justify-end bg-black/20">
            <div className="relative flex flex-col justify-center w-[30vw] bg-[#096964] text-white">
              <button
                onClick={() => setSideBarOpen(false)}
                className="absolute top-[65px] right-[70px] flex items-center gap-[2px] border border-white rounded-full px-[1.5em] py-[1em]"
              >
                <span className="text-[24px] leading-none font-medium">
                  CLOSE
                </span>
                <X size={24} />
              </button>
              <div>
                {navigationMap.map((linkGroup, idx) => {
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveGroup(linkGroup)}
                      className={`flex justify-between w-full px-[70px] py-[20px] ${linkGroup.children ? "cursor-pointer" : ""}`}
                    >
                      <a
                        href={linkGroup.url}
                        className="uppercase text-[32px] leading-tight font-medium hover:underline"
                      >
                        {linkGroup.title}
                      </a>
                      {linkGroup.children && (
                        <ChevronRight size={36} color="white" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            {activeGroup && activeGroup.children && (
              <div className="flex flex-col justify-center min-h-[50%] w-[30vw] bg-[#033836] text-white">
                {activeGroup.children.map((child, idx) => (
                  <a
                    key={idx}
                    href={child.url}
                    className="px-[70px] py-[20px] uppercase text-[32px] leading-tight font-medium hover:underline"
                  >
                    {child.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
