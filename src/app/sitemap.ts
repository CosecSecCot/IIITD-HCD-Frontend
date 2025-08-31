import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: {path: string; changeFrequency?: "daily" | "weekly" | "monthly" | "yearly"; priority: number}[]  = [
    { path: '/', priority: 1},
    { path: '/about/collaborations', priority: 0.8 },
    { path: '/about/news-events', changeFrequency: "monthly", priority: 0.8 },
    { path: '/about/overview', priority: 0.8 },
    { path: '/about/placements', priority: 0.8 },
    { path: '/connect', priority: 0.8 },
    { path: '/research/labs', priority: 0.7 },
    { path: '/research/projects', priority: 0.7 },
    { path: '/research/publications', changeFrequency: "yearly", priority: 0.7 },
    { path: '/search', priority: 0.5 },
    { path: '/study/btech', priority: 0.9 },
    { path: '/study/courses', priority: 0.7 },
    { path: '/study/phd', priority: 0.7 },
  ]

  return staticRoutes.map(route => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
