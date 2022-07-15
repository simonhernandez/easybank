import React from "react";

import './styles.scss'

const Feature = ({feature}) => {
  return (
    <div className="feature__item">
      <div className="feature__img-container">
        <img src={feature.image} alt="" />
      </div>
      <h3 className="heading heading--3">{feature.name}</h3>
      <p>{feature.description}</p>
    </div>
  );
};

export default Feature;
