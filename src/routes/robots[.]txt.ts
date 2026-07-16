import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://emin-pasha.vercel.app";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        const content = `User-agent: *
Allow: /
Sitemap: ${BASE_URL}/sitemap.xml
`;
        return new Response(content, {
          headers: {
            "Content-Type": "text/plain",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
