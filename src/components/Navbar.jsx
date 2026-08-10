import { Link } from "react-router-dom";
import "../styles/global.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Maple & Mug
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
