import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";

function NavBar({ navBarState, navBarOpen }) {
  return (
    <div className="navbar__container navbar__section">
      <div>
        <Link to="/home" spy={true} smooth={true} offset={50} duration={500}>
          Home
        </Link>
      </div>
      <div>
        <Link to="about" spy={true} smooth={true} offset={50} duration={1500}>
          About
        </Link>
      </div>
      <div>
        <Link href="/projects">Projects</Link>
      </div>
    </div>
  );
}

export default NavBar;
