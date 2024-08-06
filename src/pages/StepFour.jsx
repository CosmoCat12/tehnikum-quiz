import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProgresBar } from "../components/ProgresBar";
import { AppButton } from "../components/appButton";

const StepFour = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/thanks");
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgresBar currentStep={4} />
          <div className="question">
            <h2>4. Занимательный вопрос</h2>
            <ul className="level-variants">
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-1" />
                <label htmlFor="variant-1">1</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-2" />
                <label htmlFor="variant-2">2</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-3" />
                <label htmlFor="variant-3">3</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-4" />
                <label htmlFor="variant-4">4</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-5" />
                <label htmlFor="variant-5">5</label>
              </li>
            </ul>
            <AppButton buttonClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
