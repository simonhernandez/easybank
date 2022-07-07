import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="" alt="" />
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

      <button className="navbar__toggle"></button>
    </nav>
  );
};

export default Navbar;
