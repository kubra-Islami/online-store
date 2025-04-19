import React, {useState} from 'react';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {useKeenSlider} from "keen-slider/react.js";
import { FaTshirt} from "react-icons/fa";
import {MdOutlineChair, MdOutlineToys} from "react-icons/md";
import {GiDogBowl, GiLipstick, GiSoccerBall} from "react-icons/gi";
import {Link} from "react-router-dom";
import {FiArrowUpRight} from "react-icons/fi";
import Product from "../compopnents/Product.jsx";

const data = [
    {
        id: 1,
        category: "Fashion & Apparel",
        icon: FaTshirt,
        products: [
            {
                id: 1,
                name: 'Earthen Bottle',
                href: '#',
                offered_price: '$50',
                old_price: '$80',
                satisfaction: "100%",
                salesNum: 7,
                imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/09/bicycle-1.jpg',
                imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
            },
            {
                id: 2,
                name: 'Nomad Tumbler',
                href: '#',
                offered_price: '$70',
                old_price: '$100',
                satisfaction: "90%",
                salesNum: 11,
                imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/10/O73VCN1.webp',
                imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            },
            {
                id: 3,
                name: 'Focus Paper Refill',
                href: '#',
                offered_price: '$80',
                old_price: '$110',
                satisfaction: "100%",
                salesNum: 20,
                imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/09/bicycle-1.jpg',
                imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
            },
            {
                id: 4,
                name: 'Focus Paper Refill',
                href: '#',
                offered_price: '$700',
                old_price: '$900',
                satisfaction: "100%",
                salesNum: 20,
                imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/10/O73VCN1.webp',
                imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
            },
        ]
    },
    {
        id: 2,
        icon: GiSoccerBall,
        category: "Sports & Outdoors",
        products: [
            {
                id: 1,
                name: 'Earthen Bottle',
                href: '#',
                offered_price: '$50',
                old_price: '$80',
                onsale: "4%",
                imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/09/bicycle-1.jpg',
                imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
            },
            {
                id: 2,
                name: 'Nomad Tumbler',
                href: '#',
                offered_price: '$70',
                old_price: '$100',
                onsale: "5%",
                imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/10/O73VCN1.webp',
                imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            },
            {
                id: 3,
                name: 'Focus Paper Refill',
                href: '#',
                offered_price: '$80',
                old_price: '$110',
                onsale: "10%",
                imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/09/bicycle-1.jpg',
                imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
            },
        ]
    },
    {
        id: 3,
        category: "Pets",
        icon: GiDogBowl,
        products: [
            {
                id: 1,
                name: 'Earthen Bottle',
                href: '#',
                offered_price: '$50',
                old_price: '$80',
                onsale: "4%",
                imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/09/bicycle-1.jpg',
                imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
            },
            {
                id: 2,
                name: 'Nomad Tumbler',
                href: '#',
                offered_price: '$70',
                old_price: '$100',
                onsale: "5%",
                imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/10/O73VCN1.webp',
                imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            },
            {
                id: 3,
                name: 'Focus Paper Refill',
                href: '#',
                offered_price: '$80',
                old_price: '$110',
                onsale: "10%",
                imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/09/bicycle-1.jpg',
                imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
            },
        ]
    },
    {
        id: 4,
        category: "Toys & Kids",
        icon: MdOutlineToys,
        products: [
            {
                id: 1,
                name: 'Earthen Bottle',
                href: '#',
                offered_price: '$50',
                old_price: '$80',
                onsale: "4%",
                imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/09/bicycle-1.jpg',
                imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
            },
            {
                id: 2,
                name: 'Nomad Tumbler',
                href: '#',
                offered_price: '$70',
                old_price: '$100',
                onsale: "5%",
                imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/10/O73VCN1.webp',
                imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            },
            {
                id: 3,
                name: 'Focus Paper Refill',
                href: '#',
                offered_price: '$80',
                old_price: '$110',
                onsale: "10%",
                imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/09/bicycle-1.jpg',
                imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
            },
        ]
    },
    {
        id: 5,
        category: "Home & Living",
        icon: MdOutlineChair,
        products: [
            {
                id: 1,
                name: 'Earthen Bottle',
                href: '#',
                offered_price: '$50',
                old_price: '$80',
                onsale: "4%",
                imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/09/bicycle-1.jpg',
                imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
            },
            {
                id: 2,
                name: 'Nomad Tumbler',
                href: '#',
                offered_price: '$70',
                old_price: '$100',
                onsale: "5%",
                imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/10/O73VCN1.webp',
                imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            },
            {
                id: 3,
                name: 'Focus Paper Refill',
                href: '#',
                offered_price: '$80',
                old_price: '$110',
                onsale: "10%",
                imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/09/bicycle-1.jpg',
                imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
            },
        ]
    },
    {
        id: 6,
        category: "Beauty & Personal Care",
        icon: GiLipstick,
        products: [
            {
                id: 1,
                name: 'Earthen Bottle',
                href: '#',
                offered_price: '$50',
                old_price: '$80',
                satisfaction: "90%",
                salesNum: 11,
                onsale: "4%",
                imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/09/bicycle-1.jpg',
                imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
            },
            {
                id: 2,
                name: 'Nomad Tumbler',
                href: '#',
                offered_price: '$70',
                old_price: '$100',
                onsale: "5%",
                imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/10/O73VCN1.webp',
                imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            },
            {
                id: 3,
                name: 'Focus Paper Refill',
                href: '#',
                offered_price: '$80',
                old_price: '$110',
                onsale: "10%",
                imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/09/bicycle-1.jpg',
                imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
            },
        ]
    }
]

