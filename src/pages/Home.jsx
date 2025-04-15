import React from "react";
import ProductList from "./ProductList.jsx";
import CategoryContainer from "../compopnents/CategoryContainer.jsx";
import AboutMarketly from "./AboutMarketly.jsx";
import BestSeller from "./BestSeller.jsx";
import HeroSection from "./HeroSection.jsx";

const Home = () => {
    return (
        <>
            <HeroSection />
            <CategoryContainer/>
            <ProductList/>
            <BestSeller/>
            <AboutMarketly/>
        </>
    )
}
export default Home;

