import SectionIntro from "../../../../utils/sectionintro/SectionIntro";
import Dropdown from "../../../../utils/dropdown/Dropdown";

export default function ContactSection() {
    return (<div className={"contactsection content-container"}>
        <div className={"contactsection__text"}>
            <SectionIntro
                dark={false} tag={"Get in touch"} title={"We'll make one hell of a team"} text={"Transforming your website has never been easier and will never be more fun. Imagine having whatever you want on your website - with no limits. You no longer need to imagine... it’s here."}
            />
            <strong>Email</strong>
            <span>harleyswiftus@gmail.com</span>
            <strong>Discord</strong>
            <span>Swift#5566</span>
        </div>
        <form action="/">
            <div className="form-rows">
                <div className="row">
                    <div className="firstname">
                        <label htmlFor="firstname">First Name</label>
                        <input id={"firstname"} type="text"/>
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input id={"email"} type="email"/>
                    </div>
                    <div className="currentsite">
                        <label htmlFor="currentsite">Current Website <span>(optional)</span></label>
                        <input id={"currentsite"} type="text"/>
                    </div>
                </div>
                <div className="row">
                    <Dropdown options={["£20-50", "£50-100", "£100-250", "£250-500", "£500-1000", "£1000+"]} id={"budget"} title={"Budget"}/>
                    <Dropdown options={["I have a general question", "I'm interested in web consultancy for my current website", "I need a website built for my business", "I need changes to my existing website", "I'm getting in touch for something else"]} id={"needs"} title={"Your Needs"}/>
                </div>
                <div className="row">
                    <div className="message">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="77" rows="10"></textarea>
                    </div>
                </div>
                <input className="button" type="submit" value="Send message"/>
            </div>
        </form>
    </div>)
}