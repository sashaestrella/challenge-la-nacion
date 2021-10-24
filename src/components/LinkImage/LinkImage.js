import React from "react";

function LinkImage({ img, name, link }) {
  return (
    <a href={link} data-testid="link-image">
      <img src={img} alt={name}></img>
    </a>
  );
}

export default LinkImage;
