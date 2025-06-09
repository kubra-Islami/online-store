import React from "react";
import {Link} from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="hero-equal-height relative min-h-screen flex items-center text-white overflow-hidden">
            {/* Background shape */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-left-top"
                style={{backgroundImage: "url('/hero-section/t6-hero-shape 1.png')"}}
            ></div>

            <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
                <div className="flex lg:flex-row items-center gap-10 lg:gap-20">
                    {/* Left Content */}
                    <div className="w-full pt-8 lg:pt-12 lg:text-left flex items-center justify-center lg:justify-start text-content">
                        <div className="hero-slider-content mx-auto lg:mx-0">
                            <strong className="text-secondary block text-lg">Online Shop</strong>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-white leading-snug">
                                Empower Your Business Traffic at The Top
                            </h1>
                            <p className="text-base sm:text-lg mt-4 text-gray-200">
                                Holistic procrastinate mission-critical convergence with reliable customer service.
                                Assertively underwhelm idea-sharing for impactful solutions.
                            </p>

                            <div className="mt-6 get-start-btn">
                                <Link
                                    to="#"
                                    className="secondary-solid-btn"
                                >
                                    Get Start Now
                                </Link>
                            </div>
                        </div>
                    </div>


                    {/* Right Image */}
                    <div className="w-full pt-8 lg:pt-12">
                        <img
                            src="/hero-section/hroo-img.png"
                            alt="image of online-shop hero"
                            className="img-hero w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto object-contain "
                        />

                    </div>
                </div>
            </div>

            {/* Floating shapes */
            }
            {/*<img*/
            }
            {/*    src="/hero-section/cta-2-path-shape.png"*/
            }
            {/*    alt="group shape"*/
            }
            {/*    className="absolute top-60 left-60 w-10 md:w-10 z-10"*/
            }
            {/*/>*/
            }
            {/*<img*/
            }
            {/*    src="/hero-section/cta-2-circle-shape.png"*/
            }
            {/*    alt="group shape"*/
            }
            {/*    className="absolute top-20 left-50 w-10 z-10"*/
            }
            {/*/>*/
            }
            {/*<img*/
            }
            {/*    src="/hero-section/cta-2-tringle-shape.png"*/
            }
            {/*    alt="group shape"*/
            }
            {/*    className="absolute top-1/2 left-60 w-16 z-10"*/
            }
            {/*/>*/
            }
            {/*<img*/
            }
            {/*    src="/hero-section/cta-2-tringle-shape.png"*/
            }
            {/*    alt="group shape"*/
            }
            {/*    className="absolute bottom-0 left-1/4 w-16 z-10"*/
            }
            {/*/>*/
            }

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
