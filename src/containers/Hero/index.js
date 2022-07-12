import React from "react";

import { bgMobile, bgDesktop, imageMockups } from "../../constants/images";
import { ReactComponent as Icon } from '../../assets/images/bg-intro-mobile.svg';

const Hero = () => {
  return (
    <section className="section hero">
      <div className="hero__img-container">
        <Icon />
        <img src={imageMockups} alt="Phone Mockups" />
      </div>

      <div className="hero__text-container">
        <h1 className="heading heading--1">Next generation digital banking</h1>
        <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <button className="btn btn--cta">Request Invite</button>
      </div>
    </section>
  );
};

export default Hero;
