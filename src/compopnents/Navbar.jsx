import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {BiSearch} from "react-icons/bi";

import {Dialog, DialogPanel} from "@headlessui/react";
import {BsCart2} from "react-icons/bs";

const navigation = [
    {name: 'Pages', href: 'pages'},
    {name: 'Best Sellers', to: 'Best-sellers'},
    {name: 'Sales ', to: 'Sales '},
    {name: 'Categories', href: 'categories'},
    {name: 'Login', to: 'login'},
]
const Navbar = ({isScrolled}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className='w-full'>
            <nav
                className={`w-full transition-all duration-300 ${
                    isScrolled ? 'bg-gray-200/40 backdrop-blur-md shadow-md' : ''
                }`}
                style={{
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                }}>
                {/* ✅ This is the centered container */}
                <div className="container mx-auto flex justify-between items-center">
                    {/* --- Logo and Cart --- */}
                    <div className="flex">
                        <div className="flex ml-4 relative top-2">
                            {!mobileMenuOpen && (
                                <Link to="/" className="block p-3 logo-top">
                                    <img
                                        src="../../public/products/logo-main.svg"
                                        alt="Company Logo"
                                        className="w-32 lg:h-16 sm:h-14 object-contain"
                                    />
                                </Link>
                            )}
                            <div
                                className={`shop-header__action--cart ${
                                    mobileMenuOpen ? 'hidden' : ''
                                }`} style={{marginRight: "20px"}}>
                                <Link to="cart"
                                      className={`${isScrolled ? 'shop-header__action--cart--btn-scroll' : 'shop-header__action--cart--btn'}`}>
                                    <BsCart2 className="isax isax-shopping-cart"/>
                                    <span id="mini-cart-count">0</span>
                                </Link>
                            </div>

                            <div
                                className={`${mobileMenuOpen ? 'hidden' : 'relative group ml-5 h-10'}`}
                            >
                                {/* Search Icon */}
                                <BiSearch
                                    className="absolute left-1 -translate-y-1/2 text-gray-500 w-5 h-5 z-10 cursor-pointer"
                                    style={{cursor: "pointer", top: '27px'}}
                                />

                                {/* Input Field */}
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="absolute left- w-0 text-center opacity-0 group-hover:w-[200px] group-hover:opacity-100 transition-all duration-300 ease-in-out bg-white border border-amber-500 rounded-full pl-8 pr-4 py-2 text-sm focus:w-[200px] focus:outline-none"
                                    style={{marginLeft: "15px", padding: "6px 12px", left: "-18px", top: "8px"}}
                                />
                            </div>


                        </div>
                    </div>

                    {/* --- Mobile Toggle --- */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`${
                                isScrolled ? ' -m-2.5 inline-flex text-amber-500 items-center justify-center rounded-md p-2.5' : ''
                            }`}>

                            <Bars3Icon
                                aria-hidden="true"
                                className={`size-8 transition-transform ${
                                    mobileMenuOpen ? 'hidden' : ''
                                }`}
                            />
                        </button>
                    </div>

                    {/* --- Desktop Nav --- */}
                    <div className="hidden lg:flex items-center">
                        <div className="flex lg:gap-x-11 menu-item-desktop ">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className={`text-sm font-semibold px-1 py-1 rounded
                                     ${item.name === 'Login' ? (isScrolled ? 'login_btn_scrolled' : 'login_btn') : ''}
                                     ${isScrolled ? 'menu-item-mobile ' : 'menu-item-top'}`}
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
                <div className="fixed inset-0 z-50 p-2.5 lg:px-8"/>
                <DialogPanel
                    className={`mobile-menu fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 sm:max-w-sm sm:ring-1`}
                    style={{paddingLeft: '1rem', paddingRight: '1rem'}}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <Link to="/" className="block p-2">
                                <img
                                    src="../../public/products/logo-main.svg"
                                    alt="Company Logo"
                                    className="w-32 h-16 object-contain relative top-2"
                                />
                            </Link>
                            <div className="shop-header__action--cart--mobile-menu">
                                <Link to="cart"
                                      className="shop-header__action--cart--btn">
                                    {/*className={`${isScrolled ? 'shop-header__action--cart--btn-scroll'  : 'shop-header__action--cart--btn'}`}>*/}
                                    <BsCart2 className="isax isax-shopping-cart"/>
                                    <span id="mini-cart-count">0</span>
                                </Link>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`${
                                isScrolled ? ' -m-2.5 inline-flex text-white items-center justify-center rounded-md p-2.5' : ''
                            }`}
                        >
                            <XMarkIcon aria-hidden="true" className="size-8"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6 menu-item ">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold ${
                                            item.name === 'Login' ? 'login_btn' : ''
                                        } ${isScrolled ? 'menu-item-mobile' : 'menu-item-top'}`}
                                    >
                                        {item.name}
                                    </Link>

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

