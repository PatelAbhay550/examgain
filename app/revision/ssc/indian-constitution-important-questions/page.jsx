import { revision } from "@/data/revision";
import React from "react";

export const metadata = {
  title: "Constitution of India Important Questions SSC Exams",
  description:
    "Prepare for your SSC exams with these important questions on the Constitution of India. Boost your knowledge of the Indian Constitution, Articles and Ammendments.",
  keywords:
    "Constitution of India, SSC exams, Indian Constitution, SSC revision, SSC GK, SSC General Awareness",
  openGraph: {
    title: "Constitution of India Important Questions SSC Exams",
    description:
      "Prepare for your SSC exams with these important questions on the Constitution of India. Boost your knowledge of the Indian Constitution, Articles and Ammendments.",
    url: "https://examgain.vercel.app/revision/ssc/indian-constitution-important-questions",
    type: "article",
  },
};

const RiverSystem = () => {
  // Find the specific quiz data related to River System
  const data = revision.find((q) => q.level === "Constitution of India");

  if (!data) {
    return <div>No data available for National Parks</div>;
  }
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the 42nd ammendment of the Indian Constitution?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 42th Amendment Act of 1976 introduced Fundamental Duties, added words like 'Socialist', 'Secular' and 'Integrity'.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 44th ammendment of the Indian Constitution?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 44th Amendment Act of 1978 removed the right to property as a fundamental right.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 86th ammendment of the Indian Constitution?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 86th Amendment Act of 2002 made education a fundamental right for children between the ages of 6 and 14.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Constitution of India Important Questions SSC Exams",
    description:
      "Prepare for your SSC exams with these important questions on the Constitution of India. Boost your knowledge of the Indian Constitution, Articles and Ammendments.",
    author: {
      "@type": "Person",
      name: "Abhay Patel",
    },
    publisher: {
      "@type": "Organization",
      name: "Examgain",
      logo: {
        "@type": "ImageObject",
        url: "https://examgain.vercel.app/favicon.ico",
      },
    },
    datePublished: "2024-09-06",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://examgain.vercel.app/revision/ssc/indian-constitution-important-questions",
    },
  };

  return (
    <div className="pt-28 px-4 md:px-8 lg:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        Constitution of India Important Questions SSC Exams
      </h1>
      <p className="mb-6 text-lg text-gray-700 text-center">
        Prepare for your SSC exams with these important questions on the
        Constitution of India. Boost your knowledge of the Indian Constitution,
        Articles and Amendments.
      </p>
      <ul className="space-y-6">
        {data.questions.map((question, index) => (
          <li
            key={index}
            className="bg-blue-50 p-6 rounded-lg shadow-md hover:bg-blue-50 transition duration-300"
          >
            <p className="font-semibold text-blue-800">{question.question}</p>
            <ul className="mt-4 space-y-2">
              {question.choices.map((choice, idx) => (
                <li
                  key={idx}
                  className={`p-2 rounded-lg border ${
                    choice === question.correctAnswer
                      ? "bg-blue-200 text-blue-900 border-blue-300"
                      : "border-gray-300"
                  }`}
                >
                  {choice}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-blue-600">
              Correct Answer:{" "}
              <span className="font-semibold text-blue-800">
                {question.correctAnswer}
              </span>
            </p>
            <p className="mt-4 text-sm text-blue-600">
              Explaination:{" "}
              <span className="font-semibold text-blue-800">
                {question.extradetails}
              </span>
            </p>
          </li>
        ))}
      </ul>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Indian Constitution Important Questions for SSC Exams
        </h2>
        <p className="text-lg text-gray-700">
          The Indian Constitution is a vital topic for SSC exams. Here are some
          important questions to help you prepare for this section:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
          <li>
            **Fundamental Rights**: What are the fundamental rights guaranteed
            by the Indian Constitution?
          </li>
          <li>
            **Directive Principles of State Policy**: What is the significance
            of the Directive Principles of State Policy?
          </li>
          <li>
            **Amendments**: What is the process of amending the Indian
            Constitution?
          </li>
          <li>
            **Preamble**: What is the importance of the Preamble to the Indian
            Constitution?
          </li>
          <li>
            **Emergency Provisions**: What are the emergency provisions in the
            Indian Constitution?
          </li>
        </ul>
        <p className="mt-4">
          These river systems are crucial for understanding India's geographical
          and economic landscape. Pay attention to their origins, tributaries,
          and the states they traverse.
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Tips for Answering Indian Constitution Questions in SSC Exams
        </h2>
        <p className="text-lg text-gray-700">
          Here are some tips to help you answer Indian Constitution questions in
          SSC exams:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
          <li>
            **Understand the Basics**: Make sure you understand the basic
            concepts of the Indian Constitution, such as the Preamble, Articles,
            and Amendments.
          </li>
          <li>
            **Memorize Key Facts**: Memorize key facts such as the number of
            Articles and Amendments in the Indian Constitution.
          </li>
          <li>
            **Practice Regularly**: Practice answering Indian Constitution
            questions regularly to improve your knowledge and speed.
          </li>
          <li>
            **Read the Question Carefully**: Read the question carefully to
            understand what is being asked before answering.
          </li>
          <li>
            **Eliminate Options**: If you are unsure of the answer, try to
            eliminate the options that are clearly incorrect to improve your
            chances of selecting the correct answer.
          </li>
        </ul>
      </section>
      <section className="my-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Conclusion
        </h2>
        <p className="text-lg text-gray-700">
          The Indian Constitution is an essential topic for SSC exams. By
          understanding the key concepts, Articles, and Amendments of the Indian
          Constitution, you can boost your General Awareness and score well in
          the exam. Practice answering Indian Constitution questions regularly
          to improve your knowledge and speed. Good luck!
        </p>
      </section>
      <section className="my-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Frequently Asked Questions
        </h2>
        <ul className="space-y-6">
          <li>
            <p className="font-semibold text-blue-800">
              What is the 42nd Amendment of the Indian Constitution?
            </p>
            <p>
              The 42th Amendment Act of 1976 introduced Fundamental Duties,
              added words like 'Socialist', 'Secular' and 'Integrity'. The 42th
              Amendment Act of 1976 introduced Fundamental Duties, added words
              like 'Socialist', 'Secular' and 'Integrity'.
            </p>
          </li>
          <li>
            <p className="font-semibold text-blue-800">
              What is the 44th Amendment of the Indian Constitution?
            </p>
            <p>
              The 44th Amendment Act of 1978 removed the right to property as a
              fundamental right.
            </p>
          </li>

          <li>
            <p className="font-semibold text-blue-800">
              What is the 86th Amendment of the Indian Constitution?
            </p>
            <p>
              The 86th Amendment Act of 2002 made education a fundamental right
              for children between the ages of 6 and 14.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default RiverSystem;
