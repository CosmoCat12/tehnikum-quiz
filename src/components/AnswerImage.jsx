import React from "react";

export const AnswerImage = ({
  answerText,
  answerId,
  answerAlt,
  answerImage,
  answerChange,
}) => {
  return (
    <li className="variant-wrapper">
      <input
        required
        type="radio"
        name="variant"
        id={answerId}
        onChange={answerChange}
      />
      <label htmlFor={answerId}>
        <img src={answerImage} alt={answerAlt} />
        <p>{answerText}</p>
      </label>
    </li>
  );
};
