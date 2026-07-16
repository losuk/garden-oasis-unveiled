import { createFileRoute } from "@tanstack/react-router";
import { rooms } from "./rooms";

const BASE_URL = "https://emin-pasha.vercel.app";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/rooms", changefreq: "weekly", priority: "0.9" },
          { path: "/dining", changefreq: "monthly", priority: "0.8" },
          { path: "/spa", changefreq: "monthly", priority: "0.8" },
          { path: "/pool", changefreq: "monthly", priority: "0.8" },
          { path: "/conferences", changefreq: "monthly", priority: "0.8" },
          { path: "/gallery", changefreq: "monthly", priority: "0.6" },
          { path: "/offers", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.6" },
          // Add individual room pages
          ...rooms.map((room) => ({
            path: `/rooms/${room.id}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
        ];

        const urls = entries
          .map(
            (e) =>
              `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
