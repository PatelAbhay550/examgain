"use client";
import { useState, useEffect } from "react";
import { quiz } from "@/data/questions"; // Adjust this import as needed
import {
  FiCheckCircle,
  FiXCircle,
  FiSkipForward,
  FiArrowLeft,
  FiArrowRight,
  FiClock,
} from "react-icons/fi";

const Quiz = ({ params }) => {
  const { slug } = params;
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]); // Store user answers
  const [showResult, setShowResult] = useState(false);
  const [userName, setUserName] = useState("");
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [wrongQuestions, setWrongQuestions] = useState([]);
  const [skippedQuestions, setSkippedQuestions] = useState([]);
  const [level, setLevel] = useState(null);
  const [isLevelSelected, setIsLevelSelected] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    totalTimeUsed: 0,
  });
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes in seconds
  const [startTime, setStartTime] = useState(null);

  // Filter questions based on the selected level
  const questions = level ? quiz[level].questions : [];
  const { question, choices, correctAnswer } = questions[activeQuestion] || {};

  useEffect(() => {
    if (isNameEntered && level) {
      setStartTime(Date.now());
      const timer = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            handleQuizEnd();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isNameEntered, level]);

  const handleQuizEnd = () => {
    calculateResult();
    setShowResult(true);
  };

  const onClickNext = () => {
    if (activeQuestion === questions.length - 1) {
      handleQuizEnd();
    } else {
      setActiveQuestion((prev) => prev + 1);
    }
  };

  const onClickPrevious = () => {
    if (activeQuestion > 0) {
      setActiveQuestion((prev) => prev - 1);
    }
  };

  const onAnswerSelected = (answer) => {
    const newAnswers = [...answers];
    newAnswers[activeQuestion] = {
      answer,
      correct: answer === correctAnswer,
      timeTaken: (Date.now() - startTime) / 1000,
    };
    setAnswers(newAnswers);
  };

  const onSkipQuestion = () => {
    setSkippedQuestions((prev) => [...prev, questions[activeQuestion]]);
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      handleQuizEnd();
    }
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

  const calculateResult = () => {
    let score = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;
    const incorrectQuestions = [];
    const skippedQs = [];
    const totalTimeUsed = (Date.now() - startTime) / 1000; // in seconds

    answers.forEach((answerObj, index) => {
      if (answerObj) {
        if (answerObj.correct) {
          score += 2;
          correctAnswers += 1;
        } else {
          score -= 0.5;
          wrongAnswers += 1;
          incorrectQuestions.push(questions[index]);
        }
      } else {
        skippedQs.push(questions[index]);
      }
    });

    setResult({ score, correctAnswers, wrongAnswers, totalTimeUsed });
    setWrongQuestions(incorrectQuestions);
    setSkippedQuestions(skippedQs);
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${addLeadingZero(minutes)}:${addLeadingZero(secs)}`;
  };

  const quizDetails = level ? quiz[level] : {};

  return (
    <div className="quiz-container mx-auto md:mt-20 mt-16 mb-52 p-4 max-w-xl">
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
          <div className="text-center mt-6">
            <span className="text-xl font-semibold text-gray-800">
              Time Remaining: {formatTime(timeRemaining)}
            </span>
          </div>

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
            {choices.map((answer) => (
              <li
                key={answer}
                onClick={() => onAnswerSelected(answer)}
                className={`p-4 border rounded-md cursor-pointer ${
                  answers[activeQuestion]?.answer === answer
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800 border-blue-400 hover:bg-blue-100"
                }`}
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-6">
            <button
              onClick={onClickPrevious}
              className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700"
              disabled={activeQuestion === 0}
            >
              <FiArrowLeft className="inline mr-2" /> Previous
            </button>
            <button
              onClick={onSkipQuestion}
              className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
            >
              <FiSkipForward className="inline mr-2" /> Skip
            </button>
            <button
              onClick={onClickNext}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              <FiArrowRight className="inline ml-2" />
            </button>
          </div>
          <div className="quiz-details text-center mt-6">
            <h2 className="text-2xl font-semibold mb-4">Quiz Details:</h2>
            <p className="text-lg">
              <strong>Subject:</strong> {slug.toUpperCase()}
            </p>
            <p className="text-lg">
              <strong>Number of Questions:</strong> {questions.length}
            </p>
            <p className="text-lg">
              <strong>Time Limit:</strong> 10 minutes
            </p>
          </div>
        </div>
      ) : (
        <div className="result text-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-4">
            Quiz Results
          </h3>
          <p className="text-lg mb-2">
            <strong>Name:</strong> {userName}
          </p>
          <p className="text-lg mb-2">
            <strong>Total Questions:</strong> {questions.length}
          </p>
          <p className="text-lg mb-2">
            <strong>Correct Answers:</strong> {result.correctAnswers}{" "}
            <FiCheckCircle className="inline text-green-500" />
          </p>
          <p className="text-lg mb-2">
            <strong>Incorrect Answers:</strong> {result.wrongAnswers}{" "}
            <FiXCircle className="inline text-red-500" />
          </p>
          <p className="text-lg mb-2">
            <strong>Score:</strong> {result.score.toFixed(2)}
          </p>
          <p className="text-lg mb-2">
            <strong>Time Used:</strong> {formatTime(result.totalTimeUsed)}
            <FiClock className="inline text-gray-600 ml-2" />
          </p>
          <div className="mt-4">
            <h4 className="text-xl font-semibold mb-2">Incorrect Questions:</h4>
            <ul>
              {wrongQuestions.map((question, index) => (
                <li key={index} className="mb-1">
                  {question.question}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="text-xl font-semibold mb-2">Skipped Questions:</h4>
            <ul>
              {skippedQuestions.map((question, index) => (
                <li key={index} className="mb-1">
                  {question.question}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
