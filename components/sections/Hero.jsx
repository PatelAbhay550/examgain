import React from "react";
import {
  AiOutlineSearch,
  AiOutlineDatabase,
  AiOutlineBulb,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import Searchbox from "../Searchbox";
import { suggestions } from "@/data/suggestions";

const Hero = () => {
  const features = [
    {
      icon: AiOutlineDatabase,
      title: "Comprehensive Database",
      description: "Access solutions for all subjects and exam questions",
    },
    {
      icon: AiOutlineCheckCircle,
      title: "Verified Answers",
      description: "All solutions are carefully verified by experts",
    },
    {
      icon: AiOutlineBulb,
      title: "Learn Smarter",
      description: "Clear explanations to help you understand deeply",
    },
    {
      icon: AiOutlineSearch,
      title: "Instant Search",
      description: "Find answers to your questions instantly",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 pt-36 px-4" role="region" aria-label="Hero section">
      <div className="container mx-auto max-w-6xl">
        {/* Main Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Find Expert Answers to All Your Exam Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get verified solutions instantly. From SSC to Class 12, we have
            answers to thousands of questions across all subjects.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-16">
          <Searchbox suggestions={suggestions} />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md p-6 text-center transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="text-blue-600 text-4xl" aria-hidden="true" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
