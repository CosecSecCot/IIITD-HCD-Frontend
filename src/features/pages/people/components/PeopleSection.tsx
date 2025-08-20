"use client";

import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type Faculty = {
  id: number;
  name: string;
  email: string;
  img: string;
};

export default function FacultySection({
  faculty,
  filter,
}: {
  faculty: Faculty[];
  filter?: string;
}) {
  return (
    <>
      <div
        className="font-normal grid grid-cols-2 xl:grid-cols-3 grid-rows-1 text-[12px] lg:text-[18px]"
        role="tablist"
      >
        <Button
          text="All Faculty"
          active={
            filter !== "Pop" && filter !== "Visiting" && filter !== "Adjunct"
          }
          label={"All"}
        />
        <Button
          text="Professor Of Practice"
          active={filter === "Pop"}
          label={"Pop"}
        />
        <Button
          text="Visiting Faculty"
          active={filter === "Visiting"}
          label={"Visiting"}
        />
        <Button
          text="Adjunct Faculty"
          active={filter === "Adjunct"}
          label={"Adjunct"}
        />
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-[30px]">
        {faculty
          .filter((faculty) => {
            switch (filter) {
              case "Core":
              // return faculty.mandatory;
              case "Elective":
              // return !faculty.mandatory;
              case "All":
              default:
                return true;
            }
          })
          .map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
      </section>
    </>
  );
}

function Button({
  text,
  active,
  label,
}: {
  text: string;
  active: boolean;
  label: string;
}) {
  return (
    <Link
      className={`flex gap-[12px] lg:gap-[24px] items-center justify-center py-[0.5em] border border-black/30 ${
        active ? "bg-brand-accent2 text-white" : ""
      }`}
      href={`/people/faculty?filter=${label}`}
      scroll={false}
    >
      <Search className="w-[12px] lg:w-[16px] aspect-square h-auto" />
      <LetterSwapForward label={text} staggerDuration={0.005} />
    </Link>
  );
}

function FacultyCard({ faculty }: { faculty: Faculty }) {
  return (
    <div className="relative w-full aspect-square gap-[32px] lg:gap-[48px] p-[28px] lg:p-[40px] border border-brand-accent2/25 bg-brand-accent2/[0.02] backdrop-blur-md hover:backdrop-blur-2xl hover:bg-brand-accent2/5 transition-all duration-200">
      <Image
        src={faculty.img}
        alt={faculty.name}
        width={400}
        height={400}
        className=""
      />
    </div>
  );
}
