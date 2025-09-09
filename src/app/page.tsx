import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageReveal from "@/features/animation/PageReveal";
import Heading from "@/features/pages/study/components/Heading";
import ProgrammeCard from "@/features/pages/study/components/ProgrammeCard";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import TextReveal from "@/features/animation/TextReveal";
import { Suspense } from "react";
import NewsSection from "@/features/pages/home/components/NewsSection";
import CenterUnderline from "@/components/fancy/text/underline-center";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  keywords: [
    "human centred design",
    "HCD",
    "IIIT Delhi",
    "human-computer interaction",
    "design research",
    "ux",
    "accessibility",
    "design education",
    "research labs",
  ],
};

const programmeItems = [
  {
    number: "01",
    text: "Ability to function effectively in teams to accomplish a common goal.",
  },
  {
    number: "02",
    text: "Ability to design and implement efficient software solutions using suitable algorithms, data structures, and other computing techniques.",
  },
  {
    number: "03",
    text: "Understanding of design principles and techniques and ability to apply these for developing solutions to human/societal problems.",
  },
  {
    number: "04",
    text: "Ability to independently investigate a problem which can be solved by an Human Computer Interaction (HCI).",
  },
  {
    number: "05",
    text: "Ability to effectively use suitable tools and platforms, as well as enhance them, to develop applications/products.",
  },
];

