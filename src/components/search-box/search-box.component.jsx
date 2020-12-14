import React from "react";

import "./search-box.styles.css";

const searchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="searc"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default searchBox;
