import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type StudentProject = {
  id: number;
  domain?: string;
  student?: string;
  title: string;
  description: string;
  img: string;
};

export default function SmallProjectCard({
  project,
}: {
  project: StudentProject;
}) {
  return (
    <div className="md:mr-[2em] space-y-[1em]">
      <Image
        src={project.img}
        alt={`${project.title} image`}
        className="w-full h-auto aspect-video bg-neutral-300"
        width={480}
        height={270}
      />
      <div className="space-y-[0.25em]">
        {project.student && (
          <p className="text-[14px] lg:text-[20px] text-black/60">
            {project.student}
          </p>
        )}
        <h3 className="font-medium text-[18px] lg:text-[24px] text-brand-accent2 leading-tight">
          {project.title}
        </h3>
        <p className="font-light text-[14px] lg:text-[18px]">
          {project.description}
        </p>
      </div>
      <Link
        href=""
        className="font-normal w-full flex justify-center items-center gap-[24px] py-[0.75em] text-[14px] xl:text-[18px] bg-brand-accent2-130/5 hover:bg-brand-accent2 border border-brand-accent2-130 text-brand-accent2-130 hover:text-white transition-all duration-300"
      >
        <LetterSwapForward
          label="View Project"
          staggerDuration={0.005}
          className="w-max"
        />
        <ArrowRight className="w-[14px] lg:w-[18px] h-auto" />
      </Link>
    </div>
  );
}
