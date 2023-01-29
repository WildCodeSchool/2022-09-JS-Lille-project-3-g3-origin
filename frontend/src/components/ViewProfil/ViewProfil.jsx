import { useContext, useState, useEffect } from "react";
import swal from "sweetalert";
import avatar1 from "../../assets/avatar1.jpg";
import "./viewProfil.scss";
import UserContext from "../../contexts/UserContext";
import Query from "../../services/Query";

export default function ViewProfil() {
  const { hUserQueryRes, currentUser } = useContext(UserContext);
  const [userProfil, setUserProfil] = useState(currentUser);

  useEffect(() => {
    setUserProfil(currentUser);
  }, [currentUser]);

  const hFormChange = (evt) =>
    setUserProfil({ ...userProfil, [evt.target.name]: evt.target.value });

  const hEditFormSubmit = (evt) => {
    evt.preventDefault();
    hUserQueryRes(Query.editUser(userProfil, currentUser.id), "editing user");
    swal({
      title: "C'est noté !",
      text: "Nous avons pris en compte vos changement !",
      icon: "success",
    });
  };

  return (
    <form className="blocProfil" onSubmit={hEditFormSubmit}>
      <header>
        <h1 key={currentUser.id}>Hello {currentUser.username} </h1>
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
