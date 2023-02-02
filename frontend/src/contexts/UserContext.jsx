import { createContext, useState, useMemo, useEffect } from "react";
import { PropTypes } from "prop-types";
import swal from "sweetalert";
import Query from "../services/Query";
import localStorage from "../services/localStorage";

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
  const [favVideos, setFavVideos] = useState([]);
  const [updateFav, setUpdateFav] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: 0,
    username: "",
    lastname: "",
    email: "",
    premium: 0,
    city: "",
    address: "",
    firstname: "",
  });

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user !== null) setCurrentUser(user);
  }, []);

  useEffect(() => {
    if (currentUser.id) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [currentUser]);

  useEffect(() => async () => setVideos(await Query.getAllVideos()), []);

  const hUserQueryRes = async (func, loc) => {
    const queryResult = await func;
    const { user } = queryResult;

    if (user !== undefined && Object.keys(user).length > 0) {
      setCurrentUser(user.user);
      localStorage.saveItem("currentUser", user.user);
      localStorage.saveItem("token", user.token);
      swal({
        title: "Bienvenue !",
        text: "Bon visionnage !",
        icon: "success",
        buttons: false,
        timer: 1000,
      });
    } else {
      console.error(loc);
      swal({
        title: "Aie !",
        text: "Il y a eu une erreur !",
        icon: "error",
      });
    }
  };

  const mapFav = (myVideos) => {
    const copyFavVids = favVideos.slice(0);
    return myVideos.map((myVideo) => {
      let i = 0;
      while (i < copyFavVids.length && copyFavVids[i].id <= myVideo.id) {
        if (copyFavVids[i].id === myVideo.id) {
          copyFavVids.splice(i, 1);
          return { ...myVideo, isFav: true };
        }
        i += 1;
      }
      return { ...myVideo, isFav: false };
    });
  };

  const hLogOut = () => {
    setCurrentUser({});
    localStorage.clearStorage();
    swal({
      title: "Au revoir !",
      text: "A Bientot !",
      icon: "success",
    });
  };

  useEffect(() => {
    Query.getFavVideos(currentUser.id ? currentUser.id : 0)
      .then((videosFav) => setFavVideos(videosFav))
      .catch((err) => console.error(err));
  }, [currentUser, updateFav]);

  const context = useMemo(
    () => ({
      currentUser,
      isAuthenticated,
      videos,
      favVideos,
      updateFav,
      setVideos,
      setUpdateFav,
      setFavVideos,
      mapFav,
      hLogOut,
      hUserQueryRes,
    }),
    [
      currentUser,
      isAuthenticated,
      videos,
      updateFav,
      favVideos,
      hUserQueryRes,
      setUpdateFav,
      setFavVideos,
      setVideos,
      hLogOut,
      mapFav,
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
