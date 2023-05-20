import React from "react";
import SearchBar from "../searchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css"

export default function Nav(props) {
  return (
    <div className={styles.container}>
      <NavLink to="/home">
        <button className={styles.container.button}>Home</button>
      </NavLink>
      <NavLink to="/about">
        <button className={styles.container.button}>About</button>
      </NavLink>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
