import React from "react";
import "./ErrorMessage.css";

function ErrorMessage() {
  return (
    <div>
      <iframe
        src="https://giphy.com/embed/20k1punZ5bpmM"
        width="480"
        height="387"
        frameBorder="0"
        className="giphy-embed"
        title="John Travolta"
      ></iframe>
      <p>There were no results</p>
    </div>
  );
}

export default ErrorMessage;
