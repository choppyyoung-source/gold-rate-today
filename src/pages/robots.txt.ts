import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = () => {
  const content = `User-agent: *
Allow: /

Sitemap: https://goldrateslive.com/sitemap.xml

# Crawl-delay for respectful crawling
User-agent: *
Crawl-delay: 1
`;

  return new Response(content, {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
};
