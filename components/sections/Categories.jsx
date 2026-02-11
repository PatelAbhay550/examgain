import Link from "next/link";
import React from "react";
import { AiOutlineBook, AiOutlineFileText, AiOutlineAppstore, AiOutlineTeam } from "react-icons/ai";

const ExamCategories = () => {
  const categories = [
    {
      name: "SSC",
      icon: AiOutlineBook,
      description: "SSC Exams Questions",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "NEET",
      icon: AiOutlineFileText,
      description: "Medical Entrance",
      color: "from-green-500 to-green-600",
    },
    {
      name: "JEE",
      icon: AiOutlineAppstore,
      description: "Engineering Entrance",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Class 10",
      icon: AiOutlineTeam,
      description: "Board Exams",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Browse by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your exam board or class and get instant access to practice questions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link key={index} href={`/category/${category.name.toLocaleLowerCase()}`}>
                <article className={`bg-gradient-to-br ${category.color} rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-8 text-white cursor-pointer min-h-40 flex flex-col justify-center items-center text-center`}>
                  <Icon className="text-5xl mb-4" aria-hidden="true" />
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExamCategories;
