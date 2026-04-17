import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageReveal from "@/features/animation/PageReveal";
import Heading from "@/features/pages/study/components/Heading";
import ProgrammeCard from "@/features/pages/home/components/ProgrammeCard";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import TextReveal from "@/features/animation/TextReveal";
import { Suspense } from "react";
import NewsSection from "@/features/pages/home/components/NewsSection";
import CenterUnderline from "@/components/fancy/text/underline-center";
import HeroCarousel from "@/features/pages/home/components/HeroCarousel";
import ScrollManifesto from "@/features/pages/home/components/ScrollManifesto";
import MomentsGallery from "@/features/pages/home/components/MomentsGallery";
import AreasOfPractice, {
  type AreaItem,
} from "@/features/pages/home/components/AreasOfPractice";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  keywords: [
    "human centered design",
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

function deriveAcronym(name: string): string {
  const words = name.replace(/[^A-Za-z\s]/g, "").split(/\s+/).filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return (words[0]?.slice(0, 3) ?? "LAB").toUpperCase();
}

async function fetchAreas(): Promise<AreaItem[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/labs?sort[0]=LabName:asc&populate=*`,
      { cache: "no-store" }
    );
    const data = await res.json();
    if (!data?.data?.length) return [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.data.slice(0, 6).map((item: any): AreaItem => {
      const website = item.WebsiteLink?.URL as string | undefined;
      return {
        title: item.LabName,
        short: deriveAcronym(item.LabName),
        body: item.ShortDescription ?? "",
        href: website && website.length > 0 ? website : "/research/labs",
        external: Boolean(website && website.length > 0),
      };
    });
  } catch (err) {
    console.log("[ERROR] fetching labs for home:", err);
    return [];
  }
}

export default async function Home() {
  const areas = await fetchAreas();
  return (
    <>
      <PageReveal />
      <div className="background-element relative z-10 bg-white font-anybody shadow-xl">
        <Navbar type="hero" />
        <main className="relative">
          <article className="space-y-0 pb-[78px]">
            <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
              <HeroCarousel />
              <div className="relative z-10 text-center px-8 max-w-[900px] mx-auto">
                <TextReveal>
                  <p className="text-[16px] lg:text-[32px] text-white/80 leading-tight flex justify-center">
                    <LetterSwapForward
                      label="Human Centered Design"
                      staggerDuration={0.005}
                    />
                  </p>
                </TextReveal>
                <TextReveal>
                  <h1 className="mt-3 lg:mt-5 text-[36px] lg:text-[80px] text-white font-light leading-none lg:leading-tight">
                    Where{" "}
                    <span className="font-normal text-terracotta">Creativity</span>{" "}
                    Meets Innovation.
                  </h1>
                </TextReveal>
                <TextReveal>
                  <blockquote className="mt-[0.25em] text-[14px] lg:text-[28px] text-white/80 font-light leading-tight max-w-[700px] mx-auto">
                    We are a collective of diverse thinkers reimagining
                    human-technology interactions.
                  </blockquote>
                </TextReveal>
                <TextReveal>
                  <div className="mt-6 lg:mt-10 flex justify-center gap-4">
                    <Link
                      href="/study/btech"
                      className="font-normal flex justify-center items-center gap-[0.5em] px-[1.5em] py-[1em] text-[12px] lg:text-[20px] text-brand-accent2 bg-white hover:bg-white/90 transition-colors duration-200"
                    >
                      <LetterSwapForward
                        label="View Study Options"
                        staggerDuration={0.005}
                      />
                      <ArrowRight className="w-[12px] lg:w-[18px] h-auto" />
                    </Link>
                    <Link
                      href="/about/overview"
                      className="font-normal flex justify-center items-center gap-[0.5em] px-[1.5em] py-[1em] text-[12px] lg:text-[20px] text-white border border-white/50 hover:bg-white/10 transition-colors duration-200"
                    >
                      <LetterSwapForward
                        label="Learn More"
                        staggerDuration={0.005}
                      />
                    </Link>
                  </div>
                </TextReveal>
              </div>
            </section>

            <section className="relative w-full py-[10vh] lg:py-[14vh] flex flex-col justify-center overflow-hidden">
              <div className="relative z-10 mx-auto xl:w-[1280px] px-8 space-y-4 lg:space-y-8">
                <TextReveal>
                  <h2 className="font-light text-[28px] lg:text-[86px] leading-tight">
                    The Department of <br />
                    <span className="text-brand-accent2 font-normal">
                      <LetterSwapForward
                        label="Human Centered Design"
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
                <div className="relative h-[350px] lg:h-[500px] px-5 lg:px-20 py-3 lg:py-6 border lg:border-2 border-brand-accent2">
                  <Image
                    src="/rnd-building.png"
                    alt="R&D Building IIITD"
                    width={376}
                    height={383}
                    className="absolute inset-0 w-full h-full object-cover"
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

            <ScrollManifesto />

            {areas.length > 0 && <AreasOfPractice areas={areas} />}

            <section className="relative w-full py-[10vh] lg:py-[14vh] flex flex-col justify-center overflow-hidden">
              <div className="mx-auto xl:w-[1280px] flex max-lg:flex-col px-8 justify-between items-center gap-4 lg:gap-[60px]">
                <div className="relative w-full lg:w-[60%] flex-shrink-0 aspect-video">
                  <Image
                    src="/hcd/5Z4A17.webp"
                    alt="Faculty at IIITD HCD"
                    width={1186}
                    height={682}
                    priority
                    className="absolute inset-0 w-full h-full object-cover border-2 lg:border-4 border-brand-accent2"
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

            <MomentsGallery />

            <Suspense
              fallback={
                <section className="relative xl:w-[1280px] mx-auto px-8 min-h-[512px] lg:min-h-screen flex flex-col justify-center overflow-hidden">
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

            <section className="dot-grid relative w-full py-[10vh] lg:py-[14vh] overflow-hidden bg-brand-accent2/[0.04]">
              <div className="mx-auto xl:w-[1280px] px-8">
                <div className="max-w-[820px] mb-8 lg:mb-12">
                  <h2 className="font-light text-[32px] lg:text-[64px] leading-none text-brand-accent2">
                    Mission &amp;{" "}
                    <span className="text-terracotta">vision</span>
                  </h2>
                  <p className="mt-4 lg:mt-6 font-light text-[14px] lg:text-[20px] text-black/70 leading-snug max-w-[640px]">
                    India is the software hub of the world. Our goal is to
                    shape the engineers who can also design — and the
                    designers who can also code.
                  </p>
                </div>
                <div className="grid gap-3 lg:gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-5">
                  {programmeItems.map((item) => (
                    <ProgrammeCard
                      key={item.number}
                      text={item.text}
                      number={item.number}
                    />
                  ))}
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
