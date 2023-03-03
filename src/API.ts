// This file is for creating the logic for fetching the data from the API
import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
// Use types from Question but add the answers: string[] property to it and then create the QuestionState type instead
export type QuestionState = Question & { answers: string[] };

// Adding the Difficulty type in the fetch quiz qs fn ensures that we can only use the 3 values
export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=18&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]) /* shuffle array so correct ans is not in the same position */
  }));
};
