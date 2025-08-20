import Banner from "@/features/pages/about/components/Banner";
import FacultySection, {
  Faculty,
} from "@/features/pages/people/components/PeopleSection";

export const dynamic = "force-dynamic";

export default async function Page(pageProps: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const searchParams = await pageProps.searchParams;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/faculties?populate=Image`
  ).catch((reason) => console.log("[ERROR]", reason));
  const data = await res?.json();

  if (!data || !data.data || data.data.length == 0) {
    return (
      <div>
        <main className="mx-auto min-h-[60vh] xl:w-[1280px] px-8 py-[20vh] text-center">
          <h2 className="text-[20px] lg:text-[28px] text-brand-accent2 font-semibold">
            Hmm...
          </h2>
          <p className="text-[16px] lg:text-[20px] italic font-light">
            Looks like no faculty were found.
          </p>
        </main>
      </div>
    );
  }

  const faculty: Faculty[] = data.data.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (faculty: any, index: number): Faculty => {
      return {
        id: index + 1,
        name: faculty.Name,
        email: faculty.Email,
        img: `${process.env.NEXT_PUBLIC_STRAPI_URL}${faculty.Image.url}`,
      };
    }
  );
  return (
    <main>
      <article className="mx-auto my-12 px-8 xl:w-[1280px] font-light">
        <Banner
          title="Faculty at HCD IIIT Delhi"
          subtitle="We partner with leading universities, research institutes, and industry labs worldwide to advance human-centered innovation in computing, design, and technology."
          imageSrc={"/faculty.png"}
          links={[
            { title: "View Publications", href: "/research/publications" },
            { title: "Visit Labs", href: "/research/labs" },
          ]}
          breadcrumbs={["people", "faculty"]}
        />
        <section className="xl:w-[1280px] mx-auto px-8 min-h-screen mt-[30px] mb-[10vh]">
          <FacultySection faculty={faculty} filter={searchParams.filter} />
        </section>
      </article>
    </main>
  );
}
