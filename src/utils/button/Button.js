export default function Button(props) {
    const text = props.text;
    const backgroundColour = props.backgroundColour;
    const colour = props.color;
    const link = props.link;
    const newTab = props.newTab;
    const onClick = props.onClick;

    return (<a className={"button"}
               href={link}
               target={newTab ? "_blank" : "_self"}
               rel="noreferrer"
               style={{backgroundColor: backgroundColour, color: colour}}
               onClick={onClick}>
        {text}
    </a>)
}