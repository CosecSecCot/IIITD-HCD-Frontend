import PixelTrailReveal from "@/components/fancy/background/pixel-trail-reveal";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageReveal from "@/features/animation/PageReveal";
import GooeySvgFilter from "@/components/fancy/filter/gooey-svg-filter";
import Heading from "@/features/pages/study/components/Heading";
import ProgrammeCard from "@/features/pages/study/components/ProgrammeCard";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import TextReveal from "@/features/animation/TextReveal";

export const metadata: Metadata = {
  metadataBase: new URL("https://hcd.iiitd.ac.in"),
  title: "Human Centred Design • IIIT Delhi",
  description:
    "Explore the Department of Human Centred Design at IIIT Delhi — research labs, projects, faculty, programmes and publications driving inclusive, user-centered innovation.",
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
  authors: [{ name: "IIIT Delhi — Human Centred Design" }],
  creator: "IIIT Delhi HCD",
  publisher: "IIIT Delhi",
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Human Centred Design • IIIT Delhi",
    description:
      "Explore the Department of Human Centred Design at IIIT Delhi — research labs, projects, faculty, programmes and publications.",
    url: "https://hcd.iiitd.ac.in/",
    siteName: "HCD IIITD",
    // type: "website",
    locale: "en-IN",
    // images: [
    //   {
    //     url: "https://hcd.iiitd.ac.in/og-image.png", // replace with your OG image
    //     width: 1200,
    //     height: 630,
    //     alt: "HCD IIITD — Human Centred Design",
    //   },
    // ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Human Centred Design • IIIT Delhi",
    description:
      "Research labs, projects and programmes from the Department of Human Centred Design, IIIT Delhi.",
    // images: ["https://hcd.iiitd.ac.in/og-image.png"],
    creator: "@hcdiiitd",
  },
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
        <Navbar type="solid" />
        <main className="relative">
          <article className="space-y-12 lg:space-y-32 pb-[78px]">
            <section className="relative w-full h-full overflow-hidden">
              <div className="font-light mt-[48px] lg:mt-[90px] mx-auto xl:w-[75vw] px-8 flex max-lg:flex-col justify-between gap-5 lg:gap-8">
                <div className="flex-1">
                  <TextReveal>
                    <p className="text-[16px] lg:text-[36px] text-brand-accent2">
                      Human Centred Design
                    </p>
                  </TextReveal>
                  <TextReveal>
                    <h1 className="text-[36px] lg:text-[96px] leading-none lg:leading-tight">
                      Where{" "}
                      <span className="font-normal text-brand-accent2">
                        Creativity
                      </span>{" "}
                      Meets Innovation.
                    </h1>
                  </TextReveal>
                  <TextReveal>
                    <blockquote className="mt-[1em] text-[14px] lg:text-[28px] italic leading-tight">
                      We are a collective of diverse thinkers reimagining how
                      human-technology interactions.
                    </blockquote>
                  </TextReveal>
                </div>
                <div className="flex-1 flex flex-col lg:items-end gap-2 lg:gap-5">
                  <div className="flex gap-2 lg:gap-5 w-full">
                    <div className="relative flex-1 aspect-square border-2 border-brand-accent2">
                      <div className="absolute inset-0 z-10 w-full h-full bg-brand-accent2/50 mix-blend-overlay" />
                      <Image
                        src="/rnd-building.png"
                        alt="R&D Building IIITD"
                        width={376}
                        height={383}
                        className="absolute inset-0 w-full h-full object-cover grayscale"
                      />
                    </div>
                    <div className="relative flex-1 aspect-square border-2 border-brand-accent2">
                      <div className="absolute inset-0 z-10 w-full h-full bg-brand-accent2/50 mix-blend-overlay" />
                      <Image
                        src="/students.png"
                        alt="R&D Building IIITD"
                        width={376}
                        height={383}
                        className="absolute inset-0 w-full h-full object-cover grayscale"
                      />
                    </div>
                  </div>
                  <div className="relative w-full h-[145px] box-border flex justify-around px-5 lg:px-16 py-3 lg:py-6 gap-8 lg:gap-16 bg-brand-accent2-130/[.02] border lg:border-2 border-brand-accent2/50 backdrop-blur-lg">
                    <div className="absolute inset-0 z-10 w-full h-full bg-brand-accent2/50 mix-blend-overlay" />
                    <Image
                      src="/page-reveal/img03.png"
                      alt="R&D Building IIITD"
                      width={376}
                      height={383}
                      className="absolute inset-0 w-full h-full object-cover grayscale"
                    />
                  </div>
                  <p className="font-normal w-max flex justify-center items-center gap-[1em] px-[1.5em] py-[1em] text-[12px] lg:text-[24px] bg-brand-accent2 text-white">
                    <span>View Study Options</span>
                    <ArrowRight className="w-[12px] lg:w-[18px] h-auto" />
                  </p>
                </div>
              </div>
            </section>

            <section className="relative w-full h-full overflow-hidden">
              <div className="relative z-10 mx-auto xl:w-[75vw] px-8 space-y-4 lg:space-y-[72px]">
                <TextReveal>
                  <h2 className="text-[28px] lg:text-[94px] leading-tight">
                    The Department of <br />
                    <span className="text-brand-accent2">
                      Human Centred Design
                    </span>
                  </h2>
                </TextReveal>
                <TextReveal>
                  <p className="lg:ml-auto lg:w-2/3 font-light lg:text-right text-[14px] lg:text-[34px] leading-tight">
                    We are a collective of diverse thinkers reimagining how{" "}
                    <span className="font-normal text-brand-accent2">
                      human-technology interactions
                    </span>{" "}
                    can be seamless and meaningful. We are a collective of
                    diverse thinkers reimagining how human-technology
                    interactions.
                  </p>
                </TextReveal>
                <div className="relative h-[202px] px-5 lg:px-20 py-3 lg:py-6 border lg:border-2 border-brand-accent2">
                  <div className="absolute inset-0 z-10 w-full h-full bg-brand-accent2/50 mix-blend-overlay" />
                  <Image
                    src="/rnd-building.png"
                    alt="R&D Building IIITD"
                    width={376}
                    height={383}
                    className="absolute inset-0 w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="flex justify-between gap-[1em] lg:gap-[8em]">
                  <TextReveal>
                    <p className="lg:w-1/2 font-light text-[14px] lg:text-[30px] leading-tight">
                      We are a collective of diverse thinkers reimagining how{" "}
                      <span className="font-normal text-brand-accent2">
                        human-technology interactions
                      </span>{" "}
                      can be seamless and meaningful. We are a collective of
                      diverse thinkers reimagining how human-technology
                      interactions.
                    </p>
                  </TextReveal>
                  <TextReveal>
                    <p className="max-lg:hidden w-1/2 text-right text-[64px] leading-tight">
                      Welcome to a new era of HCD, powered{" "}
                      <span className="font-light italic text-brand-accent2">
                        by you.
                      </span>
                    </p>
                  </TextReveal>
                </div>
              </div>
            </section>

            <section className="relative w-full h-full overflow-hidden">
              <div className="flex max-lg:flex-col max-lg:px-8 justify-between items-center gap-4 lg:gap-[60px]">
                <div className="relative w-full lg:w-[60%] aspect-video flex-shrink-0">
                  <div className="absolute z-10 inset-0 bg-brand-accent2/50 mix-blend-overlay" />
                  <Image
                    src="/faculty.png"
                    alt="Faculty at IIITD HCD"
                    width={1186}
                    height={682}
                    priority
                    className="absolute inset-0 w-full h-full border-2 lg:border-4 border-brand-accent2 grayscale"
                  />
                </div>
                <div className="lg:pr-[12.5vw] lg:text-right">
                  <TextReveal>
                    <h1 className="text-[24px] lg:text-[44px] text-brand-accent2 leading-tight">
                      HCD Faculty
                    </h1>
                  </TextReveal>
                  <TextReveal>
                    <p className="font-light text-[14px] lg:text-[24px] leading-tight">
                      Our faculty, numbering over 200, is dedicated to
                      pioneering innovative solutions for challenges that arise
                      with each advancement.
                    </p>
                  </TextReveal>
                  <p className="mt-[1em] font-normal flex justify-center items-center gap-[1em] px-[1em] py-[1em] text-[12px] lg:text-[20px] bg-brand-accent2 text-white">
                    <span>View Faculty</span>
                    <ArrowRight className="w-[12px] lg:w-[18px] h-auto" />
                  </p>
                </div>
              </div>
            </section>

            <section className="relative w-full h-full overflow-hidden">
              <div>
                <Heading align="middle">
                  <span className="text-brand-accent2 font-normal">
                    Mission &amp; Vision
                  </span>
                </Heading>
                <TextReveal>
                  <p className="max-lg:hidden font-light mt-[1em] mx-auto xl:w-[75vw] px-8 text-center text-[24px]">
                    India has already established itself as the software hub of
                    the world due to the large number of engineers that it
                    produces. There is now an increasing and persistent demand
                    of having engineers who can develop and design.
                  </p>
                </TextReveal>
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

          <GooeySvgFilter id="gooey-filter-pixel-trail" strength={5} />
          <div
            className="absolute inset-0 z-50 w-full h-full"
            style={{
              filter: "url(#gooey-filter-pixel-trail)",
            }}
          >
            <PixelTrailReveal pixelSize={128} delay={400} fadeDuration={0}>
              <div className="relative w-full h-full space-y-12 lg:space-y-32 pb-[78px] bg-brand-accent2 text-white">
                <section>
                  <div className="font-light pt-[48px] lg:pt-[90px] mx-auto xl:w-[75vw] px-8 flex max-lg:flex-col justify-between gap-5 lg:gap-8">
                    <div className="flex-1">
                      <p className="text-[16px] lg:text-[36px] text-brand-accent1">
                        Human Centred Design
                      </p>
                      <h1 className="text-[36px] lg:text-[96px] leading-none lg:leading-tight">
                        Where{" "}
                        <span className="font-normal text-brand-accent1">
                          Creativity
                        </span>{" "}
                        Meets Innovation.
                      </h1>
                      <blockquote className="mt-[1em] text-[14px] lg:text-[28px] italic leading-tight">
                        We are a collective of diverse thinkers reimagining how
                        human-technology interactions.
                      </blockquote>
                    </div>
                    <div className="flex-1 flex flex-col lg:items-end gap-2 lg:gap-5">
                      <div className="flex gap-2 lg:gap-5 w-full">
                        <div className="relative flex-1 aspect-square border-2 border-brand-accent1">
                          <Image
                            src="/rnd-building.png"
                            alt="R&D Building IIITD"
                            width={376}
                            height={383}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        <div className="relative flex-1 aspect-square border-2 border-brand-accent1">
                          <Image
                            src="/students.png"
                            alt="R&D Building IIITD"
                            width={376}
                            height={383}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="relative w-full h-[145px] box-border flex justify-around px-5 lg:px-16 py-3 lg:py-6 gap-8 lg:gap-16 bg-brand-accent1/[.25] border lg:border-2 border-brand-accent1/50">
                        <Image
                          src="/page-reveal/img03.png"
                          alt="R&D Building IIITD"
                          width={376}
                          height={383}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <Link
                        href="/study/btech"
                        className="font-normal w-max flex justify-center items-center gap-[1em] px-[1.5em] py-[1em] text-[12px] lg:text-[24px] bg-brand-accent1 text-black"
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

                <section>
                  <div className="relative z-10 mx-auto xl:w-[75vw] px-8 space-y-4 lg:space-y-[72px]">
                    <h2 className="text-[28px] lg:text-[94px] leading-tight">
                      The Department of <br />
                      <span className="text-brand-accent1">
                        Human Centred Design
                      </span>
                    </h2>
                    <p className="lg:ml-auto lg:w-2/3 font-light lg:text-right text-[14px] lg:text-[34px] leading-tight">
                      We are a collective of diverse thinkers reimagining how{" "}
                      <span className="font-normal text-brand-accent1">
                        human-technology interactions
                      </span>{" "}
                      can be seamless and meaningful. We are a collective of
                      diverse thinkers reimagining how human-technology
                      interactions.
                    </p>
                    <div className="h-[202px] px-5 lg:px-20 py-3 lg:py-6 border lg:border-2 border-brand-accent1/50 backdrop-blur-lg">
                      <Image
                        src="/rnd-building.png"
                        alt="R&D Building IIITD"
                        width={376}
                        height={383}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex justify-between gap-[1em] lg:gap-[8em]">
                      <p className="lg:w-1/2 font-light text-[14px] lg:text-[30px] leading-tight">
                        We are a collective of diverse thinkers reimagining how{" "}
                        <span className="font-normal text-brand-accent1">
                          human-technology interactions
                        </span>{" "}
                        can be seamless and meaningful. We are a collective of
                        diverse thinkers reimagining how human-technology
                        interactions.
                      </p>
                      <p className="max-lg:hidden w-1/2 text-right text-[64px] leading-tight">
                        Welcome to a new era of HCD, powered{" "}
                        <span className="font-light italic text-brand-accent1">
                          by you.
                        </span>
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex max-lg:flex-col max-lg:px-8 justify-between items-center gap-4 lg:gap-[60px]">
                    <div className="relative w-full lg:w-[60%] aspect-video flex-shrink-0">
                      <Image
                        src="/faculty.png"
                        alt="Faculty at IIITD HCD"
                        width={1186}
                        height={682}
                        priority
                        className="absolute inset-0 w-full h-full border-2 lg:border-4 border-brand-accent1"
                      />
                    </div>
                    <div className="lg:pr-[12.5vw] lg:text-right">
                      <h1 className="text-[24px] lg:text-[44px] text-brand-accent1 leading-tight">
                        HCD Faculty
                      </h1>
                      <p className="font-light text-[14px] lg:text-[24px] leading-tight">
                        Our faculty, numbering over 200, is dedicated to
                        pioneering innovative solutions for challenges that
                        arise with each advancement.
                      </p>
                      <Link
                        href="/people/faculty"
                        className="mt-[1em] font-normal flex justify-center items-center gap-[1em] px-[1em] py-[1em] text-[12px] lg:text-[20px] bg-brand-accent1 text-black"
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

                <section>
                  <div>
                    <Heading align="middle">
                      <span className="text-brand-accent1 font-normal">
                        Mission &amp; Vision
                      </span>
                    </Heading>
                    <p className="max-lg:hidden font-light mt-[1em] mx-auto xl:w-[75vw] px-8 text-center text-[24px]">
                      India has already established itself as the software hub
                      of the world due to the large number of engineers that it
                      produces. There is now an increasing and persistent demand
                      of having engineers who can develop and design.
                    </p>
                    <div className="mt-[32px] lg:mt-[44px]">
                      <div
                        className={`mx-auto xl:w-[1280px] px-8 grid gap-[1em] grid-cols-1 xl:grid-cols-5`}
                      >
                        {programmeItems.map((item) => (
                          <div
                            key={item.number}
                            className="flex flex-col justify-between gap-[1em] py-[28px] px-[18px] lg:py-[40px] lg:px-[30px] bg-brand-gray1/5 border border-brand-accent1 backdrop-blur-lg hover:backdrop-blur-2xl transition-all duration-200"
                          >
                            <p className="text-[14px] lg:text-[20px] font-light break-words">
                              {item.text}
                            </p>
                            <p className="text-[64px] lg:text-[96px] leading-none text-brand-accent1 font-extralight opacity-40 self-end">
                              {item.number}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </PixelTrailReveal>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
