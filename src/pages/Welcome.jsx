import React from "react";
import { Header } from "../components/Header";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/appButton";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header />
          <form className="welcome__form">
            <AppInput
              inputText="Вашe имя"
              errorText={"Ввудите имя в правильном формате"}
              inputPlaceholder="Введите ваше имя"
              inputType="text"
            />
            <AppInput
              inputText="Ваш номер"
              errorText={"Введите номер в правильном формате например"}
              inputPlaceholder="Введите ваш номер"
              inputType="tel"
            />
            <AppButton isDisabled={false}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
