import React from "react";
import SalesProductList from "./SalesProductList.jsx";
import CategoryContainer from "../compopnents/CategoryContainer.jsx";
import AboutMarketly from "./AboutMarketly.jsx";
import BestSeller from "./BestSeller.jsx";
import HeroSection from "./HeroSection.jsx";
import Brands from "../compopnents/Brand.jsx";
import Clients from "../compopnents/Clients/Clients.jsx";

const Home = () => {
    return (
        <>
            <HeroSection className="section-spacing" />
            <CategoryContainer className="section-spacing" />
            <SalesProductList className="section-spacing" style={{margin:"7rem 0"}} />
            <Brands className="section-spacing" style={{margin:"7rem 0"}} />
            <Clients className="section-spacing" style={{margin:"7rem 0"}} />
            <BestSeller className="section-spacing" style={{margin:"7rem 0"}} />
            <AboutMarketly className="section-spacing" style={{margin:"7rem 0"}}/>
        </>

    )
}
export default Home;

