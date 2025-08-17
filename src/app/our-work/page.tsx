import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    domain: "CIPD LAB",
    title: "Intelligent Product Development Research",
    description:
      "The program will prepare students to work in the IT industry as well as digital media industry like gaming, animation.",
    img: "/rnd-building.png",
  },
  {
    domain: "CIPD LAB",
    title: "Intelligent Product Development Research",
    description:
      "The program will prepare students to work in the IT industry as well as digital media industry like gaming, animation.",
    img: "/rnd-building.png",
  },
  {
    domain: "CIPD LAB",
    title: "Intelligent Product Development Research",
    description:
      "The program will prepare students to work in the IT industry as well as digital media industry like gaming, animation.",
    img: "/rnd-building.png",
  },
  {
    domain: "CIPD LAB",
    title: "Intelligent Product Development Research",
    description:
      "The program will prepare students to work in the IT industry as well as digital media industry like gaming, animation.",
    img: "/rnd-building.png",
  },
];

export default function Page() {
  return (
    <>
      <div className="relative z-10 bg-white font-anybody pb-8 shadow-xl">
        <Navbar type="solid" />
        <main>
          <article className="min-h-screen">
            <section className="my-[40px] mx-auto xl:w-[1280px] px-8 space-y-[40px]">
              <section className="relative font-light p-[40px] border border-brand-accent2 bg-brand-accent2/5 backdrop-blur-lg hover:backdrop-blur-2xl">
                <h2 className="font-medium text-[20px] lg:text-[28px] text-brand-accent2-130">
                  View Student Portfolio’s
                </h2>
                <p className="mt-[0.5em] text-[14px] lg:text-[18px]">
                  The program will prepare students to work in the IT industry
                  as well as digital media industry like gaming, animation,
                  virtual/augmented reality, etc. The program will also allow
                  students, who want to pursue higher studies, to take up higher
                  studies in CS/IT or in Design.
                </p>
                <Link
                  href=""
                  className="font-normal w-full xl:w-[25vw] mt-[2em] flex justify-center items-center gap-[24px] py-[0.75em] text-[14px] xl:text-[18px] bg-brand-accent2 hover:bg-brand-accent2-130/5 border border-brand-accent2-130 text-white hover:text-brand-accent2-130 transition-all duration-300"
                >
                  <LetterSwapForward
                    label="View Portfolios"
                    staggerDuration={0.005}
                    className="w-max"
                  />
                  <ArrowRight className="w-[14px] lg:w-[18px] h-auto" />
                </Link>
              </section>
              <section>
                <h2 className="text-[20px] lg:text-[28px]">
                  Highlighted Projects
                </h2>
                <p className="font-light text-[14px] lg:text-[18px]">
                  The program will prepare students to work in the IT industry
                  as well as digital media industry like gaming, animation,
                  virtual/augmented reality, etc. The program will also allow
                  students.
                </p>
                <div className="mt-[1em] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[2em]">
                  {projects.slice(0, 3).map((project, idx) => (
                    <SmallProjectCard key={idx} project={project} />
                  ))}
                </div>
              </section>
            </section>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
}

function SmallProjectCard({
  project,
}: {
  project: {
    domain: string;
    title: string;
    description: string;
    img: string;
  };
}) {
  return (
    <div className="md:mr-[2em] space-y-[1em]">
      <Image
        src={project.img}
        alt={`${project.title} image`}
        className="w-full h-auto aspect-video bg-neutral-300"
        width={480}
        height={270}
      />
      <div className="space-y-[0.25em]">
        <p className="text-[14px] lg:text-[20px] text-black/60">Sagar Gupta</p>
        <h3 className="font-medium text-[18px] lg:text-[24px] text-brand-accent2 leading-tight">
          {project.title}
        </h3>
        <p className="font-light text-[14px] lg:text-[18px]">
          {project.description}
        </p>
      </div>
      <Link
        href=""
        className="font-normal w-full flex justify-center items-center gap-[24px] py-[0.75em] text-[14px] xl:text-[18px] bg-brand-accent2-130/5 hover:bg-brand-accent2 border border-brand-accent2-130 text-brand-accent2-130 hover:text-white transition-all duration-300"
      >
        <LetterSwapForward
          label="View Project"
          staggerDuration={0.005}
          className="w-max"
        />
        <ArrowRight className="w-[14px] lg:w-[18px] h-auto" />
      </Link>
    </div>
  );
}
