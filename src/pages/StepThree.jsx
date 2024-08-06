import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProgresBar } from "../components/ProgresBar";
import { AppButton } from "../components/appButton";
import { Header } from "../components/Header";
import { AnswerImage } from "../components/AnswerImage";

const StepThree = () => {
  const [buttonError, setButtonError] = useState(true);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/step-four");
  };

  const variants = [
    {
      variantId: "variant-1",
      variantImg: "./img/laugh.png",
      variantText: "Я думаю мне будет весело",
      variantAlt: "laugh",
    },
    {
      variantId: "variant-2",
      variantImg: "./img/hearts.png",
      variantText: "Я думаю мне понравится",
      variantAlt: "hearts",
    },
    {
      variantId: "variant-3",
      variantImg: "./img/smirk.png",
      variantText: "Уверенный в себе",
      variantAlt: "smirk",
    },
    {
      variantId: "variant-4",
      variantImg: "./img/fright.png",
      variantText: "Мне страшно перед обучением",
      variantAlt: "fright",
    },
  ];

  const [variantImg, setVariantImg] = useState(null);

  useEffect(() => {
    if (variantImg === null) {
      localStorage.setItem("Text", "");
      setButtonError(true);
    } else {
      localStorage.setItem("Text", JSON.stringify(variantImg));
      setButtonError(false);
    }
  }, [variantImg]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgresBar currentStep={3} />
          <div className="question">
            <Header
              headerText="Какие эмоции у вас перед курсом?"
              headerType="h2"
            />
            <ul className="emoji-variants">
              {variants.map((elem) => (
                <AnswerImage
                  key={elem.variantId}
                  answerAlt={elem.variantAlt}
                  answerId={elem.variantId}
                  answerText={elem.variantText}
                  answerImage={elem.variantImg}
                  answerChange={() => setVariantImg(elem.variantText)}
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

export default StepThree;