function BestSeller() {
    const [selectedCategory, setSelectedCategory] = useState(data[0].category);

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = data.length;

    // const sliderRef = useRef(null);
    const [sliderRef, instanceRef] = useKeenSlider({
        // loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        breakpoints: {
            "(max-width: 639px)": {
                slides: {perView: 1, spacing: 8}, // < sm (mobile)
            },
            "(min-width: 640px) and (max-width: 1023px)": {
                slides: {perView: 2, spacing: 10}, // sm to md
            },
        },
        slides: {perView: 3, spacing: 6},
    });

    const handlePrev = () => {
        instanceRef.current?.prev();
    };

    const handleNext = () => {
        instanceRef.current?.next();
    };


    return (
        <div className="products-container container mx-auto px-6 best-seller-container section-spacing">
            <div className="flex flex-col gap-4 ">
                <div className="flex sm:flex-col lg:flex-row justify-between" style={{paddingBottom: "2rem"}}>
                    <h2 className="text-3xl font-bold text-gray-800 title">
                        Best Sellers
                    </h2>

                    {/* Controls Row */}
                    <div className="flex gap-4 mt-4 lg:mt-0">
                        <div className="show_all flex items-center justify-center">
                            <Link to="#" className="flex items-center gap-2">
                                <p>All Products</p>
                                <FiArrowUpRight size={20}/>
                            </Link>
                        </div>

                        {/* Arrows */}
                        <div className="hidden sm:flex gap-2 items-center">
                            <ArrowBackIosNewIcon
                                className={`border px-2 rounded-md bg-white shadow ${
                                    currentSlide === 0
                                        ? 'text-gray-300 cursor-not-allowed'
                                        : 'text-orange-500 hover:text-orange-600 cursor-pointer'
                                }`}
                                fontSize="large"
                                onClick={currentSlide === 0 ? null : handlePrev}
                            />
                            <ArrowForwardIosIcon
                                className={`border px-2 rounded-md bg-white shadow ${
                                    currentSlide === totalSlides - 1
                                        ? 'text-gray-300 cursor-not-allowed'
                                        : 'text-orange-500 hover:text-orange-600 cursor-pointer'
                                }`}
                                fontSize="large"
                                onClick={currentSlide === totalSlides - 1 ? null : handleNext}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive Layout */}
            <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 mt-10">
                {/* Category sidebar */}
                <div className="lg:col-span-1 p-4 rounded shadow-sm category_background">
                    {/*<ul className="flex lg:block gap-4 lg:space-y-2 "> */}
                    <ul className="flex lg:block gap-4 lg:space-y-2 overflow-x-auto no-scrollbar">
                    {data.map((category, index) => (
                            <li
                                key={index}
                                onClick={() => setSelectedCategory(category.category)}
                                className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-md whitespace-nowrap ${
                                    selectedCategory === category.category
                                        ? 'selectedCategoryStyle'
                                        : 'hover:bg-gray-100'
                                }`}
                            >
                                <category.icon size={18} />
                                <span>{category.category}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    ref={sliderRef}
                    // className="best-seller-slider lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-6 lg:mt-0 keen-slider"
                    className="best-seller-slider keen-slider lg:col-span-3 mt-6 lg:mt-0 ">
                    {data
                        .find(cat => cat.category === selectedCategory)
                        ?.products
                        .map((product) => (
                            <div key={product.id} className="keen-slider__slide">
                                <Product data={{ products: [product] }} />
                            </div>
                        ))}
                </div>
            </div>

        </div>
    );

}


export default BestSeller;