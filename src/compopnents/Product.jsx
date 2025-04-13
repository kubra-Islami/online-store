import React from "react";
import {Link} from "react-router-dom";
import {BsCart2} from "react-icons/bs";
import {useCartStore} from "../store/cartStore.jsx";

function Product({data}) {
    const {addToCart} = useCartStore();

    if (!data || !data.products) return null;
    return (
        data?.products?.map((product, id) => (
            <div key={id}  className="group shadow-md rounded-lg product-card-bestseller">
                {/* Image with On Sale badge */}
                <div className="relative">
                    <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="aspect-square overflow-x-hidden group-hover:opacity-75"
                    />
                    {/* On Sale Badge */}
                    <span className={`${product.onsale ? 'onsale' : '' }`}>{product?.onsale}</span>
                </div>
                <div className="shop-newset__product__divider">
                    <div className="shop-newset__product__divider--line"></div>
                </div>
                <div style={{padding: '1rem'}} className="text-center">
                    <h2 className="product-title text-lg font-semibold text-gray-800">{product.name}</h2>

                    <div className="flex justify-between items-center mt-4" style={{paddingTop: '1rem'}}>
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
        ))
    )
}

export default Product;