import React from "react";
import {Link} from "react-router-dom";
import {useCartStore} from "../store/cartStore.jsx";
import { BsCart2 } from "react-icons/bs";

const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        offered_price: '50',
        old_price: '$80',
        onsale:"4%",
        imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/09/bicycle-1.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        offered_price: '70',
        old_price: '$100',
        onsale:"5%",
        imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/10/O73VCN1.webp',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        offered_price: '80',
        old_price: '$110',
        onsale:"10%",
        imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/09/bicycle-1.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        offered_price: '90',
        old_price: '$120',
        onsale:"5%",
        imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/10/O73VCN1.webp',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },

];
const ProductCard = () => {
    const {addToCart} = useCartStore();
    return (
        <div className="overflow-x-hidden grid gap-x-4 gap-y-10 xm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8 relative" style={{paddingTop:"4rem",paddingBottom:"4rem"}}>
            {products.map((product) => (
                <div key={product.id} style={{margin:"4px"}} className="group shadow-xl rounded-lg product-card">
                    {/* Image with On Sale badge */}
                    <div className="relative">
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
            ))}
        </div>
    );
}

export default ProductCard;