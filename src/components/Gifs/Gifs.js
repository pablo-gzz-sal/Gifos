import React, { useState, useEffect } from "react";
import "./Gifs.css";
import Body from "../Body/Body";
import Card from "../Card/Card";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Filter from "../Filter/Filter";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import Trending from "../Trending/Trending";

function Gifs() {
  const [darkMode, setDarkMode] = useState(false);
  const [from, setFrom] = useState(false);
  const [gif, setGif] = useState([]);
  const [dataUser, setDataUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [gifButton, setGifButton] = useState(false);
  const [autocomplete, setAutocomplete] = useState([]);
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState(false);

  const keyGifs = "8UubFnyok8frLZ8Iosaz1N6DJU5tc74u";

  useEffect(() => {
    if (dataUser.length) {
      let petition = fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${keyGifs}&q=${dataUser}&limit=18&offset=0&rating=g&lang=en`
      );
      petition
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setGif(data.data);
          setFrom(false);
          setLoading(false);
          setError(true);
        });
    } else {
      console.log("no hay datos");
    }
  }, [dataUser, from]);

  useEffect(() => {
    let petition = fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=${keyGifs}&q=${dataUser}&limit=5&offset=0&rating=g&lang=en`
    );
    petition
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAutocomplete(data.data);
      });
  }, [dataUser]);

  useEffect(() => {
    let petition = fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${keyGifs}&q=${dataUser}&limit=15&offset=0&rating=g&lang=en`
    );
    petition
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTrending(data.data);
      });
  });

  return (
    <main className={`Gifs ${darkMode ? "Dark" : "Light"}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Filter
        darkMode={darkMode}
        dataUser={dataUser}
        setDataUser={setDataUser}
        gifButton={gifButton}
        gif={gif}
        setLoading={setLoading}
        autocomplete={autocomplete}
        handleButton={(e) => {
          e.preventDefault();
          setGifButton(true);
          setFrom(true);
          setAutocomplete([]);
        }}
        handleSearch={() => {
          setFrom(true);
          setLoading(false);
          setGif([]);
        }}
      />
      <Body>
        {gif.length ? (
          <>
            <h3>Search Result</h3>
            <div className={`gifsLayout ${darkMode ? "dark" : "light"}`}>
              {(gif || []).map((value) => {
                return (
                  <Card
                    source={value.images.downsized_medium.url}
                    key={value.id}
                    url={value.url}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <h3>
            {dataUser.length ? (
              <> {error === false ? <Loading /> : <ErrorMessage />}</>
            ) : (
              <Trending trending={trending} darkMode={darkMode} />
            )}
          </h3>
        )}
      </Body>
      <Footer darkMode={darkMode} className={!gif.length ? "fixed" : ""} />
    </main>
  );
}

export default Gifs;
