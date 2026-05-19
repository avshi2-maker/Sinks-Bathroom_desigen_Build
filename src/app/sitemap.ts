import type { MetadataRoute } from "next";

const SITE_URL = "https://www.marble-art.co.il";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Future pages can be added here as the site grows
    // e.g. /gallery, /process, /about, /contact
  ];
}
