import React from "react";
import "./Button.scss";

function Button({ buttonClassName, dataTestid, imgClassName, imgTop, logo, buttonText }) {

    return(
        <button className={buttonClassName} data-testid={dataTestid}>
            { logo && imgTop &&
                <img className={imgClassName} src={logo} alt="img.svg"></img>
            }

            {buttonText}

            { logo && !imgTop &&
                <img className={imgClassName} src={logo} alt="img.svg"></img>
            }
        </button>
    );
}

export default Button;