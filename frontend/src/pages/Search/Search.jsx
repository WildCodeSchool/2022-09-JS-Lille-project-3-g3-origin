import "./search.scss";
import DurationSearch from "@components/SearchBarDetails/SearchBarDetails";

import NavBar from "../../components/NavBar/NavBar";

export default function Profil() {
  return (
    <div className="search">
      <h1>Filtres</h1>
      <DurationSearch />
      <NavBar />
    </div>
  );
}
