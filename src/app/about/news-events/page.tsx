import Banner from "@/features/pages/about/components/Banner";
import NewsCard, {
  NewsEvent,
} from "@/features/pages/about/news-events/components/NewsCard";

export const dynamic = "force-dynamic";

export default async function Page() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/news-and-events?populate=*`
  ).catch((reason) => console.log("[ERROR]", reason));
  const data = await res?.json();
  console.log(data);

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
        />
        <p className="mt-5 lg:mt-12 text-[14px] lg:text-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          reiciendis eaque, quas pariatur consequatur repellendus odit esse
          laudantium tempore velit, earum eum enim sequi ratione aperiam, dolor
          blanditiis doloremque minima unde voluptatibus quo voluptates
          mollitia! Natus velit ut nostrum ducimus.
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
