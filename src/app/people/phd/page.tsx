import LinkButton from "@/components/LinkButton";
import PeopleSection, {
  People,
} from "@/features/pages/people/components/PeopleSection";
import { Suspense } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "PhD Scholars | HCD IIIT-Delhi",
  description:
    "Meet our PhD scholars at HCD IIIT-Delhi, advancing in human-computer interaction through groundbreaking research, new ideas, and future-focused innovation.",
  keywords: [],
  authors: [{ name: "IIIT Delhi HCD" }],
  creator: "IIIT Delhi HCD",
  publisher: "IIIT Delhi",
  alternates: {
    canonical: "/connect",
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

export default async function Page(pageProps: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const searchParams = await pageProps.searchParams;
  const breadcrumbs = ["people", "PhD"];
  return (
    <>
      <section
        role="banner"
        className="relative h-screen text-white flex flex-col justify-center shadow-2xl shadow-white"
      >
        <div className="relative z-30 mx-auto xl:w-[1280px] p-8">
          <div className="absolute z-30 -top-[128px] lg:-top-[100px] right-8 text-[12px] lg:text-[20px]">
            {breadcrumbs.map((breadcrumb, index) => {
              if (index < breadcrumbs.length - 1) {
                return (
                  <span key={index}>
                    <span
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
          <p className="text-[18px] lg:text-[30px] text-white/60 leading-tight uppercase"></p>
          <h1 className="text-[38px] lg:text-[80px] leading-none uppercase">
            PhD Scholars At HCD
          </h1>
          <p className="mt-[1em] lg:w-3/4 font-light text-[16px] lg:text-[26px] leading-tight">
            Our PhD scholars are pushing boundaries with cutting-edge research,
            exploring new dimensions of human-technology interactions, and
            building knowledge that drives tomorrow&lsquo;s solutions.
          </p>
          <div className="mt-[2em] flex gap-x-[1em] gap-y-[0.5em] flex-wrap">
            <LinkButton
              href="/research/labs"
              text="RESEARCH LABS"
              type="transparent"
              icon={null}
              rounded
              className="text-[12px] lg:text-[18px] lg:px-[2em] py-[0.5em]"
            />
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
          <section className="xl:w-[1280px] mx-auto px-8">
            <Suspense
              fallback={
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
              }
            >
              <PhDStudentsSection filter={searchParams.filter} />
            </Suspense>
          </section>
        </article>
      </main>
    </>
  );
}

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // remove non-word chars
    .replace(/[\s_-]+/g, "-") // collapse whitespace and replace with -
    .replace(/^-+|-+$/g, ""); // remove leading/trailing dashes

async function PhDStudentsSection({ filter }: { filter?: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/phd-students?sort[0]=Name:asc&populate=*`
  ).catch((reason) => console.log("[ERROR]", reason));
  const data = await res?.json();

  if (!data || data.error || data.data.length == 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[50vh]">
        <h2 className="text-[20px] lg:text-[28px] text-brand-accent2 font-semibold">
          Hmm...
        </h2>
        <p className="text-[16px] lg:text-[20px] italic font-light">
          Looks like no PhD students were found.
        </p>
      </div>
    );
  }

  const allLabs: string[] = data.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((item: any) => item.Lab?.LabName) // Get all lab names (some might be null)
    .filter(Boolean); // Filter out any falsy values
  const uniqueLabs: string[] = [...new Set(allLabs)].sort();

  const validLabSlugs = uniqueLabs.map(slugify);
  const isValidLabFilter = validLabSlugs.includes(filter || "");

  const filtered = isValidLabFilter
    ? data.data.filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any) => item.Lab?.LabName && slugify(item.Lab.LabName) === filter
      )
    : data.data; // Otherwise, show all data

  const normalized: People[] = filtered.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any): People => ({
      id: item.id,
      name: item.Name,
      description: (
        <>
          {item.Lab && (
            <span className="text-brand-accent2">{item.Lab.LabName}</span>
          )}
          <p className="mt-2">{item.ShortDescription}</p>
        </>
      ),
      img: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.Image.url}`,
      link: item.WebsiteLink,
    })
  );

  return (
    <>
      {/* --- START: Dynamic Button Rendering --- */}
      <div
        className="grid grid-cols-2 xl:grid-cols-3 grid-rows-1 text-[12px] lg:text-[18px] my-8"
        role="tablist"
      >
        {/* Default "All" button */}
        <Button
          href="/people/phd"
          text="ALL SCHOLARS"
          active={!isValidLabFilter} // Active if NO valid lab filter is selected
        />

        {/* Dynamically render buttons for each unique lab */}
        {uniqueLabs.map((labName) => {
          const labSlug = slugify(labName);
          return (
            <Button
              key={labSlug}
              href={`/people/phd?filter=${labSlug}`}
              text={labName.toUpperCase()} // Display lab name (uppercased to match style)
              active={filter === labSlug} // Active if the current filter matches this lab's slug
            />
          );
        })}
      </div>
      {/* --- END: Dynamic Button Rendering --- */}

      <div>
        <PeopleSection people={normalized} />
      </div>
    </>
  );
}

function Button({
  href,
  text,
  active,
  icon,
}: {
  href: string;
  text: string;
  active: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`flex gap-[12px] lg:gap-[24px] items-center justify-center py-[0.5em] px-[2em] border border-black/30 ${
        active ? "bg-brand-accent2 text-white" : "backdrop-blur-xl"
      }`}
      scroll={false}
    >
      {icon ? (
        icon
      ) : (
        <Search className="flex-shrink-0 w-[12px] lg:w-[16px] aspect-square h-auto" />
      )}
      <p className="text-center">{text}</p>
    </Link>
  );
}
