import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppInput } from "../components/AppInput";
import { ProgresBar } from "../components/ProgresBar";
import { AppButton } from "../components/appButton";
import { Header } from "../components/Header";

const StepOne = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const navigate = useNavigate(); // исправлено использование useNavigate
  const [buttonError, setButtonError] = useState(true);
  const regex = /^[A-Za-zА-Яа-яЁё]+$/;

  const handleClick = () => {
    if (!regex.test(name)) {
      setNameError(true);
    } else {
      setNameError(false);
      navigate("/step-two");
      localStorage.setItem("user_answer", JSON.stringify({ name }));
    }
  };

  useEffect(() => {
    setButtonError(!(name.length > 0));
  }, [name]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgresBar currentStep={1} /> {/* исправлено название компонента */}
          <div className="question">
            <Header headerText="Для каких целей вы хотите обучаться?" />
            <label className="input-wrapper">
              <AppInput
                inputText="Ваш ответ"
                errorText={"Введите ответ в правильном формате"}
                inputPlaceholder="Введите ваш ответ"
                inputType="text"
                inputValue={name}
                inputChange={setName}
                hasError={nameError}
              />
            </label>
            <AppButton isDisabled={buttonError} buttonClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
