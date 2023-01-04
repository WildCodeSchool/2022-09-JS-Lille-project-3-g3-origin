import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiHomeAlt } from "react-icons/bi";

export default function NavBar() {
  const activeStyle = {
    backgroundColor: "#ff8200",
    color: "white",
    borderColor: "rgba(252, 252, 252, 0.9)",
  };

  return (
    <ul className="main-nav-bar">
      <NavLink
        to="/"
        className="nav-links"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li className="nav-option">
          Home <BiHomeAlt />
        </li>
      </NavLink>
      <NavLink
        to="/search"
        className="nav-links"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li className="nav-option">
          Search <BsSearch />
        </li>
      </NavLink>
      <NavLink
        to="/profil"
        className="nav-links"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li className="nav-option">
          Profil <CgProfile />
        </li>
      </NavLink>
      <NavLink
        to="/favoris"
        className="nav-links"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li className="nav-option">
          Favoris <FiHeart />
        </li>
      </NavLink>
    </ul>
  );
}
