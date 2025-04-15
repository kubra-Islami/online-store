'use client'

import React,{useEffect,useState} from 'react'
import Navbar from "../compopnents/Navbar.jsx";

export default function Example() {
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
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
            <header className="absolute w-full z-50 " style={{
                position: 'fixed',
                width: '100%',
                top: 0,
                zIndex: 50,
            }}>
                <Navbar isScrolled={isScrolled}/>
            </header>
        </div>

    )
}