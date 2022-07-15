import React, { useState, useEffect } from "react";
import { CTA } from '../../components'
import { logo, iconHamburger } from "../../constants/images";

import "./styles.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setToggleMenu(true)
      setIsMobile(false)
    } else {
      setToggleMenu(false)
      setIsMobile(true)
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="EasyBank Logo" />
      </div>

      {toggleMenu && (
        <>
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
          <button className="navbar__ghost-button" onClick={() => setToggleMenu(!toggleMenu)}></button>
        </>
      )}

      <button
        className="navbar__toggle"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <img src={iconHamburger} alt="Toggle Menu" />
      </button>

      {!isMobile && (
        <CTA />
      )}
    </nav>
  );
};

export default Navbar;
