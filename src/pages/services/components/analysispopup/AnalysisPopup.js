import example1 from "../../../../assets/images/example1.png";
import example2 from "../../../../assets/images/example2.png";
import Button from "../../../../utils/button/Button";

export default function AnalysisPopup(props) {
    return (<div className="analysispopup">
        <div className="analysispopup__content">
            <h1>The opportunity that will turn your website into a money-making machine</h1>
            <hr/>
            <p>Get a full in-depth analysis of your entire website including
                where you can improve on accessibility, layout, ease-of-access,
                user-interface, user-experience and more. Using common best
                practices and UI/UX laws, we will backup our information using
                statistics. This will allow you to improve your website from
                home and guarantee an increase in customer interactivity on
                your website! </p>
            {props.showButton ? <><br/> <Button text={"More about this service"} link={"/analysis"} backgroundColour={"#ffffff"} color={"#2B5A49"}/></> : ""}

        </div>
        <div className="analysispopup__examples">
            <div><img src={example1} alt=""/></div>
            <div><img src={example2} alt=""/></div>
        </div>
    </div>)
}