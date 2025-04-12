import React, {useEffect, useRef} from "react";
import ProductCard from "../compopnents/ProductCard.jsx";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProductList() {

    const sectionRef = useRef(null);
    useEffect(() => {

        const element = sectionRef.current;

        gsap.fromTo(
            element,
            { opacity: 0, x: 200 },
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
        <div ref={sectionRef} className="bg-white flex items-center justify-center">
            <div className="container mx-auto flex flex-col items-center max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <ProductCard />
            </div>
        </div>
    )
}
