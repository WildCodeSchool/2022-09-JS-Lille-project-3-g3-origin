import "./search.scss";
import SearchBarDetails from "@components/SearchBar/SearchBar";
import NavBar from "../../components/NavBar/NavBar";

export default function Search() {
  return (
    <div className="search">
      <h1>Filtres</h1>
      <SearchBarDetails />
      <NavBar />
    </div>
  );
}
