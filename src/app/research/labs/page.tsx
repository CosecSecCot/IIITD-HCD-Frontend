import { Search } from "lucide-react";
import Banner from "@/features/pages/research/components/Banner";
import LabsSection, {
  Lab,
} from "@/features/pages/research/labs/components/LabsSection";
import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import Link from "next/link";
import { getContrastingTextColor } from "@/lib/utils";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "HCD Research & Teaching Labs | IIIT-Delhi",
  description:
    "Visit HCD labs at IIIT-Delhi - Accessibility and Inclusive Design Lab, Creative Interfaces Lab, etc. Explore facilities, projects, and how students engage with research.",
  keywords: [],
  authors: [{ name: "IIIT Delhi HCD" }],
  creator: "IIIT Delhi HCD",
  publisher: "IIIT Delhi",
  alternates: {
    canonical: "/research/labs",
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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/labs?sort[0]=LabName:asc&populate=*`
  ).catch((reason) => console.log("[ERROR]", reason));
  const data = await res?.json();

  if (!data || data.error || data.data.length == 0) {
    return (
      <div>
        <Banner text="Research Labs" breadcrumbs={["research", "labs"]} />
        <main className="mx-auto min-h-[50vh] xl:w-[1280px] px-8 py-[20vh] text-center">
          <h2 className="text-[20px] lg:text-[28px] text-brand-accent2 font-semibold">
            Hmm...
          </h2>
          <p className="text-[16px] lg:text-[20px] italic font-light">
            Looks like no labs were found.
          </p>
        </main>
      </div>
    );
  }

  const normalized: Lab[] = data.data.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any): Lab => ({
      id: item.id,
      type: item.LabType,
      title: item.LabName,
      logo: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.LabLogo.url}`,
      short: item.ShortDescription,
      full: item.LongDescription,
      lead: (item.Faculty ? item.Faculty.Name + ", " : "") + item.LabLocation,
      website: item.WebsiteLink ? item.WebsiteLink.URL : "",
      foreground: getContrastingTextColor(item.AccentColor),
      background: item.AccentColor,
      backgroundDim: item.AccentColor + "80", // 50% opacity
    })
  );

  const searchParams = await pageProps.searchParams;
  return (
    <>
      <Banner
        text={
          searchParams.filter === "Teaching" ? "Teaching Labs" : "Research Labs"
        }
        breadcrumbs={["research", "labs"]}
      />
      <main>
        <article className="mx-auto px-8 xl:w-[1280px]">
          <div
            className="grid grid-cols-2 xl:grid-cols-3 grid-rows-1 text-[12px] lg:text-[18px] my-8"
            role="tablist"
          >
            <Button
              href="/research/labs?filter=Research"
              text="RESEARCH LABS"
              active={searchParams.filter !== "Teaching"}
            />
            <Button
              href="/research/labs?filter=Teaching"
              text="TEACHING LABS"
              active={searchParams.filter === "Teaching"}
            />
          </div>
          <LabsSection
            labs={normalized.filter((lab) => {
              if (searchParams.filter === "Teaching") {
                return lab.type === searchParams.filter;
              }
              return lab.type === "Research";
            })}
          />
        </article>
      </main>
    </>
  );
}

function Button({
  href,
  text,
  active,
}: {
  href: string;
  text: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex gap-[12px] lg:gap-[24px] items-center justify-center py-[0.5em] border border-black/30 ${
        active ? "bg-brand-accent2 text-white" : ""
      }`}
      scroll={false}
    >
      <Search className="w-[12px] lg:w-[16px] aspect-square h-auto" />
      <LetterSwapForward label={text} staggerDuration={0.005} />
    </Link>
  );
}
