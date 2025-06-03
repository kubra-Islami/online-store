import React from "react";
import {Link} from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
    return (
        // <div
        //     className="hero-equal-height relative flex items-center justify-center bg-cover bg-center px-4"
        //
        //     style={{backgroundImage: "url('products/hero-bg-main.svg')"}}>
        //     <div className="container mx-auto px-6">
        //         <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:gap-96 md:gap-20" style={{paddingLeft: '2rem', paddingRight: '2rem', paddingTop: "0.5rem"}}>
        //
        //         {/* Left Section */}
        //             <div className="text-white space-y-6 text-center md:text-left">
        //                 {/*<span className="text-lg font-medium">Digital Marketing</span>*/}
        //                 <h1 className="text-3xl md:text-5xl font-bold">Black Friday Super Sale Offer!</h1>
        //                 <p className="text-lg" style={{marginBottom: "1.25em"}} >
        //                     Up to 90% OFF digital marketing plans. Hurry up, limited time offer is ticking down, the
        //                     deal ends in:
        //                 </p>
        //                 <div className="action-btns mt-3" >
        //                     <a href="#" className="btn secondary-solid-btn"  >Get Start Now</a>
        //                 </div>
        //
        //             </div>
        //
        //             {/* Right Section */}
        //             <div className=" flex flex-col items-center md:items-end mt-8 md:mt-0 ">
        //             <div className="offer-tag-wrap mt-4 mt-sm-4 mt-md-0 mt-lg-0">
        //                     <div className="relative">
        //                         <img
        //                             src="/products/hero-img.svg"
        //                             alt="offer tag"
        //                             className="w-full max-w-xs md:max-w-md lg:max-w-lg"
        //                         />
        //                         <div className="offer-tag text-center">
        //                             {/*<div className="ribbon-2">*/}
        //                             {/*    <span>Our Services Start Form</span>*/}
        //                             {/*</div>*/}
        //                             <div className="offer-price-tag ">
        //                                 <span>$</span>0.99<small>/Mo</small>
        //                                 <p className="lead">Limited Time Offer!</p>
        //                             </div>
        //                             <Link to="offer-single-page.html" className="btn outline-white-btn " >Get Start
        //                                 Now</Link>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // <div className="hero-equal-height ptb-70">
        //     <div className="hero-shape-left" style={{background: "url('hero-section/t6-hero-shape.svg')no-repeat top left"}}></div>
        //     <img src="/hero-section/cta-2-path-shape.png" alt="group shape" className="img-fluid group-shape-1"/>
        //     <img src="/hero-section/cta-2-circle-shape.png" alt="group shape" className="img-fluid group-shape-2"/>
        //     <img src="/hero-section/cta-2-tringle-shape.png" alt="group shape" className="img-fluid group-shape-3"/>
        //     <img src="/hero-section/cta-2-tringle-shape.png" alt="group shape" className="img-fluid group-shape-4"/>
        //     <div className="container">
        //         <div className="row align-items-center">
        //             <div className="col-md-12 col-lg-6">
        //                 <div className="hero-slider-content text-white pt-5">
        //                     <strong className="color-secondary">Digital Marketing</strong>
        //                     <h1 className="text-white">Empower Your Business Traffic at The Top</h1>
        //                     <p className="lead">Holisticly procrastinate mission-critical convergence with reliable
        //                         customer service. Assertively underwhelm idea-sharing for impactful solutions. </p>
        //
        //                     <div className="action-btns mt-3">
        //                         <a href="#" className="btn secondary-solid-btn">Get Start Now</a>
        //                     </div>
        //                 </div>
        //             </div>
        //             {/*<div className="col-md-12 col-lg-6">*/}
        //             {/*    <div className="img-wrap">*/}
        //             {/*        <img src="img/t6-hero-img1.svg" alt="hero" className="img-fluid custom-width"/>*/}
        //             {/*    </div>*/}
        //             {/*</div>*/}
        //         </div>
        //     </div>
        // </div>


        <div className="hero-equal-height relative min-h-screen flex items-center text-white overflow-hidden">
            {/* Background shape (left corner) */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-left-top"
                style={{ backgroundImage: "url('/hero-section/t6-hero-shape 1.png')" }}
            ></div>

            {/* Floating shapes */}
            <img
                src="/hero-section/blue_line-removebg-preview.png"
                alt="group shape"
                className="absolute top-60 left-60 w-30 md:w-30 z-10"
            />
            <img
                src="/hero-section/Untitled_design__2_-removebg-preview.png"
                alt="group shape"
                className="absolute top-20 left-50 w-20 z-10"
            />
            <img
                src="/hero-section/cta-2-tringle-shape.png"
                alt="group shape"
                className="absolute top-1/2 left-60 w-16 z-10"
            />
            <img
                src="/hero-section/cta-2-tringle-shape.png"
                alt="group shape"
                className="absolute bottom-0 left-1/4 w-16 z-10"
            />

            {/* Content */}
            <div className="container mx-auto px-4 relative z-20">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="w-full lg:w-1/2 pt-12">
                        <div className="hero-slider-content text-white">
                            <strong className="text-secondary">Digital Marketing</strong>
                            <h1 className="text-3xl md:text-5xl font-bold mt-4 ">
                                Empower Your Business Traffic at The Top
                            </h1>
                            <p className="text-lg mt-4">
                                Holisticly procrastinate mission-critical convergence with reliable
                                customer service. Assertively underwhelm idea-sharing for impactful solutions.
                            </p>

                            <div className="mt-6">
                                <Link
                                    to="#"
                                    className="secondary-solid-btn inline-block bg-secondary text-white px-6 py-3 rounded-md hover:bg-secondary-dark transition">
                                    Get Start Now
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HeroSection;
