import "./search.scss";
import SearchBarDetails from "@components/SearchBar/SearchBar";
import NavBar from "../../components/NavBar/NavBar";

export default function Search() {
  return (
    <div className="search">
      <SearchBarDetails />
      <NavBar />
    </div>
  );
}
