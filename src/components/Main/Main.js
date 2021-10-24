import React from "react";
import Body from "./Body/Body";
import "./Main.scss";

function Main({ articles }) {
  return (
    <div className="main" data-testid="main">
      <div className="wrap-body">
        <section className="cabezal" data-testid="cabezal">
          <div className="container"></div>
        </section>
        <Body data-testid="Body" articles={articles} />
      </div>
      
      <div className="sidebar">
        <aside className="m-lateral" data-testid="sidebar">
          <div className="cont-aside"></div>
        </aside>
      </div>
    </div>
  );
}

export default Main;
