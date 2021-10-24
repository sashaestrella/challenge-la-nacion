import React from "react";
import "./Article.scss";

function Article({ border, elements, titleSize, marqueeOnly, leftItem, authorOnly, imgBottom }) {
  return (
    <article className="article">
      <div style={{border: border? "1px solid #cccccc" : ""}} >
        { elements.img && !imgBottom &&
          (
            <div className="art-img">
              <img src={elements.img} alt="img-article"></img>
            </div>
          )
        }

        <div className="wrap-art">
          <h1 className="lead-title" style={{fontSize: titleSize, textAlign: border? "center" : "left", margin: border? 20 : 0,
            fontStyle: leftItem? 'normal' : '', fontWeight: leftItem? 'normal' : ''}}>
            <a className="lead" href={elements.url}>
              {elements.lead}.{" "}
            </a>
            <a className="title" href={elements.url}>
              {elements.title}
            </a>
          </h1>

          { elements.subheader && <h2 className="subh">{elements.subheader}</h2>}

          { elements.imgautor && (
            <div className="img-autor" style={{marginTop: border? 35 : 0}}>
              <img src={elements.imgautor} alt="img-autor"></img>
            </div>
          )}

          { elements.marquee && elements.autor && !authorOnly && !marqueeOnly ?
            <span className="nameautor" style={{justifyContent: elements.imgautor? "center" : "left", marginTop: 3}}>
              {elements.marquee} / {elements.autor}
            </span>

            :

            !marqueeOnly? 
              <span className="nameautor" style={{justifyContent: elements.imgautor? "center" : "left", marginTop: 3}}>
                {elements.autor}
              </span>
              
              : 

              <span className="nameautor" style={{justifyContent: elements.imgautor? "center" : "left", marginTop: 3}}>
                {elements.marquee}
              </span>
          }

          { elements.img && imgBottom &&
            (
              <div className="art-img" style={{marginTop: 10}} >
                <img src={elements.img} alt="img-article"></img>
              </div>
            )
          }
        </div>
      </div>
    </article>
  );
}

export default Article;
