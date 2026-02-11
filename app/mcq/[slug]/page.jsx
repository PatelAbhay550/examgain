const mcqs = [
  {
    question: "What is the meaning of the idiom 'The penny dropped'?",
    options: [
      { label: "A", text: "To lose money" },
      { label: "B", text: "To be very poor" },
      { label: "C", text: "To suddenly understand something" },
      { label: "D", text: "To tell unimaginable scenarios" },
    ],
    correctAnswer: "C",
    slug: "the-penny-dropped-idiom",
    tags: ["idioms", "english", "easy"],
  },
  {
    question: "Which of the following statement(s) is/are correct about the servants of India society?",
    description: "B. The 'Servants of India Society' was founded by Gopal Krishna Gokhale at Fergusson hill on 12 June 1905 in Pune district of Maharashtra. A. The Society focused on nation-building activities such as education, social welfare, upliftment of the downtrodden and betterment of the under-privileged sections of society.",
    options: [
      { label: "1", text: "Only A" },
      { label: "2", text: "Neither A nor B" },
      { label: "3", text: "Both A and B" },
      { label: "4", text: "Only B" },
    ],
    correctAnswer: "3",
    slug: "servants-of-india-society",
    tags: ["history", "india", "ssc"],
  },
  {
    question: "The behaviour of lithium is similar to that of magnesium. This sort of similarity is commonly referred to as:",
    options: [
      { label: "1", text: "inert pair effect" },
      { label: "2", text: "diagonal relationship" },
      { label: "3", text: "same Zeff" },
      { label: "4", text: "isoelectronic species" },
    ],
    correctAnswer: "2",
    slug: "lithium-magnesium-similarity",
    tags: ["chemistry", "periodic-table", "medium"],
  },
  {
    question: "At standard temperature and pressure (STP), the value of temperature is:",
    options: [
      { label: "1", text: "273.15°C" },
      { label: "2", text: "27°C" },
      { label: "3", text: "0°C" },
      { label: "4", text: "25.51°C" },
    ],
    correctAnswer: "3",
    slug: "stp-temperature-value",
    tags: ["chemistry", "science", "medium"],
  },
  {
    question: "Mawsynram receives the highest average annual rainfall in the world because the Monsoon Winds of the Bay of Bengal strike the _____ hill.",
    options: [
      { label: "1", text: "Aravalli" },
      { label: "2", text: "Western Ghats" },
      { label: "3", text: "Chota Nagpur Plateau" },
      { label: "4", text: "Khasi" },
    ],
    correctAnswer: "4",
    slug: "mawsynram-rainfall-khasi",
    tags: ["geography", "india", "medium"],
  },
  {
    question: "Deficiency of iodine results in an insufficient amount of the ____ hormone.",
    options: [
      { label: "1", text: "melatonin" },
      { label: "2", text: "thrombopoietin" },
      { label: "3", text: "adrenaline" },
      { label: "4", text: "thyroid" },
    ],
    correctAnswer: "4",
    slug: "iodine-deficiency-thyroid",
    tags: ["biology", "health", "medium"],
  },
  {
    question: "The season for torrential downpours, often accompanied by hail, associated with violent winds, and localized thunderstorms. In West Bengal, these kinds of storms are known as:",
    options: [
      { label: "1", text: "Kaal Baisakhi" },
      { label: "2", text: "Mahawat" },
      { label: "3", text: "Trade winds" },
      { label: "4", text: "Loo" },
    ],
    correctAnswer: "1",
    slug: "kaal-baisakhi-west-bengal",
    tags: ["geography", "india", "weather"],
  },
  {
    question: "Which of the following is NOT the feature of Fundamental Duties provided under the Constitution of India?",
    options: [
      { label: "1", text: "Duties are inspired from erstwhile USSR" },
      { label: "2", text: "Duties are non-justiciable in nature" },
      { label: "3", text: "Duties are enforceable by the law" },
      { label: "4", text: "Duties are intended to secure the country" },
    ],
    correctAnswer: "3",
    slug: "fundamental-duties-constitution",
    tags: ["constitution", "india", "ssc"],
  },
  {
    question: "How many phases are involved in the census operations in India?",
    options: [
      { label: "1", text: "Four" },
      { label: "2", text: "One" },
      { label: "3", text: "Two" },
      { label: "4", text: "Three" },
    ],
    correctAnswer: "3",
    slug: "census-operations-phases",
    tags: ["india", "statistics", "ssc"],
  },
  {
    question: "The average of 11 results is 59 and that of the first 10 is 58. The 11th result is?",
    options: [
      { label: "1", text: "59" },
      { label: "2", text: "58" },
      { label: "3", text: "69" },
      { label: "4", text: "68" },
    ],
    correctAnswer: "3",
    slug: "average-11-results-math",
    tags: ["maths", "arithmetic", "medium"],
  },
  {
    question: "The pH value of the curd is:",
    options: [
      { label: "1", text: "higher than 7" },
      { label: "2", text: "lower than the pH value of milk" },
      { label: "3", text: "nearly 7" },
      { label: "4", text: "higher than the pH value of milk" },
    ],
    correctAnswer: "2",
    slug: "ph-value-curd",
    tags: ["chemistry", "science", "medium"],
  },
  {
    question: "Nataraja represents the dancing figure of which Hindu deity?",
    options: [
      { label: "1", text: "Shiva" },
      { label: "2", text: "Ganesh" },
      { label: "3", text: "Kartikeya" },
      { label: "4", text: "Vishnu" },
    ],
    correctAnswer: "1",
    slug: "nataraja-shiva-deity",
    tags: ["religion", "india", "easy"],
  },
  {
    question: "A part of the cell other than the nucleus which has DNA and ribosomes and can thus make its own proteins is known as:",
    options: [
      { label: "1", text: "Golgi apparatus" },
      { label: "2", text: "endoplasmic reticulum" },
      { label: "3", text: "mitochondria" },
      { label: "4", text: "ribosomes" },
    ],
    correctAnswer: "3",
    slug: "mitochondria-cell-dna",
    tags: ["biology", "science", "medium"],
  },
  {
    question: "Who is the author of the book 'Hind Swaraj'?",
    options: [
      { label: "A", text: "Subhash Chandra Bose" },
      { label: "B", text: "Mahatma Gandhi" },
      { label: "C", text: "Bal Gangadhar Tilak" },
      { label: "D", text: "MG Ranade" },
    ],
    correctAnswer: "B",
    slug: "hind-swaraj-author",
    tags: ["books", "india", "ssc"],
  },
  {
    question: "According to the Census 2011, which of the following states had the highest population?",
    options: [
      { label: "A", text: "Karnataka" },
      { label: "B", text: "Rajasthan" },
      { label: "C", text: "Tamil Nadu" },
      { label: "D", text: "West Bengal" },
    ],
    correctAnswer: "D",
    slug: "census-2011-highest-population",
    tags: ["statistics", "india", "ssc"],
  },
  {
    question: "'Kajri' is a famous folk dance and singing style of which state?",
    options: [
      { label: "A", text: "Rajasthan" },
      { label: "B", text: "Uttar Pradesh" },
      { label: "C", text: "Gujarat" },
      { label: "D", text: "Madhya Pradesh" },
    ],
    correctAnswer: "B",
    slug: "kajri-folk-dance",
    tags: ["culture", "india", "ssc"],
  },
  {
    question: "Which of the following mountain ranges is NOT a part of the Himalayan range?",
    options: [
      { label: "A", text: "Pir Panjal" },
      { label: "B", text: "Aravalli" },
      { label: "C", text: "Ladakh" },
      { label: "D", text: "Zanskar" },
    ],
    correctAnswer: "B",
    slug: "mountain-ranges-himalayan",
    tags: ["geography", "india", "ssc"],
  },
  {
    question: "How many temples are there in the 'Dilwara Jain Temple' complex located at Mount Abu?",
    options: [
      { label: "A", text: "3" },
      { label: "B", text: "5" },
      { label: "C", text: "7" },
      { label: "D", text: "9" },
    ],
    correctAnswer: "B",
    slug: "dilwara-jain-temple-complex",
    tags: ["temples", "india", "ssc"],
  },
  {
    question: "The Death Rate is calculated per how many persons?",
    options: [
      { label: "A", text: "Per 100 persons" },
      { label: "B", text: "Per 1,000 persons" },
      { label: "C", text: "Per 10,000 persons" },
      { label: "D", text: "Per 1,00,000 persons" },
    ],
    correctAnswer: "B",
    slug: "death-rate-calculation",
    tags: ["statistics", "demographics"],
  },
  {
    question: "Under the New System of Justice in 1772, which two courts were established in each district?",
    options: [
      { label: "A", text: "Criminal Court and Civil Court" },
      { label: "B", text: "High Court and Supreme Court" },
      { label: "C", text: "Revenue Court and Commercial Court" },
      { label: "D", text: "Sessions Court and Munsif Court" },
    ],
    correctAnswer: "A",
    slug: "new-system-justice-1772",
    tags: ["history", "india", "ssc"],
  },
  {
    question: "Select the most appropriate meaning of the given idiom: On the back foot",
    options: [
      { label: "1", text: "Situated farther away" },
      { label: "2", text: "Cheat someone" },
      { label: "3", text: "In a relaxed state" },
      { label: "4", text: "At a disadvantage" },
    ],
    correctAnswer: "4",
    slug: "on-the-back-foot-idiom",
    tags: ["idioms", "english", "easy"],
  },
  {
    question: "Select the most appropriate ANTONYM of the given word: Predicament",
    options: [
      { label: "1", text: "Mess" },
      { label: "2", text: "Redeem" },
      { label: "3", text: "Solution" },
      { label: "4", text: "Docile" },
    ],
    correctAnswer: "3",
    slug: "predicament-antonym",
    tags: ["vocabulary", "english", "medium"],
  },
];

