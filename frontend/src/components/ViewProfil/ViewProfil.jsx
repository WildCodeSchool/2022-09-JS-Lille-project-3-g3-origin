import axios from "axios";
import { useState, useContext, useEffect } from "react";
import ButtonEditProfil from "@components/ButtonProfil/ButtonEditProfil";
import avatar1 from "@assets/avatar1.jpg";
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

  // fonction pour avatar
  // const [isChecked, setIsChecked] = useState(false);

  const [active, setActive] = useState(true);
  const handleChange = () => {
    setActive(!active);
  };
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
            name="lastname"
            value={userProfil.lastname}
            onChange={hFormChange}
          />
        </p>
        <p className="viewProfil">
          Nom
          <input
            type="text"
            name="email"
            value={userProfil.firstname}
            onChange={hFormChange}
          />
        </p>
        <p className="viewProfil">
          Adresse
          <input
            type="text"
            name="email"
            value={userProfil.address}
            onChange={hFormChange}
          />
        </p>
        <p className="viewProfil">
          Ville
          <input
            type="text"
            name="email"
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
      <ButtonEditProfil />
    </form>
  );
}
