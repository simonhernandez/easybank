import React from "react";

import './styles.scss'

const Feature = ({feature}) => {
  return (
    <li className="feature__item">
      <div className="feature__img-container">
        <img src={feature.image} alt={feature.name} />
      </div>
      <h3 className="heading heading--3">{feature.name}</h3>
      <p>{feature.description}</p>
    </li>
  );
};

export default Feature;
