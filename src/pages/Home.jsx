import React from "react";
import ProductList from "./ProductList.jsx";
import CategoryContainer from "../compopnents/CategoryContainer.jsx";
import AboutMarketly from "./AboutMarketly.jsx";



const Home = () => {
    return (
        <div className="">
            <CategoryContainer/>
            <ProductList/>
            <AboutMarketly/>
        </div>
    )
}
export default Home;

