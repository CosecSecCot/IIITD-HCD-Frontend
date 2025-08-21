import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import LinkButton from "@/components/LinkButton";
import Banner from "@/features/pages/about/components/Banner";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import qs from "qs";

export const dynamic = "force-dynamic";

export default async function Page() {
  return (
    <main>
      <article className="mx-auto my-12 px-8 xl:w-[1280px] font-light">
        <Banner
          title="Collaborating Across Borders to Shape the Future of Human-Centered Design"
          subtitle="We partner with leading universities, research institutes, and industry labs worldwide to advance human-centered innovation in computing, design, and technology."
          imageSrc={"/aid-lab-nu-visit.jpeg"}
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

        <section className="mt-5 lg:mt-12">
          <div className="relative p-6 lg:p-[40px] border border-brand-accent2 bg-brand-accent2/5 backdrop-blur-lg hover:backdrop-blur-2xl transition-all duration-300">
            <h2 className="font-medium text-[18px] lg:text-[28px] text-brand-accent2">
              Partner with IIIT-Delhi HCD
            </h2>
            <p className="mt-[0.5em] text-[14px] lg:text-[18px]">
              We are always open to new collaborations that expand the horizons
              of human-centered research and education.
            </p>
            <LinkButton
              href="/connect"
              className="mt-[2em]"
              text="Reach Out for Collaboration"
              type="solid"
            />
          </div>
          <CollabroatorsSection />
        </section>
      </article>
    </main>
  );
}

async function CollabroatorsSection() {
  const query = qs.stringify(
    {
      populate: "Collaborators",
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/collaborations-page?${query}`
  ).catch((reason) => console.log("[ERROR]", reason));
  const data = await res?.json();

  if (
    !data ||
    data.error ||
    data.data.length == 0 ||
    !data.data.Collaborators
  ) {
    return;
  }

  const collaborators: string[] = data.data.Collaborators.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any): string => `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.url}`
  );

  return (
    <section id="partners" className="mt-5 lg:mt-12">
      <h2 className="text-[18px] lg:text-[24px] font-medium text-brand-accent2">
        Our Global Collaborations
      </h2>
      <p className="mt-2 text-[14px] lg:text-[20px]">
        We collaborate with top universities, institutes, and industry partners
        worldwide—advancing joint research, exchanges, publications, studios,
        and capstones that translate human-centered innovation into impact.
      </p>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-[2em] p-[2em]">
        {collaborators.map((collaborator, idx) => (
          <Image
            key={idx}
            src={collaborator}
            alt=""
            className="mx-auto w-1/2 h-auto aspect-square object-contain"
            width={1000}
            height={1000}
          />
        ))}
      </div>
    </section>
  );
}
