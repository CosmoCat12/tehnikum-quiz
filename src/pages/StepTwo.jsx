import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProgresBar } from "../components/ProgresBar";
import { AnswerItem } from "../components/AnswerItem";
import { AppButton } from "../components/appButton";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";

const StepTwo = () => {
  const varirants = [
    {
      variantId: "variant-1",
      variantText: "Frontend ",
    },
    {
      variantId: "variant-2",
      variantText: "Backend ",
    },
    {
      variantId: "variant-3",
      variantText: "UX/UI ",
    },
    {
      variantId: "variant-4",
      variantText: "Data Аналитик ",
    },
  ];
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/step-three");
  };
  const [courseVariants, setCourseVariants] = useState(null);
  const [buttonError, setButtonError] = useState(true);
  useEffect(() => {
    if (courseVariants === null) {
      localStorage.setItem("course", "");
      setButtonError(true);
    } else {
      localStorage.setItem("course", courseVariants);
      setButtonError(false);
    }
  }, [courseVariants]);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgresBar currentStep={2} />
          <div className="question">
            <Header headerText="На какой курс вы запишитесь?" headerType="h2" />
            <ul className="variants">
              {varirants.map((elem) => (
                <AnswerItem
                  key={elem.variantId}
                  id={elem.variantId}
                  answerText={elem.variantText}
                  answerChange={() => setCourseVariants(elem.variantText)}
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

export default StepTwo;
