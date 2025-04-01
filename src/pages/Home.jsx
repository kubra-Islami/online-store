import React from "react";
// import {useCartStore} from "../store/cartStore.jsx";

import ProductCard from "../compopnents/ProductCard.jsx";
import Header from "../compopnents/Header.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductList from "../compopnents/ProductList.jsx";

// const products = [
//     {id: 1, name: "Laptop", price: 22000, image: "/laptop.jpg"},
//     {id: 2, name: "Mobile", price: 56000, image: "/mobile.jpg"},
//     {id: 3, name: "Headphone", price: 3000, image: "/headphone.jpg"},
// ]

const Home = () => {
    return (

        <div className="">
            {/*<div className="">*/}
            {/*    {products.map((product) => (*/}
            {/*        <ProductCard key={product.id} product={product}/>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    )
}
export default Home;

