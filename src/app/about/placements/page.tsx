import LinkButton from "@/components/LinkButton";
import Banner from "@/features/pages/about/components/Banner";
import { Metadata } from "next";
import Image from "next/image";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "HCD Placements at IIIT-Delhi | Placements",
  description:
    "Learn about HCD placements at IIIT-Delhi. Explore career tracks in UX, product, XR, and media. Learn about our recruiters and get in touch with us.",
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
    <main id="main-content" tabIndex={-1}>
      <article className="mx-auto mt-12 px-8 xl:w-[1280px] font-light">
        <Banner
          title="Where Design Meets Opportunity: Placements at IIIT-Delhi HCD"
          subtitle="Our graduates step into leading roles across technology, design, research, and innovation, driving impact in top companies, startups, and academic institutions worldwide."
          imageSrc={"/1pixel.png"}
          breadcrumbs={["about", "placements"]}
        />
        <p className="mt-5 lg:mt-12 text-[14px] lg:text-[20px]">
          The Human-Centered Design (HCD) program at IIIT-Delhi blends technical
          excellence, design thinking, and interdisciplinary research. Our
          students graduate with a strong foundation in computing, design
          methodology, and real-world problem solving, making them highly sought
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
          {/* <div className="w-full p-[2em]">
            <Suspense
              fallback={
                <div className="relative bg-white mx-auto w-1/2 aspect-square">
                  <div className="absolute inset-0 w-full h-full bg-brand-gray1/70 animate-pulse rounded-md" />
                </div>
              }
            >
              <CompaniesSection />
            </Suspense>
          </div> */}
          <div className="w-full mt-[1em]">
            <Image
              src="/placementImage.png"
              alt=""
              width={1920}
              height={1080}
            />
          </div>
        </section>

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