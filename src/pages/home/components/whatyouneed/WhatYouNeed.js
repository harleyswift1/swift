import SectionIntro from "../../../../utils/sectionintro/SectionIntro";
import React, {useState} from "react";
import slider_image from "../../../../assets/images/slider image 2.jpg";
import Button from "../../../../utils/button/Button";
import {data} from "./content";

export default function WhatYouNeed() {
    const [selected, setSelected] = useState(1);

    return (<div className="whatyouneed content-container">
        <SectionIntro
            dark={false} tag={"What you need"} title={"Websites that drive results"} text={"Selling game mods? A service like photography, graphic design, video editing or copywriting? Own an online shop? Whatever you do, I can make the website that you need to grow it."}
        />
        <div className="whatyouneed__selectionbox">
            <div className="options-container">
                <div className={"option" + (selected === 1 ? " selected" : "")} onClick={() => {
                    setSelected(1);
                }}>{data[1].title}
                </div>
                <div className={"option" + (selected === 2 ? " selected" : "")} onClick={() => {
                    setSelected(2);
                }}>{data[2].title}
                </div>
                <div className={"option" + (selected === 3 ? " selected" : "")} onClick={() => {
                    setSelected(3);
                }}>{data[3].title}
                </div>
                <div className={"option" + (selected === 4 ? " selected" : "")} onClick={() => {
                    setSelected(4);
                }}>{data[4].title}
                </div>
            </div>
            <div className="options-content">
                <div className="options-content__text">
                    <h3>{data[selected].title}</h3>
                    <hr/>
                    <p>{data[selected].content}</p>
                    <Button color={"#ffffff"} text={"Calculate an easy quote"} backgroundColour={"#378162"} link={"quote"}/>
                </div>
                <div className="options-content__image">
                    <img src={slider_image} alt="Past work website example"/>
                </div>
            </div>
        </div>
    </div>)
}