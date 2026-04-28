import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export type NavbarSearchResult = {
  title: string;
  link: string;
  description?: string;
  image?: string;
  date?: string;
  category: "News & Events" | "Labs" | "Projects";
};

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("q")?.trim();
  if (!query) return NextResponse.json({ results: [] });

  const base = process.env.NEXT_PUBLIC_STRAPI_URL;
  if (!base) return NextResponse.json({ results: [] });

  const q = encodeURIComponent(query);
  const endpoints = [
    {
      url: `/api/news-and-events?filters[$or][0][Title][$containsi]=${q}&filters[$or][1][Description][$containsi]=${q}&populate=*&pagination[pageSize]=3&sort[0]=Date:desc`,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      map: (d: any): NavbarSearchResult => ({
        title: d.Title,
        description: d.Description,
        link: `/about/news-events/${d.documentId}`,
        image: d.CoverImage ? `${base}${d.CoverImage.url}` : undefined,
        date: d.Date,
        category: "News & Events",
      }),
    },
    {
      url: `/api/labs?filters[$or][0][LabName][$containsi]=${q}&filters[$or][1][LongDescription][$containsi]=${q}&populate=*&pagination[pageSize]=2`,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      map: (d: any): NavbarSearchResult => ({
        title: d.LabName,
        description: d.LongDescription,
        link: "/research/labs",
        image: d.LabLogo ? `${base}${d.LabLogo.url}` : undefined,
        category: "Labs",
      }),
    },
    {
      url: `/api/department-projects?filters[$or][0][Title][$containsi]=${q}&filters[$or][1][LongDescription][$containsi]=${q}&pagination[pageSize]=2`,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      map: (d: any): NavbarSearchResult => ({
        title: d.Title,
        description: d.LongDescription,
        link: "/research/projects",
        category: "Projects",
      }),
    },
  ];

  try {
    const all = await Promise.all(
      endpoints.map(async (ep) => {
        const res = await fetch(`${base}${ep.url}`, { cache: "no-store" });
        const json = await res.json();
        if (!json?.data) return [];
        return json.data
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .filter((item: any) => item.Draft !== true)
          .map(ep.map);
      }),
    );
    return NextResponse.json({ results: all.flat().slice(0, 5) });
  } catch (err) {
    console.log("[ERROR] /api/search:", err);
    return NextResponse.json({ results: [] });
  }
}
