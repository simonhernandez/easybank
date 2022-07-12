import React from "react";
import { Article } from "../../components";

import "./styles.scss";

const Articles = ({ articles }) => {
  return (
    <section className="articles">
      <div className="articles__header">
        <h2 className="heading heading--2">Articles</h2>
      </div>

      <ul className="articles__list">
        {articles.map((article, index) => {
          return <Article article={article} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Articles;
