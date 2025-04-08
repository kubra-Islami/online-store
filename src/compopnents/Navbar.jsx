import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {Dialog, DialogPanel} from "@headlessui/react";
import {BsCart2} from "react-icons/bs";

const navigation = [
    {name: 'Pages', href: 'pages'},
    {name: 'Features', to: 'features'},
    {name: 'products', to: 'products'},
    {name: 'Categories', href: 'categories'},
    {name: 'Login', to: 'login'},
]
const Navbar = ({ isScrolled }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className='w-full'>
            <nav
                className={`w-full transition-all duration-300 ${
                    isScrolled ? 'bg-amber-500/40 backdrop-blur-md shadow-md' : ''
                }`}
                style={{
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                }}>
                {/* ✅ This is the centered container */}
                <div className="container mx-auto flex justify-between items-center">
                    {/* --- Logo and Cart --- */}
                    <div className="flex">
                        <div className="flex ml-4">
                            {!mobileMenuOpen && (
                                <Link to="/" className="block p-2 logo-top">
                                    <img
                                        src="../../public/products/logo-main.svg"
                                        alt="Company Logo"
                                        className="w-32 lg:h-24 sm:h-20 object-contain"
                                    />
                                </Link>
                            )}
                        </div>
                        <div className="shop-header__action--cart">
                            <Link to="cart" className="shop-header__action--cart--btn">
                                <BsCart2 className="isax isax-shopping-cart" />
                                <span id="mini-cart-count">0</span>
                            </Link>
                        </div>
                    </div>

                    {/* --- Mobile Toggle --- */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="-m-2.5 inline-flex text-white items-center justify-center rounded-md p-2.5"
                        >
                            <Bars3Icon
                                aria-hidden="true"
                                className={`size-6 transition-transform ${
                                    mobileMenuOpen ? 'hidden' : ''
                                }`}
                            />
                        </button>
                    </div>

                    {/* --- Desktop Nav --- */}
                    <div className="hidden lg:flex items-center">
                        <div className="flex lg:gap-x-12">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className="text-sm font-semibold menu-item-top"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50 p-2.5 lg:px-8" />
                <DialogPanel
                    className={`mobile-menu fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 sm:max-w-sm sm:ring-1`}
                    style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
                >
                    <div className="flex items-center justify-between">
                        <Link to="/" className="block p-2">
                            <img
                                src="../../public/products/logo-main.svg"
                                alt="Company Logo"
                                className="w-32 h-20 object-contain relative top-2"
                            />
                        </Link>

                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-white"
                        >
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </div>
    );
};

export default Navbar;

