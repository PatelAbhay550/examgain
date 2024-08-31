"use client";
import { useState } from "react";
import { quiz } from "@/data/questions"; // Adjust this import as needed
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const Quiz = ({ params }) => {
  const { slug } = params;
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [userName, setUserName] = useState("");
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [wrongQuestions, setWrongQuestions] = useState([]);
  const [level, setLevel] = useState(null);
  const [isLevelSelected, setIsLevelSelected] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  // Filter questions based on the selected level
  const questions = level ? quiz[level].questions : [];
  const { question, choices, correctAnswer } = questions[activeQuestion] || {};

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    if (selectedAnswer) {
      setResult((prev) => ({
        ...prev,
        score: prev.score + 2,
        correctAnswers: prev.correctAnswers + 1,
      }));
    } else {
      setResult((prev) => ({
        ...prev,
        score: prev.score - 0.5,
        wrongAnswers: prev.wrongAnswers + 1,
      }));
      setWrongQuestions((prev) => [...prev, questions[activeQuestion]]);
    }

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    setSelectedAnswer(answer === correctAnswer);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() !== "") {
      setIsNameEntered(true);
    }
  };

  const handleLevelSelect = (selectedLevel) => {
    setLevel(selectedLevel);
    setIsLevelSelected(true);
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="quiz-container mx-auto md:mt-32 mt-16 mb-52 p-4 max-w-xl">
      <h1 className="text-center text-4xl font-bold text-blue-600 mb-6">
        {slug.toUpperCase()} Quiz
      </h1>
      {!isLevelSelected ? (
        <div className="level-selection text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Select Difficulty Level:
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {Object.keys(quiz).map((level) => (
              <button
                key={level}
                onClick={() => handleLevelSelect(level)}
                className="bg-blue-600 text-white py-4 rounded-md hover:bg-blue-700"
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>
      ) : !isNameEntered ? (
        <form onSubmit={handleNameSubmit} className="name-form text-center">
          <label htmlFor="username" className="block text-lg mb-2">
            Enter your name:
          </label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full max-w-xs px-4 py-2 border border-blue-500 rounded-md focus:outline-none mt-2 ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700"
          >
            Start Quiz
          </button>
        </form>
      ) : !showResult ? (
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold text-blue-600">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="text-xl font-semibold text-gray-600">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {question}
          </h2>
          <ul className="space-y-2">
            {choices.map((answer, index) => (
              <li
                key={answer}
                onClick={() => onAnswerSelected(answer, index)}
                className={`p-4 border rounded-md cursor-pointer ${
                  selectedAnswerIndex === index
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800 border-blue-400 hover:bg-blue-100"
                }`}
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex justify-end mt-6">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="result text-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-6">Result</h3>
          <p className="text-lg mb-2">
            <FiCheckCircle className="inline mr-2 text-green-500" /> Name:{" "}
            <span className="font-semibold">{userName}</span>
          </p>
          <p className="text-lg mb-2">
            Total Questions:{" "}
            <span className="font-semibold">{questions.length}</span>
          </p>
          <p className="text-lg mb-2">
            Total Score: <span className="font-semibold">{result.score}</span>
          </p>
          <p className="text-lg mb-2">
            Correct Answers:{" "}
            <span className="font-semibold">{result.correctAnswers}</span>
          </p>
          <p className="text-lg mb-6">
            Wrong Answers:{" "}
            <span className="font-semibold">{result.wrongAnswers}</span>
          </p>
          {wrongQuestions.length > 0 && (
            <div>
              <h4 className="text-2xl font-semibold mb-4">Wrong Questions:</h4>
              <ul className="space-y-2">
                {wrongQuestions.map((q, index) => (
                  <li key={index} className="bg-red-100 p-4 rounded-md">
                    <h5 className="text-lg font-semibold mb-2">{q.question}</h5>
                    <p className="text-sm text-gray-700">
                      Correct Answer:{" "}
                      <span className="font-semibold">{q.correctAnswer}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white py-2 px-4 rounded-md mt-6 hover:bg-blue-700"
          >
            ReAttempt
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