export default function Home() {
  return (
    <>
      <PageReveal />
      <div className="background-element relative z-10 bg-white font-anybody shadow-xl">
        <Navbar />
        <main className="relative">
          <article className="space-y-12 pb-[78px]">
            <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
              <div className="font-light mt-[calc(5vh+80px)] lg:mt[90px] mx-auto xl:w-[75vw] px-8 flex max-lg:flex-col justify-between lg:items-center gap-5 lg:gap-8">
                <div className="flex-1">
                  <TextReveal>
                    <p className="text-[16px] lg:text-[32px] text-brand-accent2 leading-tight">
                      <LetterSwapForward
                        label="Human Centred Design"
                        staggerDuration={0.005}
                        className="w-max"
                      />
                    </p>
                  </TextReveal>
                  <TextReveal>
                    <h1 className="text-[36px] lg:text-[80px] leading-none lg:leading-tight">
                      Where{" "}
                      <span className="font-normal text-brand-accent2">
                        <LetterSwapForward
                          label="Creativity"
                          staggerDuration={0.02}
                          className="w-max"
                        />
                        {/* Creativity */}
                      </span>{" "}
                      Meets Innovation.
                    </h1>
                  </TextReveal>
                  <TextReveal>
                    <blockquote className="mt-[0.25em] text-[14px] lg:text-[28px] leading-tight">
                      We are a collective of diverse thinkers reimagining how
                      human-technology interactions.
                    </blockquote>
                  </TextReveal>
                </div>
                <div className="flex-1 flex flex-col lg:items-end gap-2 lg:gap-5">
                  <div className="flex gap-2 lg:gap-5 w-full">
                    <div className="relative flex-1 aspect-square border-2 border-brand-accent2 group">
                      <div className="absolute inset-0 z-10 w-full h-full bg-brand-accent2/50 group-hover:bg-transparent mix-blend-overlay transition-all duration-200" />
                      <Image
                        src="/rnd-building.png"
                        alt="R&D Building IIITD"
                        width={376}
                        height={383}
                        className="absolute inset-0 w-full h-full object-cover grayscale-100 group-hover:grayscale-0 transition-all duration-200"
                      />
                    </div>
                    <div className="relative flex-1 aspect-square border-2 border-brand-accent2 group">
                      <div className="absolute inset-0 z-10 w-full h-full bg-brand-accent2/50 group-hover:bg-transparent mix-blend-overlay transition-all duration-200" />
                      <Image
                        src="/students.png"
                        alt="R&D Building IIITD"
                        width={376}
                        height={383}
                        className="absolute inset-0 w-full h-full object-cover grayscale-100 group-hover:grayscale-0 transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div className="relative w-full h-[145px] box-border flex justify-around px-5 lg:px-16 py-3 lg:py-6 gap-8 lg:gap-16 bg-brand-accent2-130/[.02] border lg:border-2 border-brand-accent2/50 backdrop-blur-lg group">
                    <div className="absolute inset-0 z-10 w-full h-full bg-brand-accent2/50 group-hover:bg-transparent mix-blend-overlay transition-all duration-200" />
                    <Image
                      src="/page-reveal/img3.png"
                      alt="1Pixel Design Conference"
                      width={376}
                      height={383}
                      className="absolute inset-0 w-full h-full object-cover grayscale-100 group-hover:grayscale-0 transition-all duration-200"
                    />
                  </div>
                  <Link
                    href="/study/btech"
                    className="font-normal md:w-[400px] flex justify-center items-center gap-[1em] px-[1.5em] py-[1em] text-[12px] lg:text-[20px] text-white bg-brand-accent2 hover:bg-brand-accent2-130 transition-colors duration-200"
                  >
                    <LetterSwapForward
                      label="View Study Options"
                      staggerDuration={0.005}
                      className="w-max"
                    />
                    <ArrowRight className="w-[12px] lg:w-[18px] h-auto" />
                  </Link>
                </div>
              </div>
            </section>

            <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
              <div className="relative z-10 mx-auto xl:w-[75vw] px-8 space-y-4 lg:space-y-8">
                <TextReveal>
                  <h2 className="font-light text-[28px] lg:text-[86px] leading-tight">
                    The Department of <br />
                    <span className="text-brand-accent2 font-normal">
                      <LetterSwapForward
                        label="Human Centred Design"
                        staggerDuration={0.005}
                        className="w-max"
                      />
                    </span>
                  </h2>
                </TextReveal>
                <TextReveal>
                  <p className="lg:ml-auto lg:w-2/3 font-light lg:text-right text-[14px] lg:text-[28px] leading-tight">
                    The Department of Human-Centered Design at IIIT-Delhi stands
                    at the intersection of{" "}
                    <span className="font-normal text-brand-accent2">
                      computing and design
                    </span>
                    , reimagining how technology can enrich human lives. Our
                    work blends strong academic foundations with creativity and
                    critical inquiry.
                  </p>
                </TextReveal>
                <div className="relative h-[202px] px-5 lg:px-20 py-3 lg:py-6 border lg:border-2 border-brand-accent2 group">
                  <div className="absolute inset-0 z-10 w-full h-full bg-brand-accent2/50 group-hover:bg-transparent mix-blend-overlay transition-all duration-200" />
                  <Image
                    src="/rnd-building.png"
                    alt="R&D Building IIITD"
                    width={376}
                    height={383}
                    className="absolute inset-0 w-full h-full object-cover grayscale-100 group-hover:grayscale-0 transition-all duration-200"
                  />
                </div>
                <div className="flex justify-between gap-[1em] lg:gap-[8em]">
                  <TextReveal>
                    <p className="lg:w-1/2 font-light text-[14px] lg:text-[28px] leading-tight">
                      Through research, teaching, and collaboration, we empower
                      students and scholars to address{" "}
                      <span className="font-normal text-brand-accent2">
                        real-world challenges
                      </span>{" "}
                      in interaction design, HCI, and emerging technologies. Our
                      goal is to{" "}
                      <span className="font-normal text-brand-accent2">
                        build technology
                      </span>{" "}
                      that is innovative, ethical, and impactful.
                    </p>
                  </TextReveal>
                  <TextReveal>
                    <p className="max-lg:hidden w-1/2 text-right text-[52px] leading-tight">
                      Welcome to a new era of HCD, powered{" "}
                      <span className="font-light text-brand-accent2">
                        by you.
                      </span>
                    </p>
                  </TextReveal>
                </div>
              </div>
            </section>

            <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
              <div className="flex max-lg:flex-col px-8 lg:px-[12.5vw] justify-between items-center gap-4 lg:gap-[60px]">
                <div className="relative w-[60%] flex-shrink-0 aspect-video group">
                  <div className="absolute inset-0 z-10 w-full h-full bg-brand-accent2/50 group-hover:bg-transparent mix-blend-overlay transition-all duration-200" />
                  <Image
                    src="/faculty.png"
                    alt="Faculty at IIITD HCD"
                    width={1186}
                    height={682}
                    priority
                    className="absolute inset-0 w-full h-full object-cover border-2 lg:border-4 border-brand-accent2 grayscale-100 group-hover:grayscale-25 transition-all duration-200"
                  />
                </div>
                <div className="w-full lg:text-right">
                  <TextReveal>
                    <h1 className="text-[24px] lg:text-[44px] text-brand-accent2 leading-tight">
                      HCD Faculty
                    </h1>
                  </TextReveal>
                  <TextReveal>
                    <p className="mt-[0.5em] font-light text-[14px] lg:text-[28px] leading-tight">
                      Our faculty is dedicated to pioneering innovative
                      solutions for challenges that arise with each advancement.
                    </p>
                  </TextReveal>
                  <Link
                    href="/people/faculty"
                    className="mt-[1em] font-normal flex justify-center items-center gap-[1em] px-[1em] py-[1em] text-[12px] lg:text-[20px] text-white bg-brand-accent2 hover:bg-brand-accent2-130 transition-colors duration-200"
                  >
                    <LetterSwapForward
                      label="View Faculty"
                      staggerDuration={0.005}
                      className="w-max"
                    />
                    <ArrowRight className="w-[12px] lg:w-[18px] h-auto" />
                  </Link>
                </div>
              </div>
            </section>

            <Suspense
              fallback={
                <section className="relative xl:w-[1280px] mx-auto px-8 min-h-screen flex flex-col justify-center overflow-hidden">
                  <div className="flex justify-between items-center">
                    <h2 className="text-[26px] lg:text-[48px] text-brand-accent2 leading-tight">
                      News & Events
                    </h2>
                    <CenterUnderline>
                      <Link
                        href="/about/news-events"
                        className="flex items-center gap-2 text-brand-accent2 text-[16px] lg:text-[20px]"
                      >
                        View All <ArrowRight className="w-[16px] h-auto" />
                      </Link>
                    </CenterUnderline>
                  </div>
                  <p className="font-light text-[14px] lg:text-[28px]">
                    Stay up to date with the latest happenings at HCD IIIT
                    Delhi. This section brings you important announcements,
                    upcoming events, workshops, guest lectures, and achievements
                    from our community.
                  </p>
                  <div className="mt-[1em] grid md:grid-cols-3 gap-8">
                    <div className="relative bg-white aspect-square">
                      <div className="absolute inset-0 w-full h-full bg-brand-gray1/70 animate-pulse rounded-md" />
                    </div>
                    <div className="relative bg-white aspect-square">
                      <div className="absolute inset-0 w-full h-full bg-brand-gray1/70 animate-pulse rounded-md" />
                    </div>
                    <div className="relative bg-white aspect-square">
                      <div className="absolute inset-0 w-full h-full bg-brand-gray1/70 animate-pulse rounded-md" />
                    </div>
                  </div>
                </section>
              }
            >
              <NewsSection />
            </Suspense>

            <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
              <div>
                <Heading align="middle">
                  <span className="text-brand-accent2 font-normal">
                    Mission &amp; Vision
                  </span>
                </Heading>
                <p className="max-lg:hidden font-light mt-[1em] mx-auto xl:w-[75vw] px-8 text-center text-[28px]">
                  India has already established itself as the software hub of
                  the world due to the large number of engineers that it
                  produces. There is now an increasing and persistent demand of
                  having engineers who can develop and design.
                </p>
                <div className="mt-[32px] lg:mt-[44px]">
                  <div
                    className={`mx-auto xl:w-[1280px] px-8 grid gap-[1em] grid-cols-1 xl:grid-cols-5`}
                  >
                    {programmeItems.map((item) => (
                      <ProgrammeCard
                        key={item.number}
                        text={item.text}
                        number={item.number}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
}
