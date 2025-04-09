import React, {useState} from "react";
import {useKeenSlider} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { MdOutlineSmartphone, MdOutlineChair, MdOutlineToys, MdOutlineEventNote } from "react-icons/md";

// Material Icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {FaTshirt} from "react-icons/fa";
// import {MdArrowBack, MdArrowForward, MdChair, MdSmartphone, MdToys} from "react-icons/md";
import {GiDogBowl, GiFruitBowl, GiHammerNails, GiLipstick, GiSoccerBall} from "react-icons/gi";

const categories = [
    {name: 'Fashion & Apparel', to: '/', icon: FaTshirt}, // no outline available
    {name: 'Electronics & Gadgets', to: '/', icon: MdOutlineSmartphone},
    {name: 'Home & Living', to: '/', icon: MdOutlineChair},
    {name: 'Food & Grocery', to: '/', icon: GiFruitBowl}, // no outline available
    {name: 'Beauty & Personal Care', to: '/', icon: GiLipstick}, // no outline available
    {name: 'Toys & Kids', to: '/', icon: MdOutlineToys},
    {name: 'Sports & Outdoors', to: '/', icon: GiSoccerBall}, // no outline available
    {name: 'Tools & DIY', to: '/', icon: GiHammerNails}, // no outline available
    {name: 'Pets', to: '/', icon: GiDogBowl}, // no outline available
    {name: 'Office & Stationery', to: '/', icon: MdOutlineEventNote},
];

function CategoryContainer() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = categories.length;

    // const sliderRef = useRef(null);
    const [sliderRef, instanceRef] = useKeenSlider({
        // loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        breakpoints: {
            "(max-width: 640px)": {
                slides: {perView: 1, spacing: 8},
            },
            "(max-width: 1024px)": {
                slides: {perView: 2, spacing: 12},
            },
        },
        slides: {perView: 8, spacing: 13},
    });

    const handlePrev = () => {
        instanceRef.current?.prev();
    };

    const handleNext = () => {
        instanceRef.current?.next();
    };


    return (
        <div className="container my-16 px-6 relative" style={{marginTop: "60px", marginBottom: "60px",padding:"60px"}}>

            {/* ✅ Arrows OUTSIDE of the slider */}
            <ArrowBackIosNewIcon
                className={`absolute left-2 top-1/2 transform -translate-y-1/2 border border-gray-300 px-3 py-2 shadow z-10 cursor-pointer rounded-md ${
                    currentSlide === 0
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-orange-500 border-orange-500 hover:text-orange-600 hover:border-orange-600'
                }`}
                fontSize="large"
                onClick={currentSlide === 0 ? null : handlePrev}
            />

            <ArrowForwardIosIcon
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-2 shadow z-10 rounded-md border ${
                    currentSlide === totalSlides - 1
                        ? 'text-gray-400 border-gray-300 cursor-not-allowed'
                        : 'text-orange-500 border-orange-500 hover:text-orange-600 hover:border-orange-600 cursor-pointer'
                }`}
                fontSize="large"
                onClick={currentSlide === totalSlides - 1 ? null : handleNext}
            />

            {/* ✅ Slider itself */}
            <div ref={sliderRef} className="keen-slider">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className="keen-slider__slide flex flex-col items-center text-center gap-2 p-4 rounded-lg transition-all duration-300 cat_item" style={{padding:'20px'}}
                    >
                        <cat.icon size={32} className="icon_category_item"/>
                        <span className="text-sm font-medium text-inherit">{cat.name}</span>

                    </div>
                ))}
            </div>
        </div>

    );
}

export default CategoryContainer;

