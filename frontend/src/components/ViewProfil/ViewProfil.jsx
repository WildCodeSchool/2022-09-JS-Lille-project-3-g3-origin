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
      <img className="avatar" src={avatar1} alt="avatar profil" />
      <p className="viewProfil">
        USERNAME:
        <input
          type="text"
          name="username"
          value={userProfil.username}
          onChange={hFormChange}
        />
      </p>
      <p className="viewProfil">
        LASTNAME:
        <input
          type="text"
          name="lastname"
          value={userProfil.lastname}
          onChange={hFormChange}
        />
      </p>
      <p className="viewProfil">
        EMAIL:
        <input
          type="text"
          name="email"
          value={userProfil.email}
          onChange={hFormChange}
        />
      </p>
      <input
        type="button"
        name="edit-button"
        id="edit-button"
        onClick={hEditFormSubmit}
        value="Edit Profil"
      />
    </form>
  );
}
