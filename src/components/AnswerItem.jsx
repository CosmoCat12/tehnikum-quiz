import React from "react";

export const AnswerItem = ({ id, answerText, answerChange }) => {
  return (
    <li className="variant-wrapper">
      <input required type="radio" name={id} id={id} onChange={answerChange} />
      <label htmlFor={id}>{answerText}</label>
    </li>
  );
};
