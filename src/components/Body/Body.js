import React from "react";
import "./Body.css";

function Body({ children, darkMode }) {
  return <section className={`body`}>{children}</section>;
}

export default Body;
