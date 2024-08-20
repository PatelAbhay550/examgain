import { suggestions } from "@/data/suggestions";
import React from "react";
export async function generateStaticParams() {
  return suggestions.map((item) => ({
    slug: item.slug,
  }));
}
export async function generateMetadata({ params }) {
  const { slug } = params;
  const questionData = suggestions?.find((item) => item.slug === slug);
  return {
    title: questionData?.question,
    description: questionData?.answer,
    tags: questionData?.tags,
    images: [
      "https://previews.dropbox.com/p/thumb/ACVP-QJJ3a8LUHbNG3_jUXbrYQREA62gJ2wo1NZzvKdC5heX-8NDWOdqYI02weJLlNTW06WgK5VLfWpqH9VhR512o4z6oRWa8_CX6DvLgR7Q8y41W3fyg4bn_506XmhZO56P1OzcYhrJK4Tb-qqbSgf11eCSu26zeOG7LkKqIamS1mfolTJrSQsNdStTt4wU5DNTKyB7Wj3mY3kQbSKSbLZa1FhR2nRcBP5rdb7yfD2UMBKPUmGCcKzCR95Or-179-liHVAmWADUQDlaR3OKE55992pRLDtPvLH9_51HypmPrd4FNTkSvp5TcC_61KKpEyz_cvxcaknVrp0ZNFrDSJwB/p.png?is_prewarmed=true",
    ],
    openGraph: {
      title: questionData.question,
      description: questionData.answer,
      images: [
        "https://previews.dropbox.com/p/thumb/ACVP-QJJ3a8LUHbNG3_jUXbrYQREA62gJ2wo1NZzvKdC5heX-8NDWOdqYI02weJLlNTW06WgK5VLfWpqH9VhR512o4z6oRWa8_CX6DvLgR7Q8y41W3fyg4bn_506XmhZO56P1OzcYhrJK4Tb-qqbSgf11eCSu26zeOG7LkKqIamS1mfolTJrSQsNdStTt4wU5DNTKyB7Wj3mY3kQbSKSbLZa1FhR2nRcBP5rdb7yfD2UMBKPUmGCcKzCR95Or-179-liHVAmWADUQDlaR3OKE55992pRLDtPvLH9_51HypmPrd4FNTkSvp5TcC_61KKpEyz_cvxcaknVrp0ZNFrDSJwB/p.png?is_prewarmed=true",
      ],
    },
  };
}

const Page = ({ params }) => {
  const { slug } = params;

  // Find the matching question data based on the slug
  const questionData = suggestions?.find((item) => item.slug === slug);

  if (!questionData) {
    return <div>Question not found</div>;
  }

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Question",
    name: questionData.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: questionData.answer,
    },
  };

  // Find related questions based on tags
  const relatedQuestions = suggestions?.filter(
    (item) =>
      item?.slug !== slug &&
      questionData?.tags.some((tag) => item.tags.includes(tag))
  );

  return (
    <div className="container mx-auto py-8 pt-28 px-4">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Question Section */}
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-700">
        {questionData.question}
      </h1>
      {/* Verified Solution */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-3">
        <p className="text-sm text-gray-500">Verified by Examgain</p>
        <p className="mt-2 text-base">Answer to this question is verified!</p>
      </div>
      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-8">
        <p className="text-lg">
          <span className="font-bold text-zinc-700">Answer:</span> <br />
          {questionData?.answer}
        </p>
      </div>

      {/* Related Questions Section */}
      {relatedQuestions?.length > 0 && (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Related Questions
          </h2>
          <ul className="space-y-2">
            {relatedQuestions.map((item) => (
              <li key={item.slug} className="border-b border-gray-200 py-2">
                <a
                  href={`/questions/${item.slug}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {item.question}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Page;
