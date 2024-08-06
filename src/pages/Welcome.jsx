import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/appButton";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const navigate = useNavigate("/step-one");
  const [buttonError, setButtonError] = useState(true);

  const regex = /^[A-Za-zА-Яа-яЁё]+$/;
  const regexNum =
    /^\+?\d{1,4}|\(\d{1,4}\)[-.\s]?\d{1,4}[-.\s]?\d{1,3}[-.\s]?\d{1,4}$/;

  const handleClick = () => {
    if (!regex.test(name)) {
      setNameError(true);
    } else if (!regexNum.test(phone)) {
      setPhoneError(true);
    } else {
      setNameError(false);
      setPhoneError(false);
      navigate("/step-one");
      localStorage.setItem("user_name", JSON.stringify({ name }));
      localStorage.setItem("user_name", JSON.stringify({ phone }));
    }
  };
  useEffect(() => {
    setButtonError(!(name.length > 0 && phone.length > 0));
  }, [name, phone]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header
            headerText={"Добро пожаловать в квиз от лучшего учебного центра"}
            headerType="h1"
          />
          <form className="welcome__form">
            <AppInput
              inputText="Вашe имя"
              errorText={"Введите имя в правильном формате"}
              inputPlaceholder="Введите ваше имя"
              inputType="text"
              inputValue={name}
              inputChange={setName}
              hasError={nameError}
            />
            <AppInput
              inputText="Ваш номер"
              errorText={"Введите номер в правильном формате например"}
              inputPlaceholder="Введите ваш номер"
              inputType="tel"
              inputValue={phone}
              inputChange={setPhone}
              hasError={phoneError}
            />

            <AppButton isDisabled={buttonError} buttonClick={handleClick} />

            {/* <RegistrationPage /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
