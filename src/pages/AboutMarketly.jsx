import React, {useEffect, useRef} from "react";
import {FaCheck} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const AboutMarkely = () => {
    const sectionRef = useRef(null);
    useEffect(() => {

        const element = sectionRef.current;

        gsap.fromTo(
            element,
            { opacity: 0, x: -200 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%", // when top of section hits 80% of viewport height
                    toggleActions: "play none none reverse", // animate in on scroll down, reverse on scroll up
                },
            }
        );
    }, []);
    return (
        <div ref={sectionRef}
            className="container about_marketly flex flex-col md:flex-row items-center lg:justify-between px-4 sm:px-6 md:px-8 py-12 gap-10">

            {/* Right side - Image */}
            <div className="w-full md:w-1/2 md:text-left">
                <img
                    src="/products/Group-5.webp"
                    alt="Markely"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </div>

            {/* Left side - Text */}
            <div className="w-full md:w-1/2 md:text-left mb-6 md:mb-0">

                <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                    Welcome to Markely
                </h1>
                <p className="text-base  mb-4">
                    Markely is a cutting-edge platform that empowers businesses to leverage the power of data and
                    technology to reach new heights.
                    We specialize in providing innovative solutions that drive success for our clients.
                    Our team of experts is dedicated to delivering outstanding results through strategic planning,
                    advanced tools, and creative approaches.
                    Join us in revolutionizing the future of business.
                </p>

                <div className="features rounded-lg p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Column 1 */}
                        <div className="flex items-center gap-3" style={{padding: "10px"}}>
                            <FaCheck className="text-amber-500"/>
                            <span className=" text-lg">User-friendly interface</span>
                        </div>
                        <div className="flex items-center gap-3" style={{padding: "10px"}}>
                            <FaCheck className="text-amber-500"/>
                            <span className=" text-lg">Fast performance</span>
                        </div>

                        {/* Column 2 */}
                        <div className="flex items-center gap-3" style={{padding: "10px"}}>
                            <FaCheck className="text-amber-500"/>
                            <span className=" text-lg">Secure environment</span>
                        </div>
                        <div className="flex items-center gap-3" style={{padding: "10px"}}>
                            <FaCheck className="text-amber-500"/>
                            <span className=" text-lg">24/7 customer support</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMarkely;
