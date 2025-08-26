import MarkdownContent from "@/components/MarkdownContent";
import Banner from "@/features/pages/about/components/Banner";
import { NewsEvent } from "@/features/pages/about/news-events/components/NewsCard";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/news-and-events/${params.slug}?populate=*`
  ).catch((reason) => console.log("[ERROR]", reason));
  const data = await res?.json();

  if (!data || data.error || data.data.length == 0) {
    notFound();
  }

  const item = data.data;
  const normalized: NewsEvent = {
    id: item.documentId,
    type: item.Type,
    date: new Date(item.publishedAt),
    title: item.Title,
    description: item.Description,
    img: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.CoverImage.url}`,
    content: item.Content,
  };

  return (
    <main className="bg-white/50">
      <article className="mx-auto py-12 px-8 xl:w-[1280px] font-light">
        <Banner
          title={normalized.title}
          subtitle={normalized.description}
          imageSrc={normalized.img}
          breadcrumbs={["about", "news & Events", normalized.title]}
        />
        <section className="mt-5 lg:mt-12 ">
          {normalized.content && (
            <MarkdownContent content={normalized.content} />
          )}
        </section>
      </article>
    </main>
  );
}
