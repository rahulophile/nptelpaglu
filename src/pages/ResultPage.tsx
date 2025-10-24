import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaRedo } from "react-icons/fa";
import Header from "../components/layout/Header";
import Button from "../components/ui/Button";
import type { Question } from "../lib/types";

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Answers and questions passed from QuizPage
  const { answers, questions } = location.state || { answers: {}, questions: [] };

  // ✅ Corrected score calculation — supports "week-questionId" keys
  let score = 0;

  if (questions.length > 0) {
    Object.keys(answers).forEach((key) => {
      const [weekStr, qidStr] = key.split("-");
      const qid = parseInt(qidStr, 10);
      const question = questions.find((q: Question) => q.id === qid);
      if (question && answers[key] === question.correctAnswerId) {
        score++;
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

  const subjectId = "cs113"; // 👈 change if needed

  return (
    <div className="min-h-screen bg-brand-background flex flex-col">
      <Header
        title="Quiz Result"
        showBackButton={true}
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
