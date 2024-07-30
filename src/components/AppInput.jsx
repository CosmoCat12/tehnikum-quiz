import React from "react";

export const AppInput = ({
  inputText,
  errorText,
  inputPlaceholder,
  inputType,
}) => {
  return (
    <label className="input-wrapper" htmlFor="username">
      {inputText}
      <input
        required
        type={inputType}
        name="username"
        id="username"
        placeholder={inputPlaceholder}
      />
      <span id="error-message">{errorText}</span>
    </label>
  );
};
