import React from "react";
import "../styles/global.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Maple & Mug</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Menu</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
