import React from "react";
import { Article } from "../../components";

import "./styles.scss";

const Articles = ({ articles }) => {
  return (
    <section className="articles">
      <div className="wrapper">
        <div className="articles__header" data-aos="fade" data-aos-duration="1200">
          <h2 className="heading heading--2">Lastest Articles</h2>
        </div>

        <ul className="articles__list">
          {articles.map((article, index) => {
            return <Article article={article} key={index} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Articles;
