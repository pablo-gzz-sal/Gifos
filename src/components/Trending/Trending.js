import React from "react";
import "./Trending.css";
import Card from "../Card/Card";

function Trending({ trending, darkMode }) {
  return (
    <div className={`gifsLayout ${darkMode ? "dark" : "light"}`}>
      {trending.map((value) => {
        return (
          <Card
            source={value.images.downsized_medium.url}
            key={value.id}
            url={value.url}
          />
        );
      })}
    </div>
  );
}

export default Trending;
