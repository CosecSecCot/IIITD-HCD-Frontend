import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import LinkButton from "@/components/LinkButton";
import Banner from "@/features/pages/about/components/Banner";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import qs from "qs";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "HCD Placements at IIIT-Delhi | Placements",
  description:
    "Learn about HCD placements at IIIT-Delhi—career tracks in UX, product, XR, and media; internship pathways; recruiters; and alumni outcomes.",
  keywords: [],
  authors: [{ name: "IIIT Delhi HCD" }],
  creator: "IIIT Delhi HCD",
  publisher: "IIIT Delhi",
  alternates: {
    canonical: "/about/placements",
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

export default async function Page() {
  return (
    <main>
      <article className="mx-auto mt-12 px-8 xl:w-[1280px] font-light">
        <Banner
          title="Where Design Meets Opportunity: Placements at IIIT-Delhi HCD"
          subtitle="Our graduates step into leading roles across technology, design, research, and innovation—driving impact in top companies, startups, and academic institutions worldwide."
          imageSrc={"/1pixel.png"}
          breadcrumbs={["about", "placements"]}
        />
        <p className="mt-5 lg:mt-12 text-[14px] lg:text-[20px]">
          The Human-Centered Design (HCD) program at IIIT-Delhi blends technical
          excellence, design thinking, and interdisciplinary research. Our
          students graduate with a strong foundation in computing, design
          methodology, and real-world problem solving—making them highly sought
          after by industry and academia alike.
        </p>

        <LinkButton
          href="/Placement_Brochure_HCD.pdf"
          target="_blank"
          text="View Placement Brochure"
          className="mt-8 text-[12px]"
        />

        <section className="mt-5 lg:mt-12">
          <h2 className="font-medium text-[18px] lg:text-[24px] text-brand-accent2">
            Where Our Graduates Go
          </h2>
          <p className="mt-2 text-[14px] lg:text-[20px]">
            Our students have been placed in top organizations spanning
            technology, research, and design:
          </p>
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-[2em] p-[2em]">
            <Suspense
              fallback={
                <>
                  {new Array(6).fill(0).map(() => (
                    <div className="relative bg-white mx-auto w-1/2 aspect-square">
                      <div className="absolute inset-0 w-full h-full bg-brand-gray1/70 animate-pulse rounded-md" />
                    </div>
                  ))}
                </>
              }
            >
              <CompaniesSection />
            </Suspense>
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
              engage with our talent pool and explore recruitment opportunities.
              Our dedicated Placement Cell ensures a seamless recruitment
              process, from pre-placement talks to interviews, providing an
              efficient and professional experience for recruiters.
            </p>
            <LinkButton
              href="/connect"
              className="mt-[2em] text-[12px]"
              text="Connect With Us"
              type="solid"
            />
          </div>
        </section>
      </article>
    </main>
  );
}

async function CompaniesSection() {
  const query = qs.stringify(
    {
      populate: "Companies",
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/placements-page?${query}`
  ).catch((reason) => console.log("[ERROR]", reason));
  const data = await res?.json();

  if (!data || data.error || data.data.length == 0 || !data.data.Companies) {
    return (
      <p className="col-span-full text-center font-light italic text-[14px] lg:text-[20px] text-black/60">
        There was some problem loading our recruiters.
      </p>
    );
  }

  const companies: string[] = data.data.Companies.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any): string => `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.url}`
  );

  return (
    <>
      {companies.map((collaborator, idx) => (
        <Image
          key={idx}
          src={collaborator}
          alt=""
          className="mx-auto w-1/2 h-auto aspect-square object-contain"
          width={1000}
          height={1000}
        />
      ))}
    </>
  );
}
