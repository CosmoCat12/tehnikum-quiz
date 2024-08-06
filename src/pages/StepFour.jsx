import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProgresBar } from "../components/ProgresBar";
import { AppButton } from "../components/appButton";
import { Header } from "../components/Header";
import { AnswerRadio } from "../components/AnswerRadio";

const StepFour = () => {
  const navigate = useNavigate();
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [buttonError, setButtonError] = useState(true);

  useEffect(() => {
    if (selectedVariant === null) {
      setButtonError(true);
      localStorage.setItem("possibility", "");
    } else {
      setButtonError(false);
      localStorage.setItem("possibility", selectedVariant);
    }
  }, [selectedVariant]);

  const handleClick = () => {
    navigate("/thanks");
  };

  const variants = [
    {
      variantId: "variant-1",
      variantText: "1",
    },
    {
      variantId: "variant-2",
      variantText: "2",
    },
    {
      variantId: "variant-3",
      variantText: "3",
    },
    {
      variantId: "variant-4",
      variantText: "4",
    },
    {
      variantId: "variant-5",
      variantText: "5",
    },
  ];

  const handleRadioChange = (variantText) => {
    setSelectedVariant(variantText);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgresBar currentStep={4} />
          <div className="question">
            <Header
              headerText="Какова вероятность, что вы поступите на курс"
              headerType="h2"
            />
            <ul className="level-variants">
              {variants.map((elem) => (
                <AnswerRadio
                  key={elem.variantId}
                  radioId={elem.variantId}
                  radioText={elem.variantText}
                  radioChange={() => handleRadioChange(elem.variantText)}
                  isChecked={selectedVariant === elem.variantText}
                />
              ))}
            </ul>
            <AppButton buttonClick={handleClick} isDisabled={buttonError} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
