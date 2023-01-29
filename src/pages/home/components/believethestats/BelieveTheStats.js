import SectionIntro from "../../../../utils/sectionintro/SectionIntro";
import Button from "../../../../utils/button/Button";

export default function BelieveTheStats() {
    return (<div className="believethestats">
        <div className="content-container">
            <div className="believethestats__intro">
                <div className={"intro__header"}>
                    84%
                </div>
                <p>of potential customers that visit your site will leave <u>instantly</u> if the site appears <u>untrustworthy</u> or not worth their time <a href="https://www.zippia.com/advice/website-design-statistics/"
                                                                                                                                                               target="_blank"
                                                                                                                                                               rel="noreferrer">source</a></p>
            </div>
            <div className="believethestats__content">
                <SectionIntro
                    dark={true} tag={"Believe the stats"} title={"You’re probably losing customers..."}
                    text={"75% (that's a lot...) of a company’s credibility is based on website design and 88% of online shoppers are unlikely to return to a site after having a poor user experience."}
                />
                <Button text={"More about statistics in design"}
                        color={"#ffffff"}
                        backgroundColour={"#50AC8B"}
                        link={"https://www.zippia.com/advice/website-design-statistics/"}
                        newTab={true}
                />
            </div>
        </div>
    </div>)
}