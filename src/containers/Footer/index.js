import React from "react";
import { CTA } from "../../components";
import {
  logoWhite,
  iconFacebook,
  iconYoutube,
  iconTwitter,
  iconPinterest,
  iconInstagram,
} from "../../constants/images";

import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__logo">
          <a href="#"><img src={logoWhite} alt="logo" /></a>
        </div>

        <ul className="footer__social-list" role="list">
          <li className="footer__social-item">
            <a href="#">
              <img src={iconFacebook} alt="Facebook" />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="#">
              <img src={iconYoutube} alt="Youtube" />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="#">
              <img src={iconTwitter} alt="Twitter" />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="#">
              <img src={iconPinterest} alt="Pinterest" />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="#">
              <img src={iconInstagram} alt="Instragram" />
            </a>
          </li>
        </ul>

        <nav className="nav">
          <ul className="nav__list" role="list">
            <li className="nav__item">
              <a className="nav__link" href="#">about us</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">contact</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">blog</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">careers</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">support</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">privacy policy</a>
            </li>
          </ul>

          <CTA />
        </nav>

        <div className="footer__copyright">
            <p>&copy; Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
