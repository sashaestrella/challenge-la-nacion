import React from "react";
import CardArticle from "../../Article/CardArticle/CardArticle.js";
import "./ArticlesSection.scss";

function ArticlesSection({ articles, nroRender, maxArticles, newStyles, changeGrid, increment, title, link, url }) {
  const BlockArticles = articles.slice(1, maxArticles);
  const articlesLeft = BlockArticles.map((item, index) => {
    return (
      <CardArticle key={index} article={item} render={increment? index+1 : 1} leftItem={true}/>
    )
  });

  return (
    <section style={{marginTop: title? 40 : 0}} data-testid="ArticlesSection">
      <div className="modul-title">
        { title && link ? 
          (
            <a href={url}>
              <h1>{title}</h1>
            </a>
          ) : (
            <h1>{title}</h1>
          )
        }
      </div>

      { BlockArticles && !newStyles ?
        (
          <div className="block-art" style={{gridTemplateColumns: changeGrid? "1fr 2fr" :"2fr 1fr"}}>
            <div className="art-left">
              <CardArticle article={BlockArticles[0]} render={nroRender} />
            </div>
            <div className="art-right" >
              {articlesLeft}
            </div>
          </div>
        )

        : 

        <div className="sect-render">
          {articlesLeft}
        </div>
      }
    </section>
  );
}

export default ArticlesSection;
