import React from "react";
import SalesProductList from "./SalesProductList.jsx";
import CategoryContainer from "../compopnents/CategoryContainer.jsx";
import AboutMarketly from "./AboutMarketly.jsx";
import BestSeller from "./BestSeller.jsx";
import HeroSection from "./HeroSection.jsx";

const Home = () => {
    return (
        <>
            <HeroSection className="section-spacing" />
            <CategoryContainer className="section-spacing" />
            <SalesProductList className="section-spacing" />
            <BestSeller className="section-spacing" />
            <AboutMarketly className="section-spacing" />
        </>

    )
}
export default Home;

