import { suggestions } from "@/data/suggestions";

export default function sitemap() {
  const staticUrls = [
    {
      url: "https://www.guideblog.me",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.guideblog.me/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.guideblog.me/privacy",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const questionUrls = suggestions.map((item) => ({
    url: `https://www.guideblog.me/questions/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  return [...staticUrls, ...questionUrls];
}
