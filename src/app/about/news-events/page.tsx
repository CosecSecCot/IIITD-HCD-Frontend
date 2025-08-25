import Banner from "@/features/pages/about/components/Banner";
import NewsCard, {
  NewsEvent,
} from "@/features/pages/about/news-events/components/NewsCard";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "HCD News & Events | IIIT-Delhi",
  description:
    "See the latest from HCD at IIIT-Delhi—workshops, talks, showcases, and announcements from our design, HCI, and creative technology community.",
  keywords: [],
  authors: [{ name: "IIIT Delhi HCD" }],
  creator: "IIIT Delhi HCD",
  publisher: "IIIT Delhi",
  alternates: {
    canonical: "/about/news-events",
  },

  openGraph: {
    // url: "https://hcd.iiitd.ac.in/",
    siteName: "HCD IIITD",
    locale: "en-IN",
  },

  twitter: {
    card: "summary_large_image",
    creator: "@hcdiiitd",
  },
};

export default async function Page() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/news-and-events?populate=*`
  ).catch((reason) => console.log("[ERROR]", reason));
  const data = await res?.json();

  if (!data || data.error || data.data.length == 0) {
    return (
      <main className="mx-auto min-h-[80vh] xl:w-[1280px] px-8 py-[20vh] text-center">
        <h2 className="text-[20px] lg:text-[28px] text-brand-accent2 font-semibold">
          Hmm...
        </h2>
        <p className="text-[16px] lg:text-[20px] italic font-light">
          Looks like no news or events were found.
        </p>
      </main>
    );
  }

  const normalized: NewsEvent[] = data.data.map(
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

  const news = normalized
    .filter((news) => news.type == "News")
    .map((news, idx) => {
      return <NewsCard key={idx} content={news} />;
    });

  const events = normalized
    .filter((event) => event.type == "Event")
    .map((event, idx) => {
      return <NewsCard key={idx} content={event} />;
    });

  return (
    <main>
      <article className="mx-auto my-12 px-8 xl:w-[1280px] font-light">
        <Banner
          title={normalized[0].title}
          subtitle={normalized[0].description}
          imageSrc={normalized[0].img}
          breadcrumbs={["about", "news & Events"]}
          asLink
          href={`/about/news-events/${normalized[0].id}`}
        />
        <p className="mt-5 lg:mt-12 text-[14px] lg:text-[20px]">
          Stay up to date with the latest happenings at HCD IIIT Delhi. This
          section brings you important announcements, upcoming events,
          workshops, guest lectures, and achievements from our community.
          Whether it’s academic milestones, research breakthroughs, or cultural
          activities, you’ll find all the highlights here.
        </p>

        {news.length > 0 && (
          <section id="news" className="mt-5 lg:mt-12">
            <h2 className="font-medium text-[18px] lg:text-[24px] text-brand-accent2">
              News
            </h2>
            <div className="mt-4 lg:mt-8 space-y-8">{news}</div>
          </section>
        )}

        {events.length > 0 && (
          <section id="events" className="mt-5 lg:mt-12">
            <h2 className="font-medium text-[18px] lg:text-[24px] text-brand-accent2">
              Events
            </h2>
            <div className="mt-4 lg:mt-8 space-y-8">{events}</div>
          </section>
        )}
      </article>
    </main>
  );
}
