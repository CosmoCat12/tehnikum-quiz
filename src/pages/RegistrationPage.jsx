import React from "react";
import { RegistrationHeader } from "../components/RegistrationHeader";
import { RegInput } from "./RegInput";
import { RegButton } from "../components/RegButton";


export const RegistrationPage = ({}) => {
  return (
    <div>
      <RegistrationHeader />
      <form action="">
        <RegInput
          inputText={"Введите имя"}
          inputType={"text"}
          errorText={"Введите имя в правильном формате"}
          inputPlaceholder={"Ваше имя"}
        />
        <RegInput
          inputText={"Введите Фамилию"}
          inputType={"text"}
          errorText={"Введите Фамилию в правильном формате"}
          inputPlaceholder={"Ваша Фамилия"}
        />
        <RegInput
          inputText={"Введите номер телефона"}
          inputType={"tel"}
          errorText={"Введите номер в правильном формате"}
          inputPlaceholder={"Ваш номер"}
        />
        <RegInput
          inputText={"Введите email"}
          inputType={"email"}
          errorText={"Введите email в правильном формате"}
          inputPlaceholder={"Ваш email"}
        />
        <RegButton isDisabled={true}/>
      </form>
    </div>
  );
};
