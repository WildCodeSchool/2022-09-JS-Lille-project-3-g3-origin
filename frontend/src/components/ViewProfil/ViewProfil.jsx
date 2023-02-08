import { useContext, useState, useEffect } from "react";
import swal from "sweetalert";
import useModal from "../useModal/useModal";
import Modal from "../Modal/Modal";
import Query from "../../services/Query";
import "./viewProfil.scss";
import localStorage from "../../services/localStorage";
import UserContext from "../../contexts/UserContext";

export default function ViewProfil() {
  const { setCurrentUser, currentUser, userAvatars } = useContext(UserContext);
  const [userProfil, setUserProfil] = useState(currentUser);

  useEffect(() => {
    setUserProfil(currentUser);
  }, [currentUser]);
  const { isShowing: showAvatars, toggle: toggleAvatarsShow } = useModal();

  const hFormChange = (evt) =>
    setUserProfil({ ...userProfil, [evt.target.name]: evt.target.value });

  const hEditFormSubmit = async (evt) => {
    evt.preventDefault();
    try {
      Query.editUser(userProfil, currentUser.id).then((result) => {
        const { user } = result;
        localStorage.saveItem("currentUser", user);
        setCurrentUser(user);
      });
    } catch (err) {
      console.error(err);
    }
    swal({
      title: "C'est noté !",
      text: "Nous avons pris en compte vos changements !",
      icon: "success",
    });
  };

  const hAvatarChoice = (evt) => {
    setUserProfil({
      ...userProfil,
      path: evt.target.src,
    });
    Query.editUser(
      {
        ...userProfil,
        [evt.target.name]: parseInt(evt.target.id, 10),
      },
      currentUser.id
    );
    setTimeout(() => toggleAvatarsShow(), 1000);
    swal({
      title: "C'est fait !",
      text: "Avatar changé",
      icon: "success",
      buttons: false,
      timer: 1000,
    });
  };

  return (
    userProfil && (
      <form className="bloc-profil" onSubmit={hEditFormSubmit}>
        <Modal
          isShowing={showAvatars}
          hide={toggleAvatarsShow}
          title="Choisis un avatar"
        >
          <div className="user-avatars">
            {userAvatars.map((userAvatar) => {
              return (
                <img
                  className="user-avatar-list"
                  src={userAvatar.path}
                  alt="avatar choice"
                  key={userAvatar.id}
                  id={userAvatar.id}
                  onClick={hAvatarChoice}
                  role="presentation"
                  name="avatar_id"
                />
              );
            })}
          </div>
        </Modal>
        <header>
          <h1 key={currentUser.id}>
            Bonjour
            <span className="user-name-style"> {currentUser.username} </span>
          </h1>
          <img
            className="user-avatar"
            src={userProfil.path}
            alt="avatar profil"
            onClick={toggleAvatarsShow}
            role="presentation"
          />
        </header>
        <div className="input-prof">
          <p className="view-profil">
            Pseudo
            <input
              type="text"
              name="username"
              value={userProfil.username}
              onChange={hFormChange}
            />
          </p>
          <p className="view-profil">
            Prénom
            <input
              type="text"
              name="firstname"
              value={userProfil.firstname}
              onChange={hFormChange}
            />
          </p>
          <p className="view-profil">
            Nom
            <input
              type="text"
              name="lastname"
              value={userProfil.lastname}
              onChange={hFormChange}
            />
          </p>
          <p className="view-profil">
            Adresse
            <input
              type="text"
              name="address"
              value={userProfil.address}
              onChange={hFormChange}
            />
          </p>
          <p className="view-profil">
            Ville
            <input
              type="text"
              name="city"
              value={userProfil.city}
              onChange={hFormChange}
            />
          </p>

          <p className="view-profil">
            E-mail:
            <input
              type="text"
              name="email"
              value={userProfil.email}
              onChange={hFormChange}
            />
          </p>
        </div>
        <input
          className="upt-profil-sbmt-btn"
          type="submit"
          value="Enregistrer"
        />
      </form>
    )
  );
}
