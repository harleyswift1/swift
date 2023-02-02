import SectionIntro from "../../../../utils/sectionintro/SectionIntro";
import Widgets from "../widgets/Widgets";
import websiteImg1 from "../../../../assets/images/slider image 2.jpg";
import ServiceSection from "../servicesection/ServiceSection";

export default function OurServices() {
    return (<div className={"content-container ourservices"}>
        <SectionIntro dark={false} tag={"Our services"} title={"I do everything development"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis"}/>
        <Widgets/>
        <ServiceSection title={"I build"} img={websiteImg1} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis"}/>
        <ServiceSection title={"I design"} img={websiteImg1} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis"}/>
        <ServiceSection title={"I improve"} img={websiteImg1} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis"}/>
    </div>)
}