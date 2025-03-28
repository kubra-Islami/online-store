import React from "react";
// import {useCartStore} from "../store/cartStore.jsx";

import ProductCard from "../compopnents/ProductCard.jsx";

const products = [
    {id: 1, name: "Laptop", price: 22000, image: "/laptop.jpg"},
    {id: 2, name: "Mobile", price: 56000, image: "/mobile.jpg"},
    {id: 3, name: "Headphone", price: 3000, image: "/headphone.jpg"},
]

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    )
}
export default Home;

