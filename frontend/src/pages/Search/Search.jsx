import "./search.scss";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBarDetails from "../../components/SearchBarDetails/SearchBarDetails";
import NavBar from "../../components/NavBar/NavBar";
import UserContext from "../../contexts/UserContext";

export default function Search() {
  const { isAuthenticated, currentUser } = useContext(UserContext);

  const navigate = useNavigate();

  // TO DO : handle routes with router
  useEffect(() => {
    if (!isAuthenticated) navigate("/");
    if (!currentUser.premium) navigate("/premium");
  }, [isAuthenticated]);

  return (
    <div className="search">
      <SearchBarDetails />
      <NavBar />
    </div>
  );
}
