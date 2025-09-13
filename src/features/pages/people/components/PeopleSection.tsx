"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export type People = {
  id: number;
  name: string;
  description: string | React.ReactNode;
  img: string;
  link?: string;
};

export default function PeopleSection({ people }: { people: People[] }) {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-4 gap-[2em]">
      {people.map((person) => (
        <PeopleCard key={person.id} person={person} />
      ))}
    </section>
  );
}

function PeopleCard({ person }: { person: People }) {
  const imageContent = (
    <>
      <Image
        src={person.img}
        alt={person.name}
        width={400}
        height={400}
        className="absolute inset-0 w-full h-full border border-brand-accent2 object-cover pointer-events-none grayscale-50 group-hover:grayscale-0 transition-all duration-300"
      />
      <div className="absolute inset-0 w-full h-full bg-brand-accent2/50 group-hover:bg-transparent mix-blend-overlay transition-all duration-500" />
      <div className="absolute inset-0 right-0 w-full h-full bg-gradient-to-b from-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {person.link && (
          <ArrowUpRight
            size={32}
            className="absolute bottom-4 right-4 text-white drop-shadow-lg drop-shadow-black"
          />
        )}
      </div>
    </>
  );

  return (
    <div>
      <div className="relative w-full h-auto aspect-[0.8] group">
        {person.link ? (
          <Link target="_blank" href={person.link}>
            {imageContent}
          </Link>
        ) : (
          imageContent
        )}
      </div>
      <div className="mt-[1em]">
        <h2 className="font-medium text-[20px] lg:text-[24px] text-brand-accent2-130 leading-tight">
          {person.name}
        </h2>
        <div className="text-[14px] lg:text-[18px] opacity-80 leading-tight">
          {person.description}
        </div>
      </div>
    </div>
  );
}
