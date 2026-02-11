import { suggestions } from "@/data/suggestions";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebaseconfig";

const mcqs = [
  { slug: "the-penny-dropped-idiom" },
  { slug: "servants-of-india-society" },
  { slug: "lithium-magnesium-similarity" },
  { slug: "stp-temperature-value" },
  { slug: "mawsynram-rainfall-khasi" },
  { slug: "iodine-deficiency-thyroid" },
  { slug: "kaal-baisakhi-west-bengal" },
  { slug: "fundamental-duties-constitution" },
  { slug: "census-operations-phases" },
  { slug: "average-11-results-math" },
  { slug: "ph-value-curd" },
  { slug: "nataraja-shiva-deity" },
  { slug: "mitochondria-cell-dna" },
  { slug: "hind-swaraj-author" },
  { slug: "census-2011-highest-population" },
  { slug: "kajri-folk-dance" },
  { slug: "mountain-ranges-himalayan" },
  { slug: "dilwara-jain-temple-complex" },
  { slug: "death-rate-calculation" },
  { slug: "new-system-justice-1772" },
  { slug: "on-the-back-foot-idiom" },
  { slug: "predicament-antonym" },
];

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
      url: "https://examgain.vercel.app/revision/ssc",
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
    {
      url: "https://examgain.vercel.app/revision/ssc/indian-constitution-important-questions",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const questionUrls = suggestions.map((item) => ({
    url: `https://examgain.vercel.app/questions/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));
  const mcqUrls = mcqs.map((item) => ({
    url: `https://examgain.vercel.app/mcq/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));
  const NotesUrls = blogPosts.map((item) => ({
    url: `https://examgain.vercel.app/guides/notes/${item.category}/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  return [...staticUrls, ...questionUrls, ...mcqUrls, ...NotesUrls];
}
