import React, { useState } from "react";
import { logo, iconHamburger } from "../../constants/images";

import "./styles.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="EasyBank Logo" />
      </div>

      {toggleMenu && (
        <>
          <ul className="navbar__menu" role="list">
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Home
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                About
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Contact
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Blog
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Careers
              </a>
            </li>
          </ul>
          <button className="navbar__ghost-button"></button>
        </>
      )}

      <button
        className="navbar__toggle"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <img src={iconHamburger} alt="Toggle Menu" />
      </button>
    </nav>
  );
};

export default Navbar;
