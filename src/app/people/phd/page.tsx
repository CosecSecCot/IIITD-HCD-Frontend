import Banner from "@/features/pages/about/components/Banner";

export const dynamic = "force-dynamic";

export default async function Page(pageProps: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const searchParams = await pageProps.searchParams;
  return (
    <main>
      <article className="mx-auto my-12 px-8 xl:w-[1280px] font-light">
        <Banner
          title="PhD Students at HCD IIIT Delhi"
          subtitle="We partner with leading universities, research institutes, and industry labs worldwide to advance human-centered innovation in computing, design, and technology."
          imageSrc={"/students.png"}
          breadcrumbs={["people", "phd"]}
        />
      </article>
    </main>
  );
}
