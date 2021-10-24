import React from "react";
import ArticlesSection from "./ArticlesSection/ArticlesSection";
import "./Body.scss";

function Body({ articles }) {
  return (
      <div className="body" data-testid="Body">
        <ArticlesSection articles={articles} nroRender={6} maxArticles={3} link={true} url="#" />
        <ArticlesSection articles={articles} nroRender={1} maxArticles={4} newStyles={true} link={true} url="#" />
        <ArticlesSection articles={articles} title="Focal Derecho" nroRender={5} maxArticles={2} changeGrid={true} link={true} url="#" />
        <ArticlesSection articles={articles} title="Notas x 3" maxArticles={4} increment={true} newStyles={true} changeGrid={true} link={true} url="#" />
      </div>
  );
}

export default Body;