export async function generateStaticParams() {
  return mcqs.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const mcqData = mcqs.find((item) => item.slug === slug);

  if (!mcqData) {
    return {
      title: "MCQ Not Found",
      description: "The requested MCQ could not be found.",
    };
  }

  return {
    title: mcqData.question,
    description: `${mcqData.question} - Multiple choice question with answer options.`,
    openGraph: {
      title: mcqData.question,
      description: `${mcqData.question} - Multiple choice question with answer options.`,
      images: [
        "https://previews.dropbox.com/p/thumb/ACVP-QJJ3a8LUHbNG3_jUXbrYQREA62gJ2wo1NZzvKdC5heX-8NDWOdqYI02weJLlNTW06WgK5VLfWpqH9VhR512o4z6oRWa8_CX6DvLgR7Q8y41W3fyg4bn_506XmhZO56P1OzcYhrJK4Tb-qqbSgf11eCSu26zeOG7LkKqIamS1mfolTJrSQsNdStTt4wU5DNTKyB7Wj3mY3kQbSKSbLZa1FhR2nRcBP5rdb7yfD2UMBKPUmGCcKzCR95Or-179-liHVAmWADUQDlaR3OKE55992pRLDtPvLH9_51HypmPrd4FNTkSvp5TcC_61KKpEyz_cvxcaknVrp0ZNFrDSJwB/p.png?is_prewarmed=true",
      ],
    },
  };
}

