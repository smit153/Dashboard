import React from "react";
import MaterialIcon from "material-icons-react";
import "./MiddleCol.css";
export default function Search() {
  return (
    <div className="search-container">
      <div className="search">
        <div className="search-icon">
          <MaterialIcon icon="search" />
        </div>
        <input
          className="searchbar"
          type="text"
          placeholder="search for product"
        />
      </div>
    </div>
  );
}
