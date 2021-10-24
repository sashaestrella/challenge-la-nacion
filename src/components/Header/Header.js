import React from "react";
import "./Header.scss";

function Header({ sectionName, article }) {
  return (
    <header className="container-card" data-testid="header">
      <section className="card" data-testid="card">
        <div className="card-bottom">
          <div className="wrap-card">
            <div className="sectionName">{sectionName}</div>
            <h1>
              {article.lead}. {article.title}
            </h1>
            <span>
              {article.marquee} / {article.autor}
            </span>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
