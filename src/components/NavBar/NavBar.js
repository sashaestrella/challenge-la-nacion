import React from "react";
import logo from "../../assets/images/la-nacion-logo.svg";
import searchIcon from "./../../assets/images/search-icon.svg";
import menuIcon from "./../../assets/images/menu-icon.svg";
import LinkImage from "../LinkImage/LinkImage";
import Button from "../Button/Button";
import "./NavBar.scss";

function NavBar(props) {

  return (
    <div className="lay" data-testid="navbar">
      <div className="row">
        <div className="btns-left">
          <Button buttonClassName="btn-section" dataTestid="Button-sections" logo={menuIcon} buttonText="SECCIONES"></Button>
          <Button buttonClassName="btn-search" dataTestid="Button-search" logo={searchIcon} buttonText="BUSCAR"></Button>
        </div>

        <div className="logo" data-testid="LogoLaNacion">
          <LinkImage img={logo} name="la-nacion-logo.svg" link="/" />
        </div>

        <div className="btns-right">
          <div className="wrap">
            <Button buttonClassName="btn-suscribe" dataTestid="suscribe" buttonText="SUSCRIBITE"></Button>
          </div>

          <Button buttonClassName="btn-search-icon" imgClassName="icon" logo={searchIcon}></Button>
          <Button buttonClassName="btn-signin" dataTestid="Button-signin" buttonText="INGRESAR"></Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
