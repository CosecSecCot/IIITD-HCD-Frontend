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
          title="Overview of the Human Centred Design Department"
          subtitle="The program will prepare students to work in the IT industry as well as digital media industry like gaming"
          imageSrc={"/rnd-building.png"}
          breadcrumbs={["about", "overview"]}
        />

        <section className="mt-5 lg:mt-12">
          <p className="text-[14px] lg:text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            reiciendis eaque, quas pariatur consequatur repellendus odit esse
            laudantium tempore velit, earum eum enim sequi ratione aperiam,
            dolor blanditiis doloremque minima unde voluptatibus quo voluptates
            mollitia! Natus velit ut nostrum ducimus.
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
            Human Centred Design
          </h2>
          <p className="mt-2 text-[14px] lg:text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
            animi est tempora sed voluptatem porro nam natus necessitatibus,
            asperiores nulla repellendus ea culpa eveniet! Nesciunt tempore
            maiores architecto expedita illo.
          </p>
          <Link
            href=""
            className="mt-8 w-full lg:w-[25vw] flex justify-center items-center gap-[24px] py-[0.75em] text-[14px] lg:text-[20px] bg-brand-accent2/5 border border-brand-accent2 text-brand-accent2-130 backdrop-blur-xl"
          >
            <LetterSwapForward
              label="UCEED PORTAL"
              staggerDuration={0.005}
              className="w-max"
            />
            <ArrowRight className="w-[18px] h-auto" />
          </Link>
          <p className="mt-8 text-[14px] lg:text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem tempora mollitia veniam ad? Expedita optio, adipisci
            modi tempora ullam blanditiis alias rem vero sed fugiat magnam autem
            facere numquam odio est incidunt eum commodi quidem. Debitis unde
            facilis maxime illo iure ipsum corporis reiciendis voluptatum, esse
            maiores ipsam fuga a!
          </p>
        </section>

        <section className="my-5 lg:my-12">
          <ViewCoursesCard />
        </section>
      </article>
    </main>
  );
}
