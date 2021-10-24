import React from "react";
import LinkImage from "./../LinkImage/LinkImage";
import LinksLine from "./LinksLine/LinksLine";
import { LINKS } from "../../dataDummy/footer.js";
import "./Footer.scss";

//Images
import iosBottom from "./../../assets/images/ios-bottom.svg";
import androidBottom from "./../../assets/images/android-bottom.svg";
import instagram from "./../../assets/images/instagram-icon.svg";
import rss from "./../../assets/images/rss-icon.svg";
import twitter from "./../../assets/images/twitter-icon.svg";
import facebook from "./../../assets/images/facebook-icon.svg";
import gdaIcon from "./../../assets/images/gda-icon.svg";
import fiscalIcon from "./../../assets/images/fiscal-icon.svg";
import logo from "../../assets/images/la-nacion-logo.svg";


function Footer(props) {
  const { sections, journals, clubvino, shipping, bottomRight, bottomLeft } = LINKS;
  
  return (
    <footer className="footer" data-testid="footer">
      <div className="wrap-footer">
        <section className="top">
          <div className="links">
            <div className="logo">
              <LinkImage img={logo} name="la-nacion-logo.svg" link="/" />
            </div>
            <div className="social">
              <LinkImage img={facebook} name="facebook-icon" link="#" />
              <LinkImage img={twitter} name="twitter-icon" link="#" />
              <LinkImage img={instagram} name="instagram-icon" link="#" />
              <LinkImage img={rss} name="rss-icon" link="#" />
            </div>
          </div>
          <div className="dowl">
            <LinkImage img={androidBottom} name="android-bottom" link="#" />
            <LinkImage img={iosBottom} name="ios-bottom" link="#" />
          </div>
        </section>

        <section className="medium">
          <div className="block-links">
            <LinksLine links={sections} name="link-sec" />
            <LinksLine links={journals} name="link-rev" />
            
            <div className="wrap">
              <LinksLine links={clubvino} name="link-club" />
              <LinksLine links={shipping} name="link-envios" />
            </div>
          </div>
        </section>

        <section className="bottom">
          <div className="column">
            <div className="bottom">
              <LinksLine links={bottomLeft} name="links-bottomLeft" />
              <LinksLine links={bottomRight} name="links-bottomRight" />
            </div>
            
            <div className="bottom-rev">
              <div className="gda-fiscal">
                <div className="gda">
                  <LinkImage img={gdaIcon} name="gda-icon" link="#" />
                  <span className="span-gda">
                    Miembro de GDA. Grupo de Diarios América
                  </span>
                </div>
                <div className="fiscal">
                  <LinkImage img={fiscalIcon} name="fiscal-icon" link="#" />
                </div>
              </div>
              <span className="copyright">
                Copyright 2019 SA LA NACION | Todos los derechos reservados
              </span>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
