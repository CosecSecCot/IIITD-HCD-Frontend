import Banner from "@/features/pages/research/components/Banner";
import ProjectSection, {
  ResearchProject,
} from "@/features/pages/research/projects/components/ProjectSection";

export default async function Page() {
  const res = await fetch(
    "http://localhost:1337/api/department-projects?populate=*",
  ).catch((reason) => console.log("[ERROR]", reason));
  const data = await res?.json();
  console.log(data);

  if (!data || data.error || data.data.length == 0) {
    return (
      <div>
        <Banner
          text="Department Projects"
          breadcrumbs={["research", "projects"]}
        />
        <div>No Projects Found!</div>
      </div>
    );
  }

  const normalized: ResearchProject[] = data.data.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any): ResearchProject => ({
      id: item.id,
      title: item.Title,
      description: item.LongDescription,
      source: item.FundedBy.DisplayText,
      faculty: item.Faculties[0]?.Name,
      duration: {
        from: item.Duration.From,
        to: item.Duration.To,
      },
      image: {
        width: item.Images[0].width,
        height: item.Images[0].height,
        url: "http://localhost:1337" + item.Images[0].url,
      },
      fullDescription: item.LongDescription,
    }),
  );

  console.log(normalized);

  return (
    <div>
      <Banner
        text="Department Projects"
        breadcrumbs={["research", "projects"]}
      />
      <main>
        <article className="mx-auto w-[75vw] xl:w-[1280px] px-8 my-8">
          <ProjectSection projects={normalized} />
        </article>
      </main>
    </div>
  );
}
