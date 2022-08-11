import React from "react";
import "./Autocomplete.css";

function Autocomplete({ handleButton, autocomplete, darkMode, setDataUser }) {
  return (
    <div
      onClick={handleButton}
      className={`${autocomplete.length > 0 ? "suggestions" : ""}`}
    >
      <div>{Options({ autocomplete, darkMode, setDataUser })}</div>
    </div>
  );
}

function Options({ autocomplete, darkMode, setDataUser }) {
  return (
    <div>
      {autocomplete.map((data) => {
        return (
          <div
            className={`wholeList ${darkMode ? "dark" : "light"}`}
            onClick={() => {
              setDataUser(data.name);
            }}
          >
            <li className="autoList "> {data.name} </li>
          </div>
        );
      })}
    </div>
  );
}

export default Autocomplete;
