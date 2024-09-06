import React from "react";
import Link from "next/link";
export const metadata = {
  title: "SSC Quick Revision Questions - Examgain",
  description:
    "Prepare for SSC exams with revision questions of India revision questions. Take free SSC mock tests to boost your knowledge of Indian rivers, their origins, tributaries, and the states they flow through and national Parks.",
  keywords:
    "National Parks, National Parks in India,River Systems of India, SSC mock tests, SSC revision questions, Indian rivers, Indian geography quiz, SSC exam preparation, River Systems quiz, competitive exam preparation",
  openGraph: {
    title: "SSC Quick Revision Questions - Examgain",
    description:
      "Prepare for SSC exams with revision questions of India revision questions. Take free SSC mock tests to boost your knowledge of Indian rivers, their origins, tributaries, and the states they flow through and national Parks.",
    url: "https://examgain.vercel.app/revision/ssc/",
    type: "article",
  },
};

const SSCRevision = () => {
  return (
    <div className="pt-28 pb-28 px-4 md:px-8">
      <h1 className="mb-4 text-2xl font-bold text-center">
        SSC Quick Revision | Revise topics like River system, National Parks
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* National Parks Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">National Parks</h2>
            <p className="text-gray-700 mb-4">
              Test your knowledge on various national parks with this quiz. It
              covers the locations, characteristics, and history of major
              national parks.
            </p>
            <Link href="/revision/ssc/national-parks-in-india">
              <p className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Quick Revison
              </p>
            </Link>
          </div>
        </div>

        {/* River System Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">River System</h2>
            <p className="text-gray-700 mb-4">
              Test your knowledge about river systems with this quiz. It
              includes questions on major rivers, their origins, and their
              importance.
            </p>
            <Link href="/revision/ssc/river-system-of-india">
              <p className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Quick Revision
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSCRevision;
