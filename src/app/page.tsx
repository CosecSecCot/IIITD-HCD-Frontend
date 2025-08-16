import PixelTrailReveal from "@/components/fancy/background/pixel-trail-reveal";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageReveal from "@/features/animation/PageReveal";
import GravitySection from "@/features/pages/home/components/GravitySection";
import GooeySvgFilter from "@/components/fancy/filter/gooey-svg-filter";
import Heading from "@/features/pages/study/components/Heading";
import ProgrammeCard from "@/features/pages/study/components/ProgrammeCard";
import Image from "next/image";

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
      <div className="background-element relative z-10 bg-white font-anybody pb-[78px] shadow-xl">
        <Navbar type="solid" />
        <main className="">
          <article>
            <section className="relative w-full h-full overflow-hidden">
              <div className="font-light my-12 mx-auto xl:w-[1280px] px-8 flex max-lg:flex-col justify-between">
                <div className="lg:w-1/2">
                  <p className="text-[16px] lg:text-[32px] text-brand-accent2">
                    Human Centred Design
                  </p>
                  <h1 className="text-[36px] lg:text-[86px] leading-tight">
                    Where Creativity{" "}
                    <span className="font-normal text-brand-accent2">
                      Meets
                    </span>{" "}
                    Innovation.
                  </h1>
                  <blockquote className="mt-[1em] text-[14px] lg:text-[26px] italic leading-tight">
                    We are a collective of diverse thinkers reimagining how
                    human-technology interactions.
                  </blockquote>
                </div>
                <div></div>
              </div>
              <GooeySvgFilter id="gooey-filter-pixel-trail" strength={5} />
              <div
                className="absolute inset-0"
                style={{ filter: "url(#gooey-filter-pixel-trail)" }}
              >
                <PixelTrailReveal pixelSize={128} delay={1000} fadeDuration={0}>
                  <div className="w-full h-full font-pixel">
                    <div className="font-light py-12 xl:px-[calc(50vw-608px)] w-full h-full px-8 flex max-lg:flex-col justify-between bg-brand-accent2">
                      <div className="lg:w-1/2">
                        <p className="text-[16px] lg:text-[32px] text-brand-accent1">
                          Human Centred Design
                        </p>
                        <h1 className="text-[36px] lg:text-[86px] text-white leading-tight">
                          Where Creativity{" "}
                          <span className="font-normal text-brand-accent1">
                            Meets
                          </span>{" "}
                          Innovation.
                        </h1>
                        <blockquote className="mt-[1em] text-[14px] lg:text-[26px] text-white italic leading-tight">
                          We are a collective of diverse thinkers reimagining
                          how human-technology interactions.
                        </blockquote>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </PixelTrailReveal>
              </div>
            </section>

            <section className="relative w-full h-full overflow-hidden">
              <GravitySection />
              <div className="relative z-10 mt-12 mx-auto xl:w-[1280px] px-8 space-y-4 lg:space-y-[72px]">
                <h2 className="text-[28px] lg:text-[80px] leading-tight">
                  The Department of <br />
                  <span className="text-brand-accent2">
                    Human Centred Design
                  </span>
                </h2>
                <p className="lg:ml-auto lg:w-2/3 font-light lg:text-right text-[14px] lg:text-[30px] leading-tight">
                  We are a collective of diverse thinkers reimagining how{" "}
                  <span className="font-normal text-brand-accent2">
                    human-technology interactions
                  </span>{" "}
                  can be seamless and meaningful. We are a collective of diverse
                  thinkers reimagining how human-technology interactions.
                </p>
                <div className="flex justify-between px-5 lg:px-20 py-3 lg:py-6 bg-brand-accent2-130/5 border border-brand-accent2 max-xl:border-r-brand-accent2 backdrop-blur-lg">
                  {[
                    { label: "ALUMNI", value: "2000+" },
                    { label: "STUDENTS", value: "2000+" },
                    { label: "PAPERS", value: "20+" },
                    { label: "FACULTY", value: "200+" },
                  ].map((stat, idx) => (
                    <div key={idx} className="leading-tight">
                      <p className="text-[10px] lg:text-[30px] uppercase opacity-60">
                        {stat.label}
                      </p>
                      <h2 className="text-[24px] lg:text-[80px] font-medium text-brand-accent2">
                        {stat.value}
                      </h2>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between gap-[1em] lg:gap-[8em]">
                  <p className="lg:w-1/2 font-light text-[14px] lg:text-[30px] leading-tight">
                    We are a collective of diverse thinkers reimagining how{" "}
                    <span className="font-normal text-brand-accent2">
                      human-technology interactions
                    </span>{" "}
                    can be seamless and meaningful. We are a collective of
                    diverse thinkers reimagining how human-technology
                    interactions.
                  </p>
                  <p className="max-lg:hidden w-1/2 text-right text-[58px] leading-tight">
                    Welcome to a new era of HCD, powered{" "}
                    <span className="font-light italic text-brand-accent2">
                      by you.
                    </span>
                  </p>
                </div>
              </div>
            </section>

            <section className="relative w-full h-full overflow-hidden">
              <div className="mt-12 flex max-lg:flex-col max-lg:px-8 justify-between items-center gap-[2em]">
                <div className="relative w-full lg:w-[60%] aspect-video flex-shrink-0">
                  <div className="absolute z-10 inset-0 bg-brand-accent2/50 mix-blend-overlay" />
                  <Image
                    src="/faculty.png"
                    alt="Faculty at IIITD HCD"
                    width={1186}
                    height={682}
                    className="absolute inset-0 border-4 border-brand-accent2 grayscale"
                  />
                  <div className="absolute inset-0 z-20">
                    <PixelTrailReveal
                      pixelSize={96}
                      delay={300}
                      fadeDuration={500}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src="/faculty.png"
                          alt="Faculty at IIITD HCD"
                          width={1186}
                          height={682}
                          className="absolute inset-0 border-4 border-brand-accent2 blur-[1px]"
                        />
                      </div>
                    </PixelTrailReveal>
                  </div>
                </div>
                <div className="lg:pr-[calc(50vw-608px)] lg:text-right">
                  <h1 className="text-[24px] lg:text-[44px] text-brand-accent2 leading-tight">
                    HCD Faculty
                  </h1>
                  <p className="font-light text-[14px] lg:text-[24px] leading-tight">
                    Our faculty, numbering over 200, is dedicated to pioneering
                    innovative solutions for challenges that arise with each
                    advancement.
                  </p>
                </div>
              </div>
            </section>

            <section className="relative w-full h-full overflow-hidden">
              <div className="mt-12">
                <Heading align="middle">
                  <span className="text-brand-accent2 font-normal">
                    Mission &amp; Vision
                  </span>
                </Heading>
                <p className="max-lg:hidden font-light mt-[1em] mx-auto xl:w-[1280px] px-8 text-center text-[24px]">
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
