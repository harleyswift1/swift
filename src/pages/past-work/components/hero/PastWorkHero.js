import hero_img from "../../../../assets/images/hero graphic.png";
import React from "react";
import SectionIntro from "../../../../utils/sectionintro/SectionIntro";

export default function PastWorkHero() {
    return <div className="content-container hero">
        <div className="hero__content">
            <SectionIntro dark={false} tag={"Previous work"} title={"My previous transformations"} text={"We've changed business forever - getting them more conversions, interactions, and customers. Take a look at some we've done in the past"}/>
            <p> I specialize in creating visually striking and user-friendly designs that will take your online presence to new heights and drive sales. Let me help you establish a reputable brand and watch your business flourish.</p>
        </div>
        <div className="hero__image">
            <img src={hero_img} alt=""/>
        </div>
    </div>
}