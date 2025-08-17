import Banner from "@/features/pages/about/components/Banner";

export default function Page() {
  return (
    <main>
      <article className="mx-auto mt-12 px-8 xl:w-[1280px] font-light">
        <Banner
          title="Lorem ipsum dolor sit amet consectetur adipisicing."
          subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quae suscipit qui modi ut nulla iste labore et amet sequi."
          imageSrc={"/1pixel.png"}
          breadcrumbs={["about", "placements"]}
        />
        <p className="mt-5 lg:mt-12 text-[14px] lg:text-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          reiciendis eaque, quas pariatur consequatur repellendus odit esse
          laudantium tempore velit, earum eum enim sequi ratione aperiam, dolor
          blanditiis doloremque minima unde voluptatibus quo voluptates
          mollitia! Natus velit ut nostrum ducimus.
        </p>

        <p className="mt-5 lg:mt-12 text-[14px] lg:text-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          exercitationem tenetur reiciendis expedita, placeat non ipsa unde,
          doloribus, hic nihil earum sequi magni asperiores voluptatum nemo rem
          delectus inventore accusamus minus fuga aspernatur vitae. Atque rerum
          voluptates neque, officia fuga officiis aperiam corporis tenetur
          necessitatibus placeat aspernatur iusto a amet quis illo sequi
          tempora, soluta repellendus, veritatis obcaecati cumque! Officiis
          autem deserunt culpa commodi iste, ut molestiae sint voluptate earum
          atque sed inventore dolor doloribus quidem vitae, neque voluptatibus
          nemo. Voluptatum excepturi, quia magnam voluptatibus quidem deleniti
          minima? Porro vitae dolore laboriosam iure in a animi tempore
          consequatur. Nobis, porro!
        </p>

        <p className="mt-5 lg:mt-12 text-[14px] lg:text-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          reiciendis eaque, quas pariatur consequatur repellendus odit esse
          laudantium tempore velit, earum eum enim sequi ratione aperiam, dolor
          blanditiis doloremque minima unde voluptatibus quo voluptates
          mollitia! Natus velit ut nostrum ducimus.
        </p>

        <section className="my-5 lg:my-12">
          <div className="relative px-4 py-3 lg:px-8 lg:py-6 border border-brand-accent2 bg-brand-accent2/5 backdrop-blur-lg hover:backdrop-blur-2xl transition-all duration-300">
            <p className="font-normal text-[14px] lg:text-[20px] text-brand-gray3 leading-tight">
              GRADUATED FROM CAMPUS
            </p>
            <h2 className="font-medium text-[24px] lg:text-[48px] text-brand-accent2">
              10+ B.Tech & M.Tech
            </h2>
          </div>

          <p className="mt-5 lg:mt-12 text-[14px] lg:text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            reiciendis eaque, quas pariatur consequatur repellendus odit esse
            laudantium tempore velit, earum eum enim sequi ratione aperiam,
            dolor blanditiis doloremque minima unde voluptatibus quo voluptates
            mollitia! Natus velit ut nostrum ducimus.
          </p>
        </section>
      </article>
    </main>
  );
}
