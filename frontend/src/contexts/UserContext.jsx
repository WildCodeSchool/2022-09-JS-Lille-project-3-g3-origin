import { createContext, useState, useMemo, useEffect } from "react";
import { PropTypes } from "prop-types";
import Query from "../services/Query";

const UserContext = createContext({
  currentUser: {},
  registrationForm: {},
  setRegistrationForm: null,
  userProfil: {},
  setUserProfil: null,
  setLoginForm: null,
  loginForm: {},
  hLogin: null,
});
export default UserContext;

export function UserInfosContext({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    username: "",
    lastname: "",
    email: "",
    premium: 0,
  });

  const [registrationForm, setRegistrationForm] = useState({
    username: "",
    lastname: "",
    email: "",
    password: "",
    premium: 0,
  });

  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  const [userProfil, setUserProfil] = useState(currentUser);

  const hUserQueryRes = async (func, loc) => {
    const queryResult = await func;
    const { user } = queryResult;

    if (user !== undefined && Object.keys(user).length > 0) {
      setCurrentUser(user);
      setIsAuthenticated(true);
    } else {
      console.error(`Error ${loc} context`);
    }
  };

  const hLogin = (evt) => {
    evt.preventDefault();
    hUserQueryRes(Query.login(loginForm), "login");
  };

  const hRegistration = (evt) => {
    evt.preventDefault();
    hUserQueryRes(Query.registration(registrationForm), "registration");
  };

  const hEditFormSubmit = (evt) => {
    evt.preventDefault();
    hUserQueryRes(Query.editUser(userProfil, currentUser.id), "editing user");
  };

  useEffect(() => {
    setUserProfil(currentUser);
  }, [currentUser]);

  const context = useMemo(
    () => ({
      currentUser,
      loginForm,
      registrationForm,
      userProfil,
      isAuthenticated,
      setUserProfil,
      setRegistrationForm,
      setCurrentUser,
      setLoginForm,
      hLogin,
      hRegistration,
      hEditFormSubmit,
    }),
    [
      currentUser,
      loginForm,
      registrationForm,
      userProfil,
      isAuthenticated,
      setUserProfil,
      setRegistrationForm,
      setLoginForm,
      setCurrentUser,
    ]
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
