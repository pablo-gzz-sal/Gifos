import React from "react";
import "./Card.css";

function Card({ source, title, url }) {
  return (
    <div className="card">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={source} alt={title} />
      </a>
    </div>
  );
}

export default Card;
