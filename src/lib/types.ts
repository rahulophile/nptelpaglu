// src/lib/types.ts

export type Option = {
  id: string;
  text: string;
};

export type Question = {
  id: number;
  text: string;
  options: Option[];
  
  // 👇 मुख्य बदलाव: अब यह एक स्ट्रिंग या स्ट्रिंग का ऐरे हो सकता है
  correctAnswerId: string | string[]; 
  
  image?: string; 
  
  // 👇 नया जोड़ा गया: यह सवाल का प्रकार बताएगा
  questionType?: 'single-answer' | 'multiple-answer';
  
  // 👇 नया जोड़ा गया: मल्टी-आंसर सवालों के लिए एक नोट
  note?: string; 
};

export type Quiz = {
  subject: string;
  weeks: Record<number, Question[]>;
};