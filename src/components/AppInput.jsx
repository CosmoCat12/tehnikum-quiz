import React from "react";

export const AppInput = ({
  inputText,
  errorText,
  inputPlaceholder,
  inputType,
  inputValue,
  inputChange,
  hasError,
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
        value={inputValue}
        onChange={(event) => inputChange(event.target.value)}
      />
      {hasError && <span id="error-message">{errorText}</span>}
    </label>
  );
};
