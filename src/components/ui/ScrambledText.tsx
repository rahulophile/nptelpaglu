// src/components/ui/ScrambledText.tsx

import { useScramble } from '../../hooks/useScramble';

type ScrambledTextProps = {
  text: string;
};

const ScrambledText = ({ text }: ScrambledTextProps) => {
  const scrambledText = useScramble(text, 30); // Speed 30ms rakhi hai
  return <span>{scrambledText}</span>;
};

export default ScrambledText;