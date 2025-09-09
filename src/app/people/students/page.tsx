import PeopleSection, {
  People,
} from "@/features/pages/people/components/PeopleSection";
import { Suspense } from "react";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Page() {
  const breadcrumbs = ["people", "students"];
  return (
    <>
      <section
        role="banner"
        className="relative h-screen text-white flex flex-col justify-center shadow-2xl shadow-white"
      >
        <div className="relative z-30 mx-auto xl:w-[1280px] p-8">
          <div className="absolute z-30 -top-[128px] lg:-top-[100px] right-8 text-[12px] lg:text-[20px]">
            {breadcrumbs.map((breadcrumb, index) => {
              if (index < breadcrumbs.length - 1) {
                return (
                  <span key={index}>
                    <span
                      className="uppercase"
                      style={{
                        color: `color-mix(in oklab, white ${
                          ((index + 1) / breadcrumbs.length) * 100
                        }%, transparent)`,
                      }}
                    >
                      {breadcrumb}
                      {index == breadcrumbs.length - 1 ? "" : " / "}
                    </span>
                  </span>
                );
              }
              return (
                <span key={index} className="uppercase">
                  {breadcrumb}
                </span>
              );
            })}
          </div>
          <p className="text-[18px] lg:text-[30px] text-white/60 leading-tight uppercase">
            Students & Representatives
          </p>
          <h1 className="text-[38px] lg:text-[80px] leading-none uppercase">
            Students At HCD
          </h1>
          <p className="mt-[1em] lg:w-3/4 font-light text-[16px] lg:text-[26px] leading-tight">
            Our student representatives bridge voices and ideas, fostering
            collaboration and ensuring an inclusive, vibrant community within
            HCD.
          </p>
        </div>
        <div className="absolute z-20 inset-0 w-full h-full pointer-events-none bg-gradient-to-r from-brand-accent2 via-brand-accent2-130/60 to-black/0" />
        <div className="absolute z-10 inset-0 w-full h-full pointer-events-none bg-brand-accent2/20" />
        <Image
          src="/rnd-building.png"
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          width={1920}
          height={797}
        />
      </section>

      <main className="mt-[30px] lg:mt-[128px] mb-[10vh]">
        <article>
          <section className="xl:w-[1280px] mx-auto px-8">
            <Suspense
              fallback={
                <div className="mt-[1em] grid md:grid-cols-3 gap-8">
                  <div className="relative bg-white aspect-square">
                    <div className="absolute inset-0 w-full h-full bg-brand-gray1/70 animate-pulse rounded-md" />
                  </div>
                  <div className="relative bg-white aspect-square">
                    <div className="absolute inset-0 w-full h-full bg-brand-gray1/70 animate-pulse rounded-md" />
                  </div>
                  <div className="relative bg-white aspect-square">
                    <div className="absolute inset-0 w-full h-full bg-brand-gray1/70 animate-pulse rounded-md" />
                  </div>
                </div>
              }
            >
              <StudentRepresentativesSection />
            </Suspense>
          </section>
        </article>
      </main>
    </>
  );
}

async function StudentRepresentativesSection() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/student-representatives?sort[0]=Name:asc&populate=Image`
  ).catch((reason) => console.log("[ERROR]", reason));
  const data = await res?.json();

  if (!data || data.error || data.data.length == 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[50vh]">
        <h2 className="text-[20px] lg:text-[28px] text-brand-accent2 font-semibold">
          Hmm...
        </h2>
        <p className="text-[16px] lg:text-[20px] italic font-light">
          Looks like no student representatives were found.
        </p>
      </div>
    );
  }

  const normalized: People[] = data.data.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any): People => ({
      id: item.id,
      name: item.Name,
      description: item.ShortDescription,
      img: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.Image.url}`,
      link: item.WebsiteLink,
    })
  );

  return (
    <div>
      <PeopleSection people={normalized} />
    </div>
  );
}
