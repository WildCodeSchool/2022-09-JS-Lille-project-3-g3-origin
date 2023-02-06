import { useCallback, useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import UserContext from "../../contexts/UserContext";
import useModal from "../useModal/useModal";
import Modal from "../Modal/Modal";
import "./registration.scss";
import chart from "../../assets/chart.jpg";
import Query from "../../services/Query";

export default function Registration() {
  const { currentUser, hUserQueryRes } = useContext(UserContext);
  const { isShowing: isLoginFromShowed, toggle: toggleLoginForm } = useModal();
  const {
    isShowing: isRegistrationFormShowed,
    toggle: toggleRegistrationForm,
  } = useModal();
  const { isShowing: isSubscribeShowed, toggle: toggleSubscribe } = useModal();

  const { isShowing: isPremiumSelectedShowed, toggle: togglePremiumSelected } =
    useModal();

  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  const [registrationForm, setRegistrationForm] = useState({
    username: "",
    lastname: "",
    email: "",
    password: "",
    firstname: "",
    address: "",
    city: "",
    premium: 0,
  });

  const [showPassword, setShowPassword] = useState(false);

  const hLoginChange = useCallback(
    (evt) => {
      setLoginForm({ ...loginForm, [evt.target.name]: evt.target.value });
    },
    [loginForm]
  );

  const hRegistrationChange = (evt) =>
    setRegistrationForm({
      ...registrationForm,
      [evt.target.name]: evt.target.value,
    });

  const hLogin = (evt) => {
    evt.preventDefault();
    hUserQueryRes(Query.login(loginForm), "login");
  };

  const hRegistration = (evt) => {
    evt.preventDefault();
    hUserQueryRes(Query.registration(registrationForm), "registration");
  };

  return (
    <div className="home">
      <div className="buttonWrapper">
        <button type="button" className="modalToggle" onClick={toggleLoginForm}>
          Se connecter
        </button>
        <button
          type="button"
          className="modalToggle"
          onClick={toggleRegistrationForm}
        >
          S'enregistrer
        </button>
      </div>
      <Modal
        isShowing={isLoginFromShowed}
        hide={toggleLoginForm}
        title="Se connecter"
      >
        <form onSubmit={hLogin}>
          <h2>
            {currentUser.username ? `Welcome ${currentUser.username}` : ""}
          </h2>
          <div className="formGroup">
            <input
              name="username"
              type="text"
              placeholder="Pseudo"
              onChange={hLoginChange}
              value={loginForm.username}
              required
            />
          </div>
          <div className="formGroupPassword">
            <input
              className="inputPassword"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Mot de passe"
              onChange={hLoginChange}
              value={loginForm.password}
              required
            />
            <button
              className="ShowHidePassword"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
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
        title="S'enregistrer"
      >
        <form>
          <div className="formGroup">
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              onChange={hRegistrationChange}
              value={registrationForm.email}
              required
            />
          </div>

          <div className="formGroup">
            <input
              type="text"
              placeholder="Pseudo"
              name="username"
              onChange={hRegistrationChange}
              value={registrationForm.username}
              required
            />
          </div>

          <div className="formGroup">
            <input
              type="text"
              placeholder="Nom"
              name="lastname"
              onChange={hRegistrationChange}
              value={registrationForm.lastname}
            />
          </div>

          <div className="formGroupPassword">
            <input
              className="inputPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Mot de passe"
              name="password"
              onChange={hRegistrationChange}
              value={registrationForm.password}
              required
            />
            <button
              className="ShowHidePassword"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>

          <div className="formGroup">
            <input
              type="button"
              placeholder="S'enregistrer"
              value="Register"
              onClick={toggleSubscribe}
            />
          </div>
        </form>
      </Modal>
      <Modal
        className="SubscribeTo"
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
                value="Devenir Premium"
                onClick={togglePremiumSelected}
              />
            </div>
            <div className="formGroup">
              <input type="submit" value="Rester Freemium" />
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        isShowing={isPremiumSelectedShowed}
        hide={togglePremiumSelected}
        title="Formulaire d'inscription:"
      >
        <form>
          <div className="formGroup">
            <input type="text" placeholder="Prénom" />
          </div>
          <div className="formGroup">
            <input type="text" placeholder="Nom" />
          </div>
          <div className="formGroup">
            <input type="text" placeholder="Adresse" name="adress" />
          </div>
          <div className="formGroup">
            <input type="text" placeholder="Ville" name="city" />
          </div>
          <div className="formGroup">
            <input type="text" placeholder="N° de carte de crédit" />
          </div>
          <div className="formGroup">
            <input type="text" placeholder="CVV" />
          </div>
          <div className="formGroup">
            <input
              type="text"
              placeholder="Date d'expiration (Day/Month/Year)"
            />
          </div>
          <div className="formGroup">
            <input type="submit" value="Confirmer" />
          </div>
        </form>
      </Modal>
    </div>
  );
}
