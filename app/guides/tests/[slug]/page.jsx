import QuizComponent from "@/components/Quiz";

export const metadata = {
  title: "Free SSC Mock Tests - Examgain",
  description:
    "Give free mock tests of ssc to boost your knowlege and for quick revision of the topic.",
};

const Quiz = ({ params }) => {
  const { slug } = params;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is SSC Exam Mock Test?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SSC Exam Mock Test is a test that is conducted to help students prepare for SSC exams. It is a practice test that helps students understand the exam pattern, syllabus, and the type of questions that are asked in the exam.",
        },
      },
      {
        "@type": "Question",
        name: "How can I prepare for SSC Exam Mock Test?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To prepare for SSC Exam Mock Test, you need to study the syllabus thoroughly and practice solving questions from previous years’ papers. You can also take online mock tests to get an idea of the exam pattern and improve your time management skills.",
        },
      },
      {
        "@type": "Question",
        name: "What is the benefit of taking SSC Exam Mock Test?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The benefit of taking SSC Exam Mock Test is that it helps you prepare for the exam effectively. It helps you understand the exam pattern, syllabus, and the type of questions that are asked in the exam. It also helps you improve your time management skills and boosts your confidence.",
        },
      },
      {
        "@type": "Question",
        name: "How can I take SSC Exam Mock Test?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can take SSC Exam Mock Test online on various websites that offer mock tests for SSC exams. You can also download mock test papers from the internet and practice solving them at home.",
        },
      },
      {
        "@type": "Question",
        name: "What is the syllabus for SSC Exam Mock Test?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The syllabus for SSC Exam Mock Test includes topics like General Awareness, Quantitative Aptitude, Reasoning, English Language, Books and Authors, Constitution, etc. You can find the detailed syllabus on the official website of SSC.",
        },
      },
    ],
  };

  return (
    <>
      <QuizComponent slug={slug} />
      {/* Rest of the code */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <div className="main">
        <h2 className="text-center text-2xl font-bold mb-4">
          This is a quiz page for SSC Exam Mock Tests
        </h2>
        <p className="my-4 px-6">
          Give free mock tests of ssc to boost your knowledge and for quick
          revision of the topic. This page contains tests for SSC CGL, SSC CHSL,
          SSC MTS Exams. It contains various categories like General Awareness,
          Quantitative Aptitude, Reasoning, English Language, Books and Authors,
          Constitution, etc.
        </p>
      </div>
      <div className="faq">
        <h2 className="text-center text-2xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="my-4 px-6">
          Here are some frequently asked questions about SSC Exam Mock Tests.
        </p>
        <div className="faq-list px-6">
          <h4 className="text-lg font-bold text-blue-600 mb-2">
            What is SSC Exam Mock Test?
          </h4>
          <p>
            SSC Exam Mock Test is a test that is conducted to help students
            prepare for SSC exams. It is a practice test that helps students
            understand the exam pattern, syllabus, and the type of questions
            that are asked in the exam.
          </p>
          <h4 className="text-lg font-bold text-blue-600 mb-2">
            How can I prepare for SSC Exam Mock Test?
          </h4>
          <p>
            To prepare for SSC Exam Mock Test, you need to study the syllabus
            thoroughly and practice solving questions from previous years’
            papers. You can also take online mock tests to get an idea of the
            exam pattern and improve your time management skills.
          </p>
          <h4 className="text-lg font-bold text-blue-600 mb-2">
            What is the benefit of taking SSC Exam Mock Test?
          </h4>
          <p>
            The benefit of taking SSC Exam Mock Test is that it helps you
            prepare for the exam effectively. It helps you understand the exam
            pattern, syllabus, and the type of questions that are asked in the
            exam. It also helps you improve your time management skills and
            boosts your confidence.
          </p>
          <h4 className="text-lg font-bold text-blue-600 mb-2">
            How can I take SSC Exam Mock Test?
          </h4>
          <p>
            You can take SSC Exam Mock Test online on various websites that
            offer mock tests for SSC exams. You can also download mock test
            papers from the internet and practice solving them at home.
          </p>
          <h4 className="text-lg font-bold text-blue-600 mb-2">
            What is the syllabus for SSC Exam Mock Test?
          </h4>
          <p>
            The syllabus for SSC Exam Mock Test includes topics like General
            Awareness, Quantitative Aptitude, Reasoning, English Language, Books
            and Authors, Constitution, etc. You can find the detailed syllabus
            on the official website of SSC.
          </p>
        </div>
      </div>
    </>
  );
};

export default Quiz;
