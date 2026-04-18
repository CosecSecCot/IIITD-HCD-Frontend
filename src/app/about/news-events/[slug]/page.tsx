import MarkdownContent from "@/components/MarkdownContent";
import Banner from "@/features/pages/about/components/Banner";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NewsEvent } from "@/types";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays } from "lucide-react";
import qs from "qs";

export const dynamic = "force-dynamic";

type SiblingRef = {
  id: string;
  title: string;
  date: Date;
  type: string;
};

function formatDate(d: Date) {
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

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
      ...(item.CoverImage && {
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.CoverImage.url}`,
            width: 1200,
            height: 630,
            alt: item.Title,
          },
        ],
      }),
      type: "article",
      siteName: "HCD IIITD",
      locale: "en-IN",
    },
    twitter: {
      card: "summary_large_image",
      ...(item.CoverImage && {
        images: [`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.CoverImage.url}`],
      }),
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

  if (!data || data.error || data.data.length == 0 || data.data.Draft === true) {
    notFound();
  }

  const item = data.data;
  const normalized: NewsEvent = {
    id: item.documentId,
    type: item.Type,
    date: new Date(item.Date ?? item.publishedAt),
    title: item.Title,
    description: item.Description,
    img: item.CoverImage ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.CoverImage.url}` : "",
    content: item.Content,
  };

  const siblingsQuery = qs.stringify(
    {
      filters: { Type: { $eq: item.Type } },
      sort: ["Date:desc"],
      pagination: { pageSize: 200 },
    },
    { encodeValuesOnly: true }
  );
  const sibRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/news-and-events?${siblingsQuery}`,
    { next: { revalidate: 60 } }
  ).catch((reason) => console.log("[ERROR]", reason));
  const sibJson = await sibRes?.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const siblings: SiblingRef[] = ((sibJson?.data as any[]) ?? [])
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .filter((s: any) => s.Draft !== true)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((s: any) => ({
      id: s.documentId,
      title: s.Title,
      date: new Date(s.Date ?? s.publishedAt),
      type: s.Type,
    }));

  const currentIdx = siblings.findIndex((s) => s.id === params.slug);
  // list is desc (newest first). previous (older) = idx+1, next (newer) = idx-1.
  const previous =
    currentIdx >= 0 && currentIdx < siblings.length - 1
      ? siblings[currentIdx + 1]
      : null;
  const next = currentIdx > 0 ? siblings[currentIdx - 1] : null;

  const typeLabel = normalized.type === "Event" ? "Event" : "News";

  return (
    <main className="bg-white/50">
      <article className="mx-auto py-12 px-8 xl:w-[1280px] font-anybody font-light">
        <Banner
          title={normalized.title}
          subtitle={normalized.description}
          imageSrc={normalized.img}
          breadcrumbs={["about", "news & Events", normalized.title]}
        />

        <div className="mt-5 lg:mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] lg:text-[14px] tracking-[0.2em] uppercase text-brand-accent2/80">
          <span className="inline-flex items-center px-3 py-1 border border-brand-accent2/30 rounded-full text-brand-accent2">
            {typeLabel}
          </span>
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="w-[14px] h-auto" strokeWidth={1.5} />
            {formatDate(normalized.date)}
          </span>
        </div>

        <section className="mt-5 lg:mt-8">
          {normalized.content && (
            <MarkdownContent content={normalized.content} />
          )}
        </section>

        <div className="mt-10 lg:mt-16 h-px w-full bg-brand-accent2/15" />

        <nav
          aria-label="More articles"
          className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
        >
          <SiblingCard sibling={previous} direction="previous" />
          <SiblingCard sibling={next} direction="next" />
        </nav>

        <div className="mt-8 lg:mt-12 flex justify-center">
          <Link
            href="/about/news-events"
            className="group inline-flex items-center gap-2 text-[13px] lg:text-[15px] tracking-[0.2em] uppercase text-brand-accent2 hover:text-terracotta transition-colors duration-200"
          >
            <ArrowUpRight
              className="w-[16px] h-auto group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              strokeWidth={1.5}
            />
            All {typeLabel.toLowerCase() === "event" ? "events" : "news & events"}
          </Link>
        </div>
      </article>
    </main>
  );
}

function SiblingCard({
  sibling,
  direction,
}: {
  sibling: SiblingRef | null;
  direction: "previous" | "next";
}) {
  const isPrev = direction === "previous";
  const label = isPrev ? "Previous" : "Next";

  if (!sibling) {
    return (
      <div
        aria-hidden
        className={`hidden md:flex flex-col ${
          isPrev ? "items-start" : "items-end text-right"
        } justify-center p-6 lg:p-8 border border-brand-accent2/10 rounded-xl opacity-40`}
      >
        <span className="text-[11px] lg:text-[13px] tracking-[0.25em] uppercase text-brand-accent2/60">
          {label}
        </span>
        <p className="mt-3 text-[15px] lg:text-[18px] font-light text-brand-accent2/60">
          You&rsquo;ve reached the end.
        </p>
      </div>
    );
  }

  return (
    <Link
      href={`/about/news-events/${sibling.id}`}
      className={`group flex flex-col ${
        isPrev ? "items-start" : "items-end text-right"
      } justify-between gap-4 p-6 lg:p-8 border border-brand-accent2/15 rounded-xl hover:border-brand-accent2 hover:bg-brand-accent2/5 transition-colors duration-200`}
    >
      <div
        className={`flex items-center gap-2 text-[11px] lg:text-[13px] tracking-[0.25em] uppercase text-brand-accent2/70 group-hover:text-brand-accent2 transition-colors duration-200`}
      >
        {isPrev && <ArrowLeft className="w-[14px] h-auto" strokeWidth={1.5} />}
        <span>{label}</span>
        {!isPrev && <ArrowRight className="w-[14px] h-auto" strokeWidth={1.5} />}
      </div>
      <div className={isPrev ? "" : "ml-auto"}>
        <p className="text-[18px] lg:text-[22px] font-medium text-brand-accent2 leading-snug line-clamp-2">
          {sibling.title}
        </p>
        <p className="mt-2 text-[12px] lg:text-[14px] font-light text-black/60">
          {formatDate(sibling.date)}
        </p>
      </div>
    </Link>
  );
}
