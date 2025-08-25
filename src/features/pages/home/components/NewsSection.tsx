import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NewsEvent } from "../../about/news-events/components/NewsCard";
import Image from "next/image";
import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import CenterUnderline from "@/components/fancy/text/underline-center";
import TextReveal from "@/features/animation/TextReveal";

export default async function NewsSection({
  inMask = false,
}: {
  inMask?: boolean;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/news-and-events?populate=*`
  ).catch((reason) => console.log("[ERROR]", reason));
  const data = await res?.json();

  let newsEvents: NewsEvent[];
  if (!data || data.error || data.data.length == 0) {
    newsEvents = [];
  } else {
    newsEvents = data.data.slice(0, 3).map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (item: any): NewsEvent => ({
        id: item.id,
        type: item.Type,
        date: new Date(item.publishedAt),
        title: item.Title,
        description: item.Description,
        img: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.CoverImage.url}`,
      })
    );
  }

  if (!inMask) {
    return (
      <section className="xl:w-[1280px] mx-auto px-8">
        <div className="flex justify-between items-center">
          <TextReveal>
            <h2 className="text-[26px] lg:text-[48px] text-brand-accent2 leading-tight">
              News & Events
            </h2>
          </TextReveal>
          <CenterUnderline>
            <Link
              href="/about/news-events"
              className="flex items-center gap-2 text-brand-accent2 text-[16px] lg:text-[20px]"
            >
              View All <ArrowRight className="w-[16px] h-auto" />
            </Link>
          </CenterUnderline>
        </div>
        <TextReveal>
          <p className="font-light text-[14px] lg:text-[24px]">
            Stay up to date with the latest happenings at HCD IIIT Delhi. This
            section brings you important announcements, upcoming events,
            workshops, guest lectures, and achievements from our community.
          </p>
        </TextReveal>
        <div className="mt-[1em] grid md:grid-cols-3 gap-4 lg:gap-8">
          {newsEvents.length === 0 ? (
            <TextReveal>
              <p className="col-span-3 text-center font-light italic text-[14px] lg:text-[24px] text-black/60">
                No news or events found.
              </p>
            </TextReveal>
          ) : (
            newsEvents.map((item) => (
              <NewsEventCard key={item.id} content={item} />
            ))
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="xl:w-[1280px] mx-auto px-8">
      <div className="flex justify-between items-center">
        <h2 className="text-[26px] lg:text-[48px] text-brand-accent1 leading-tight">
          News & Events
        </h2>
        <CenterUnderline className="text-brand-accent1">
          <Link
            href="/about/news-events"
            className="flex items-center gap-2 text-[16px] lg:text-[20px]"
          >
            View All <ArrowRight className="w-[16px] h-auto" />
          </Link>
        </CenterUnderline>
      </div>
      <p className="font-light text-[14px] lg:text-[24px]">
        Stay up to date with the latest happenings at HCD IIIT Delhi. This
        section brings you important announcements, upcoming events, workshops,
        guest lectures, and achievements from our community.
      </p>
      <div className="mt-[1em] grid md:grid-cols-3 gap-4 lg:gap-8">
        {newsEvents.length === 0 ? (
          <TextReveal>
            <p className="col-span-full text-center font-light italic text-[14px] lg:text-[24px] text-white/60">
              No news or events found.
            </p>
          </TextReveal>
        ) : (
          newsEvents.map((item) => (
            <NewsEventCard key={item.id} content={item} inMask />
          ))
        )}
      </div>
    </section>
  );
}

function NewsEventCard({
  content,
  inMask = false,
}: {
  content: NewsEvent;
  inMask?: boolean;
}) {
  if (!inMask) {
    return (
      <div className="flex flex-col justify-between gap-[1em]">
        <div className="relative">
          <div className="absolute z-10 inset-0 bg-brand-accent2/50 mix-blend-overlay" />
          <Image
            src={content.img}
            alt={`${content.title} image`}
            className="w-full h-auto aspect-video border-1 lg:border-2 border-brand-accent2 grayscale bg-blend-overlay"
            width={480}
            height={270}
          />
        </div>
        <div className="space-y-[0.25em]">
          <p className="text-[14px] lg:text-[20px] text-black/60">
            {content.date.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <h3 className="font-medium text-[18px] lg:text-[24px] text-brand-accent2 leading-tight">
            {content.title}
          </h3>
          <p className="font-light text-[14px] lg:text-[18px] line-clamp-3">
            {content.description}
          </p>
        </div>
        <Link
          href={`/about/news-events/${content.id}`}
          className="font-normal w-full flex justify-center items-center gap-[24px] py-[0.75em] text-[14px] xl:text-[18px] bg-brand-accent2 text-white"
        >
          <LetterSwapForward
            label={`View ${content.type}`}
            staggerDuration={0.005}
            className="w-max"
          />
          <ArrowRight className="w-[14px] lg:w-[18px] h-auto" />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between gap-[1em]">
      <Image
        src={content.img}
        alt={`${content.title} image`}
        className="w-full h-auto aspect-video border-1 lg:border-2 border-brand-accent1"
        width={480}
        height={270}
      />
      <div className="space-y-[0.25em]">
        <p className="text-[14px] lg:text-[20px] text-white/60">
          {content.date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h3 className="font-medium text-[18px] lg:text-[24px] text-brand-accent1 leading-tight">
          {content.title}
        </h3>
        <p className="font-light text-[14px] lg:text-[18px] line-clamp-3">
          {content.description}
        </p>
      </div>
      <Link
        href={`/about/news-events/${content.id}`}
        className="font-normal w-full flex justify-center items-center gap-[24px] py-[0.75em] text-[14px] xl:text-[18px] bg-brand-accent1 text-black"
      >
        <LetterSwapForward
          label={`View ${content.type}`}
          staggerDuration={0.005}
          className="w-max"
        />
        <ArrowRight className="w-[14px] lg:w-[18px] h-auto" />
      </Link>
    </div>
  );
}
