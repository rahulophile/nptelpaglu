// src/components/quiz/QuestionDisplay.tsx

import { motion } from 'framer-motion';
import type { Question, Option } from '../../lib/types.js';
import AnswerOption from './AnswerOption.js';

type QuestionDisplayProps = {
  question: Question;
  // 👇 सबसे पहला और ज़रूरी बदलाव: selectedOptionId अब string[] भी हो सकता है
  selectedOptionId: string | string[] | null;
  onOptionSelect: (optionId: string) => void;
  isAnswerSubmitted: boolean;
};

const QuestionDisplay = ({
  question,
  selectedOptionId,
  onOptionSelect,
  isAnswerSubmitted,
}: QuestionDisplayProps) => {

  // 👇 हेल्पर वैरिएबल्स ताकि कोड साफ़ रहे
  // यह सुनिश्चित करता है कि correctAnswerIds हमेशा एक ऐरे हो
  const correctAnswerIds = Array.isArray(question.correctAnswerId)
    ? question.correctAnswerId
    : [question.correctAnswerId];
  
  // यह सुनिश्चित करता है कि selectedIds हमेशा एक ऐरे हो
  const selectedIds = Array.isArray(selectedOptionId)
    ? selectedOptionId
    : (selectedOptionId ? [selectedOptionId] : []);

  return (
    <div>
      <h2 className="text-xl sm:text-3xl font-bold text-brand-dark-text mb-4">
        {question.text}
      </h2>

      {/* मल्टी-आंसर सवालों के लिए नोट */}
      {question.note && (
        <p className="text-sm text-gray-500 mb-4 italic">{question.note}</p>
      )}

      {question.image && (
        <motion.div className="mb-6">
          <img
            src={question.image}
            alt={`Question image for: ${question.text.substring(0, 30)}...`}
            className="w-full h-80 max-w-md mx-auto rounded-lg"
          />
        </motion.div>
      )}
      
      <div className="pb-4 space-y-4">
        {question.options.map((option: Option) => {
          // 👇 लॉजिक को ऐरे के हिसाब से अपडेट किया गया
          const isSelected = selectedIds.includes(option.id);
          
          let isCorrect = false;
          let isIncorrect = false;

          if (isAnswerSubmitted) {
            // ऑप्शन सही है अगर वह correctAnswerIds ऐरे में मौजूद है
            if (correctAnswerIds.includes(option.id)) {
              isCorrect = true;
            } 
            // ऑप्शन गलत है अगर यूज़र ने उसे चुना है, लेकिन वह सही जवाबों में नहीं है
            else if (isSelected) {
              isIncorrect = true;
            }
          }

          return (
            <AnswerOption
              key={option.id}
              text={option.text}
              onClick={() => onOptionSelect(option.id)}
              isSelected={isSelected}
              isDisabled={isAnswerSubmitted && question.questionType !== 'multiple-answer'}
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