// src/pages/ResultPage.tsx
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaRedo } from "react-icons/fa";
import Header from "../components/layout/Header.js";
import Button from "../components/ui/Button.js";
import type { Question } from "../lib/types.js";

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 👇 state से subjectId को भी निकालें
  const { answers, questions, subjectId } = location.state || { 
    answers: {}, 
    questions: [],
    subjectId: 'cs113' // Fallback, agar state na mile
  };

  // ✅ बेहतर स्कोर कैलकुलेशन जो मल्टी-आंसर को भी सपोर्ट करता है
  let score = 0;
  if (questions.length > 0) {
    Object.keys(answers).forEach((key) => {
      const [weekStr, qidStr] = key.split("-");
      const questionId = parseInt(qidStr, 10);
      
      const question = questions.find((q: Question) => q.id === questionId);
      if (!question) return;

      const correctAnswer = question.correctAnswerId;
      const userAnswer = answers[key];

      if (Array.isArray(correctAnswer)) {
        // मल्टी-आंसर सवाल: दोनों ऐरे बराबर होने चाहिए
        if (Array.isArray(userAnswer) && userAnswer.length === correctAnswer.length) {
          const sortedUserAnswer = [...userAnswer].sort();
          const sortedCorrectAnswer = [...correctAnswer].sort();
          if (JSON.stringify(sortedUserAnswer) === JSON.stringify(sortedCorrectAnswer)) {
            score++;
          }
        }
      } else {
        // सिंगल-आंसर सवाल
        if (userAnswer === correctAnswer) {
          score++;
        }
      }
    });
  }

  const totalQuestions = questions.length;
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  const getRemark = () => {
    if (percentage === 100) return "Perfect Score! Excellent!";
    if (percentage >= 70) return "Great Job! You did very well.";
    if (percentage >= 50) return "Good Effort. Keep practicing!";
    return "You can do better. Don't give up!";
  };

  // ❌ हार्डकोड की हुई लाइन हटा दी गई है

  return (
    <div className="min-h-screen bg-brand-background flex flex-col">
      <Header
        title="Quiz Result"
        showBackButton={true}
        // 👇 अब यह डायनामिक subjectId का इस्तेमाल करेगा
        onBack={() => navigate(`/quiz/${subjectId}`)}
      />

      <main className="w-full max-w-3xl mx-auto px-4 py-8 flex-grow flex flex-col justify-center items-center">
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 sm:p-12 text-center w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <h1 className="text-2xl font-bold text-brand-dark-text mb-2">{getRemark()}</h1>
          <p className="text-lg text-brand-light-text mb-6">Your Score</p>
          <p className="text-7xl font-bold text-brand-purple">
            {score} <span className="text-5xl text-gray-400">/ {totalQuestions}</span>
          </p>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button
            className="w-full sm:w-auto"
            variant="secondary"
            // 👇 अब यह डायनामिक subjectId का इस्तेमाल करेगा
            onClick={() => navigate(`/quiz/${subjectId}`)}
          >
            <FaRedo className="h-4 w-4" /> Try Again
          </Button>

          <Button
            className="w-full sm:w-auto"
            variant="primary"
            onClick={() => navigate("/")}
          >
            <FaHome className="h-4 w-4" /> Home
          </Button>
        </motion.div>
      </main>
    </div>
  );
};

export default ResultPage;