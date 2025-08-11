import Banner from "@/features/pages/research/components/Banner";
import PublicationsSection, {
  ResearchPublication,
} from "@/features/pages/research/publcations/components/PublicationsSection";

export default async function Page() {
  const res = await fetch(
    "http://localhost:1337/api/publications?populate=*",
  ).catch((reason) => console.log("[ERROR]", reason));
  const data = await res?.json();

  if (!data || data.error || data.data.length == 0) {
    return (
      <div>
        <Banner
          text="Publications"
          breadcrumbs={["research", "publications"]}
        />
        <div>No Publications Found!</div>
      </div>
    );
  }

  const normalized: ResearchPublication[] = data.data.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any): ResearchPublication => ({
      id: item.id,
      year: new Date(item.Date).getFullYear(),
      faculties: item.Faculties.map(
        (faculty: { Name: string }) => faculty.Name,
      ),
      title: item.Title,
      description: item.LongDescription,
      tags: item.Tags.map((tag: { Tag: string }) => tag.Tag),
      link: item.Link,
    }),
  );

  return (
    <div>
      <Banner text="Publications" breadcrumbs={["research", "publications"]} />
      <main className="w-[75vw] xl:w-[1280px] px-8 mx-auto mt-[30px] mb-[10vh]">
        <PublicationsSection publications={normalized} />
      </main>
    </div>
  );
}
