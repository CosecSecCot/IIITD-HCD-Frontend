"use client";

import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
gsap.registerPlugin(Flip, useGSAP);

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

// function PeopleCard({ person }: { person: People }) {
//   const inner = (
//     <div className="relative w-full h-full bg-brand-accent1/10 group-hover:bg-brand-accent2 backdrop-blur-2xl transition-colors ease-in-out duration-500">
//       <div className="absolute inset-0 w-full h-full">
//         <Image
//           src={person.img}
//           alt={person.name}
//           width={400}
//           height={400}
//           className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-100 group-hover:grayscale-0 transition-all duration-500"
//         />
//         <div className="absolute inset-0 w-full h-full bg-brand-accent2/50 group-hover:bg-transparent mix-blend-overlay transition-all duration-500" />
//         <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/20 to-black/0" />
//       </div>
//       <div className="absolute top-0 left-0 p-4 lg:p-6 text-white text-shadow-lg text-shadow-black/20 max-md:hidden group-hover:translate-y-[-200%] transition-transform ease-in-out duration-500">
//         <h2 className="uppercase font-medium text-[18px] lg:text-[30px] leading-none">
//           {person.name}
//         </h2>
//         <p className="text-[12px] lg:text-[20px]">{person.description}</p>
//       </div>
//       <div className="absolute bottom-0 w-full flex flex-col justify-center items-center text-center px-[2em] py-[0.5em] text-white bg-black/50 backdrop-blur-md md:translate-y-full md:group-hover:translate-y-0 transition-transform ease-in-out duration-500">
//         <h2 className="uppercase font-medium text-[18px] lg:text-[30px] leading-none">
//           {person.name}
//         </h2>
//         <p className="text-[12px] lg:text-[20px]">{person.description}</p>
//       </div>
//     </div>
//   );
//   if (person.link) {
//     return (
//       <Link
//         target="_blank"
//         href={person.link}
//         className="w-full h-auto aspect-square overflow-hidden group"
//       >
//         {inner}
//       </Link>
//     );
//   }
//   return (
//     <div className="w-full h-auto aspect-square overflow-hidden group">
//       {inner}
//     </div>
//   );
// }

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
