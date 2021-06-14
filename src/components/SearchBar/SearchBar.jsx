import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  // const [searchText, setSearchText] = useState("");

  const { onBlur } = props;

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onBlur={(event) => {
          const beerName = event.target.value;
          onBlur(beerName);
        }}
      />
    </div>
  );
};

export default SearchBar;
