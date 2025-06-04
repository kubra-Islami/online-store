'use client'

import React,{useEffect,useState} from 'react'
import Navbar from "../compopnents/Navbar.jsx";
import {useLocation} from "react-router-dom";

export default function Example() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 690) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className=''>
            <header className={`absolute w-full z-50  ${isHome ? 'home-header' : 'other-header'}`}>
                <Navbar isScrolled={isScrolled}/>
            </header>
        </div>

    )
}