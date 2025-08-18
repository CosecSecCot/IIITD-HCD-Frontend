import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmallProjectCard, {
  StudentProject,
} from "@/features/pages/our-work/components/SmallProjectCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Page() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/student-projects?populate=*`
  ).catch((reason) => console.log("[ERROR]", reason));
  const data = await res?.json();

  if (!data || data.error || data.data.length == 0) {
    return (
      <>
        <div className="relative z-10 bg-white font-anybody pb-8 shadow-xl">
          <Navbar type="solid" />
          <main className="mx-auto min-h-[80vh] xl:w-[1280px] px-8 py-[20vh] text-center">
            <h2 className="text-[20px] lg:text-[28px] text-brand-accent2 font-semibold">
              Hmm...
            </h2>
            <p className="text-[16px] lg:text-[20px] italic font-light">
              Looks like no projects were found.
            </p>
          </main>
        </div>
        <Footer />
      </>
    );
  }

  const normalized: StudentProject[] = data.data.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any): StudentProject => ({
      id: item.id,
      domain: item.Lab?.LabName,
      student: item.Students ? item.Students[0]?.Name : undefined,
      title: item.Title,
      description: item.Description,
      img: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.CoverImage.url}`,
    })
  );

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
                  {normalized.map((project, idx) => (
                    <SmallProjectCard key={project.id} project={project} />
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
