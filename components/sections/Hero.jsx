import React from "react";
import {
  AiOutlineSearch,
  AiOutlineCamera,
  AiOutlineDatabase,
  AiOutlineBulb,
} from "react-icons/ai";
import Searchbox from "../Searchbox";
import { suggestions } from "@/data/suggestions";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-12 pt-32 px-4">
      <div className="container mx-auto text-center">
        {/* Hero Heading */}
        <h1 className="text-3xl font-bold mb-8">
          Search Solutions to All Your Exam Questions and Doubts
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          At Examgain, we make finding the right answers effortless. Whether
          you're preparing for exams, revising chapters, or solving tricky
          questions, our platform is designed to help you get clear, concise
          solutions instantly.
        </p>

        {/* Search bar */}
        <Searchbox suggestions={suggestions} />

        {/* New Sections for Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Comprehensive Database */}
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md text-center">
            <AiOutlineDatabase className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h2 className="text-xl font-bold mb-2">Comprehensive Database</h2>
            <p className="text-gray-600">
              Access solutions for all subjects, chapters, and exam questions.
            </p>
          </div>

          {/* Instant Search & Snap-to-Solve */}
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md text-center">
            <AiOutlineCamera className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h2 className="text-xl font-bold mb-2">
              Instant Search & Snap-to-Solve
            </h2>
            <p className="text-gray-600">
              Search by typing or simply use your camera to upload questions for
              instant results.
            </p>
          </div>

          {/* Study Smart */}
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md text-center">
            <AiOutlineBulb className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h2 className="text-xl font-bold mb-2">Study Smart, Not Hard</h2>
            <p className="text-gray-600">
              Whether you're stuck on a single question or reviewing entire
              chapters, Examgain offers fast, accurate answers to help you learn
              more efficiently.
            </p>
          </div>

          {/* CTA - Ready to Master Your Exams */}
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md text-center">
            <AiOutlineSearch className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h2 className="text-xl font-bold mb-2">
              Ready to Master Your Exams?
            </h2>
            <p className="text-gray-600">
              Type in your query or snap a picture—let Examgain handle the rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
