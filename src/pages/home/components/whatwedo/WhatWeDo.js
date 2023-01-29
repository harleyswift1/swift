import SectionIntro from "../../../../utils/sectionintro/SectionIntro";
import pricetag_icon from "../../../../assets/icons/price tag svg.svg";
import lightbulb_icon from "../../../../assets/icons/lightbulb icon.svg";
import slider_image from "../../../../assets/images/slider image.png";
import React from "react";

export default function WhatWeDo() {
    return (<div className="whatwedo" id={"whatwedo"}>
            <div className="content-container">
                <SectionIntro
                    dark={true} tag={"What I do"} title={"I know your standards"} text={"I offer various types of custom-made websites including blogs, business, and personal websites, personalised for you."}
                />
                <div className="whatwedo__widgets">
                    <div className="whatwedo__widgets__widget">
                        <img src={pricetag_icon} alt="Price tag icon"/>
                        <h3>Affordable Prices</h3>
                        <hr/>
                        <p>I specialise in individuals and small businesses, making sure that we can create something together that’s inside your budget</p>
                    </div>
                    <div className="whatwedo__widgets__widget">
                        <img src={lightbulb_icon} alt="Light bulb icon"/>
                        <h3>What you need</h3>
                        <hr/>
                        <p>Whether you need a dashboard to manage sales, a portfolio site, a business site or anything else, I will always provide the best solution</p>
                    </div>
                    <div><img src={slider_image} alt=""/></div>
                </div>
            </div>
        </div>)
}