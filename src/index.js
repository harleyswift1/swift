import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/scss/App.css";
import NavBar from "./pages/home/components/navbar/NavBar";
import Hero from "./pages/home/components/hero/hero";
import WhatWeDo from "./pages/home/components/whatwedo/WhatWeDo";
import WhatYouNeed from "./pages/home/components/whatyouneed/WhatYouNeed";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import WhyChooseUs from "./pages/home/components/whychooseus/WhyChooseUs";
import OurFeatures from "./pages/home/components/ourfeatures/OurFeatures";
import BelieveTheStats from "./pages/home/components/believethestats/BelieveTheStats";
import PreviousWork from "./pages/home/components/previouswork/PreviousWork";
import FactsSection from "./pages/home/components/factssection/FactsSection";
import ContactSection from "./pages/home/components/contactsection/ContactSection";
import Footer from "./pages/home/components/footer/Footer";
import PastWorkHero from "./pages/past-work/components/hero/PastWorkHero";
import PastWorkWidgets from "./pages/past-work/components/hero/PastWorkWidgets";
import OurServices from "./pages/services/components/ourservices/OurServices";
import AnalysisPopup from "./pages/services/components/analysispopup/AnalysisPopup";

const root = ReactDOM.createRoot(document.getElementById('root'));
const routes = [{path: "", element: <HomePage/>}, {path: "past-work", element: <PastWorkPage/>}, {path: "services", element: <ServicesPage/>}, {path: "contact", element: <ContactPage/>}, {path: "analysis", element: <AnalysisPage/>}];

root.render(<BrowserRouter>
    <Routes>
        <Route path="/" element={<PageWrapper/>}>
            {routes.map((route) => (<Route key={route.path} {...route} />))}
        </Route>
    </Routes>
</BrowserRouter>);

function HomePage() {
    return (<>
        <Hero/>
        <WhatWeDo/>
        <WhatYouNeed/>
        <WhyChooseUs/>
        <OurFeatures/>
        <BelieveTheStats/>
        <PreviousWork/>
        <FactsSection/>
        <ContactSection/>
    </>)
}

function PastWorkPage() {
    return (<>
        <PastWorkHero/>
        <PastWorkWidgets/>
    </>)
}

function ServicesPage() {
    return (<>
        <AnalysisPopup showButton={true}/>
        <OurServices/>
        <ContactSection/>
    </>)
}

function ContactPage() {
    return (<ContactSection/>)
}

function AnalysisPage() {
    return (<>
            <AnalysisPopup showButton={false}/>
        </>)
}

function PageWrapper() {
    return (<div>
        <div className="strip strip--top">Get 10% off your first entire order when your total is $100 or more - get in touch here!</div>
        <NavBar/>
        <Outlet/>
        <Footer/>
        <div className="strip">
            <div className="content-container">© 2021 - 2023 Swift Development</div>
        </div>
    </div>)
}

