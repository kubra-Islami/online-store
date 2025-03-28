import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-500 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">🛍️ Online Store</h1>
                <div className="flex gap-4">
                    <Link to="/" className="hover:text-gray-300 transition">🏠 Home</Link>
                    <Link to="/cart" className="hover:text-gray-300 transition">🛒 Cart</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

