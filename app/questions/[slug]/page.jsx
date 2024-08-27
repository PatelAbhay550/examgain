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
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: questionData.question,
      text: questionData.answer,
      answerCount: questionData?.answers?.length || 1, // Assuming each question has at least one answer
      upvoteCount: questionData.upvoteCount || 0, // Replace with actual upvote count
      dateCreated: questionData.dateCreated || "2024-08-27T00:00Z", // Replace with actual date
      author: {
        "@type": "Person",
        name: questionData.author || "Abhay Patel", // Replace with actual author
      },
      acceptedAnswer: {
        "@type": "Answer",
        text: questionData.answer,
        dateCreated: questionData.dateCreated || "2024-08-27T00:00Z", // Replace with actual date
        upvoteCount: questionData.upvoteCount || 4, // Replace with actual upvote count
        url: `https://examgain.vercel.app/questions/${slug}`, // Replace with actual URL
        author: {
          "@type": "Person",
          name: questionData.author || "Abhay Patel", // Replace with actual author
        },
      },
      suggestedAnswer: questionData.suggestedAnswers?.map((answer, index) => ({
        "@type": "Answer",
        text: answer.text,
        dateCreated: answer.dateCreated || "2024-08-27T00:00Z", // Replace with actual date
        upvoteCount: answer.upvoteCount || 4, // Replace with actual upvote count
        url: `https://examgain.vercel.app/questions/${slug}${index + 1}`, // Replace with actual URL
        author: {
          "@type": "Person",
          name: answer.author || "Abhay Patel", // Replace with actual author
        },
      })),
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
        <span className="font-[800] text-zinc-700">Answer:</span> <br />
        <div
          className="text-lg"
          dangerouslySetInnerHTML={{
            __html: questionData.answer,
          }}
        />
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
