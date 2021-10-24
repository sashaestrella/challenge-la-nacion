import React, { useEffect, useState } from "react";
import Article from "../Article";

function CardArticle({ article, render, marqueeOnly, leftItem }) {
  const [articleToReturn, setArticleToReturn] = useState();
  
  useEffect(() => {
    const { lead, title, subheader, img, marquee, autor, imgautor, url } = article;
    const evaluate = {
      1: function () {
        return (
          <Article marqueeOnly={marqueeOnly} leftItem={leftItem} imgBottom={false} elements={{ img, lead, title, marquee, autor, url }} />
        );
      },
      2: function () {
        return (
          <Article leftItem={leftItem} elements={{ lead, title, subheader, marquee, autor, url }} />
        );
      },
      3: function () {
        return (
          <Article border={true} authorOnly={true} leftItem={leftItem} elements={{ lead, title, imgautor, marquee, autor, url }} />
        );
      },
      4: function () {
        return (
          <Article elements={{ img, lead, title, marquee, autor, url }} />
        );
      },
      5: function () {
        return (
          <Article titleSize={32} elements={{ lead, title, subheader, marquee, autor, url }} />
        );
      },
      6: function () {
        return (
          <Article titleSize={30} imgBottom={true} elements={{ img, lead, title, subheader, marquee, autor, url }} />
        );
      }
    };

    if(render) {
      setArticleToReturn(evaluate[render])
    }

  }, [article, render, marqueeOnly, leftItem])

  return (
    <div>
        {articleToReturn}
    </div>
  );
}

export default CardArticle;
