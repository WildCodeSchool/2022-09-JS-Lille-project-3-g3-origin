import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Registration from "../../components/Registration/Registration";
import SwiperHome from "../../components/SwiperHome/SwiperHome";
import NavBar from "../../components/NavBar/NavBar";
import UserContext from "../../contexts/UserContext";

export default function Home() {
  const navigate = useNavigate();

  const { isAuthenticated, currentUser } = useContext(UserContext);

  // TO DO : handle routes with router
  useEffect(() => {
    if (!isAuthenticated) navigate("/");
    if (!currentUser.premium) navigate("/premium");
  }, [isAuthenticated, currentUser]);

  return (
    <header className="home">
      <NavBar />
      <Registration />
      <SwiperHome />
    </header>
  );
}
