import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiHomeAlt } from "react-icons/bi";
import Logo from "../../assets/logo.png";
import ButtonLogOut from "../ButtonLogOut/ButtonLogOut";

export default function NavBar() {
  const activeStyle = {
    backgroundColor: "#ff8200",
    color: "#010d18",
    borderradius: "2.5rem",
    border: "1px solid #ff8200",
  };

  return (
    <div className="nav-bar-container">
      <img className="logo-nav-bar" src={Logo} alt="origin-logo" />
      <ul className="main-nav-bar">
        <NavLink
          to="/home"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className="nav-option">
            <span className="nav-mobile">Accueil</span> <BiHomeAlt />
          </li>
        </NavLink>
        <NavLink
          to="/search"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className="nav-option">
            <span className="nav-mobile">Recherche</span> <BsSearch />
          </li>
        </NavLink>
        <NavLink
          to="/profil"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className="nav-option">
            <span className="nav-mobile">Profil</span> <CgProfile />
          </li>
        </NavLink>
        <NavLink
          to="/favoris"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className="nav-option">
            <span className="nav-mobile">Favoris</span> <FiHeart />
          </li>
        </NavLink>
      </ul>
      <ButtonLogOut />
    </div>
  );
}
