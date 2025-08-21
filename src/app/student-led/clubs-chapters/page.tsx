import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import Heading from "@/features/pages/study/components/Heading";
import Image from "next/image";
import Link from "next/link";

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
              href=""
              className="w-max gap-4 px-[2em] py-[0.5em] text-[12px] lg:text-[18px] rounded-full text-white border border-white backdrop-blur-lg hover:backdrop-blur-2xl transition-all duration-200"
            >
              <LetterSwapForward
                label="ACM SIGCHI STUDENT CHAPTER"
                staggerDuration={0.005}
                className="w-max"
              />
            </Link>
            <Link
              href=""
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
          src="/rnd-building.png"
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
              Study{" "}
              <span className="text-brand-accent2 font-semibold">CSD</span>{" "}
              @IIITD
            </Heading>
            <div className="mx-auto mt-[12px] lg:mt-[80px] xl:w-[1280px] px-8 flex flex-col items-end">
              <p className="xl:w-2/3 text-[14px] lg:text-[24px] font-light">
                The program will prepare students to work in the IT industry as
                well as digital media industry like gaming, animation,
                virtual/augmented reality, etc. The program will also allow
                students, who want to pursue higher studies, to take up higher
                studies in CS/IT or in Design.
              </p>
              <p className="xl:w-2/3 mt-[32px] lg:mt-[80px] text-[14px] lg:text-[24px] font-light">
                The program will prepare students to work in the IT industry as
                well as digital media industry like gaming, animation,
                virtual/augmented reality, etc. The program will also allow
                students, who want to pursue higher studies, to take up higher
                studies in CS/IT or in Design.
              </p>
            </div>
          </section>

          <section className="mt-[64px] lg:mt-[100px]">
            <Heading align="right">
              <span className="text-brand-accent2 font-semibold">
                Admissions
              </span>{" "}
              Process
            </Heading>
            <div className="mx-auto mt-[12px] lg:mt-[80px] xl:w-[1280px] px-8">
              <p className="xl:w-2/3 text-[14px] lg:text-[24px] font-light">
                Admission to this program will be through two channels –
                approximately half of the seats will be through the Joint
                Admission Counselling (JAC) of Delhi, which takes students
                through JEE (Main), and approximately half the seats will be
                filled through UCEED conducted by IIT Bombay. More information
                about the admission to all the B.Tech. programs at IIIT-Delhi
                will be made available on the admissions pages from time to
                time. More details regarding admissions are available here.
              </p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
