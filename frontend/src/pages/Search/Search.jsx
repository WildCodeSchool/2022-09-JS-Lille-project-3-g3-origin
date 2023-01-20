import "./search.scss";
import { useContext } from "react";
import SearchBarDetails from "@components/SearchBarDetails/SearchBarDetails";
import NavBar from "../../components/NavBar/NavBar";
import UserContext from "../../contexts/UserContext";

export default function Search() {
  const { isAuthenticated } = useContext(UserContext);

  console.log(isAuthenticated);
  return (
    <div className="search">
      <SearchBarDetails />
      <NavBar />
    </div>
  );
}
