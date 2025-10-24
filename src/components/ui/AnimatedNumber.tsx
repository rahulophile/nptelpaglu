// src/components/ui/AnimatedNumber.tsx

import { motion, AnimatePresence } from 'framer-motion';

type AnimatedNumberProps = {
  number: number;
};

const AnimatedNumber = ({ number }: AnimatedNumberProps) => {
  return (
    // 'mode="wait"' ensure karta hai ki purana number pehle jayega, fir naya aayega
    <AnimatePresence mode="wait">
      <motion.span
        // Key badalne par hi animation trigger hota hai
        key={number}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        // 'inline-block' layout ko stable rakhta hai
        className="inline-block"
      >
        {number}
      </motion.span>
    </AnimatePresence>
  );
};

export default AnimatedNumber;