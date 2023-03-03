import React from "react";

// types
import { AnswerObject } from "../App";
// styles
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void 
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <Wrapper>
    {/* Indicate what question the user is on */}
    <p className='number'>
      Question: {questionNr} / {totalQuestions}
    </p>
    {/* Quiz question response sent from the API as html */}
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    {/* dangerouslysetinnerhtml is a react property that lets us render out html */}
    {/* wrapper div next for all answers to questions */}
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>{" "}
          {/* we will pass in a boolean so btn will be disabled or not if T or F */}
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;
