import { revision } from "@/data/revision";
import React from "react";

export const metadata = {
  title: "National Parks in India | SSC Mock Tests and Revision Questions",
  description:
    "Prepare for SSC exams with these National Parks in India revision questions. Take free SSC mock tests to boost your knowledge and ace your exam preparation.",
  keywords:
    "National Parks in India, SSC mock tests, SSC revision questions, SSC preparation, SSC National Parks quiz, Indian geography quiz, competitive exam preparation",
  openGraph: {
    title: "National Parks in India | SSC Mock Tests and Revision Questions",
    description:
      "Boost your SSC preparation with our National Parks in India revision questions. Perfect for last-minute revisions and geography quizzes.",
    url: "https://examgain.vercel.app/revision/ssc/national-parks-in-india",
    type: "article",
  },
};

const NationalParks = () => {
  // Find the specific quiz data related to National Parks
   const data = revision.find((q) => q.level === "National Parks");

  if (!data) {
    return <div>No data available for National Parks</div>;
  }
  // Structured Data JSON-LD for FAQ, Article, and Breadcrumbs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the most important National Parks in India for SSC exams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Key National Parks include Jim Corbett, Ranthambore, Kaziranga, Sundarbans, Gir, Bandipur, and Kanha.",
        },
      },
      {
        "@type": "Question",
        name: "Why are National Parks important for SSC exam preparation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "National Parks are frequently asked in SSC exams due to their significance in Indian geography and biodiversity.",
        },
      },
      {
        "@type": "Question",
        name: "How can I remember the locations of National Parks in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use mnemonics or associate parks with the states they are located in. For example, 'Jim Corbett' is in Uttarakhand.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "National Parks in India | SSC Mock Tests and Revision Questions",
    description:
      "Prepare for SSC exams with these National Parks in India revision questions. Take free SSC mock tests to boost your knowledge and ace your exam preparation.",
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
      "@id": "https://examgain.vercel.app/revision/ssc/national-parks-in-india",
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
        National Parks in India | SSC Mock Tests and Revision Questions
      </h1>
      <p className="mb-6 text-lg text-gray-700 text-center">
        Prepare for your SSC exams with these National Parks in India revision
        questions. This quiz is designed to help you revise important facts
        about India's national parks, their locations, and significance. Perfect
        for quick revision before your exams or just to test your knowledge on
        Indian geography!
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
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Why Study National Parks for SSC Exams?
        </h2>
        <p className="text-lg text-gray-700">
          National Parks in India play a crucial role in preserving the
          country's rich biodiversity. As an SSC aspirant, understanding the
          geographical significance and location of these parks is important for
          the General Knowledge (GK) section. Questions related to National
          Parks often appear in competitive exams, making it essential for
          candidates to be well-prepared.
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Key National Parks in India to Focus On
        </h2>
        <p className="text-lg text-gray-700">
          When studying National Parks for your SSC exams, focus on the most
          famous ones like:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
          <li>Jim Corbett National Park (Uttarakhand)</li>
          <li>Ranthambore National Park (Rajasthan)</li>
          <li>Kaziranga National Park (Assam)</li>
          <li>Sundarbans National Park (West Bengal)</li>
          <li>Gir National Park (Gujarat)</li>
          <li>Bandipur National Park (Karnataka)</li>
          <li>Kanha National Park (Madhya Pradesh)</li>
        </ul>
        <p className="mt-4">
          These parks are frequently mentioned in SSC exams due to their
          historical, ecological, and geographical importance. Make sure to
          memorize key facts like the state they are located in, unique species
          they are known for, and any recent news or conservation efforts
          related to them.
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Tips for Answering SSC GK Questions on National Parks
        </h2>
        <p className="text-lg text-gray-700">
          To ace the GK section of your SSC exams, follow these tips when
          answering questions related to National Parks:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
          <li>
            **Memorize Locations**: National Parks are often asked about in
            relation to their state. Focus on the state and region of each park.
          </li>
          <li>
            **Species Focus**: Know the endangered species that these parks
            protect, like tigers in Ranthambore and Gir, or rhinos in Kaziranga.
          </li>
          <li>
            **Current Affairs**: Stay updated with any recent news regarding
            these parks, such as conservation efforts, natural disasters, or new
            discoveries.
          </li>
          <li>
            **Use Mnemonics**: Create mnemonics to remember key facts. For
            example, "Jungle Cats Run Kindly" for Jim Corbett, Ranthambore,
            Kaziranga, and Kanha.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default NationalParks;
