import React from "react";
import { AiOutlineSearch, AiOutlineCamera } from "react-icons/ai";
import Searchbox from "../Searchbox";
import { suggestions } from "@/data/suggestions";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-12 pt-32 px-4 border-b-4 border-blue-700">
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
        <div className="mt-8 space-y-12">
          {/* Comprehensive Database */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Comprehensive Database</h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Access solutions for all subjects, chapters, and exam questions.
            </p>
          </div>

          {/* Instant Search & Snap-to-Solve */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Instant Search & Snap-to-Solve
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Search by typing or simply use your camera to upload questions for
              instant results.
            </p>
          </div>

          {/* Study Smart */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Study Smart, Not Hard</h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Whether you're stuck on a single question or reviewing entire
              chapters, Examgain offers fast, accurate answers to help you learn
              more efficiently.
            </p>
          </div>

          {/* CTA - Ready to Master Your Exams */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Master Your Exams?
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Type in your query or snap a picture—let Examgain handle the rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
