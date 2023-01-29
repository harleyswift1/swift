export default function SectionIntro(props) {
    const dark = props.dark;
    const tag = props.tag;
    const title = props.title;
    const text = props.text;
    return (<div className="sectionintro">
        <div className={"sectionintro__tag" + (dark ? " sectionintro__tag--dark" : "")}>{tag}</div>
        <h2 className={"sectionintro__title" + (dark ? " sectionintro__title--dark" : "")}>{title}</h2>
        <hr/>
        <p className={"sectionintro__text" + (dark ? " sectionintro__text--dark" : "")}>{text}</p>
    </div>)
}