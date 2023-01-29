import website_image from "../../../../assets/images/slider image 2.jpg";
import SectionIntro from "../../../../utils/sectionintro/SectionIntro";
import React from "react";
import Button from "../../../../utils/button/Button";

export default function WhyChooseUs() {
    const handleClick = () => {
        document.getElementById("ourfeatures").scrollIntoView({behavior: "smooth"});
    }

    return (<div className={"whychooseus"}>
        <div className="content-container">
            <div className={"whychooseus__image"}>
                <img src={website_image} alt="A website made by me"/>
            </div>
            <div>
                <SectionIntro
                    dark={true} tag={"No limitations"} title={"Why choose me?"} text={"I don't use Wordpress or Wix because I don't like limitations. Instead, I custom code all of our websites using super-fast technology like React, meaning I can make you an crazy-fast website with ZERO limitations."}
                />
                <Button text={"What do our sites include?"} onClick={handleClick} backgroundColour={"#ffffff"} color={"#2B5A49"}/>
            </div>

        </div>
    </div>)
}