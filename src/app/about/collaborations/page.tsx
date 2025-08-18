import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import Banner from "@/features/pages/about/components/Banner";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const _collab = [
  "/collab/img-1.png",
  "/collab/img-2.png",
  "/collab/img-3.png",
  "/collab/img-4.png",
  "/collab/img-5.png",
];
const collaborators = [..._collab, ..._collab, ..._collab];

export default function Page() {
  return (
    <main>
      <article className="mx-auto mt-12 px-8 xl:w-[1280px] font-light">
        <Banner
          title="Collaborating Across Borders to Shape the Future of Human-Centered Design"
          subtitle="We partner with leading universities, research institutes, and industry labs worldwide to advance human-centered innovation in computing, design, and technology."
          imageSrc={"/rnd-building.png"}
          links={[
            { title: "Become a Partner", href: "#partner-with-us" },
            { title: "Explore Collaborations", href: "#partners" },
          ]}
          breadcrumbs={["about", "collaborations"]}
        />
        <p className="mt-5 lg:mt-12 text-[14px] lg:text-[20px]">
          Collaboration is at the core of the Human-Centered Design (HCD) vision
          at IIIT-Delhi. We actively work with global universities, industry
          partners, and government organizations to push the boundaries of
          research and create solutions with real-world impact. These
          collaborations span joint research, faculty and student exchanges,
          joint degree pathways, co-authored publications, workshops, design
          studios, and industry-led capstone projects.
          <br />
          <br />
          By connecting with diverse partners across continents, we ensure that
          our students and faculty remain globally engaged and that our research
          addresses problems at scale.
        </p>

        <section id="partner-with-us" className="mt-5 lg:mt-12">
          <h2 className="font-medium text-[18px] lg:text-[24px] text-brand-accent2">
            Why Collaborate With Us?
          </h2>
          <ul className="mt-2 text-[14px] lg:text-[20px] list-disc list-inside">
            <li>
              World-class expertise in Human-Centered Design, HCI, XR, game
              design, and AI-driven interaction.
            </li>
            <li>
              <span className="font-normal text-brand-accent2">
                Research impact:
              </span>{" "}
              peer-reviewed publications at CHI, UIST, CSCW, IEEE VR, and more.
            </li>
            <li>
              <span className="font-normal text-brand-accent2">
                Interdisciplinary approach:
              </span>{" "}
              strong links with Computer Science, ECE, Social Sciences and
              Design.
            </li>
            <li>
              <span className="font-normal text-brand-accent2">
                Global-ready students:
              </span>{" "}
              skilled in both technical engineering and design practice.
            </li>
            <li>
              Proven collaboration record with leading universities and
              industries worldwide.
            </li>
          </ul>
        </section>

        <section className="mt-5 lg:mt-12">
          <div className="relative p-6 lg:p-[40px] border border-brand-accent2 bg-brand-accent2/5 backdrop-blur-lg hover:backdrop-blur-2xl transition-all duration-300">
            <h2 className="font-medium text-[18px] lg:text-[28px] text-brand-accent2">
              Partner with IIIT-Delhi HCD
            </h2>
            <p className="mt-[0.5em] text-[14px] lg:text-[18px]">
              We are always open to new collaborations that expand the horizons
              of human-centered research and education. <br /> Opportunities
              include:
            </p>
            <ul className="mt-2 text-[14px] lg:text-[18px] list-disc list-inside">
              <li>Joint research projects and grant applications.</li>
              <li>Faculty and student exchange programs.</li>
              <li>Industry-sponsored studio projects and internships.</li>
              <li>Co-hosted conferences, workshops, and designathons.</li>
              <li>Long-term research and innovation partnerships.</li>
            </ul>
            <Link
              href="/connect"
              className="font-normal w-full xl:w-[25vw] mt-[2em] flex justify-center items-center gap-[24px] py-[0.75em] text-[12px] xl:text-[18px] bg-brand-accent2 text-white border border-brand-accent2 hover:bg-brand-accent2-130 transition-all duration-200"
            >
              <LetterSwapForward
                label="Reach Out for Collaboration"
                staggerDuration={0.005}
                className="w-max"
              />
              <ArrowRight className="w-[12px] lg:w-[18px] h-auto" />
            </Link>
          </div>
        </section>

        <section id="partners" className="my-5 lg:my-12">
          <h2 className="text-[18px] lg:text-[24px] font-medium text-brand-accent2">
            Our Global Collaborations
          </h2>
          <p className="mt-2 text-[14px] lg:text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            error corrupti quod dolorum unde veniam qui modi debitis incidunt
            reprehenderit dolore est, velit ipsam hic vitae earum deserunt
            doloribus nulla.
          </p>
          <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-[2em] p-[2em]">
            {collaborators.map((collaborator, idx) => (
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
      </article>
    </main>
  );
}
