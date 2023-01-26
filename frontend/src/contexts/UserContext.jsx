import { createContext, useState, useMemo, useEffect } from "react";
import { PropTypes } from "prop-types";
import swal from "sweetalert";
import Query from "../services/Query";

const UserContext = createContext({
  currentUser: {},
  videos: {},
  favVideos: {},
  isAuthenticated: 0,
  hUserQueryRes: null,
});
export default UserContext;

export function UserInfosContext({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [videos, setVideos] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    lastname: "",
    email: "",
    premium: 0,
    city: "",
    address: "",
    firstname: "",
  });

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

  const context = useMemo(
    () => ({
      currentUser,
      isAuthenticated,
      videos,
      hUserQueryRes,
    }),
    [currentUser, isAuthenticated, videos, hUserQueryRes]
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
