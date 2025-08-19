import { formatDateToMonthYear } from "@/utils/formatDate";
import Image from "next/image";

export type NewsEvent = {
  id: number;
  type: "News" | "Event";
  date: Date;
  title: string;
  description: string;
  img: string;
};

export default function NewsCard({ content }: { content: NewsEvent }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-8">
      <div className="relative w-full md:w-1/3 h-auto aspect-video md:aspect-[4/3] flex-shrink-0 bg-neutral-300 rounded-xl overflow-hidden">
        <Image
          src={content.img}
          alt={content.title + " cover image"}
          width={427}
          height={240}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="mt-3">
        <p className="text-[14px] lg:text-[18px] text-brand-accent2/80">
          {formatDateToMonthYear(content.date.toDateString())}
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
