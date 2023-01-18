import axios from "axios";
import { useState, useContext, useEffect } from "react";
import avatar1 from "../../assets/avatar1.jpg";
import "./viewProfil.scss";
import UserContext from "../../contexts/UserContext";

export default function ViewProfil() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [userProfil, setUserProfil] = useState(currentUser);

  useEffect(() => {
    setUserProfil(currentUser);
  }, [currentUser]);

  const hFormChange = (evt) =>
    setUserProfil({ ...userProfil, [evt.target.name]: evt.target.value });

  const hEditFormSubmit = (evt) => {
    evt.preventDefault();
    axios
      .put(`http://localhost:5000/users/${currentUser.id}`, userProfil)
      .then(({ data }) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error("Error editing the user", err);
      });
  };

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
