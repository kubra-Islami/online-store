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
                <div className="flex lg:flex-row items-center sm:flex-col gap-10 lg:gap-20 heroo">
                    {/* Left Content */}
                    <div
                        className="w-full pt-8 lg:pt-12 lg:text-left flex items-center justify-center lg:justify-start text-content">
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
                        {/* Decorative Shapes */}
                        <div className="absolute top-[20%] right-[20%] w-20 h-20 bg-gradient-to-tr from-[#f19a5b] to-[#fff] rounded-full opacity-50 z-0 animate-spin-slow hidden lg:block"></div>

                        <div className="absolute top-[20%] left-[5%]  animate-spin-slow z-10 opacity-10">
                            <div className="w-30 h-30
                                    border-l-[30px] border-r-[30px] border-b-[60px]
                                    border-l-transparent border-r-transparent border-b-[#f19a5b] " style={{backgroundColor:"#555"}}>
                            </div>
                        </div>

                        <div
                            className="absolute bottom-[10%] left-[15%] w-20 h-20 rounded-full bg-amber-50 border-2 border-dashed border-[#f19a5b] opacity-20 z-10 animate-spin-slow"></div>

                        <svg
                            className="absolute top-[80%] left-[80%] w-16 h-16 text-[#555] opacity-10 z-10 animate-spin-slow"
                            fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2z"/>
                        </svg>


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


    );
}

export default HeroSection;
