import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import qs from "qs";
import PublicationRow, {
  type PubRow as Pub,
} from "./PublicationRow";

async function fetchPublications(): Promise<Pub[]> {
  try {
    const query = qs.stringify(
      {
        sort: ["Date:desc"],
        populate: "*",
        pagination: { pageSize: 4 },
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

        <div className="mt-8 lg:mt-12 flex justify-center">
          <Link
            href="/research/publications"
            className="group inline-flex items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 border border-brand-accent2 text-brand-accent2 hover:bg-brand-accent2 hover:text-white transition-colors duration-200 text-[13px] lg:text-[15px] tracking-[0.2em] uppercase font-medium"
          >
            View all publications
            <ArrowUpRight
              className="w-[16px] lg:w-[18px] h-auto transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.75}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

