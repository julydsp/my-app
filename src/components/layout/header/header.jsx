import React, { useState } from "react";
import { Logo } from "../../../img/logo.jsx";
import "./header.css";

export default function Header() {
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const numberRandomLog = () => {
    const numberRandom = getRndInteger(1, 100);
    console.log("Random Number", numberRandom);
  };
  //subtitle
  const [language, setLanguage] = useState("en");
  const buttonLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  //deskripsi header
  const article = {
    title: {
      id: "Buat Akun",

      en: "Create Account",
    },

    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    },
  };

  return (
    <div className="header">
      <div className="button-header">
        <div className="button-translate">
          <button
            className="button-ind"
            onClick={() => buttonLanguage("en")}
            type="submit"
          >
            ENG
          </button>
          <button
            className="button-eng"
            onClick={() => buttonLanguage("id")}
            type="submit"
          >
            IDN
          </button>
        </div>
        <div className="button-random-number">
          <button className="button" onClick={numberRandomLog} type="submit">
            Random Number
          </button>
        </div>
      </div>

      <div className="image">
        <Logo />
      </div>
      <h2>{article.title[language]}</h2>
      <p>{article.description[language]}</p>
    </div>
  );
}
