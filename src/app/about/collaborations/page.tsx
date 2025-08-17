import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import Banner from "@/features/pages/about/components/Banner";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const _collab = [
  "/collab/img-1.png",
  "/collab/img-2.png",
  "/collab/img-3.png",
  "/collab/img-4.png",
  "/collab/img-5.png",
];
const collaborators = [..._collab, ..._collab, ..._collab];

export default function Page() {
  return (
    <main>
      <article className="mx-auto mt-12 px-8 xl:w-[1280px] font-light">
        <Banner
          title="Lorem ipsum dolor sit amet consectetur adipisicing."
          subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quae suscipit qui modi ut nulla iste labore et amet sequi."
          imageSrc={"/rnd-building.png"}
          breadcrumbs={["about", "collaborations"]}
        />
        <p className="mt-5 lg:mt-12 text-[14px] lg:text-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          reiciendis eaque, quas pariatur consequatur repellendus odit esse
          laudantium tempore velit, earum eum enim sequi ratione aperiam, dolor
          blanditiis doloremque minima unde voluptatibus quo voluptates
          mollitia! Natus velit ut nostrum ducimus.
        </p>

        <section className="mt-5 lg:mt-12">
          <div className="relative p-[40px] border border-brand-accent2 bg-brand-accent2/5 backdrop-blur-lg hover:backdrop-blur-2xl transition-all duration-300">
            <h2 className="font-medium text-[18px] lg:text-[28px] text-brand-accent2">
              Reach out for Collaboration
            </h2>
            <p className="mt-[0.5em] text-[14px] lg:text-[18px]">
              Admission to this program will be through two channels –
              approximately half of the seats will be through the Joint
              Admission Counselling (JAC) of Delhi.
            </p>
            <Link
              href=""
              className="font-normal w-full xl:w-[25vw] mt-[2em] flex justify-center items-center gap-[24px] py-[0.75em] text-[12px] xl:text-[18px] bg-brand-accent2 text-white border border-brand-accent2 hover:bg-brand-accent2-130 transition-all duration-200"
            >
              <LetterSwapForward
                label="UCEED PORTAL"
                staggerDuration={0.005}
                className="w-max"
              />
              <ArrowRight className="w-[12px] lg:w-[18px] h-auto" />
            </Link>
          </div>
        </section>

        <section className="my-5 lg:my-12">
          <h2 className="text-[30px] lg:text-[24px] font-medium text-brand-accent2">
            Current Collaboration
          </h2>
          <p className="text-[14px] lg:text-[20px]">
            Admission to this program will be through two channels –
            approximately half of the seats will be through the Joint Admission
            Counselling (JAC) of Delhi.
          </p>
          <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-[2em] p-[2em]">
            {collaborators.map((collaborator, idx) => (
              <Image
                key={idx}
                src={collaborator}
                alt=""
                className="w-[25vw] lg:w-[5vw] h-auto aspect-square object-contain"
                width={1000}
                height={1000}
              />
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
