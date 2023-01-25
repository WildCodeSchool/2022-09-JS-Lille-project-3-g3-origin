import Registration from "@components/Registration/Registration";
import SwiperHome from "@components/SwiperHome/SwiperHome";
import NavBar from "../../components/NavBar/NavBar";

export default function Home() {
  return (
    <header className="home">
      <Registration />
      <SwiperHome />
      <NavBar className="nav-bar-home" />
    </header>
  );
}
