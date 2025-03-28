import React from "react";
import {useCartStore} from "../store/cartStore.jsx";

const ProductCard = ({product}) => {
    const {addToCart} = useCartStore();
    return (
        <div className="rounded overflow-hidden shadow-lg">
        <img
                src={product.image}
                alt={product.name}
                className="w-full h-100 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-500 text-sm mt-1">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-blue-600">${product.price}</span>
                    <button
                        onClick={() => addToCart(product)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;