import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeading from "@/features/pages/connect/components/PageHeading";
import SearchSection, {
  SearchContent,
} from "@/features/pages/search/SearchSeciton";
import { Metadata } from "next";
import qs from "qs";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Search HCD at IIIT-Delhi | Explore Programs, Research & People",
  description:
    "Use the HCD search at IIIT-Delhi to quickly find information on programs, courses, faculty, research labs, projects, news, etc.",
  keywords: [],
  authors: [{ name: "IIIT Delhi HCD" }],
  creator: "IIIT Delhi HCD",
  publisher: "IIIT Delhi",
  alternates: {
    canonical: "/search",
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

async function getData(url: string, query?: any): Promise<any[] | undefined> {
  const queryString = qs.stringify(query, {
    encodeValuesOnly: true,
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}?${queryString}`
  ).catch((reason) => console.log("[ERROR]", reason));

  const data = await res?.json();

  if (!data || data.error || data.data.length == 0) {
    return undefined;
  }

  return data.data;
}

export default async function Page(pageProps: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const searchParams = await pageProps.searchParams;
  const newsAndEvents = (
    await getData("/api/news-and-events", {
      filters: {
        $or: [
          { Title: { $containsi: searchParams.filter ?? "" } },
          { Description: { $containsi: searchParams.filter ?? "" } },
        ],
      },
    })
  )?.map(
    (data): SearchContent => ({
      title: data.Title,
      description: data.Description,
      link: "/about/news-events/" + data.id,
    })
  );
  const labs = (
    await getData("/api/labs", {
      filters: {
        $or: [
          { LabName: { $containsi: searchParams.filter ?? "" } },
          { LongDescription: { $containsi: searchParams.filter ?? "" } },
        ],
      },
    })
  )?.map(
    (data): SearchContent => ({
      title: data.LabName,
      description: data.LongDescription,
      link: "/research/labs",
    })
  );
  const departmentProjects = (
    await getData("/api/department-projects", {
      filters: {
        $or: [
          { Title: { $containsi: searchParams.filter ?? "" } },
          { LongDescription: { $containsi: searchParams.filter ?? "" } },
        ],
      },
    })
  )?.map(
    (data): SearchContent => ({
      title: data.Title,
      description: data.LongDescription,
      link: "/research/projects",
    })
  );
  const publications = (
    await getData("/api/publications", {
      filters: {
        $or: [
          { Title: { $containsi: searchParams.filter ?? "" } },
          { LongDescription: { $containsi: searchParams.filter ?? "" } },
        ],
      },
    })
  )?.map(
    (data): SearchContent => ({
      title: data.Title,
      description: data.LongDescription,
      link: data.Link,
      external: true,
    })
  );

  const normalized: SearchContent[] = [
    ...(newsAndEvents ?? []),
    ...(labs ?? []),
    ...(departmentProjects ?? []),
    ...(publications ?? []),
  ].sort((a, b) => {
    if (!searchParams.filter) return 0;

    const aTitleMatch = a.title
      .toLowerCase()
      .includes(searchParams.filter.toLowerCase());
    const bTitleMatch = b.title
      .toLowerCase()
      .includes(searchParams.filter.toLowerCase());

    if (aTitleMatch && !bTitleMatch) return -1; // a comes first
    if (!aTitleMatch && bTitleMatch) return 1; // b comes first
    return 0;
  });

  return (
    <>
      <div className="relative z-10 background-element bg-white font-anybody pb-8 shadow-xl">
        <Navbar type="solid" />
        <main className="pt-24 mb-[10vh]">
          <PageHeading
            title="Search Page"
            subtitle="Find your requirement"
            description="We'd like to think our website has covered it all. But just in case, here are some other ways to help."
          />
          <div className="mt-[10vh] mx-auto xl:w-[1280px] px-8 mb-[10vh]">
            <SearchSection
              content={normalized}
              filter={searchParams.filter?.trim()}
            />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
