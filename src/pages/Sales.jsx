import React, {useState} from 'react';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {useKeenSlider} from "keen-slider/react.js";
import {FaTshirt} from "react-icons/fa";
import {MdOutlineChair, MdOutlineToys} from "react-icons/md";
import {GiDogBowl, GiLipstick, GiSoccerBall} from "react-icons/gi";
import {Link} from "react-router-dom";
import {FiArrowUpRight} from "react-icons/fi";
import Product from "../compopnents/Product.jsx";
import ProductCard from "../compopnents/ProductCard.jsx";


const data = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        offered_price: '50',
        old_price: '$80',
        onsale: "4%",
        imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/09/bicycle-1.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        offered_price: '70',
        old_price: '$100',
        onsale: "5%",
        imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/10/O73VCN1.webp',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        offered_price: '80',
        old_price: '$110',
        onsale: "10%",
        imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/09/bicycle-1.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        offered_price: '90',
        old_price: '$120',
        onsale: "5%",
        imageSrc: 'https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/10/O73VCN1.webp',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },

];

function Sales() {

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
                    {/* Controls Row */}
                    <div className="flex gap-4 mt-4 lg:mt-0">
                        {/* Arrows */}
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

            {/* Responsive Layout */}
            <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 mt-10">
                {/* Category sidebar */}
                <div className="flex flex-col">
                    <img src="/products/sales-img.svg"/>
                    <h4>Hot Deals from Marketly</h4>
                </div>

                <div
                    ref={sliderRef}
                    className="best-seller-slider lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-6 lg:mt-0 keen-slider">
                    <ProductCard/>
                </div>
            </div>

        </div>
    );

}


export default Sales;