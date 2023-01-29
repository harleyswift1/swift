import SectionIntro from "../../../../utils/sectionintro/SectionIntro";
import {data} from "./content";

export default function OurFeatures() {
    return (<div className={"content-container ourfeatures"} id={"ourfeatures"}>
        <div className={"ourfeatures__text"}>
            <SectionIntro
                dark={false} tag={"The features"} title={"Every... single... site will include"} text={"There are some aspects of websites that must be included no matter what, and I'm here to make sure they are. Things such as a good design, a fast website and amazing SEO should never be missed. No messing with service teams waiting days for a response. With me, you'll get a response to any enquiry within 24 hours no matter what. You'll never be left hanging."}
            />
            <h2>and if they don't?</h2>
            <p>You get your money back, no hassle!</p>
        </div>
        <div className="ourfeatures__widgets">
            {Object.values(data).map((item, index) => {
                return (<div key={index} className="widget">
                    <span>{item.title}</span>
                    <hr/>
                    <p>{item.content}</p>
                </div>)
            })}

        </div>
    </div>)
}