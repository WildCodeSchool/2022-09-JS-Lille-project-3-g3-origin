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

  const mapFav = (myVideos) => {
    return myVideos.map((myVideo) => {
      for (let i = 0; i < favVideos.length; i += 1) {
        if (favVideos[i].id === myVideo.id) {
          return { ...myVideo, isFav: true };
        }
      }

      return { ...myVideo, isFav: false };
    });
  };

  const hLogOut = () => {
    setCurrentUser({});
    setIsAuthenticated(false);
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
