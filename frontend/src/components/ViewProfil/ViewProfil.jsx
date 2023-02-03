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
      text: "Nous avons pris en compte vos changement !",
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
      title: "Done",
      text: "Avatar changed",
      icon: "success",
      buttons: false,
      timer: 1000,
    });
  };

  return (
    userProfil && (
      <form className="blocProfil" onSubmit={hEditFormSubmit}>
        <Modal
          isShowing={showAvatars}
          hide={toggleAvatarsShow}
          title="Choose your avatar"
        >
          <div className="user-avatars">
            {userAvatars.map((userAvatar) => {
              return (
                <img
                  className="user-avatar"
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
          <h1 key={currentUser.id}>Hello {currentUser.username} </h1>
          <img
            className="user-avatar"
            src={userProfil.path}
            alt="avatar profil"
            onClick={toggleAvatarsShow}
            role="presentation"
          />
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
        <input
          className="upt-profil-sbmt-button"
          type="submit"
          value="Enregistrer"
        />
      </form>
    )
  );
}
