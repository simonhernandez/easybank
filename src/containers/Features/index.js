import React from "react";

import './styles.scss';

const Features = ({ features }) => {
  return (
    <section className="features">
      <div className="wrapper">
        <header className="features__header">
          <h1 className="heading heading--1">Why choose Easybank?</h1>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </header>

        <ul className="features__list" role="list">
          {features.map((feature, index) => {
            return (
              <li className="features__item" key={index}>
                <div className="features__img-container">
                  <img src={feature.image} alt={feature.name} />
                </div>
                <h3 className="heading heading--3">{feature.name}</h3>
                <p>{feature.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Features;
