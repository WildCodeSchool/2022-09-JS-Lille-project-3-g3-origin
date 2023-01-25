import "./profil.scss";
import { useContext } from "react";
import ButtonEditProfil from "../../components/ButtonProfil/ButtonEditProfil";
import ViewProfil from "../../components/ViewProfil/ViewProfil";
import NavBar from "../../components/NavBar/NavBar";
import UserContext from "../../contexts/UserContext";

export default function Profil() {
  const { currentUser, isAuthenticated } = useContext(UserContext);

  console.log(currentUser);
  console.log(isAuthenticated);
  return (
    <div className="profil">
      <ViewProfil />
      <NavBar />
    </div>
  );
}
