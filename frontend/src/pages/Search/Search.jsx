import "./search.scss";
import SearchBarDetails from "@components/SearchBarDetails/SearchBarDetails";
import NavBar from "../../components/NavBar/NavBar";

export default function Search() {
  return (
    <div className="search">
      <NavBar />
      <SearchBarDetails />
    </div>
  );
}
