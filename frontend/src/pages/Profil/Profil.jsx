import "./profil.scss";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ViewProfil from "../../components/ViewProfil/ViewProfil";
import NavBar from "../../components/NavBar/NavBar";
import UserContext from "../../contexts/UserContext";

export default function Profil() {
  const { currentUser, isAuthenticated } = useContext(UserContext);

  const navigate = useNavigate();

  // TO DO : handle routes with router
  useEffect(() => {
    if (!isAuthenticated) navigate("/");
    if (!currentUser.premium) navigate("/premium");
  }, [isAuthenticated]);

  return (
    <div className="profil">
      <NavBar />
      <h1>Profil</h1>
      <ViewProfil />
    </div>
  );
}
