import React from "react";
import "./Header.css";
import ButtonDarkMode from "../ButtonDarkMode/ButtonDarkMode";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <img className="headerImg" src="./images/logo.svg" alt="img" />
      <ButtonDarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
}

export default Header;
