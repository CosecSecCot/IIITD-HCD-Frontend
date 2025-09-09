import MarkdownContent from "@/components/MarkdownContent";
import Banner from "@/features/pages/about/components/Banner";
import { NewsEvent } from "@/features/pages/about/news-events/components/NewsCard";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/news-and-events/${slug}?populate=*`,
    { next: { revalidate: 60 } }
  ).catch((reason) => console.log("[ERROR]", reason));

  const data = await res?.json();

  if (!data || data.error || data.data.length == 0) {
    return {
      title: "HCD News & Events | IIIT-Delhi",
      description:
        "See the latest from HCD at IIIT-Delhi. Learn more about workshops, talks, showcases, and announcements from our design, HCI, and creative technology community.",
    };
  }

  const item = data.data;

  return {
    title: `${item.Title} | HCD IIIT-Delhi`,
    description: item.Description,
    keywords: ["IIIT-Delhi", "HCD", "news", "events", item.Type],
    authors: [{ name: "IIIT Delhi HCD" }],
    creator: "IIIT Delhi HCD",
    publisher: "IIIT Delhi",
    alternates: {
      canonical: `/about/news-events/${slug}`,
    },
    openGraph: {
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.CoverImage.url}`,
          width: 1200,
          height: 630,
          alt: item.Title,
        },
      ],
      type: "article",
      siteName: "HCD IIITD",
      locale: "en-IN",
    },
    twitter: {
      card: "summary_large_image",
      images: [`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.CoverImage.url}`],
      creator: "@hcdiiitd",
    },
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
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
