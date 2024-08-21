import Link from "next/link";
import React from "react";

const ExamCategories = () => {
  return (
    <>
      <section className="categories py-12">
        <h2 className="text-center text-3xl font-semibold mb-8 text-blue-700">
          Questions by Categories
        </h2>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["SSC", "NEET", "JEE", "Class 10"].map((category, index) => (
              <Link
                href={`/category/${category.toLocaleLowerCase()}`}
                key={index}
              >
                <div className="category-box shadow-lg hover:shadow-xl border-4 border-blue-500 text-blue-600 p-8 rounded-lg flex flex-col items-center justify-center h-48">
                  <h3 className="text-4xl font-bold mb-2">{category}</h3>
                  <p className="text-sm text-center">
                    Practice Questions of {category} Exams
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExamCategories;
