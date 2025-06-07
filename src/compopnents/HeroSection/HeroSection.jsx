import React from "react";
import {Link} from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="hero-equal-height relative min-h-screen flex items-center text-white overflow-hidden">
            {/* Background shape (left corner) */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-left-top"
                style={{backgroundImage: "url('/hero-section/t6-hero-shape 1.png')"}}
            ></div>

            {/* Floating shapes */}
            {/*<img*/}
            {/*    src="/hero-section/cta-2-path-shape.png"*/}
            {/*    alt="group shape"*/}
            {/*    className="absolute top-60 left-60 w-10 md:w-10 z-10"*/}
            {/*/>*/}
            {/*<img*/}
            {/*    src="/hero-section/cta-2-circle-shape.png"*/}
            {/*    alt="group shape"*/}
            {/*    className="absolute top-20 left-50 w-10 z-10"*/}
            {/*/>*/}
            {/*<img*/}
            {/*    src="/hero-section/cta-2-tringle-shape.png"*/}
            {/*    alt="group shape"*/}
            {/*    className="absolute top-1/2 left-60 w-16 z-10"*/}
            {/*/>*/}
            {/*<img*/}
            {/*    src="/hero-section/cta-2-tringle-shape.png"*/}
            {/*    alt="group shape"*/}
            {/*    className="absolute bottom-0 left-1/4 w-16 z-10"*/}
            {/*/>*/}

            {/* Content */}
            <div className="container mx-auto px-4 relative z-20">
                <div className="flex lg:flex-row items-center gap-20">
                    <div className="w-full pt-12">
                        <div className="hero-slider-content text-white">
                            <strong className="text-secondary">Online Shop</strong>
                            <h1 className="text-3xl md:text-5xl font-bold mt-4 text-white">
                                Empower Your Business Traffic at The Top
                            </h1>
                            <p className="text-lg mt-4" style={{maxWidth: "35rem"}}>
                                Holistic procrastinate mission-critical convergence with reliable
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
                    <div className="w-full pt-12">
                        <img
                            src="/hero-section/hroo-img.png"
                            alt="imgage of online-shop hero past. a girl gives some shopping pags"
                            className="w-full object-contain h-dvh"
                        />
                    </div>
                </div>
            </div>
        </div>

        // <div className="hero container-hero ">
        //     <img
        //         src="/hero-section/photo_2025-06-06_08-31-42.jpg"
        //         alt="img-online-shop"
        //         className="w-full object-contain"
        //     />
        //     {/*<Link*/}
        //     {/*    to="#"*/}
        //     {/*    className="secondary-solid-btn inline-block bg-secondary text-white px-6 py-3 rounded-md hover:bg-secondary-dark transition z-40">*/}
        //     {/*    Get Start Now*/}
        //     {/*</Link>*/}
        // </div>


    );
}

export default HeroSection;
