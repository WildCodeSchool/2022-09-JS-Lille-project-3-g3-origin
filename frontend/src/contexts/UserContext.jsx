import { createContext, useState, useMemo, useEffect } from "react";
import { PropTypes } from "prop-types";
import swal from "sweetalert";
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
  const [videos, setVideos] = useState([]);
  const [favVideos, setFavVideos] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    lastname: "",
    email: "",
    premium: 0,
    city: "",
    address: "",
    firstname: "",
  });

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

  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  const [userProfil, setUserProfil] = useState(currentUser);

  useEffect(() => async () => setVideos(await Query.getAllVideos()), []);

  const hUserQueryRes = async (func, loc) => {
    const queryResult = await func;
    const { user } = queryResult;

    if (user !== undefined && Object.keys(user).length > 0) {
      setCurrentUser(user);
      setIsAuthenticated(true);
    } else {
      console.error(loc);
      swal({
        title: "Aie !",
        text: "Il y a eu une erreur !",
        icon: "error",
      });
    }
  };

  const hLogin = (evt) => {
    evt.preventDefault();
    hUserQueryRes(Query.login(loginForm), "login");
    swal({
      title: "Bienvenue !",
      text: "Bon visionnage !",
      icon: "success",
      buttons: false,
      timer: 1000,
    });
  };

  const hRegistration = (evt) => {
    evt.preventDefault();
    hUserQueryRes(Query.registration(registrationForm), "registration");
    swal({
      title: "Bienvenue !",
      text: "Bon visionnage !",
      icon: "success",
      buttons: false,
      timer: 1000,
    });
  };

  const hEditFormSubmit = (evt) => {
    evt.preventDefault();
    hUserQueryRes(Query.editUser(userProfil, currentUser.id), "editing user");
    swal({
      title: "C'est noté !",
      text: "Nous avons pris en compte vos changement !",
      icon: "success",
    });
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
      videos,
      favVideos,
      setUserProfil,
      setRegistrationForm,
      setCurrentUser,
      setLoginForm,
      setFavVideos,
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
      videos,
      favVideos,
      setUserProfil,
      setRegistrationForm,
      setLoginForm,
      setCurrentUser,
      setFavVideos,
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
