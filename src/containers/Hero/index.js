import React from "react";
import { useState, useEffect } from "react";

import { bgMobile, bgDesktop, imageMockups } from "../../constants/images";
import { ReactComponent as BgMobile } from "../../assets/images/bg-intro-mobile.svg";
import { ReactComponent as BgDesktop } from "../../assets/images/bg-intro-desktop.svg";

import "./styles.scss";
import { CTA } from "../../components";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(true);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <section className="section hero">
      <div className="wrapper">
        {isMobile ? (
          <BgMobile className="hero__bg-img" />
        ) : (
          <BgDesktop className="hero__bg-img" />
        )}
        <div className="hero__img-container">
          <img src={imageMockups} alt="Phone Mockups" />
        </div>

        <div className="hero__text-container">
          <h1 className="heading heading--1">
            Next generation digital banking
          </h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <CTA />
        </div>
      </div>
    </section>
  );
};

export default Hero;
