import React, {useEffect, useState} from "react";
import ProductCard from "../compopnents/ProductCard";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useKeenSlider} from "keen-slider/react.js";
import {Link} from "react-router-dom";
import {FiArrowUpRight} from "react-icons/fi";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Product from "../compopnents/Product.jsx";

gsap.registerPlugin(ScrollTrigger);
const products = [
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
export default function SalesProductList() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = products.length;
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const targetDate = new Date(2025, 5, 1, 16, 10, 0); // June 1, 2025, 16:10:00

    // Function to update the countdown
    const updateCountdown = () => {
        const now = new Date();
        const timeDiff = targetDate - now;

        if (timeDiff <= 0) {
            setCountdown({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            });
        } else {
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            setCountdown({days, hours, minutes, seconds});
        }
    };

    // Update countdown every second
    useEffect(() => {
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);


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
                        Sales
                    </h2>

                    {/* Controls Row */}
                    <div className="flex gap-4 mt-4 lg:mt-0">
                        <div className="show_all flex items-center justify-center">
                            <Link to="#" className="flex items-center gap-2">
                                <p>All Products</p>
                                <FiArrowUpRight size={20}/>
                            </Link>
                        </div>

                        {/* Arrows Wrapper — hidden on small screens */}
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
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10">
                <div className="lg:col-span-1 p-4">
                {/* sales img */}
                <div className="flex flex-col items-center justify-center text-center lg:items-start lg:justify-start">
                    <img
                        alt="sales img"
                        src={"/products/sales-img.svg"}
                        className="mt-4 lg:w-full sm:w-fit"
                    />

                    <h3 className="sales-title text-3xl font-bold">Marketly sales</h3>
                </div>
                {/* Countdown */}
                <div
                    id="countdown"
                    className="mt-6 flex items-center justify-center gap-2 text-center font-bold"
                >
                    <div className="simply-section simply-days-section w-24 sm:w-28 md:w-32 border rounded-lg p-2 bg-white shadow">
                        <div>
                            <span className="simply-amount text-2xl block text-orange-600">{countdown.days}</span>
                            <span className="simply-word text-sm" style={{padding: "8px"}}>Days</span>
                        </div>
                    </div>

                    <span className="text-2xl ">:</span>

                    <div className="simply-section simply-hours-section w-24 sm:w-28 md:w-32 border rounded-lg p-2 bg-white shadow">
                        <div>
                            <span className="simply-amount text-2xl block text-orange-600">{countdown.hours}</span>
                            <span className="simply-word text-sm" style={{padding: "8px"}}>Hours</span>
                        </div>
                    </div>

                    <span className="text-2xl ">:</span>

                    <div
                        className="simply-section simply-minutes-section w-24 sm:w-28 md:w-32 border rounded-lg p-2 bg-white shadow">
                        <div>
                                <span
                                    className="simply-amount text-2xl block text-orange-600">{countdown.minutes}</span>
                            <span className="simply-word text-sm" style={{padding: "8px"}}>Minutes</span>
                        </div>
                    </div>

                    <span className="text-2xl ">:</span>

                    <div
                        className="simply-section simply-seconds-section w-24 sm:w-28 md:w-32 border rounded-lg p-2 bg-white shadow">
                        <div>
                                <span
                                    className="simply-amount text-2xl block text-orange-600">{countdown.seconds}</span>
                            <span className="simply-word text-sm" style={{padding: "8px"}}>Seconds</span>
                        </div>
                    </div>
                </div>

            </div>
            <div
                ref={sliderRef}
                // best-seller-slider lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-6 lg:mt-0 keen-slider
                className="best-seller-slider keen-slider lg:col-span-3 mt-6 lg:mt-0 "
            >
                {products.map((product) => (
                    <div key={product.id} className="keen-slider__slide">
                        <ProductCard product={product}/>
                    </div>
                ))}
            </div>
        </div>
</div>

)
}