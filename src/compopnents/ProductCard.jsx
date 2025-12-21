import React from "react";
import {Link} from "react-router-dom";
import {useCartStore} from "../store/cartStore.jsx";
import { BsEye} from "react-icons/bs";


const ProductCard = ({id,name,old_price,offered_price,href,imageAlt,imageSrc,onsale,}) => {
    const {addToCart} = useCartStore();
    return (
        <div className="products-container shadow-md rounded-lg product-card relative" >
            {/* Image with On Sale badge */}
            <div className="">
                <img
                    alt={imageAlt}
                    src={imageSrc}
                    className="aspect-square overflow-x-hidden group-hover:opacity-75"
                />
                {/* On Sale Badge */}
                <span className="onsale">{onsale}</span>
            </div>
            <div className="shop-newset__product__divider">
                <div className="shop-newset__product__divider--line"></div>
            </div>
            <div className="p-4 text-center" style={{padding: '1rem'}}>
                <h2 className="product-title text-lg font-semibold text-white">{name}</h2>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex flex-col">
                        <bdi className="line-through product-price-old">${old_price.toLocaleString("en-US")}</bdi>
                        <bdi className="product-price">${offered_price.toLocaleString("en-US")}</bdi>
                    </div>
                    <Link to={href} className="add-to-cart flex">
                        <button
                            onClick={() => addToCart(id)}
                            className="px-4 py-2 border-none transition">
                            View
                        </button>
                        <BsEye className="icon-btn px-1"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;