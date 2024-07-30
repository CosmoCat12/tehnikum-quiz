import React from "react";

export const RegButton = ({ buttonText = "Далее", isDisabled }) => {
  return (
    <button disabled={isDisabled} type="submit" id="next-bta">
      {buttonText}
    </button>
  );
};
