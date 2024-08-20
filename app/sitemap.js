import { suggestions } from "@/data/suggestions";

export default function sitemap() {
  const staticUrls = [
    {
      url: "https://examgain.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://examgain.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://examgain.vercel.app/privacy",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const questionUrls = suggestions.map((item) => ({
    url: `https://examgain.vercel.app/questions/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticUrls, ...questionUrls];
}
