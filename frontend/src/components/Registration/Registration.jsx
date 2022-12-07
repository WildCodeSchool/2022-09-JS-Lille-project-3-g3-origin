import useModal from "@components/useModal/useModal";
import Modal from "@components/Modal/Modal";
import "./registration.scss";

export default function Registration() {
  const { isShowing: isLoginFromShowed, toggle: toggleLoginForm } = useModal();
  const {
    isShowing: isRegistrationFormShowed,
    toggle: toggleRegistrationForm,
  } = useModal();

  return (
    <div className="home">
      <div className="buttonWrapper">
        <button type="button" className="modalToggle" onClick={toggleLoginForm}>
          Login
        </button>
        <button
          type="button"
          className="modalToggle"
          onClick={toggleRegistrationForm}
        >
          Register
        </button>
      </div>
      <Modal isShowing={isLoginFromShowed} hide={toggleLoginForm} title="Login">
        <form>
          <div className="formGroup">
            <input type="text" placeholder="Username" />
          </div>
          <div className="formGroup">
            <input type="text" placeholder="Password" />
          </div>
          <div className="formGroup">
            <input type="submit" value="Login" />
          </div>
        </form>
      </Modal>

      <Modal
        isShowing={isRegistrationFormShowed}
        hide={toggleRegistrationForm}
        title="Register"
      >
        <form>
          <div className="formGroup">
            <input type="text" placeholder="Email Address" />
          </div>

          <div className="formGroup">
            <input type="text" placeholder="Username" />
          </div>

          <div className="formGroup">
            <input type="text" placeholder="Password" />
          </div>

          <div className="formGroup">
            <input type="submit" placeholder="Register" />
          </div>
        </form>
      </Modal>
    </div>
  );
}
