import React from "react";
import { Container } from "@mui/material";
import {TiMail, TiLockClosed, TiUser} from "react-icons/ti";
import {Link} from "react-router-dom";


import "./SignUp.css";
const SignUp = () => {

    return (
        <section className="min-h-screen bg-gradient-to-br py-24 hero-bg-2 ptb-100 full-screen">
            <Container maxWidth="lg" className="px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between pt-10 lg:pt-0">
                    {/* Left Section */}
                    <div className="w-full md:w-5/12 lg:w-8/12 text-white mb-10 lg:mb-0 text-center lg:text-left">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-white create-acc">
                                Create Your Account
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl max-w-md mx-auto lg:mx-0 " style={{marginTop:"1rem",lineHeight:"2rem"}} >
                                Keep your face always toward the sunshine - and shadows will fall behind you.
                            </p>
                        </div>
                    </div>

                    {/* Right Section - SignUp Form */}
                    <div className="w-full md:w-7/12 lg:w-4/12 mx-auto lg:mx-0">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden form-section">
                            <div className="p-6 md:p-10">
                                <div className="mb-6 head-title-login text-center lg:text-left">
                                    <h5 className="text-2xl font-semibold login-signup-card mb-2">Create account</h5>
                                    <p className=" text-sm sm:text-base">
                                        Made with love by developers for developers.
                                    </p>
                                </div>

                                <form className="space-y-6 login-signup-form">
                                    {/* Name Field */}
                                    <div className="form-group relative">
                                        <label className="block text-sm font-medium text-gray-500 mb-1">
                                            Your Name
                                        </label>
                                        <span className="input-icon">
                                              <TiUser size={30}/>
                                            </span>
                                        <input
                                            type="text"
                                            className="w-full pl-12 pr-3 py-2 border border-gray-300 rounded-md form-control text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    {/* Email Field */}
                                    <div className="form-group relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                        <span className="input-icon">
                                              <TiMail size={30}/>
                                            </span>
                                        <input
                                            type="email"
                                            className="w-full pl-12 pr-3 py-2 border border-gray-300 rounded-md form-control text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400"
                                            placeholder="name@yourdomain.com"
                                        />
                                    </div>

                                    {/* Password Field */}
                                    <div className="form-group relative">
                                        <div className="flex justify-between items-center mb-1">
                                            <label className="text-sm font-medium text-gray-700">Password</label>
                                            <a
                                                // href="password-reset.html"
                                                href="#"
                                                className="text-xs text-gray-500 hover:text-gray-700"
                                            >
                                                Forgot password?
                                            </a>
                                        </div>
                                        <span className="input-icon">
                                              <TiLockClosed size={30}/>
                                            </span>
                                        <input
                                            type="password"
                                            className="w-full pl-12 pr-3 py-2 border border-gray-300 rounded-md form-control text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400"
                                            placeholder="Enter your password"
                                        />
                                    </div>
                                    <div className="my-4">
                                        <div className="flex items-start gap-2 text-sm sm:text-base text-gray-700 checkbx">
                                            <input
                                                type="checkbox"
                                                id="check-terms"
                                                className="mt-1.5 shrink-0 w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500 focus:ring-2"
                                            />
                                            <label htmlFor="check-terms" className="flex-1">
                                                I agree to the{" "}
                                                <a href="#" className="text-amber-600 hover:underline">
                                                    Terms & Conditions
                                                </a>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="w-full  text-white font-semibold py-2 rounded-md transition-colors duration-300 sign-in"
                                    >
                                        Sign up
                                    </button>
                                </form>
                            </div>

                            {/* Bottom Link */}
                            <div className="border-t px-6 py-4 bg-transparent text-sm create-account">
                                <span className="text-gray-500">Already have an account?</span>
                                {/*<a href="sign-up.html" className=" hover:underline ml-1">*/}
                                <Link to="/login" className=" hover:underline ">
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default SignUp;
