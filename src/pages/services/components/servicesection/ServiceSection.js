import SectionIntro from "../../../../utils/sectionintro/SectionIntro";

export default function ServiceSection(props) {
    const title = props.title;
    const img = props.img;
    const text = props.text;
    return (<div className="service-section">
        <div>
            <SectionIntro tag={"Our services"} title={title} dark={true} text={text}/>
        </div>
        <img src={img} alt="Website"/>
    </div>)
}