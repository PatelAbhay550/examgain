import { suggestions } from "@/data/suggestions";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebaseconfig";

export default async function sitemap() {
  const q = query(collection(db, "Notes"));

  // Fetch the posts from Firestore
  const querySnapshot = await getDocs(q);
  const blogPosts = [];

  querySnapshot.forEach((doc) => {
    blogPosts.push({
      id: doc.id,
      slug: doc.data().slug, // Make sure 'slug' is a field in your document
      ...doc.data(),
    });
  });

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
    {
      url: "https://examgain.vercel.app/revison/ssc/national-parks-in-india",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://examgain.vercel.app/revison/ssc/river-system-of-india",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const questionUrls = suggestions.map((item) => ({
    url: `https://examgain.vercel.app/questions/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));
  const NotesUrls = blogPosts.map((item) => ({
    url: `https://examgain.vercel.app/guides/notes/${item.category}/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  return [...staticUrls, ...questionUrls, ...NotesUrls];
}
