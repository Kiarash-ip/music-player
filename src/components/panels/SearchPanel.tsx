import React from "react";
import "./searchPanel.scss";

export default function SearchPanel() {
  return (
    <div className="searchPanel">
      <div className="searchPanel--container">
        <header className="searchPanel__header">
          <h4 className="searchPanel__header--title">Search</h4>
        </header>
        <div className="searchPanel__search--container">
          <img
            src="/images/search-icon.svg"
            className="searchPanel__search__icon"
          />
          <input
            placeholder="Artists, Songs, and More"
            className="searchPanel__search__input"
          />
        </div>
      </div>
    </div>
  );
}
