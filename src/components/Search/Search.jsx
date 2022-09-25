import React from "react";
import style from "./search.module.css";
import { BiHeart, BiSearchAlt2 } from "react-icons/bi";

const Search = () => {
  return (
    <div className={style.search}>
      <input type={"text"} placeholder="What do you want to order ?" />
      <BiSearchAlt2 className={style.searchIcon} fill="gray" size={24} />
      <button>Search</button>
    </div>
  );
};

export default Search;
