import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeading from "@/features/pages/connect/components/PageHeading";
import SearchSection, {
  SearchContent,
} from "@/features/pages/search/SearchSeciton";
import qs from "qs";

export const dynamic = "force-dynamic";

async function getData(url: string, query?: any): Promise<any[] | undefined> {
  const queryString = qs.stringify(query, {
    encodeValuesOnly: true,
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}?${queryString}`
  ).catch((reason) => console.log("[ERROR]", reason));

  const data = await res?.json();

  console.log(data);

  if (!data || data.error || data.data.length == 0) {
    return undefined;
  }

  return data.data;
}

export default async function Page() {
  const newsAndEvents = (await getData("/api/news-and-events"))?.map(
    (data): SearchContent => ({
      title: data.Title,
      description: data.Description,
      link: "/about/news-events/#",
    })
  );
  const labs = (await getData("/api/labs"))?.map(
    (data): SearchContent => ({
      title: data.LabName,
      description: data.LongDescription,
      link: "/research/labs",
    })
  );
  const departmentProjects = (await getData("/api/department-projects"))?.map(
    (data): SearchContent => ({
      title: data.Title,
      description: data.LongDescription,
      link: "/research/projects",
    })
  );
  const publications = (await getData("/api/publications"))?.map(
    (data): SearchContent => ({
      title: data.Title,
      description: data.LongDescription,
      link: "/research/publications",
    })
  );

  const normalized: SearchContent[] = [
    ...(newsAndEvents ?? []),
    ...(labs ?? []),
    ...(departmentProjects ?? []),
    ...(publications ?? []),
  ];

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
        </main>
        <div className="mx-auto xl:w-[1280px] px-8 mb-[10vh]">
          <SearchSection content={normalized} />
        </div>
      </div>
      <Footer />
    </>
  );
}
