import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Class 12 Notes and Prepration Material - Examgain",
  description:
    "Get Class 12 notes and prepration material for Physics, Chemistry, Maths, Biology, English, and other subjects. Download PDFs, images, and practice questions for free.",
  keywords:
    "Class 12 notes, Class 12 prepration material, Class 12 PDFs, Class 12 images, Class 12 practice questions, Class 12 solved examples, Class 12 notes PDF, Class 12 notes images",
  openGraph: {
    title: "Class 12 Notes and Prepration Material - Examgain",
    description:
      "Get Class 12 notes and prepration material for Physics, Chemistry, Maths, Biology, English, and other subjects. Download PDFs, images, and practice questions for free.",
    url: "https://examgain.vercel.app/revision/class12/",
    type: "article",
  },
};
const page = () => {
  return (
    <div className="pt-28 pb-28 px-4 md:px-8">
      <h1 className="mb-4 text-2xl font-bold text-center">
        Class 12 Notes and Prepration Material - Examgain
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* National Parks Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              Electric Charges and Fields Pdf Notes
            </h2>
            <p className="text-gray-700 mb-4">
              Get free notes on Electric Charges and Fields for class 12.
              Download PDFs, images, and practice questions for free.
            </p>
            <Link href="/revision/class12/electricchargesandfields">
              <p className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Get Notes For Free
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
