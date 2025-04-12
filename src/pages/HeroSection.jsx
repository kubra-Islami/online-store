import React from "react";
import {Link} from "react-router-dom";
function HeroSection() {
    return (
        <div
            className="hero-equal-height relative flex items-center justify-center bg-cover bg-center px-4"

            style={{backgroundImage: "url('products/hero-bg-main.svg')"}}>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:gap-96 md:gap-20" style={{paddingLeft: '2rem', paddingRight: '2rem', paddingTop: "0.5rem"}}>

                {/* Left Section */}
                    <div className="text-white space-y-6 text-center md:text-left">
                        <span className="text-lg font-medium">Digital Marketing</span>
                        <h1 className="text-3xl md:text-5xl font-bold">Black Friday Super Sale Offer!</h1>
                        <p className="text-lg">
                            Up to 90% OFF digital marketing plans. Hurry up, limited time offer is ticking down, the
                            deal ends in:
                        </p>
                        <div className="action-btns mt-3">
                            <a href="#" className="btn secondary-solid-btn">Get Start Now</a>
                        </div>

                    </div>

                    {/* Right Section */}
                    <div className=" flex flex-col items-center md:items-end mt-8 md:mt-0 ">
                    <div className="offer-tag-wrap mt-4 mt-sm-4 mt-md-0 mt-lg-0">
                            <div className="relative">
                                <img
                                    src="/products/hero-img.svg"
                                    alt="offer tag"
                                    className="w-full max-w-xs md:max-w-md lg:max-w-lg"
                                />
                                <div className="offer-tag text-center">
                                    {/*<div className="ribbon-2">*/}
                                    {/*    <span>Our Services Start Form</span>*/}
                                    {/*</div>*/}
                                    <div className="offer-price-tag ">
                                        <span>$</span>0.99<small>/Mo</small>
                                        <p className="lead">Limited Time Offer!</p>
                                    </div>
                                    <Link to="offer-single-page.html" className="btn outline-white-btn " >Get Start
                                        Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
