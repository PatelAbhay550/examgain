import { collection, getDocs, query } from "firebase/firestore";
import React from "react";
import { db } from "../../../../../lib/firebaseconfig";

const page = async ({ params }) => {
  const { slug } = params;
  const q = query(collection(db, "Notes"));

  const querySnapshot = await getDocs(q);
  const NotesData = [];

  querySnapshot.forEach((doc) => {
    NotesData.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  const data = NotesData.find((note) => note.slug === slug);

  if (!data) {
    return (
      <div className="container mx-auto py-28 px-4">
        <h1 className="text-3xl font-semibold text-red-500">Note not found!</h1>
      </div>
    );
  }

  // JSON-LD Schema for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    articleBody: data.Content,
    author: {
      "@type": "Person",
      name: "Examgain",
    },
    publisher: {
      "@type": "Organization",
      name: "Examgain",
      logo: {
        "@type": "ImageObject",
        url: "/favicon.ico", // Update with your actual logo URL
      },
    },
    datePublished: data.Updated || new Date().toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://examgain.vercel.app/guides/notes/${slug}`,
    },
  };

  return (
    <div className="container mx-auto py-8 pt-28 px-4">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Title Section */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-6 text-blue-700">
        {data.title}
      </h1>

      {/* Verified Content Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <p className="text-sm text-gray-500">Verified by Examgain</p>
        <p className="mt-2 text-base">
          The content of this note is verified and up-to-date!
        </p>
        <p>Last Updated: {data.Updated} </p>
      </div>

      {/* Main Content */}
      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-6 rounded-lg mb-8">
        <span className="font-bold text-zinc-700">Content:</span>
        <div
          className="mt-4 prose prose-lg max-w-none text-justify"
          dangerouslySetInnerHTML={{
            __html: data.Content,
          }}
        />
      </div>

      {/* Related Notes Section (Optional) */}
      {/* Add related notes here if you have them in your data */}
    </div>
  );
};

export default page;
export async function generateMetadata({ params }) {
  const { slug } = params;
  const q = query(collection(db, "Notes"));

  // Fetch the posts from Firestore
  const querySnapshot = await getDocs(q);
  const NotesData = [];

  querySnapshot.forEach((doc) => {
    // Push each post data along with its ID into the posts array
    NotesData.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  const post = NotesData.find((post) => post.slug === slug);

  // Return metadata based on the post
  return {
    title: `${post.title} - Guideblog`,
    description: post.description
      ? `${post.description.slice(0, 110)}...`
      : "No description available.",
    keywords: post.keywords ? post.keywords : "[ssc notes, upsc notes]",
  };
}
