// src/components/quiz/AnswerOption.tsx
import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";

type AnswerOptionProps = {
  text: string;
  onClick: () => void;
  isSelected: boolean;
  isCorrect?: boolean;
  isIncorrect?: boolean;
  isDisabled: boolean;
};

const AnswerOption = ({
  text,
  onClick,
  isSelected,
  isCorrect,
  isIncorrect,
  isDisabled,
}: AnswerOptionProps) => {
  const getBackgroundColor = () => {
    if (isIncorrect) return "bg-red-100";
    if (isCorrect) return "bg-green-100";
    if (isSelected) return "bg-brand-light-purple";
    return "bg-white";
  };

  const getBorderColor = () => {
    if (isIncorrect) return "border-red-500";
    if (isCorrect) return "border-green-500";
    if (isSelected) return "border-brand-purple";
    return "border-gray-300";
  };

  const getTextColor = () => {
    if (isCorrect || isIncorrect || isSelected)
      return "text-brand-dark-text";
    return "text-brand-light-text";
  };

  const StatusIcon = () => {
    if (isCorrect) {
      return (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"
        >
          <FaCheck className="text-white text-sm" />
        </motion.div>
      );
    }
    if (isIncorrect) {
      return (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center"
        >
          <FaTimes className="text-white text-sm" />
        </motion.div>
      );
    }
    return null;
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={isDisabled}
      className={`
        w-full flex items-center justify-between gap-3 text-left
        p-4 rounded-xl border-2 font-semibold
        transition-all duration-200
        ${getBackgroundColor()}
        ${getBorderColor()}
        ${getTextColor()}
        ${isDisabled ? "cursor-not-allowed" : "hover:scale-[1.02] hover:shadow-lg"}
      `}
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
    >
      {/* Text Area */}
      <span className="flex-1 break-words text-sm sm:text-base leading-relaxed">
        {text}
      </span>

      {/* Fixed Icon Area → prevents text jump */}
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
        <StatusIcon />
      </div>
    </motion.button>
  );
};

export default AnswerOption;
