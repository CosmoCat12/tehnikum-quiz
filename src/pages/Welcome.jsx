import React from "react";
import { Header } from "../components/Header";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/appButton";
import { RegistrationPage } from "./RegistrationPage";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header />
          <form className="welcome__form">
            <AppInput
              inputText="Вашe имя"
              errorText={"Введите имя в правильном формате"}
              inputPlaceholder="Введите ваше имя"
              inputType="text"
            />
            <AppInput
              inputText="Ваш номер"
              errorText={"Введите номер в правильном формате например"}
              inputPlaceholder="Введите ваш номер"
              inputType="tel"
            />
            <AppButton isDisabled={false} />
            <RegistrationPage />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
