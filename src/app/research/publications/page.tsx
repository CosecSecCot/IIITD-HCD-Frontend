import Banner from "@/features/pages/research/components/Banner";
import PublicationsSection, {
  ResearchPublication,
} from "@/features/pages/research/publcations/components/PublicationsSection";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "HCD Publications | Research from IIIT-Delhi",
  description:
    "Access HCD publications from IIIT-Delhi—papers, articles, and proceedings in HCI, UX, XR, and human-centered technologies.",
  keywords: [],
  authors: [{ name: "IIIT Delhi HCD" }],
  creator: "IIIT Delhi HCD",
  publisher: "IIIT Delhi",
  alternates: {
    canonical: "/research/projects",
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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/publications?populate=*`
  ).catch((reason) => console.log("[ERROR]", reason));
  const data = await res?.json();

  if (!data || data.error || data.data.length == 0) {
    return (
      <div>
        <Banner
          text="Publications"
          breadcrumbs={["research", "publications"]}
        />
        <main className="mx-auto min-h-[50vh] xl:w-[1280px] px-8 py-[20vh] text-center">
          <h2 className="text-[20px] lg:text-[28px] text-brand-accent2 font-semibold">
            Hmm...
          </h2>
          <p className="text-[16px] lg:text-[20px] italic font-light">
            Looks like no publications were found.
          </p>
        </main>
      </div>
    );
  }

  const normalized: ResearchPublication[] = data.data.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any): ResearchPublication => ({
      id: item.id,
      year: new Date(item.Date).getFullYear(),
      // faculties: item.Faculties.map(
      //   (faculty: { Name: string }) => faculty.Name
      // ),
      title: item.Title,
      description: item.LongDescription,
      venueImage: item.VenueImage
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.VenueImage.url}`
        : undefined,
      authors: item.Authors.map((author: { Name: string }) => author.Name),
      category: item.Type,
      lab: item.Lab?.LabName,
      tags: item.Tags.map((tag: { Tag: string }) => tag.Tag),
      link: item.Link,
    })
  );

  return (
    <div>
      <Banner text="Publications" breadcrumbs={["research", "publications"]} />
      <main className="mx-auto xl:w-[1280px] min-h-screen px-8 mt-8">
        <PublicationsSection publications={normalized} />
      </main>
    </div>
  );
}
