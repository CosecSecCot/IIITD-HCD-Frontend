import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import LinkButton from "@/components/LinkButton";
import Heading from "@/features/pages/study/components/Heading";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Student-Led Initiatives | Clubs & Chapters at HCD IIIT-Delhi",
  description:
    "Explore student-led initiatives at IIIT-Delhi including the ACM SIGCHI Student Chapter and Design Hub. Join communities that foster innovation, design thinking, creativity, and collaboration in human-computer interaction and product design.",
  keywords: [],
  authors: [{ name: "IIIT Delhi HCD" }],
  creator: "IIIT Delhi HCD",
  publisher: "IIIT Delhi",
  alternates: {
    canonical: "/search",
  },

  openGraph: {
    // url: "https://hcd.iiitd.ac.in/",
    siteName: "HCD IIITD",
    locale: "en-IN",
  },

  twitter: {
    card: "summary_large_image",
    creator: "@hcdiiitd",
  },
};

export default function Page() {
  const breadcrumbs = ["student-led", "clubs-chapters"];

  return (
    <>
      <section
        role="banner"
        // className="relative w-[100vw] h-[80vh] lg:h-[calc(100vh-128px)] xl:h-[calc(100vh-160px)] text-white flex flex-col justify-center shadow-2xl shadow-white"
        className="relative h-screen text-white flex flex-col justify-center shadow-2xl shadow-white"
      >
        <div className="absolute z-30 top-[38px] lg:top-[80px] right-8 xl:right-[calc(50vw-640px)] text-[12px] lg:text-[20px]">
          {breadcrumbs.map((breadcrumb, index) => {
            if (index < breadcrumbs.length - 1) {
              return (
                <span key={index}>
                  <span
                    // href={"/" + breadcrumbs.slice(0, index + 1).join("/")}
                    className="uppercase"
                    style={{
                      color: `color-mix(in oklab, white ${
                        ((index + 1) / breadcrumbs.length) * 100
                      }%, transparent)`,
                    }}
                  >
                    {breadcrumb}
                    {index == breadcrumbs.length - 1 ? "" : " / "}
                  </span>
                </span>
              );
            }

            return (
              <span key={index} className="uppercase">
                {breadcrumb}
              </span>
            );
          })}
        </div>
        <div className="relative z-30 mx-auto xl:w-[1280px] p-8">
          <p className="text-[18px] lg:text-[30px] text-white/60 leading-tight uppercase">
            Student-Led Initiatives
          </p>
          <h1 className="text-[38px] lg:text-[80px] leading-none uppercase">
            Clubs & Chapters
          </h1>
          <p className="mt-[1em] lg:w-3/4 font-light text-[16px] lg:text-[26px] leading-tight">
            We are a collective of diverse thinkers reimagining how
            human-technology interactions can be seamless and meaningful. We are
            a collective of diverse thinkers reimagining how human-technology
            interactions.
          </p>
          <div className="mt-[2em] flex gap-x-[1em] gap-y-[0.5em] flex-wrap">
            <Link
              target="_blank"
              href="https://sigchi.iiitd.ac.in"
              className="w-max gap-4 px-[2em] py-[0.5em] text-[12px] lg:text-[18px] rounded-full text-white border border-white backdrop-blur-lg hover:backdrop-blur-2xl transition-all duration-200"
            >
              <LetterSwapForward
                label="ACM SIGCHI STUDENT CHAPTER"
                staggerDuration={0.005}
                className="w-max"
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/designhub.iiitd"
              className="w-max gap-4 px-[2em] py-[0.5em] text-[12px] lg:text-[18px] rounded-full text-white border border-white backdrop-blur-lg hover:backdrop-blur-2xl transition-all duration-200"
            >
              <LetterSwapForward
                label="DESIGNHUB SOCIETY"
                staggerDuration={0.005}
                className="w-max"
              />
            </Link>
          </div>
        </div>
        <div className="absolute z-20 inset-0 w-full h-full pointer-events-none bg-gradient-to-r from-brand-accent2 via-brand-accent2-130/60 to-black/0" />
        <div className="absolute z-10 inset-0 w-full h-full pointer-events-none bg-brand-accent2/20" />
        <Image
          src="/museo-visit.jpeg"
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          width={1920}
          height={797}
        />
      </section>

      <main className="mt-[30px] lg:mt-[128px] mb-[10vh]">
        <article>
          <section>
            <Heading align="left">
              <span className="leading-none">
                IIITD{" "}
                <span className="text-brand-accent2 font-semibold">
                  ACM SIGCHI
                </span>{" "}
                <br className="md:hidden" />
                Student Chapter
              </span>
            </Heading>
            <div className="mx-auto mt-[12px] lg:mt-[80px] xl:w-[1280px] px-8 flex flex-col items-end">
              <p className="xl:w-2/3 text-[14px] lg:text-[24px] font-light">
                <strong className="font-medium text-brand-accent2">
                  Special Interest Group on Computer Human Interaction
                </strong>{" "}
                is the premier international society for professionals,
                academics and students who are interested in human-technology
                and human-computer interaction (HCI). SIGCHI provides a forum
                for the discussion of all aspects of HCI through their
                conferences, publications, web sites, email discussion groups,
                and other services.
                <br />
                <br />
                The SIGCHI chapter at IIIT Delhi aims to advance human-computer
                interaction through innovation and collaboration. The chapter
                brings together students from various fields to collaborate on
                ideas and projects and supporting them in conducting HCI
                research and publishing papers.
              </p>
              <div className="w-full xl:w-2/3 mt-[32px]">
                <LinkButton
                  target="_blank"
                  href="https://sigchi.iiitd.ac.in"
                  text="LEARN MORE"
                />
              </div>
            </div>
          </section>

          <section className="mt-[64px] lg:mt-[100px]">
            <Heading align="right">
              <span className="text-brand-accent2 font-semibold">Design</span>{" "}
              Hub
            </Heading>
            <div className="mx-auto mt-[12px] lg:mt-[80px] xl:w-[1280px] px-8">
              <p className="xl:w-2/3 text-[14px] lg:text-[24px] font-light">
                Design Hub is the design-focused student chapter of IIIT-Delhi.
                It brings together students who are passionate about creativity,
                product design, and innovation. The chapter organizes workshops,
                design jams, and collaborative projects that help students
                explore design thinking and build practical skills. By fostering
                a culture of creativity on campus, Design Hub encourages
                students to experiment, share ideas, and contribute to impactful
                design initiatives.
              </p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
