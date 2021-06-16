import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.scss";
import React, { useState, useEffect } from "react";
import BeerCard from "./components/BeerCard";
import SearchBar from "./components/SearchBar";
import CardContainer from "./components/CardContainer";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [search, updateSearch] = useState([]);

  const API_URL = "https://api.punkapi.com/v2/beers";

  const handleSearch = (beerName) => {
    if (beerName == undefined || beerName == "") {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => setBeers(data));
    } else
      fetch("https://api.punkapi.com/v2/beers?beer_name=" + beerName)
        .then((response) => response.json())
        .then((data) => setBeers(data));
  };

  useEffect(() => {
    handleSearch("");
  }, []);

  return (
    <div className={styles.App}>
      <h2 className={styles.title}>The Brew Bar</h2>
      <SearchBar onBlur={handleSearch} />
      <CardContainer data={beers} />
    </div>
  );
};

export default App;
