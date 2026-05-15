import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://garusvictorin.dev";

  const projectRoutes = PROJECTS.map((p) => ({
    url: `${base}/projects/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...projectRoutes,
  ];
}