const Page = async ({ params }) => {
  const { slug } = await params;

  const mcqData = mcqs.find((item) => item.slug === slug);

  if (!mcqData) {
    return <div>MCQ not found</div>;
  }

  // Generate JSON-LD structured data for Q&A schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: mcqData.question,
      text: mcqData.description || mcqData.question,
      answerCount: mcqData.options.length,
      dateCreated: "2024-08-27T00:00Z",
      author: {
        "@type": "Person",
        name: "Examgain",
        url: "https://examgain.vercel.app",
      },
      acceptedAnswer: {
        "@type": "Answer",
        text: `The correct answer is option ${mcqData.correctAnswer}`,
        url: `https://examgain.vercel.app/mcq/${slug}`,
        author: {
          "@type": "Person",
          name: "Examgain",
          url: "https://examgain.vercel.app",
        },
      },
      suggestedAnswer: mcqData.options.map((option) => ({
        "@type": "Answer",
        text: `${option.label}. ${option.text}`,
        url: `https://examgain.vercel.app/mcq/${slug}`,
        author: {
          "@type": "Person",
          name: "Examgain",
          url: "https://examgain.vercel.app",
        },
      })),
    },
  };

  // Find related MCQs based on tags
  const relatedMCQs = mcqs.filter(
    (item) =>
      item.slug !== slug && mcqData.tags.some((tag) => item.tags.includes(tag))
  ).slice(0, 5);

  return (
    <main className="container mx-auto py-12 px-4 max-w-4xl">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Question Section */}
      <article>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          {mcqData.question}
        </h1>

        {mcqData.description && (
          <section className="bg-gray-50 border-l-4 border-gray-400 rounded-lg p-6 mb-8">
            <p className="text-gray-700 leading-relaxed">{mcqData.description}</p>
          </section>
        )}

        {/* Verified Badge */}
        <div className="flex items-center gap-2 mb-8">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg">
            <span className="text-lg">✓</span>
            <span className="font-medium">Verified MCQ</span>
          </div>
        </div>

        {/* Tags */}
        {mcqData.tags && mcqData.tags.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {mcqData.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Options Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Options:</h2>
          <div className="space-y-3">
            {mcqData.options.map((option, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  option.label === mcqData.correctAnswer
                    ? "border-green-500 bg-green-50 shadow-sm"
                    : "border-gray-300 bg-white hover:border-blue-400"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="font-bold text-lg text-gray-700 min-w-fit">
                    ({option.label})
                  </span>
                  <div className="flex-1">
                    <span className="text-gray-800">{option.text}</span>
                    {option.label === mcqData.correctAnswer && (
                      <div className="mt-2 flex items-center gap-2 text-green-600 font-semibold">
                        <span className="text-lg">✓</span>
                        <span>Correct Answer</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Answer Highlight */}
        <section className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-blue-900 mb-2">
            Correct Answer:
          </h2>
          <p className="text-3xl font-bold text-blue-700">({mcqData.correctAnswer})</p>
        </section>
      </article>

      {/* Related MCQs Section */}
      {relatedMCQs.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Related MCQs
          </h2>
          <ul className="space-y-3">
            {relatedMCQs.map((item) => (
              <li
                key={item.slug}
                className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-md transition-all duration-300"
              >
                <a
                  href={`/mcq/${item.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                >
                  {item.question}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
};

export default Page;
