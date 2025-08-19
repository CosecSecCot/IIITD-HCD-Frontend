import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import Banner from "@/features/pages/about/components/Banner";
import ViewCoursesCard from "@/features/pages/study/components/ViewCoursesCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "ALUMNI", value: "2000+" },
  { label: "STUDENTS", value: "2000+" },
  { label: "PAPERS", value: "20+" },
  { label: "FACULTY", value: "200+" },
];

export default function Page() {
  return (
    <main>
      <article className="mx-auto mt-12 px-8 xl:w-[1280px] font-light">
        <Banner
          title="Human-Centered Design at IIIT-Delhi — Design Technology with People at the Centre"
          subtitle="We combine rigorous computer-science training with design thinking and studio practice to build products, systems and experiences that solve real human and societal problems."
          imageSrc={"/rnd-building.png"}
          breadcrumbs={["about", "overview"]}
          links={[
            { title: "View Study Options", href: "/study/btech" },
            { title: "News & Events", href: "/about/news-events" },
          ]}
        />

        <section className="mt-5 lg:mt-12">
          <p className="text-[14px] lg:text-[20px]">
            Human-Centered Design (HCD) at IIIT-Delhi trains technically
            rigorous designers — engineers who think like designers, and
            designers who code. Our B.Tech. in Computer Science & Design (CSD)
            blends algorithms and systems with design methods, prototyping and
            user research so graduates can create usable, inclusive and scalable
            technology. The program, faculty research, and student studio work
            are closely integrated with CSE, ECE, Mathematics and Social
            Sciences, enabling interdisciplinary projects spanning HCI, wearable
            computing, AR/VR, game & media design, and intelligent interactive
            systems.
          </p>
          <div className="w-full box-border flex justify-around mt-[16px] px-4 lg:px-[2em] py-[1em] bg-brand-accent2-130/[.02] border lg:border-2 border-brand-accent2/50 backdrop-blur-lg">
            {stats.map((stat, idx) => (
              <div key={idx} className="leading-tight">
                <p className="text-[10px] lg:text-[20px] uppercase opacity-60">
                  {stat.label}
                </p>
                <h2 className="text-[24px] lg:text-[54px] font-medium text-brand-accent2">
                  {stat.value}
                </h2>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5 lg:mt-12">
          <h2 className="font-medium text-[18px] lg:text-[24px] text-brand-accent2">
            What is Human-Centered Design?
          </h2>
          <p className="mt-2 text-[14px] lg:text-[20px]">
            Human-Centered Design (HCD) is an approach that places people’s
            needs, behaviours and contexts at the centre of design. It
            emphasizes empathy, field research, iterative prototyping and
            evaluation so that products and systems address real user pain
            points and scale responsibly. At IIIT-Delhi HCD, this methodology
            drives both curriculum and research: students learn to observe
            users, build low-fi and hi-fi prototypes, run evaluations, and
            iterate until a measurable improvement is achieved.
          </p>
        </section>

        <section className="mt-5 lg:mt-12">
          <h2 className="font-medium text-[18px] lg:text-[24px] text-brand-accent2">
            B.Tech (Computer Science & Design) — Program snapshot
          </h2>
          <p className="mt-2 text-[14px] lg:text-[20px]">
            The CSD program integrates core computer science with design and
            digital media. Students complete foundational CS courses
            (programming, data structures, algorithms, operating systems,
            networks) alongside design studio courses (visual design,
            interaction design, prototyping, research methods). The curriculum
            emphasizes real projects and interdisciplinary collaborations,
            preparing students for design-focused engineering roles and academic
            research.
          </p>
          <Link
            href="/study/btech"
            className="mt-8 font-normal w-max flex justify-center items-center gap-[24px] px-[4em] py-[0.75em] text-[14px] xl:text-[18px] bg-brand-accent2-130/5 hover:bg-brand-accent2 border border-brand-accent2-130 text-brand-accent2-130 hover:text-white transition-all duration-300"
          >
            <LetterSwapForward
              label="VIEW FULL CURRICULUM"
              staggerDuration={0.005}
              className="w-max"
            />
            <ArrowRight className="w-[18px] h-auto" />
          </Link>
        </section>

        <section className="my-5 lg:my-12">
          <h2 className="font-medium text-[18px] lg:text-[24px] text-brand-accent2">
            Research, labs and collaborations
          </h2>
          <p className="mt-2 text-[14px] lg:text-[20px]">
            HCD at IIIT-Delhi houses active research labs and design projects in
            HCI, XR, tangible interfaces, interactive media and ubiquitous
            computing. Labs collaborate closely with CSE and other departments
            to publish in peer-reviewed venues and build real prototypes that
            move from lab to impact. Notable labs include the Creative
            Interfaces Lab (HCI & XR research), design-research groups focused
            on interactive media, and several industry-collaboration projects.
            Students are encouraged to join labs, co-author papers, and
            transform coursework into publishable research and demonstrable
            products.
          </p>
          <div className="mt-8 flex gap-[1em] flex-wrap">
            <Link
              href="/research/labs"
              className="font-normal w-max flex justify-center items-center gap-[24px] px-[4em] py-[0.75em] text-[14px] xl:text-[18px] bg-brand-accent2-130/5 hover:bg-brand-accent2 border border-brand-accent2-130 text-brand-accent2-130 hover:text-white transition-all duration-300"
            >
              <LetterSwapForward
                label="VIEW RESEARCH LABS"
                staggerDuration={0.005}
                className="w-max"
              />
              <ArrowRight className="w-[18px] h-auto" />
            </Link>
            <Link
              href="/research/publications"
              className="font-normal w-max flex justify-center items-center gap-[24px] px-[4em] py-[0.75em] text-[14px] xl:text-[18px] bg-brand-accent2-130/5 hover:bg-brand-accent2 border border-brand-accent2-130 text-brand-accent2-130 hover:text-white transition-all duration-300"
            >
              <LetterSwapForward
                label="VIEW PUBLICATIONS"
                staggerDuration={0.005}
                className="w-max"
              />
              <ArrowRight className="w-[18px] h-auto" />
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
