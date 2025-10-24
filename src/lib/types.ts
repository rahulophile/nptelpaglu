// src/lib/types.ts

export type Option = {
  id: string;
  text: string;
};

export type Question = {
  id: number;
  text: string;
  options: Option[];
  correctAnswerId: string;
  image?: string; // YEH NAYI LINE HAI - '?' ka matlab hai ki yeh optional hai
};

export type Quiz = {
  subject: string;
  weeks: Record<number, Question[]>;
};