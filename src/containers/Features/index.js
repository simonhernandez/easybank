import React from "react";
import { Feature } from "../../components";

import "./styles.scss";

const Features = ({ features }) => {
  return (
    <section className="features">
      <div className="wrapper">
        <header
          className="features__header"
          data-aos="fade"
          data-aos-duration="1200"
        >
          <h1 className="heading heading--2">Why choose Easybank?</h1>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </header>

        <ul className="features__list" role="list">
          {features.map((feature, index) => {
            return (
              <li
                className="features__item"
                key={index}
                data-aos="fade"
                data-aos-duration="1200"
                data-aos-delay={`${index * 200}`}
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
