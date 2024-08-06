import React from "react";

export const AnswerRadio = ({ radioId, radioText, radioChange, isChecked }) => {
  return (
    <li className="variant-wrapper">
      <input
        required
        type="radio"
        name="variant"
        id={radioId}
        onChange={radioChange}
        checked={isChecked}
      />
      <label htmlFor={radioId}>{radioText}</label>
    </li>
  );
};
