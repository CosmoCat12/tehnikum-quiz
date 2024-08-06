import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
const Thanks = () => {
  const [possibility, setPossibility] = useState("");

  useEffect(() => {
    const storedPossibility = localStorage.getItem("possibility");
    if (storedPossibility) {
      setPossibility(storedPossibility);
    }
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <Header headerText="Спасибо за прохождение опроса!" headerType="h1" />
          <p>
            Мы поналя, что вероятность поступления на курс: {possibility}.
            Получи свою скидку по ссылке ниже или другое
          </p>
          <button type="button" id="get-link">
            Получить ссылку
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
