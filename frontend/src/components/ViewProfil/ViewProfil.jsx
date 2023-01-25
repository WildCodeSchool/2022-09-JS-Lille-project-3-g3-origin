import axios from "axios";
import { useState, useContext, useEffect } from "react";
import avatar1 from "@assets/avatar1.jpg";
import "./viewProfil.scss";
import UserContext from "../../contexts/UserContext";

export default function ViewProfil() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [userProfil, setUserProfil] = useState(currentUser);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUserProfil(currentUser);
  }, [currentUser]);

  useEffect(() => {
    axios.get("http://localhost:5000/users/8").then(({ data }) => {
      setUsers(data);
    });
  }, []);
  const hFormChange = (evt) => {
    setUsers(evt.target);
  };

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
      <header>
        <h1 key={users.id}>Hello {users.username} </h1>
        <img className="avatar" src={avatar1} alt="avatar profil" />
      </header>
      <div className="inputProf">
        <p className="viewProfil">
          Pseudo
          <input
            type="text"
            name="username"
            value={users.username}
            onChange={hFormChange}
          />
        </p>
        <p className="viewProfil">
          Prénom
          <input
            type="text"
            name="firstname"
            value={users.lastname}
            onChange={hFormChange}
          />
        </p>
        <p className="viewProfil">
          Nom
          <input
            type="text"
            name="nom"
            value={users.firstname}
            onChange={hFormChange}
          />
        </p>
        <p className="viewProfil">
          Adresse
          <input
            type="text"
            name="adresse"
            value={users.address}
            onChange={hFormChange}
          />
        </p>
        <p className="viewProfil">
          Ville
          <input
            type="text"
            name="ville"
            value={users.city}
            onChange={hFormChange}
          />
        </p>

        <p className="viewProfil">
          E-mail:
          <input
            type="text"
            name="email"
            value={users.email}
            onChange={hFormChange}
          />
        </p>
      </div>
      <input className="boutonValid" type="submit" value="Enregistrer" />
    </form>
  );
}
