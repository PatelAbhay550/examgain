import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto">
        {/* Top section - links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">About Guideblog</h4>
            <p className="text-gray-600">
              Guideblog is your go-to platform for finding verified answers to
              all your exam questions. Whether it's math, science, or history,
              we've got expert solutions to help you succeed.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600">
                  Ask a Question
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600">
                  Search Solutions
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600">
                  Login / Signup
                </a>
              </li>
            </ul>
          </div>

          {/* Subjects Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Popular Subjects</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600">
                  Math Solutions
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600">
                  Science Solutions
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600">
                  History Solutions
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600">
                  English Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section - SEO-friendly keywords */}
        <div className="border-t border-gray-300 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Guideblog. All rights reserved. |
            Your #1 source for verified exam answers and study solutions for all
            subjects, chapters, and questions.
          </p>
          <p className="mt-4">
            Find expert solutions for Math, Science, History, English, and more.
            Guideblog helps students prepare for exams, solve tricky questions,
            and improve their understanding across all subjects.
          </p>
          <p className="mt-4">
            <a href="/privacy" className="hover:text-blue-600">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/about" className="hover:text-blue-600">
              About Us
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
