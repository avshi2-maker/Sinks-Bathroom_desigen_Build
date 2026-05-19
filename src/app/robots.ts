import type { MetadataRoute } from "next";

const SITE_URL = "https://www.marble-art.co.il";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block any internal test pages from being indexed
        disallow: ["/test-supabase", "/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
