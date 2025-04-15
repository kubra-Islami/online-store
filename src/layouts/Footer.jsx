import React from "react";
import {FaInstagram} from "react-icons/fa6";
import {FaGreaterThan, FaTelegram} from "react-icons/fa";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="footer--main">
            <footer className="container flex flex-wrap xl:flex-nowrap gap-y-8 px-4 sm:px-6 py-8 sm:py-12">
                {/* Left Section */}
                <div className="footer--content xl:w-1/2 w-full flex flex-col">
                    <a href="/public" className="footer__logo flex items-center space-x-2 mb-6">
                        <img
                            src="/products/logo-main00.svg"
                            alt="logo"
                            // width="127"
                            className="w-[127px] max-w-full"
                        />
                    </a>
                    <p className="mb-10">
                        TechnoShop is a UK-based online marketplace and retailer. This e-commerce platform offers a
                        broad selection of consumer goods, including sports and leisure items, electronics, groceries,
                        personal care products, and digital goods — all with fast and reliable delivery across the UK.

                    </p>

                    <div className="flex flex-wrap lg:flex-nowrap gap-y-6">
                        {/* Footer Menus */}
                        <div className="flex flex-wrap justify-between w-full gap-y-6">
                            {/*<div className="flex flex-wrap justify-between w-full gap-y-6">*/}
                            {/*    <div className="sm:px-4 md:px-6 xl:px-8 2xl:px-12 w-full sm:w-auto">*/}
                            {/* Easy Access */}
                            <div className="2xl:px-12 xl:px-8 px-6">
                                <span className="font-semibold block mb-3 text-white">Quick Links</span>
                                <ul className="space-y-2">
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/account">My Account</Link></li>
                                    <li><Link to="/cart">Cart</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                </ul>
                            </div>

                            {/* Customer Guide */}
                            <div className="2xl:px-12 xl:px-8 px-6">
                                <span className="font-semibold block mb-3 text-white">Customer Guide</span>
                                <ul className="space-y-2">
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/account">My Account</Link></li>
                                    <li><Link to="/cart">Cart</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                </ul>
                            </div>

                            {/* Shopping Guide */}
                            <div className="2xl:px-12 xl:px-8 px-6">
                                <span className="font-semibold block mb-3 text-white">Shopping Guide</span>
                                <ul className="space-y-2">
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/account">My Account</Link></li>
                                    <li><Link to="/cart">Cart</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*</div>*/}
                </div>

                {/* Right Section */}
                <div className="footer--info flex flex-col lg:flex-1 w-full">
                    <p style={{marginBottom:"10px"}}>Subscribe to our newsletter by entering your email.</p>

                    <div className="footer__newsletter mb-6">
                        <form className="relative w-full max-w-md">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 pr-10 rounded"
                            />
                            <FaGreaterThan className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white"/>
                        </form>
                    </div>

                    {/* Social */}
                    <div className="footer__social flex flex-wrap gap-x-8 gap-y-3 mb-11 mt-6">
                        <Link to="#" className="flex items-center space-x-2">
                            <i className="isax isax-instagram"></i>
                            <span>Instagram</span>
                            <FaInstagram/>
                        </Link>
                        <Link to="#" className="flex items-center space-x-2">
                            <i className="isax isax-send-2"></i>
                            <span>Telegram</span>
                            <FaTelegram/>
                        </Link>
                    </div>

                    {/* Contact Info */}
                    <div className="footer__addresses flex flex-col lg:flex-row justify-between">
                        <div className="space-y-3">
                            <div className="flex gap-x-2 flex-wrap">
                                <p className="font-semibold">Phone:</p>
                                <a href="tel:0216456675">021-6456675</a>
                                <a href="tel:0216455621">021-6455621</a>
                            </div>
                            <div className="flex gap-x-2 flex-wrap">
                                <p className="font-semibold">Address:</p>
                                <p>London, Oxford Street, Wellington Building</p>
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://tecnoshop.vakiljavangp.com/wp-content/uploads/2024/11/refund_9441279-1-1.png"
                                alt="Refund logo"
                                className="max-w-[120px] mt-4 lg:mt-0"
                            />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;