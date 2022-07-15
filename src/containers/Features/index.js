import React from "react";
import { Feature } from "../../components";
import { ANIMATION_DURATION, ANIMATION_DELAY } from '../../constants/animationParams';

import "./styles.scss";

const Features = ({ features }) => {
  return (
    <section className="features">
      <div className="wrapper">
        <header
          className="features__header"
          data-aos="fade"
          data-aos-duration={`${ANIMATION_DURATION}`}
        >
          <h1 className="heading heading--2">Why choose Easybank?</h1>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </header>

        <ul className="features__list">
          {features.map((feature, index) => {
            return (
              <li
                className="features__item"
                key={index}
                data-aos="fade"
                data-aos-duration={`${ANIMATION_DURATION}`}
                data-aos-delay={`${index * ANIMATION_DELAY}`}
              >
                <Feature feature={feature} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Features;
