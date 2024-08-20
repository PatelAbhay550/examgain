import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto py-8 pt-28 px-4">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-700">
        About Us
      </h1>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <p className="text-lg text-gray-700">
          Welcome to <strong>Examgain</strong> – your ultimate companion in exam
          preparation! We are a dedicated online platform that aims to make
          learning and exam readiness seamless and efficient for students of all
          levels. Whether you're preparing for school exams, competitive exams,
          or entrance tests, Examgain has got you covered.
        </p>
      </div>

      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p>
          At Examgain, our mission is to empower every student to achieve their
          educational goals by providing quality resources, personalized
          learning experiences, and the motivation to excel in their exams.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Why Choose Examgain?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Comprehensive Resources:</strong> We offer a wide range of
            study materials, practice questions, and exam tips to help you
            prepare effectively.
          </li>
          <li>
            <strong>Personalized Learning:</strong> Our platform adapts to your
            learning needs, ensuring you focus on areas that need improvement.
          </li>
          <li>
            <strong>Expert Guidance:</strong> Get insights and advice from top
            educators and experts to boost your confidence.
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Get in Touch
        </h2>
        <p>
          If you have any questions, suggestions, or feedback, feel free to
          reach out to us. We’re always here to help!
        </p>
        <p className="text-blue-600 mt-2">
          Contact us:{" "}
          <a href="mailto:patelabhay550@gmail.com" className="underline">
            patelabhay550@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
