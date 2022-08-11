import React from "react";
import "./Filter.css";
import Autocomplete from "../Autocomplete/Autocomplete";

function Filter({
  dataUser,
  setDataUser,
  handleSearch,
  handleButton,
  gif,
  autocomplete,
  darkMode,
  setLoading
}) {
  const handleChange = (e) => {
    setDataUser(e.target.value);
    setLoading(true);
  };
  console.log(dataUser);

  return (
    <div className="filter">
      <h1 className="title">Get inspired and look for the best GIFS!</h1>
      <img src="./images/logo-search.svg" alt="logo" />
      <form onClick={handleButton} className="searchBar">
        <div>
          <input
            type="text"
            value={dataUser}
            onChange={handleChange}
            placeholder="Type for search"
            className={`${darkMode ? "darkSearchBar" : ""}`}
          />
          <button type="button" className="searchButton" onClick={handleSearch}>
            <img src="./images/icon-search.svg" alt="search" />
          </button>
          <div>
            {dataUser === "" ? (
              <></>
            ) : gif.length >= 0 && dataUser !== "" ? (
              <Autocomplete
                handleButton={handleButton}
                autocomplete={autocomplete}
                darkMode={darkMode}
                setDataUser={setDataUser}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filter;
