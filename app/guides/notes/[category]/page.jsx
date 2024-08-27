import React from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../lib/firebaseconfig";
import Link from "next/link";

const Notes = async ({ params }) => {
  const { category } = params;
  const q = query(collection(db, "Notes"), where("category", "==", category));

  // Fetch the posts from Firestore
  const querySnapshot = await getDocs(q);
  const Notes = [];

  querySnapshot.forEach((doc) => {
    Notes.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  // Generate JSON-LD structured data for the list of notes
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: Notes.map((note, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: note.title,
        url: `https://examgain.vercel.app/guides/notes/${note.category}/${note.slug}`,
      },
    })),
  };

  return (
    <div className="container mx-auto py-8 pt-28 px-4">
      {/* JSON-LD Script for List Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />

      {/* SEO Content */}
      <h1 className="text-3xl font-semibold mb-6 text-blue-700">
        {category.toUpperCase()} Notes
      </h1>
      <p className="text-lg text-gray-600 mb-12">
        Explore comprehensive study notes for the {category}. Each note covers
        essential topics and is designed to help you succeed in your {category}{" "}
        exams. Dive into the material, and don't forget to check out the mock
        tests and practice questions! to secured good marks in {category} exams.
      </p>

      {/* Notes List */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <ul className="space-y-6">
          {Notes.map((note) => (
            <li
              key={note.id}
              className="border-b border-gray-200 pb-6 last:border-none"
            >
              <Link href={`/guides/notes/${note.category}/${note.slug}`}>
                <div className="hover:bg-gray-100 p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out">
                  <h2 className="text-2xl font-bold text-blue-700">
                    {note.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{note.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notes;
export async function generateMetadata({ params }) {
  const { category } = params;
  const form = category.toUpperCase();

  // Return metadata based on the post
  return {
    title: `Short Notes for ${form} Exams | ExamGain`,
    description: `Get comprehensive study notes for the ${category}. Each note covers essential topics and is designed to help you succeed in your ${category} exams. Dive into the material, and don't forget to check out the mock tests and practice questions!`,
    keywords: `[${form} Notes, ${form} Study Material, ${form} Exam Notes, ${form} Short Notes]`,
  };
}
