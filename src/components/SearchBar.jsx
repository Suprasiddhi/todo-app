import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchText);
  };

  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <form className="searchBarForm" onSubmit={handleSubmit}>
      <div>
        <input
          className="searchBarInput"
          type="text"
          placeholder="Search task"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit">Search</button>
        <button type="submit" onClick={reloadPage}>
          Reload
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
