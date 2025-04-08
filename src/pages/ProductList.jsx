import React from "react";
import ProductCard from "../compopnents/ProductCard.jsx";
export default function ProductList() {
    return (
        <div className="bg-white flex items-center justify-center">
            <div className="container mx-auto flex flex-col items-center max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <ProductCard />
            </div>
        </div>
    )
}
