import Button from "../../../../utils/button/Button";
import hero_img from "../../../../assets/images/hero graphic.png";
import React from "react";
import trustpilot_image from "../../../../assets/images/trustpilot.jpg";

export default function Hero() {
    const handleClick = () => {
        document.getElementById("whatwedo").scrollIntoView({behavior: "smooth"});
    }

    return <div className="content-container hero">
        <div className="hero__content">
            <h1>Establishing your
                business begins
                right here</h1>
            <p>Your website is the face of your business - and a badly designed website can statistically decrease sales and recognition</p>
            <div className="hero__buttons">
                <Button text={"More about me"} color={"#ffffff"} backgroundColour={"#54A064"} onClick={handleClick}/>
                <span>or</span>
                <Button text={"Calculate an easy quote"} color={"#ffffff"} backgroundColour={"#50AC8B"} link={"quote"}/>
            </div>
            <a href="https://uk.trustpilot.com/" rel="noreferrer" target="_blank"><img aria-label={"Trustpilot page"} className="trustpilot__image" src={trustpilot_image} alt="5 Stars on trustpilot"/></a>
        </div>
        <div className="hero__image">
            <img src={hero_img} alt=""/>
        </div>
    </div>
}