import { createContext, useState, useMemo } from "react";
import axios from "axios";
import { PropTypes } from "prop-types";

const UserContext = createContext({
  currentUser: {},
  setLoginForm: null,
  loginForm: {},
  hLogin: null,
});
export default UserContext;

export function UserInfosContext({ children }) {
  const [currentUser, setCurrentUser] = useState({
    username: "",
    lastname: "",
    email: "",
    premium: 0,
  });

  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  const hLogin = (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:5000/login", loginForm)
      .then(({ data }) => {
        setCurrentUser(data.user);
      })
      .catch((err) => {
        console.error("Error while logging in", err);
      });
  };

  const context = useMemo(
    () => ({
      currentUser,
      loginForm,
      setCurrentUser,
      setLoginForm,
      hLogin,
    }),
    [currentUser, loginForm, setLoginForm, setCurrentUser]
  );
  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
}

UserInfosContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
