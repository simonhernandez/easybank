import React from "react";
import { logo } from "../../constants/images";

import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__logo"><img src={logo} alt="logo" /></div>
      </div>
    </footer>
  );
};

export default Footer;
