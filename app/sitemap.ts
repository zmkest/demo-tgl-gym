import type { MetadataRoute } from "next";
import { seo } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: seo.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
