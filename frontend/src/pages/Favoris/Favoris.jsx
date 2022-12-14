import "./favoris.scss";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "@components/SearchBar/SearchBar";

export default function Favoris() {
  return (
    <div className="favoris">
      <h1>Favoris</h1>
      <SearchBar />

      <NavBar />
    </div>
  );
}
