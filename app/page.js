import ExamCategories from "@/components/sections/Categories";
import Hero from "@/components/sections/Hero";
import { suggestions } from "@/data/suggestions";
import Link from "next/link";

export default function Home() {
  const relatedQuestions = suggestions?.slice(0, 6);

  return (
    <>
      <Hero />
      <ExamCategories />
      <h2 className="text-center text-3xl font-semibold mb-8 text-blue-700">
        Top Searched Questions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {relatedQuestions.map((question, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/questions/${question.slug}`}>
              <h3 className="text-lg font-semibold mb-2 text-blue-600 hover:underline">
                {question.question}
              </h3>
            </Link>
            
          </div>
        ))}
      </div>
    </>
  );
}
