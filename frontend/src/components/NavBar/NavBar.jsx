import "./navbar.scss";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const activeStyle = {
    backgroundColor: "rgba(3, 3, 3, 0.9)",
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
        <li className="nav-option">Home</li>
      </NavLink>
      <NavLink
        to="/search"
        className="nav-links"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li className="nav-option">Search</li>
      </NavLink>
      <NavLink
        to="/profil"
        className="nav-links"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li className="nav-option">Profil</li>
      </NavLink>
      <NavLink
        to="/favoris"
        className="nav-links"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li className="nav-option">Favoris</li>
      </NavLink>
    </ul>
  );
}
