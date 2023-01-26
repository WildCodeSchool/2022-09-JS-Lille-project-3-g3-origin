import { useContext } from "react";
import avatar1 from "../../assets/avatar1.jpg";
import "./viewProfil.scss";
import UserContext from "../../contexts/UserContext";

export default function ViewProfil() {
  const { hEditFormSubmit, userProfil, setUserProfil } =
    useContext(UserContext);
  const hFormChange = (evt) =>
    setUserProfil({ ...userProfil, [evt.target.name]: evt.target.value });

  return (
    <form className="blocProfil" onSubmit={hEditFormSubmit}>
      <header>
        <h1>Username</h1>
        <img className="avatar" src={avatar1} alt="avatar profil" />
      </header>
      <div className="inputProf">
        <p className="viewProfil">
          Pseudo
          <input
            type="text"
            name="username"
            value={userProfil.username}
            onChange={hFormChange}
          />
        </p>
        <p className="viewProfil">
          Prénom
          <input
            type="text"
            name="firstname"
            value={userProfil.firstname}
            onChange={hFormChange}
          />
        </p>
        <p className="viewProfil">
          Nom
          <input
            type="text"
            name="lastname"
            value={userProfil.lastname}
            onChange={hFormChange}
          />
        </p>
        <p className="viewProfil">
          Adresse
          <input
            type="text"
            name="address"
            value={userProfil.address}
            onChange={hFormChange}
          />
        </p>
        <p className="viewProfil">
          Ville
          <input
            type="text"
            name="city"
            value={userProfil.city}
            onChange={hFormChange}
          />
        </p>

        <p className="viewProfil">
          E-mail:
          <input
            type="text"
            name="email"
            value={userProfil.email}
            onChange={hFormChange}
          />
        </p>
      </div>
      <input className="boutonValid" type="submit" value="Enregistrer" />
    </form>
  );
}
