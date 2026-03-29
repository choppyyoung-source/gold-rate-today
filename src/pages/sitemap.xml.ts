import type { APIRoute } from "astro";
import { cities } from "../data/cities";

export const prerender = true;

const SITE_URL = "https://gold-rate-today.pages.dev";

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0]!;
}

export const GET: APIRoute = () => {
  const today = formatDate(new Date());

  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "hourly" },
    { url: "/gold-price-history/", priority: "0.8", changefreq: "daily" },
    { url: "/gold-rate-calculator/", priority: "0.8", changefreq: "daily" },
    { url: "/silver-rate-today/", priority: "0.9", changefreq: "hourly" },
    { url: "/22-carat-gold-rate-today/", priority: "0.9", changefreq: "hourly" },
    { url: "/24-carat-gold-rate-today/", priority: "0.9", changefreq: "hourly" },
    { url: "/gold-rate-today-per-tola/", priority: "0.8", changefreq: "daily" },
    { url: "/gold-price-prediction/", priority: "0.7", changefreq: "weekly" },
    { url: "/gold-price-today-usd/", priority: "0.9", changefreq: "hourly" },
    { url: "/gold-price-per-ounce/", priority: "0.9", changefreq: "hourly" },
    { url: "/gold-price-today-in-dubai/", priority: "0.8", changefreq: "hourly" },
    { url: "/about/", priority: "0.3", changefreq: "monthly" },
  ];

  const cityPages = cities.map((city) => ({
    url: `/gold-rate-today-in/${city.slug}/`,
    priority: city.tier === 1 ? "0.9" : city.tier === 2 ? "0.8" : "0.7",
    changefreq: "hourly" as const,
  }));

  const allPages = [...staticPages, ...cityPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
