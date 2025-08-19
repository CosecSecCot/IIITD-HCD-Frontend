import Banner from "@/features/pages/research/components/Banner";
import ProjectSection, {
  ResearchProject,
} from "@/features/pages/research/projects/components/ProjectSection";

export const dynamic = "force-dynamic";

export default async function Page() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/department-projects?populate=*`
  ).catch((reason) => console.log("[ERROR]", reason));
  const data = await res?.json();

  if (!data || data.error || data.data.length == 0) {
    return (
      <div>
        <Banner
          text="Department Projects"
          breadcrumbs={["research", "projects"]}
        />
        <main className="mx-auto min-h-[50vh] xl:w-[1280px] px-8 py-[20vh] text-center">
          <h2 className="text-[20px] lg:text-[28px] text-brand-accent2 font-semibold">
            Hmm...
          </h2>
          <p className="text-[16px] lg:text-[20px] italic font-light">
            Looks like no projects were found.
          </p>
        </main>
      </div>
    );
  }

  const normalized: ResearchProject[] = data.data.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any): ResearchProject => ({
      id: item.id,
      title: item.Title,
      description: item.LongDescription,
      source: item.FundedBy?.DisplayText,
      faculty: item.Faculties[0]?.Name,
      duration: {
        from: item.Duration.From,
        to: item.Duration.To,
      },
      image: {
        width: item.Images[0].width,
        height: item.Images[0].height,
        url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.Images[0].url}`,
      },
      fullDescription: item.LongDescription,
    })
  );

  return (
    <div>
      <Banner
        text="Department Projects"
        breadcrumbs={["research", "projects"]}
      />
      <main>
        <article className="mx-auto xl:w-[1280px] px-8 my-8">
          <ProjectSection projects={normalized} />
        </article>
      </main>
    </div>
  );
}
