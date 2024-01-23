import React from "react";
import "./Banner.scss";

function Banner({image, text}) {
    return(
        <div className="banner">
            <img className="banner_img" src={image} alt="bannière" />
            <div className="banner_shadow"></div>
            <span className="banner_text">{text}</span>
        </div>
    );
}

export default Banner;