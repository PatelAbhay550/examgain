import ExamCategories from "@/components/sections/Categories";
import Hero from "@/components/sections/Hero";
import { suggestions } from "@/data/suggestions";
import Link from "next/link";

export const metadata = {
  title: "Examgain - Find Answers to All Your Exam Questions",
  description:
    "Get verified solutions to exam questions. SSC, NEET, JEE, Class 10 & 12. Expert answers, instant search.",
};

export default function Home() {
  const relatedQuestions = suggestions?.slice(0, 6);

  return (
    <main>
      <Hero />
      <ExamCategories />

      {/* Featured Questions Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Popular Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse some of the most searched questions on Examgain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedQuestions.map((question, index) => (
              <article
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-blue-300 transition-all duration-300"
              >
                <Link
                  href={`/questions/${question.slug}`}
                  className="group block"
                >
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {question.question}
                  </h3>
                </Link>
                {question.tags && question.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {question.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              View All Questions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
