import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="nav-logo">
        🎬 MovieMS
      </div>

      {/* LINKS */}
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className="nav-link">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" className="nav-link">
           ➕ Add Movie
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
