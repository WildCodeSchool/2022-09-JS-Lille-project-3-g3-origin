import "./searchBar.scss";
import { useState } from "react";

export default function SearchBar() {
  const [resultSearch, setResultSearch] = useState("");
  const handleInput = (e) => {
    setResultSearch(e.target.value);
  };
  return (
    <div>
      <form className="searchBar">
        <input
          type="search"
          id="search_searchComponent"
          name="search"
          placeholder="Que souhaitez vous regarder ?"

          value={resultSearch}
          onChange={handleInput}
        />
      </form>
    </div>
  );
}
