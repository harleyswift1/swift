import SectionIntro from "../../../../utils/sectionintro/SectionIntro";
import website_image from "../../../../assets/images/slider image 2.jpg";

export default function PreviousWork() {
    return(
        <div className="previouswork content-container">
                <SectionIntro
                    dark={false} tag={"Previous Work"} title={"I've probably made it before"} text={"Whatever sort of website you need, I've been there, done that - so you can have as much confidence as I've got in transforming your website."}
                />
            <div className="previouswork__image">
                <img src={website_image} alt="A website made by me"/>
            </div>
        </div>
    )
}
