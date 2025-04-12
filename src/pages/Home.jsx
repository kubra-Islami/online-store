import React from "react";
import ProductList from "./ProductList.jsx";
import CategoryContainer from "../compopnents/CategoryContainer.jsx";
import AboutMarketly from "./AboutMarketly.jsx";

const Home = () => {
    return (
        <>
            <CategoryContainer/>
            <ProductList/>
            <AboutMarketly/>
        </>
    )
}
export default Home;

