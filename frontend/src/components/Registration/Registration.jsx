import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
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

  const { hLogin, setLoginForm, loginForm, setCurrentUser } =
    useContext(UserContext);

  const [registrationForm, setRegistrationForm] = useState({
    username: "",
    lastname: "",
    email: "",
    password: "",
    premium: 0,
  });

  const [showPassword, setShowPassword] = useState(false);

  const hLoginChange = (evt) => {
    setLoginForm({ ...loginForm, [evt.target.name]: evt.target.value });
  };

  const hRegistrationChange = (evt) =>
    setRegistrationForm({
      ...registrationForm,
      [evt.target.name]: evt.target.value,
    });

  const hRegistration = (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:5000/users", registrationForm)
      .then(({ data }) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
        <form onSubmit={hLogin}>
          <div className="formGroup">
            <input
              name="username"
              type="text"
              placeholder="Username"
              onChange={hLoginChange}
              value={loginForm.username}
            />
          </div>
          <div className="formGroup">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={hLoginChange}
              value={loginForm.password}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
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
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={hRegistrationChange}
              value={registrationForm.email}
            />
          </div>

          <div className="formGroup">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={hRegistrationChange}
              value={registrationForm.username}
            />
          </div>

          <div className="formGroup">
            <input
              type="text"
              placeholder="Lastname"
              name="lastname"
              onChange={hRegistrationChange}
              value={registrationForm.lastname}
            />
          </div>

          <div className="formGroup">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={hRegistrationChange}
              value={registrationForm.password}
            />
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
          <form className="buttonSubscribe" onSubmit={hRegistration}>
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
            <input type="text" placeholder="Adress" name="adress" />
          </div>
          <div className="formGroup">
            <input type="text" placeholder="City" name="city" />
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
