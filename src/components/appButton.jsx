import React from "react";

export const AppButton = ({buttonText = "Далее", isDisabled}) => {
  return (
    <button disabled={isDisabled} type="submit" id="next-bta">
      {buttonText}
    </button>
  );
};
