import React, { useEffect, useState } from "react";
import logoClub from "../../../assets/images/club-la-nacion-logo.svg";
import weatherIcon from "../../../assets/images/weather-icon.svg";
import LinkImage from "../../LinkImage/LinkImage";
import { DOLARBLUE, DOLARBNA } from "../../../dataDummy/dolar.js";
import { GEOWEATHER } from "../../../dataDummy/weather.js";
import Button from "../../Button/Button";
import "./SubNavBar.scss";

function SubNavBar(props) {
  const [dolarBlue, setDolarBlue] = useState();
  const [dolarBna, setDolarBna] = useState();
  const [geoWeather, setGeoWeather] = useState();

  useEffect(() => {
    setDolarBlue(DOLARBLUE);
    setDolarBna(DOLARBNA);
    setGeoWeather(GEOWEATHER);
  }, [dolarBlue, dolarBna, geoWeather]);

  return (
    <section className="sub-navbar" data-testid="sub-navbar">
      <div className="lay">
        <div className="row">
          { dolarBlue && dolarBna && 
            <div className="dolar" data-testid="dolar">
              <a className="a-dolar" href="/dolar">
                Dólar:
              </a>
              <span className="dolar-bna">
                ${dolarBna.buy} / ${dolarBna.sell}
              </span>
              <span className="dolar-blue">
                ${dolarBlue.buy} / ${dolarBlue.sell}
              </span>
            </div>
          }

          { geoWeather && 
            <div className="weather" data-testid="weather">
              <LinkImage img={weatherIcon} link="/weaher" name="weather-icon.svg" />
              <span className="grad">{geoWeather.gradius}</span>
              <span className="name">{geoWeather.city}</span>
            </div>
          }

          <Button buttonClassName="newsl" dataTestid="news-letters" buttonText="Recibí Newsletters" imgTop={true}></Button>
          <Button buttonClassName="clubn" dataTestid="club-nacion" imgClassName="benef" logo={logoClub} buttonText="Descubrí tus beneficios" imgTop={true}></Button>
        </div>
      </div>
    </section>
  );
}

export default SubNavBar;
