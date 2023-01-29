import SectionIntro from "../../../../utils/sectionintro/SectionIntro";

export default function FactsSection() {
    return(
        <div className="factssection">
            <div className="content-container">
                <SectionIntro
                    dark={true} tag={"Psychology in web"} title={"Full of tricks"} text={"The experience a user has on a website has an influence on whether they make a purchase or not. Extremely small things can be the difference between a user clicking off the website or buying something."}
                />
                <div className="factssection__factsslide">
                    <span>FACT</span>
                    <span>94%</span>
                    <span>of users will leave a website simply because of low-quality design</span>
                    <span><a target="_blank" rel="noreferrer" href="https://www.zippia.com/advice/website-design-statistics/">source</a></span>
                </div>
            </div>
        </div>
    )
}