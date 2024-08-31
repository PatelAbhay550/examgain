import Link from "next/link";
import React from "react";
import {
  AiOutlineBook,
  AiOutlineFileText,
  AiOutlineQuestionCircle,
} from "react-icons/ai";

export const Resources = () => {
  const categories = [
    {
      title: "SSC",
      cards: [
        {
          icon: AiOutlineBook,
          title: "Notes",
          description: "Comprehensive study notes for SSC exams.",
          link: "/guides/notes/ssc",
        },
        {
          icon: AiOutlineFileText,
          title: "Mock Tests",
          description: "Practice with free mock tests for SSC.",
          link: "/guides/tests/ssc",
        },
        {
          icon: AiOutlineQuestionCircle,
          title: "Questions",
          description: "Access SSC practice questions with solutions.",
          link: "/category/ssc",
        },
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-28 px-4">
      <div className="container mx-auto">
        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-center mb-8">
          Explore Resources
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
          Access a variety of resources like notes, mock tests, and practice
          questions for different exams.
        </p>

        {/* Category Sections */}
        {categories.map((category, index) => (
          <div key={index} className="mb-16">
            {/* Section Heading */}
            <h2 className="text-2xl font-bold mb-8 text-center">
              {category.title} Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.cards.map((card, cardIndex) => (
                <Link href={card.link} key={cardIndex}>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition-shadow duration-300">
                    <card.icon className="text-blue-500 text-4xl mb-4 mx-auto" />
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
