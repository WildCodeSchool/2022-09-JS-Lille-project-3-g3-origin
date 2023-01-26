import SwiperHome from "@components/SwiperHome/SwiperHome";
import NavBar from "../../components/NavBar/NavBar";

export default function Home() {
  return (
    <header className="home">
      <SwiperHome />
      <NavBar className="nav-bar-home" />
    </header>
  );
}
