import type { MetadataRoute } from "next";

const siteUrl = "https://www.michaelhandumon.work";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
