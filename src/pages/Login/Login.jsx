import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { TiMail, TiLockClosed } from "react-icons/ti";


import "./Login.css";
const Login = () => {
    useEffect(() => {
        window.dispatchEvent(new Event("resize"));
    }, []);

    return (
        <section className="min-h-screen bg-gradient-to-br py-24 hero-bg-2 ptb-100 full-screen">
            <Container maxWidth="lg" className="px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between pt-10 lg:pt-0">
                    {/* Left Section */}
                    <div className="w-full md:w-5/12 lg:w-8/12 text-white mb-10 lg:mb-0 text-center lg:text-left">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                                Welcome Back!
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl max-w-md mx-auto lg:mx-0">
                                Keep your face always toward the sunshine - and shadows will fall behind you.
                            </p>
                        </div>
                    </div>

                    {/* Right Section - Login Form */}
                    <div className="w-full md:w-5/12 lg:w-4/12 mx-auto lg:mx-0">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden form-section">
                            <div className="p-6 md:p-10">
                                <div className="mb-6 head-title-login text-center lg:text-left">
                                    <h5 className="text-2xl font-semibold login-signup-card mb-2">Login</h5>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        Sign in to your account to continue.
                                    </p>
                                </div>

                                <form className="space-y-6 login-signup-form">
                                    {/* Email Field */}
                                    <div className="form-group relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                            <span className="input-icon">
                                              <TiMail size={30} />
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
                                                href="password-reset.html"
                                                className="text-xs text-gray-500 hover:text-gray-700"
                                            >
                                                Forgot password?
                                            </a>
                                        </div>
                                            <span className="input-icon">
                                              <TiLockClosed size={30} />
                                            </span>
                                        <input
                                            type="password"
                                            className="w-full pl-12 pr-3 py-2 border border-gray-300 rounded-md form-control text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400"
                                            placeholder="Enter your password"
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition-colors duration-300 sign-in"
                                    >
                                        Sign in
                                    </button>
                                </form>
                            </div>

                            {/* Bottom Link */}
                            <div className="border-t px-6 py-4 bg-transparent text-sm text-center">
                                <span className="text-gray-500">Not registered?</span>
                                <a href="sign-up.html" className="text-indigo-600 hover:underline ml-1">
                                    Create account
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Login;
