import Banner from "@/features/pages/about/components/Banner";

const newsData = [
  {
    date: "January 2024",
    title: "1Pixel Design Conference '24 at IIIT-Delhi Shaping the Future",
    description:
      "Admission to this program will be through two channels - approximately half of the. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quis ullam cumque enim molestiae sapiente! Ipsa a voluptatem eligendi repudiandae voluptates maxime, quam quisquam possimus maiores veniam reprehenderit minus voluptatum.",
    image: "",
  },
  {
    date: "January 2024",
    title: "1Pixel Design Conference '24 at IIIT-Delhi Shaping the Future",
    description:
      "Admission to this program will be through two channels - approximately half of the.",
    image: "",
  },
];

export default function Page() {
  return (
    <main>
      <article className="mx-auto mt-12 px-8 xl:w-[1280px] font-light">
        <Banner
          title="1Pixel Design Conference '24 at IIIT-Delhi Shaping the Future"
          subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quae suscipit qui modi ut nulla iste labore et amet sequi."
          imageSrc={"/1pixel.png"}
          breadcrumbs={["about", "news & Events"]}
        />
        <p className="mt-5 lg:mt-12 text-[14px] lg:text-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          reiciendis eaque, quas pariatur consequatur repellendus odit esse
          laudantium tempore velit, earum eum enim sequi ratione aperiam, dolor
          blanditiis doloremque minima unde voluptatibus quo voluptates
          mollitia! Natus velit ut nostrum ducimus.
        </p>

        <section className="mt-5 lg:mt-12">
          <h2 className="font-medium text-[18px] lg:text-[24px] text-brand-accent2">
            News
          </h2>
          <div className="mt-4 lg:mt-8 space-y-8">
            {newsData.map((news, idx) => {
              return <NewsCard key={idx} content={news} />;
            })}
          </div>
        </section>

        <section className="my-5 lg:my-12">
          <h2 className="font-medium text-[18px] lg:text-[24px] text-brand-accent2">
            Events
          </h2>
          <div className="mt-4 lg:mt-8 space-y-8">
            {newsData.map((news, idx) => {
              return <NewsCard key={idx} content={news} />;
            })}
          </div>
        </section>
      </article>
    </main>
  );
}

function NewsCard({
  content,
}: {
  content: {
    date: string;
    title: string;
    description: string;
  };
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-8">
      <div className="w-full md:w-1/3 h-auto aspect-video md:aspect-[4/3] flex-shrink-0 bg-neutral-300 rounded-xl overflow-hidden" />
      <div className="mt-3">
        <p className="text-[14px] lg:text-[18px] text-brand-accent2/80">
          {content.date}
        </p>
        <h3 className="font-medium text-[20px] lg:text-[20px] text-brand-accent2 leading-tight">
          {content.title}
        </h3>
        <p className="font-light text-[14px] lg:text-[18px] opacity-60 mt-2">
          {content.description}
        </p>
      </div>
    </div>
  );
}
