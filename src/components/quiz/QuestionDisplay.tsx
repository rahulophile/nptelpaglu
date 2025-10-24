import { motion } from 'framer-motion'; // motion import karein
import type { Question, Option } from '../../lib/types.js';
import AnswerOption from './AnswerOption.js';

type QuestionDisplayProps = {
  question: Question;
  selectedOptionId: string | null;
  onOptionSelect: (optionId: string) => void;
  isAnswerSubmitted: boolean;
};

const QuestionDisplay = ({
  question,
  selectedOptionId,
  onOptionSelect,
  isAnswerSubmitted,
}: QuestionDisplayProps) => {
  return (
    <div>
      

      <h2 className="text-xl sm:text-3xl font-bold text-brand-dark-text mb-4 ">
        {question.text}
      </h2>
      {/* YAHAN PAR IMAGE DIKHANE KA LOGIC HAI */}
      {question.image && (
        <motion.div 
          className="mb-6"
        
        >
          <img
            src={question.image}
            alt={`Question image for: ${question.text.substring(0, 30)}...`}
            className="w-full h-80 max-w-md mx-auto rounded-lg "
          />
        </motion.div>
      )}
      
      <div className="pb-4 space-y-4">
        {question.options.map((option: Option) => {
          const isSelected = selectedOptionId === option.id;
          let isCorrect, isIncorrect;
          if (isAnswerSubmitted) {
            if (option.id === question.correctAnswerId) isCorrect = true;
            else if (isSelected) isIncorrect = true;
          }
          return (
            <AnswerOption
              key={option.id}
              text={option.text}
              onClick={() => onOptionSelect(option.id)}
              isSelected={isSelected}
              isDisabled={isAnswerSubmitted}
              isCorrect={isCorrect}
              isIncorrect={isIncorrect}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuestionDisplay;