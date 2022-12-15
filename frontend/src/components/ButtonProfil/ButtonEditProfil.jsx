import useModal from "../useModal/useModal";
import Modal from "../Modal/Modal";

import "./buttonEditProfil.scss";

export default function ButtonEditProfil() {
  const { isShowing: isEditFormShowed, toggle: toggleRegistrationForm } =
    useModal();

  return (
    <div className="profil">
      <div className="buttonEditProfil">
        <button
          type="button"
          className="modalEditProfil"
          onClick={toggleRegistrationForm}
        >
          Edit Profil
        </button>
      </div>

      <Modal
        isShowing={isEditFormShowed}
        hide={toggleRegistrationForm}
        title="Edit Profil"
      >
        <form>
          <div className="formEditProfil">
            <input type="text" placeholder="Username" />
          </div>
          <div className="formEditProfil">
            <input type="text" placeholder="Firstname" />
          </div>
          <div className="formEditProfil">
            <input type="email" placeholder="Pseudo/mail" />
          </div>
          <div className="formEditProfil">
            <input type="password" placeholder="Password" />
          </div>
          <div className="formEditProfil">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </Modal>
    </div>
  );
}
