import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = () => {
  const content = `User-agent: *
Allow: /
Crawl-delay: 1

Sitemap: https://gold-rate-today.pages.dev/sitemap.xml
`;

  return new Response(content, {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
};
