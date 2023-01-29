import SectionIntro from "../../../../utils/sectionintro/SectionIntro";

export default function WorkWidget(props) {
    const type = props.type;
    const title = props.title;
    const description = props.description;
    const image = props.image;
    const dark = props.dark;

    return (<div className={"work-widget" + (dark ? " dark" : "")}>
        <div className="content-container">
            <div className="work-widget__image">
                <img src={image} alt="Past work website"/>
            </div>
            <div className="work-widget__content">
                <SectionIntro
                    dark={dark} tag={type} title={title}
                    text={description}
                />
            </div>
        </div>
    </div>)
}