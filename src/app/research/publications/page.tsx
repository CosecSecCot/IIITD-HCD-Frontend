import Banner from "@/features/pages/research/components/Banner";
import PublicationsSection, {
  ResearchPublication,
} from "@/features/pages/research/publcations/components/PublicationsSection";

export const dynamic = "force-dynamic";

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
      faculties: item.Faculties.map(
        (faculty: { Name: string }) => faculty.Name
      ),
      title: item.Title,
      description: item.LongDescription,
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
