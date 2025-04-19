import React from "react";
import {FaCheck} from "react-icons/fa";



const AboutMarkely = () => {
    return (
        <div
            className="container about_marketly w-full px-4 sm:px-6 md:px-8 py-12 flex flex-col lg:flex-row items-center lg:justify-between gap-10 max-w-[1539px] mx-auto"
        >
            {/* Right side - Image */}
            <div className="w-full bg-transparent  p-0 m-0 overflow-hidden">
                <img
                    src="/products/Group-5.webp"
                    alt="Markely"
                    className="w-full h-auto object-cover rounded-lg shadow-lg block"
                />
            </div>


            {/* Left side - Text */}
            <div className="w-full">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                    Welcome to Markely
                </h1>
                <p className="text-base mb-4 about-desc">
                    Markely is a cutting-edge platform that empowers businesses to leverage the power of data and
                    technology to reach new heights. We specialize in providing innovative solutions that drive
                    success for our clients. Our team of experts is dedicated to delivering outstanding results
                    through strategic planning, advanced tools, and creative approaches. Join us in
                    revolutionizing the future of business.
                </p>

                <div className="flex justify-center items-center min-h-[200px] mt-8">
                    <div className="features rounded-xl p-10 sm:p-12 lg:p-16 w-full max-w-3xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-center gap-3 p-2">
                                <FaCheck className="text-amber-500"/>
                                <span className="text-lg">User-friendly interface</span>
                            </div>
                            <div className="flex items-center gap-3 p-2">
                                <FaCheck className="text-amber-500"/>
                                <span className="text-lg">Fast performance</span>
                            </div>
                            <div className="flex items-center gap-3 p-2">
                                <FaCheck className="text-amber-500"/>
                                <span className="text-lg">Secure environment</span>
                            </div>
                            <div className="flex items-center gap-3 p-2">
                                <FaCheck className="text-amber-500"/>
                                <span className="text-lg">24/7 customer support</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default AboutMarkely;
