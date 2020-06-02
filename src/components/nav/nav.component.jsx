import React, { useEffect } from "react";
import "./nav.style.scss";

import logo from "../../images/logo.jpg";

import { EventHandler } from "../EventHandler";

function Navbar({ currentUser }) {
  useEffect(() => {
    let ev = new EventHandler();
  }, []);

  return (
    <div className="header">
      <img src={logo} alt="logo" />

      <div className="options">
        <a href="#about-section" className="option">
          About
        </a>
        <a href="#portfolio-section" className="option">
          Portfolio
        </a>

        <a href="#contact-section" className="option">
          Contact
        </a>
      </div>
      <div className="header__menu-icon ">
        <div className="header__menu-icon__top"></div>
        <div className="header__menu-icon__middle"></div>
        <div className="header__menu-icon__bottom"></div>
      </div>
    </div>
  );
}

export default Navbar;
