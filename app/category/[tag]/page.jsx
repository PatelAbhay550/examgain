import { suggestions } from "@/data/suggestions";
import React from "react";

const Page = ({ params }) => {
  const { tag } = params;

  // Filter questions based on the tag
  const questionsData = suggestions.filter((question) => {
    return question.tags.includes(tag);
  });

  return (
    <div className="container mx-auto p-4 pt-28">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Questions on {tag.toUpperCase()} Exams
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {questionsData.length > 0 ? (
          questionsData.map((question, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            >
              <a
                href={`/questions/${question.slug}`}
                className="text-blue-600 hover:text-blue-800"
              >
                <p className="text-lg text-gray-700">{question.question}</p>
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No questions found for this tag.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
