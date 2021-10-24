import React from "react";
import "./LinksLine.scss";

function LinksLine({ links, name }) {
  const rowLinks = links.map((item, index) => {
    const { url, link } = item;

    return (
      <a key={index} href={url}>
        {link}
      </a>
    );
  });
  
  return (
    <div className={name} data-testid="link-line">
      <ul className="row-links">{rowLinks}</ul>
    </div>
  );
}

export default LinksLine;
