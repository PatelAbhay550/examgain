import QuizComponent from "@/components/Quiz";

export const metadata = {
  title: "Free SSC Mock Tests - Examgain",
  description:
    "Give free mock tests of ssc to boost your knowlege and for quick revision of the topic.",
};

const Quiz = ({ params }) => {
  const { slug } = params;

  return <QuizComponent slug={slug} />;
};

export default Quiz;
