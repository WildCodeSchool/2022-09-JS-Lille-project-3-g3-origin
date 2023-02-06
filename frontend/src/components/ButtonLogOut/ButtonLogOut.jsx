import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import useModal from "../useModal/useModal";
import Modal from "../Modal/Modal";
import "./buttonLogOut.scss";

export default function ButtonLogOut() {
  const { hLogOut } = useContext(UserContext);
  const { isShowing: isShowConfirm, toggle: toggleConfirm } = useModal();

  return (
    <>
      <button type="button" className="button-log-out" onClick={toggleConfirm}>
        Déconnexion
      </button>
      <Modal
        isShowing={isShowConfirm}
        hide={toggleConfirm}
        title="Êtes vous sûr ?"
      >
        <button
          type="button"
          className="button-log-out-after"
          onClick={hLogOut}
        >
          Oui !
        </button>
      </Modal>
    </>
  );
}
