import React from "react";
import styles from "./SearchBar.module.scss";
const SearchBar = ({ onSearch, placeholder, buttonText }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchTerm = new FormData(form).get("search");
    onSearch(searchTerm);
    form.reset();
  };

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        name="search"
        required
      />
      <button className={styles.button}>{buttonText}</button>
    </form>
  );
};

export default SearchBar;
