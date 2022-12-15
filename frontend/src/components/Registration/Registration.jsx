import useModal from "../useModal/useModal";
import Modal from "../Modal/Modal";
import "./registration.scss";
import chart from "../../assets/chart.jpg";

export default function Registration() {
  const { isShowing: isLoginFromShowed, toggle: toggleLoginForm } = useModal();
  const {
    isShowing: isRegistrationFormShowed,
    toggle: toggleRegistrationForm,
  } = useModal();
  const { isShowing: isSubscribeShowed, toggle: toggleSubscribe } = useModal();

  const { isShowing: isPremiumSelectedShowed, toggle: togglePremiumSelected } =
    useModal();

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
            <input type="password" placeholder="Password" />
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
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="formGroup">
            <input type="text" placeholder="Username" />
          </div>

          <div className="formGroup">
            <input type="password" placeholder="Password" />
          </div>

          <div className="formGroup">
            <input
              type="button"
              placeholder="Register"
              value="Register"
              onClick={toggleSubscribe}
            />
          </div>
        </form>
      </Modal>
      <Modal
        isShowing={isSubscribeShowed}
        hide={toggleSubscribe}
        title="Subscribe to"
      >
        <div className="subscribePage">
          <img src={chart} alt="chart" />
          <form className="buttonSubscribe">
            <div className="formGroup">
              <input
                type="button"
                value="Go Premium"
                onClick={togglePremiumSelected}
              />
            </div>
            <div className="formGroup">
              <input type="submit" value="Stay Freemium" />
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        isShowing={isPremiumSelectedShowed}
        hide={togglePremiumSelected}
        title="Registration field :"
      >
        <form>
          <div className="formGroup">
            <input type="text" placeholder="Firstname" />
          </div>
          <div className="formGroup">
            <input type="text" placeholder="Lastname" />
          </div>
          <div className="formGroup">
            <input type="text" placeholder="Adress" />
          </div>
          <div className="formGroup">
            <input type="text" placeholder="City" />
          </div>
          <div className="formGroup">
            <input type="text" placeholder="Credit Card Numbers" />
          </div>
          <div className="formGroup">
            <input type="text" placeholder="CVV" />
          </div>
          <div className="formGroup">
            <input type="text" placeholder="Expiration Date (Day/Month/Year)" />
          </div>
          <div className="formGroup">
            <input type="submit" value="Confirm" />
          </div>
        </form>
      </Modal>
    </div>
  );
}
