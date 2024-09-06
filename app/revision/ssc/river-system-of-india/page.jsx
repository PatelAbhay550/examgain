import { quiz } from "@/data/questions";
import React from "react";

export const metadata = {
  title: "River Systems of India | SSC Revision Questions",
  description:
    "Prepare for SSC exams with these River Systems of India revision questions. Take free SSC mock tests to boost your knowledge of Indian rivers, their origins, tributaries, and the states they flow through.",
  keywords:
    "River Systems of India, SSC mock tests, SSC revision questions, Indian rivers, Indian geography quiz, SSC exam preparation, River Systems quiz, competitive exam preparation",
  openGraph: {
    title: "River Systems of India | SSC Mock Tests and Revision Questions",
    description:
      "Boost your SSC preparation with our River Systems of India revision questions. Perfect for last-minute revisions and geography quizzes.",
    url: "https://examgain.vercel.app/revision/ssc/river-systems-of-india",
    type: "article",
  },
};

const RiverSystem = () => {
  // Find the specific quiz data related to River System
  const data = quiz.find((q) => q.level === "River System");

  if (!data) {
    return <div>No data available for National Parks</div>;
  }
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which are the major river systems in India relevant for SSC exams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Major river systems include the Ganga, Brahmaputra, Indus, Godavari, Krishna, Narmada, and Tapti rivers.",
        },
      },
      {
        "@type": "Question",
        name: "Why are river systems important for SSC exam preparation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "River systems are a key part of Indian geography, often featured in SSC exams, particularly in questions related to the origins, tributaries, and states they flow through.",
        },
      },
      {
        "@type": "Question",
        name: "How can I remember the details of Indian river systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Focus on grouping rivers by regions, and use mnemonic devices to recall important facts like their origin, major tributaries, and the states they pass through.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "River Systems of India | SSC Mock Tests and Revision Questions",
    description:
      "Prepare for SSC exams with these River Systems of India revision questions. Take free SSC mock tests to boost your knowledge of Indian rivers, their origins, tributaries, and the states they flow through.",
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
      "@id": "https://examgain.vercel.app/revision/ssc/river-systems-of-india",
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
        River System of India Origin, Tributaries, States | SSC Revision
        Questions
      </h1>
      <p className="mb-6 text-lg text-gray-700 text-center">
        Prepare for your SSC exams with these River System of India revision
        questions. This quiz is designed to help you revise important facts
        about India's rivers, their origin, their tributaries their locations,
        and significance. Perfect for quick revision before your exams or just
        to test your knowledge on Indian geography!
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
          Key River Systems in India to Focus On
        </h2>
        <p className="text-lg text-gray-700">
          Focus on these major river systems for your SSC exams:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
          <li>Ganges River System</li>
          <li>Yamuna River System</li>
          <li>Brahmaputra River System</li>
          <li>Godavari River System</li>
          <li>Krishna River System</li>
          <li>Indus River System</li>
        </ul>
        <p className="mt-4">
          These river systems are crucial for understanding India's geographical
          and economic landscape. Pay attention to their origins, tributaries,
          and the states they traverse.
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Tips for Answering SSC GK Questions on River Systems
        </h2>
        <p className="text-lg text-gray-700">
          Here are some tips to help you tackle questions about river systems in
          the SSC exams:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
          <li>
            **Memorize River Origins and Tributaries**: Know the starting point
            of each major river and its key tributaries. This information is
            frequently tested in exams.
          </li>
          <li>
            **Understand Economic Impact**: Be aware of how rivers affect
            agriculture, industry, and local economies in their respective
            regions.
          </li>
          <li>
            **Current Affairs**: Stay updated on any recent developments or news
            related to these river systems, such as new projects or
            environmental issues.
          </li>
          <li>
            **Use Visual Aids**: Create maps or diagrams to visually connect
            rivers with their tributaries and the states they flow through.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default RiverSystem;
