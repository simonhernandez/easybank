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
      <div className="wrapper" data-aos="fade" data-aos-duration="1200">
        <div className="footer__logo">
          <a href="#">
            <img src={logoWhite} alt="logo" />
          </a>
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

        <nav className="nav text-sm">
          <ul className="nav__list nav__list--left" role="list">
            <li className="nav__item">
              <a className="nav__link" href="#">
                about us
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                contact
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                blog
              </a>
            </li>
          </ul>
          <ul className="nav__list nav__list--right" role="list">
            <li className="nav__item">
              <a className="nav__link" href="#">
                careers
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                support
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                privacy policy
              </a>
            </li>
          </ul>
        </nav>

        <CTA className="footer__cta" />

        <div className="footer__copyright">
          <p className="text-sm">&copy; Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
