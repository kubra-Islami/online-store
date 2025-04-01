import React from "react";
import {Link} from "react-router-dom";
import {useCartStore} from "../store/cartStore.jsx";

const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },

]
const ProductCard = () => {
    const {addToCart} = useCartStore();
    return (
        <div
            className="container grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {products.map((product) => (
                <Link key={product.id} to={product.href} className="group shadow-xl rounded-lg ">
                    <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="aspect-square w-full bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                    />
                    <div style={{padding:'1rem'}}>
                        <h2 className="text-lg font-semibold text-gray-800 " style={{paddingTop:'0.5rem'}}>{product.name}</h2>
                        <p className="text-gray-500 text-sm my-3" style={{paddingTop:'0.5rem'}}>{product.imageAlt}</p>

                        <div className="flex justify-between items-center mt-4 " style={{paddingTop:'1rem'}}>
                            <span className="" >{product.price}</span>
                            <button
                                onClick={() => addToCart(product)}
                                className="text-white px-4 py-2 hover:text-white border-none transition">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

        // <div className="rounded overflow-hidden shadow-lg">
        // <img
        //         src={product.image}
        //         alt={product.name}
        //         className="w-full h-100 object-cover"
        //     />
        //     <div className="p-4">
        //         <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        //         <p className="text-gray-500 text-sm mt-1">{product.description}</p>
        //         <div className="flex justify-between items-center mt-4">
        //             <span className="text-xl font-bold text-blue-600">${product.price}</span>
        //             <button
        //                 onClick={() => addToCart(product)}
        //                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        //                 Add to Cart
        //             </button>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ProductCard;