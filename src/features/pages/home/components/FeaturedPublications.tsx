import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import qs from "qs";

type Pub = {
  id: number;
  year: number;
  title: string;
  authors: string[];
  venue: string;
  link: string;
};

async function fetchPublications(): Promise<Pub[]> {
  try {
    const query = qs.stringify(
      {
        sort: ["Date:desc"],
        populate: "*",
        pagination: { pageSize: 6 },
      },
      { encodeValuesOnly: true }
    );
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/publications?${query}`,
      { cache: "no-store" }
    );
    const data = await res.json();
    if (!data?.data?.length) return [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.data.map((item: any): Pub => ({
      id: item.id,
      year: item.Date ? new Date(item.Date).getFullYear() : 0,
      title: item.Title ?? "",
      authors: Array.isArray(item.Authors)
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          item.Authors.map((a: any) => a.Name).filter(Boolean)
        : [],
      venue: item.Type ?? "",
      link: item.Link ?? "",
    }));
  } catch (err) {
    console.log("[ERROR] fetching publications for home:", err);
    return [];
  }
}

function formatAuthors(authors: string[]): string {
  if (authors.length === 0) return "";
  if (authors.length <= 3) return authors.join(", ");
  return `${authors.slice(0, 3).join(", ")} et al.`;
}

export default async function FeaturedPublications() {
  const pubs = await fetchPublications();
  if (pubs.length === 0) return null;

  return (
    <section
      aria-label="Selected publications"
      className="relative w-full py-[10vh] lg:py-[14vh] overflow-hidden"
    >
      <div className="mx-auto xl:w-[1280px] px-8">
        <div className="flex items-end justify-between gap-8 mb-8 lg:mb-12">
          <h2 className="font-light text-[32px] lg:text-[64px] leading-[1.05] text-brand-accent2">
            Selected{" "}
            <span className="text-terracotta font-normal">publications</span>
          </h2>
          <Link
            href="/research/publications"
            className="flex-shrink-0 group inline-flex items-center gap-2 text-[14px] lg:text-[16px] text-brand-accent2 hover:text-terracotta transition-colors duration-200"
          >
            <span className="border-b border-current">View all</span>
            <ArrowUpRight className="w-[18px] h-auto transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <ol className="flex flex-col">
          {pubs.map((p) => (
            <li key={p.id} className="border-t border-brand-accent2/15 last:border-b">
              <PublicationRow pub={p} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PublicationRow({ pub }: { pub: Pub }) {
  const external = pub.link.startsWith("http");
  const content = (
    <div className="group grid grid-cols-[auto_1fr_auto] gap-6 lg:gap-12 items-center py-6 lg:py-8 px-2 transition-colors duration-300 hover:bg-terracotta/[0.06]">
      <span className="text-[14px] lg:text-[20px] font-light tabular-nums text-brand-accent2/70 w-[4ch]">
        {pub.year || "—"}
      </span>
      <div className="min-w-0">
        <h3 className="text-[18px] md:text-[24px] lg:text-[32px] leading-[1.2] font-light text-brand-accent2 group-hover:text-terracotta transition-colors duration-300">
          {pub.title}
        </h3>
        {(pub.authors.length > 0 || pub.venue) && (
          <p className="mt-2 text-[13px] lg:text-[15px] font-light text-black/55">
            {formatAuthors(pub.authors)}
            {pub.authors.length > 0 && pub.venue && " · "}
            {pub.venue && <span className="italic">{pub.venue}</span>}
          </p>
        )}
      </div>
      <ArrowUpRight
        className="w-[20px] lg:w-[28px] h-auto text-brand-accent2/50 group-hover:text-terracotta transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0 group-hover:-translate-y-0.5"
        strokeWidth={1.5}
      />
    </div>
  );

  if (!pub.link) return content;

  return (
    <Link
      href={pub.link}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block"
    >
      {content}
    </Link>
  );
}
