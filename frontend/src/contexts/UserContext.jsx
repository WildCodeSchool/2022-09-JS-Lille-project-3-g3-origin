import { createContext, useState, useMemo, useEffect } from "react";
import { PropTypes } from "prop-types";
import useApi from "@services/useApi";
import Query from "@services/Query";

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
  const api = useApi();

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

  // const { token } = currentUser;

  const hLogin = async (evt) => {
    evt.preventDefault();
    const queryResult = await Query.login(loginForm);
    const { user } = queryResult;

    if (user !== undefined && Object.keys(user).length > 0) {
      setCurrentUser(user);
      setIsAuthenticated(true);
    } else {
      console.error("Problem login context");
    }
    // api
    //   .post("/login", loginForm)
    //   .then(({ data }) => {
    //     console.log(data);
    //     const { token, user } = data;
    //     api.defaults.headers.authorization = `Bearer ${token}`;
    //     setIsAuthenticated(true);
    //     setCurrentUser(user);
    //   })
    //   .catch((err) => {
    //     console.error("Error while logging in", err);
    //   });
  };

  const hRegistration = async (evt) => {
    evt.preventDefault();
    const queryResult = await Query.login(registrationForm);
    const { user } = queryResult;

    if (user !== undefined && Object.keys(user).length > 0) {
      setCurrentUser(user);
      setIsAuthenticated(true);
    } else {
      console.error("Problem login context");
    }
    // api
    //   .post("/users", registrationForm)
    //   .then(({ data }) => {
    //     const { token, user } = data;

    //     api.defaults.headers.authorization = `Bearer ${token}`;
    //     setIsAuthenticated(true);
    //     setCurrentUser(user);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  const hEditFormSubmit = (evt) => {
    evt.preventDefault();
    api
      .put(`/users/${currentUser.id}`, userProfil)
      .then(({ data }) => {
        // const { token } = currentUser;
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error("Error editing the user", err);
      });
  };

  useEffect(() => {
    setUserProfil(currentUser);
    // console.log(currentUser);
    console.log("user profil : ", userProfil);
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
  // console.log(currentUser);
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
