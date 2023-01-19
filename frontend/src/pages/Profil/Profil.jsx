import "./profil.scss";
import ViewProfil from "@components/ViewProfil/ViewProfil";
import NavBar from "../../components/NavBar/NavBar";

export default function Profil() {
  return (
    <div className="profil">
      <h1>Profil</h1>
      <ViewProfil />
      <NavBar />
    </div>
  );
}
