import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import Banner from "@/features/pages/about/components/Banner";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const _comp = [
  "/collab/img-1.png",
  "/collab/img-2.png",
  "/collab/img-3.png",
  "/collab/img-4.png",
  "/collab/img-5.png",
];
const companies = [..._comp, ..._comp, ..._comp];

export default function Page() {
  return (
    <main>
      <article className="mx-auto mt-12 px-8 xl:w-[1280px] font-light">
        <Banner
          title="Lorem ipsum dolor sit amet consectetur adipisicing."
          subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quae suscipit qui modi ut nulla iste labore et amet sequi."
          imageSrc={"/1pixel.png"}
          links={[
            { title: "Lorem Ipsum", href: "#" },
            { title: "Lorem Ipsum", href: "#" },
          ]}
          breadcrumbs={["about", "placements"]}
        />
        <p className="mt-5 lg:mt-12 text-[14px] lg:text-[20px]">
          The Human-Centered Design (HCD) program at IIIT-Delhi blends technical
          excellence, design thinking, and interdisciplinary research. Our
          students graduate with a strong foundation in computing, design
          methodology, and real-world problem solving—making them highly sought
          after by industry and academia alike.
          <br />
          <br />
          Placements are a reflection of our philosophy:{" "}
          <span className="font-medium text-brand-accent2">
            empowering students to innovate while solving real-world challenges.
          </span>
        </p>

        <section className="mt-5 lg:mt-12">
          <h2 className="font-medium text-[18px] lg:text-[24px] text-brand-accent2">
            Where Our Graduates Go
          </h2>
          <p className="mt-2 text-[14px] lg:text-[20px]">
            Our students have been placed in top organizations spanning
            technology, research, and design:
          </p>
          <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-[2em] p-[2em]">
            {companies.map((collaborator, idx) => (
              <Image
                key={idx}
                src={collaborator}
                alt=""
                className="w-[25vw] lg:w-[5vw] h-auto aspect-square object-contain"
                width={1000}
                height={1000}
              />
            ))}
          </div>
        </section>

        {/* <section className="my-5 lg:my-12">
          <div className="relative px-4 py-3 lg:px-8 lg:py-6 border border-brand-accent2 bg-brand-accent2/5 backdrop-blur-lg hover:backdrop-blur-2xl transition-all duration-300">
            <p className="font-normal text-[14px] lg:text-[20px] text-brand-gray3 leading-tight">
              GRADUATED FROM CAMPUS
            </p>
            <h2 className="font-medium text-[24px] lg:text-[48px] text-brand-accent2">
              10+ B.Tech & M.Tech
            </h2>
          </div>

          <p className="mt-5 lg:mt-12 text-[14px] lg:text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            reiciendis eaque, quas pariatur consequatur repellendus odit esse
            laudantium tempore velit, earum eum enim sequi ratione aperiam,
            dolor blanditiis doloremque minima unde voluptatibus quo voluptates
            mollitia! Natus velit ut nostrum ducimus.
          </p>
        </section> */}

        <section className="my-5 lg:my-12">
          <div className="relative p-6 lg:p-[40px] border border-brand-accent2 bg-brand-accent2/5 backdrop-blur-lg hover:backdrop-blur-2xl transition-all duration-300">
            <h2 className="font-medium text-[18px] lg:text-[28px] text-brand-accent2">
              Recruit From IIIT-Delhi HCD
            </h2>
            <p className="mt-[0.5em] text-[14px] lg:text-[18px]">
              We invite companies, design studios, R&D labs, and startups to
              collaborate with us in shaping the future of human-centered
              innovation. Our dedicated Placement Cell ensures smooth
              recruitment, from pre-placement talks to interviews.
            </p>
            <Link
              href="/connect"
              className="font-normal w-full xl:w-[25vw] mt-[2em] flex justify-center items-center gap-[24px] py-[0.75em] text-[12px] xl:text-[18px] bg-brand-accent2 text-white border border-brand-accent2 hover:bg-brand-accent2-130 transition-all duration-200"
            >
              <LetterSwapForward
                label="Connect With Us"
                staggerDuration={0.005}
                className="w-max"
              />
              <ArrowRight className="w-[12px] lg:w-[18px] h-auto" />
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
