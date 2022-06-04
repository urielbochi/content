import React from "react";
import { Link } from "react-scroll";
import logo from "../images/logo.png";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="positionFixed">
      <div className="navbar__container">
        <img className="navbar__image" src={logo} />
        <div className="linksTest">
          <Link className="clickable bast" to="home" spy={true} smooth={true} duration={1500}>
            HOME
          </Link>
          <Link className="clickable bast" to="about" spy={true} smooth={true} duration={1500}>
            ABOUT
          </Link>
          <Link className="clickable bast" to="projects" spy={true} smooth={true} duration={1500} >
            PROJECTS
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
