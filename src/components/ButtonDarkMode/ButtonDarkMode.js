import React from "react";
import "./ButtonDarkMode.css";

function ButtonDarkMode({ type = "checkbox", setDarkMode, darkMode }) {
  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <input
        id="darkAndLight"
        className="checkbox"
        type={type}
        onClick={handleChange}
      />
      <label for="darkAndLight" className="label">
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i> <div class="ball"></div>
      </label>
    </div>
  );
}

export default ButtonDarkMode;
