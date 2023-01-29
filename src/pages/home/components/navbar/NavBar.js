import {NavLink} from "react-router-dom";
import logo from "../../../../assets/images/logo.png";

export default function NavBar() {
    return (<nav>
        <NavLink className={(navData) => navData.isActive ? "link-active" : ""} to={"/"}><img src={logo} alt="Swift Digital Marketing"/></NavLink>
        <div className="nav-items">
            <NavLink className={(navData) => navData.isActive ? "link-active" : ""} to={""}>Home</NavLink>
            <NavLink className={(navData) => navData.isActive ? "link-active" : ""} to={"past-work"}>Past Work</NavLink>
            <NavLink className={(navData) => navData.isActive ? "link-active" : ""} to={"services"}>Services</NavLink>
            <NavLink className={(navData) => navData.isActive ? "link-active" : ""} to={"contact"}>Contact</NavLink>
            <NavLink className={(navData) => navData.isActive ? "link-active" : ""} to={"analysis"}>Analysis</NavLink>
        </div>
    </nav>)
}