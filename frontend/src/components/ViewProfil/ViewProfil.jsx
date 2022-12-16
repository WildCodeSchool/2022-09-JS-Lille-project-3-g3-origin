import avatar1 from "@assets/avatar1.jpg";
import "./viewProfil.scss";

export default function ViewProfil() {
  return (
    <div className="blocProfil">
      <img className="avatar" src={avatar1} alt="avatar profil" />
      <p className="viewProfil">Pseudo : mail@exemple.com</p>
      <p className="viewProfil">Prénom : UserName</p>
      <p className="viewProfil">Nom : LastName</p>
      <p className="viewProfil">Password : *******</p>
    </div>
  );
}
