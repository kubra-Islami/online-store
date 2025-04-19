import React from "react";
import {Link} from "react-router-dom";
import {useCartStore} from "../store/cartStore.jsx";
import { BsCart2 } from "react-icons/bs";


const ProductCard = ({product}) => {
    const {addToCart} = useCartStore();
    return (
        <div className="products-container shadow-md rounded-lg product-card relative ">
            {/* Image with On Sale badge */}
            <div className="">
                <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square overflow-x-hidden group-hover:opacity-75"
                />
                {/* On Sale Badge */}
                <span className="onsale">{product.onsale}</span>
            </div>
            <div className="shop-newset__product__divider">
                <div className="shop-newset__product__divider--line"></div>
            </div>
            <div className="p-4 text-center" style={{padding: '1rem'}}>
                <h2 className="product-title text-lg font-semibold text-white">{product.name}</h2>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex flex-col">
                        <bdi className="line-through product-price-old">{product.old_price}</bdi>
                        <bdi className="product-price">{product.offered_price}</bdi>
                    </div>
                    <Link to={product.href} className="add-to-cart flex">
                        <button
                            onClick={() => addToCart(product)}
                            className="px-4 py-2 border-none transition">
                            Add to Cart
                        </button>
                        <BsCart2 className="icon-btn px-2"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;