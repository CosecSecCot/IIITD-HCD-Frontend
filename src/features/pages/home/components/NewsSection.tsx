import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NewsEvent } from "@/types";
import TextReveal from "@/features/animation/TextReveal";
import qs from "qs";
import NewsEventCard from "./NewsEventCard";

export default async function NewsSection() {
  const query = qs.stringify(
    {
      sort: ["Date:desc"],
      populate: "*",
      pagination: { pageSize: 100 },
    },
    { encodeValuesOnly: true }
  );

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/news-and-events?${query}`
  ).catch((reason) => console.log("[ERROR]", reason));
  const data = await res?.json();

  let newsEvents: NewsEvent[];
  if (!data || data.error || data.data.length == 0) {
    newsEvents = [];
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    newsEvents = data.data.filter((item: any) => item.Draft !== true).slice(0, 3).map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (item: any): NewsEvent => ({
        id: item.documentId,
        type: item.Type,
        date: new Date(item.Date),
        title: item.Title,
        description: item.Description,
        img: item.CoverImage ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.CoverImage.url}` : "",
        content: "",
      })
    );
  }

  return (
    <section className="relative w-full py-[10vh] lg:py-[14vh] overflow-hidden">
      <div className="mx-auto xl:w-[1280px] px-8">
        <div className="flex items-end justify-between gap-8 mb-8 lg:mb-12">
          <div>
            <h2 className="font-light text-[32px] lg:text-[64px] leading-none text-brand-accent2">
              News &amp; events
            </h2>
            <p className="mt-4 lg:mt-6 max-w-[560px] font-light text-[14px] lg:text-[18px] text-black/70 leading-snug">
              Talks, workshops, guest lectures, and the occasional celebration.
            </p>
          </div>
          <Link
            href="/about/news-events"
            className="flex-shrink-0 group inline-flex items-center gap-2 text-[14px] lg:text-[16px] text-brand-accent2 hover:text-terracotta transition-colors duration-200"
          >
            <span className="border-b border-current">View all</span>
            <ArrowUpRight className="w-[18px] h-auto transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {newsEvents.length === 0 ? (
            <TextReveal>
              <p className="col-span-3 text-center font-light italic text-[14px] lg:text-[20px] text-black/50 py-16">
                No news or events found.
              </p>
            </TextReveal>
          ) : (
            newsEvents.map((item) => (
              <NewsEventCard key={item.id} content={item} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

