import React from "react";
import { logo, iconHamburger } from "../../constants/images";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="EasyBank Logo" />
      </div>

      <ul className="navbar__menu">
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

      <button className="navbar__toggle">
        <img src={iconHamburger} alt="Toggle Menu" />
      </button>
    </nav>
  );
};

export default Navbar;
