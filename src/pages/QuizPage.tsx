// src/pages/QuizPage.tsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import { cs113Quiz } from "../data/quizzes/cs113.js";
import WeekSelector from "../components/quiz/WeekSelector.js";
import QuestionDisplay from "../components/quiz/QuestionDisplay.js";
import Button from "../components/ui/Button.js";
import AnimatedNumber from "../components/ui/AnimatedNumber.js";
import type { Question } from "../lib/types.js";

const carouselVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    transform: `scale(0.8) rotateY(${direction > 0 ? -45 : 45}deg)`,
  }),
  center: { zIndex: 1, x: 0, opacity: 1, transform: "scale(1) rotateY(0deg)" },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    transform: `scale(0.8) rotateY(${direction < 0 ? 45 : -45}deg)`,
  }),
};

const quizzesData: { [key: string]: { [week: number]: Question[] } } = {
  cs113: cs113Quiz.weeks,
};

const QuizPage = () => {
  const navigate = useNavigate();
  const { subjectId } = useParams<{ subjectId: string }>();

  const [currentWeek, setCurrentWeek] = useState(1);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // answers stored as { "weekId-questionId": "optionId" }
  const [answers, setAnswers] = useState<{ [key: string]: string | null }>({});
  const [direction, setDirection] = useState(1);

  const quizWeeks = subjectId ? quizzesData[subjectId] : undefined;

  useEffect(() => {
    const weekQuestions = quizWeeks ? quizWeeks[currentWeek] || [] : [];
    setQuestions(weekQuestions);

    if (direction === 1) setCurrentQuestionIndex(0);
    else if (direction === -1) setCurrentQuestionIndex(weekQuestions.length - 1);
  }, [currentWeek, subjectId]);

  // 🔥 reset answers when week changes
  useEffect(() => {
    setAnswers({});
    setCurrentQuestionIndex(0);
  }, [currentWeek]);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  // use composite key (week + question id)
  const questionKey = currentQuestion ? `${currentWeek}-${currentQuestion.id}` : "";
  const selectedOptionId = currentQuestion ? answers[questionKey] || null : null;

  const handleWeekSelect = (week: number) => {
    if (week > currentWeek) setDirection(1);
    else setDirection(-1);
    if (week !== currentWeek) setCurrentWeek(week);
  };

  const handleOptionSelect = (optionId: string) => {
    if (!currentQuestion) return;
    const key = `${currentWeek}-${currentQuestion.id}`;
    if (answers[key]) return; // prevent reattempt
    setAnswers((prev) => ({
      ...prev,
      [key]: optionId,
    }));
  };

  const handleNextQuestion = () => {
    setDirection(1);
    const isLastQuestionInWeek = currentQuestionIndex === totalQuestions - 1;

    if (!isLastQuestionInWeek) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (currentWeek < 12) {
        setCurrentWeek(currentWeek + 1);
      } else {
        const allQuestions = Object.values(quizWeeks || {}).flat();
        navigate("/result", { state: { answers, questions: allQuestions } });
      }
    }
  };

  const handlePreviousQuestion = () => {
    setDirection(-1);
    const isFirstQuestionInWeek = currentQuestionIndex === 0;

    if (!isFirstQuestionInWeek) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      if (currentWeek > 1) {
        setCurrentWeek(currentWeek - 1);
      }
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextQuestion(),
    onSwipedRight: () => handlePreviousQuestion(),
    delta: 20,
    trackTouch: true,
    preventScrollOnSwipe: true,
  });

  const isLastQuestionOverall =
    currentWeek === 12 && currentQuestionIndex === totalQuestions - 1;

  let nextButtonText = "Next";
  if (currentQuestionIndex === totalQuestions - 1) {
    if (currentWeek < 12) nextButtonText = `Week ${currentWeek + 1}`;
    else nextButtonText = "Finish Quiz";
  }

  return (
    <div className="h-dvh w-screen flex flex-col bg-brand-background" {...handlers}>
      <header className="flex-shrink-0 z-20">
        <WeekSelector
          totalWeeks={12}
          selectedWeek={currentWeek}
          onSelectWeek={handleWeekSelect}
        />
        <div className="w-full bg-gray-200 h-1.5">
          <motion.div
            className="bg-purple-600 h-1.5"
            animate={{
              width: `${
                totalQuestions > 0
                  ? ((currentQuestionIndex + 1) / totalQuestions) * 100
                  : 0
              }%`,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        {totalQuestions > 0 && (
          <div className="w-full max-w-3xl mx-auto px-4 pt-4">
            <p className="text-brand-light-text font-semibold text-left sm:text-center">
              Question{" "}
              <AnimatedNumber number={currentQuestion ? currentQuestion.id : 1} /> of{" "}
              {totalQuestions}
            </p>
          </div>
        )}
      </header>

      <main className="flex-grow overflow-y-auto">
        <div className="w-full max-w-3xl mx-auto px-4 pt-4 pb-8">
          <div className="relative h-[500px]" style={{ perspective: "1200px" }}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentQuestion ? questionKey : -1}
                className="absolute w-full h-full"
                custom={direction}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 250, damping: 30 }}
              >
                {totalQuestions > 0 && currentQuestion ? (
                  <QuestionDisplay
                    question={currentQuestion}
                    selectedOptionId={selectedOptionId}
                    onOptionSelect={handleOptionSelect}
                    isAnswerSubmitted={!!selectedOptionId}
                  />
                ) : (
                  <div className="text-center text-gray-500 pt-20">
                    <h2 className="text-2xl font-bold">
                      No questions available for this week yet.
                    </h2>
                    <p>Please select another week.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {totalQuestions > 0 && (
        <footer className="flex-shrink-0 bg-white/80 backdrop-blur-sm border-t-2 border-gray-200 z-30">
          <div className="w-full max-w-3xl mx-auto p-4 flex justify-between items-center gap-3">
            <Button
              variant="primary"
              onClick={handlePreviousQuestion}
              disabled={currentWeek === 1 && currentQuestionIndex === 0}
              icon={<IoChevronBack />}
            >
              Previous
            </Button>
            <Button
              onClick={handleNextQuestion}
              variant={isLastQuestionOverall ? "success" : "primary"}
              icon={<IoChevronForward />}
              iconPosition="right"
            >
              {nextButtonText}
            </Button>
          </div>
        </footer>
      )}
    </div>
  );
};

export default QuizPage;
