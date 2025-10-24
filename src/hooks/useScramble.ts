// src/hooks/useScramble.ts

import { useState, useEffect, useRef } from 'react';

// Yeh characters scramble effect ke liye use honge
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890*#@!&%';

export const useScramble = (text: string, speed: number = 50) => {
  const [currentText, setCurrentText] = useState(text);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    let iteration = 0;

    // Puraane interval ko clear karo
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      const newText = text
        .split('')
        .map((_char, index) => {
          // Jab tak iteration character ke index se aage na ho, scramble karo
          if (index < iteration) {
            return text[index];
          }
          // Random character chuno
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      
      setCurrentText(newText);

      // Har 1/3 character reveal hone par iteration badhao
      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }
      
      iteration += 1 / 3;
    }, speed);

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, speed]); // Yeh effect tabhi chalega jab text badlega

  return currentText;
};