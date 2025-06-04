import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFound/NotFoundPage.jsx";
import Login from "./pages/Login/Login.jsx";
import Layout from "./layouts/Layout";
import SignUp from "./pages/SignUp/SignUp.jsx";
import {FaArrowUp} from "react-icons/fa";

const App = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    // const [preloader, setPreloader] = useState(false);

    // Scroll detection with cleanup
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 100); // starts showing button after 100px scroll
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll); // cleanup
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // useEffect(()=>{
    //     const hanldlePreloader = window.onload = () => {
    //         setPreloader(true)
    //     }
    //
    //     return()=>{
    //         window.removeEventListener("", hanldlePreloader);
    //     }
    // },[])


    return (
        <>
            <Router>
                <Routes>
                    {/* SignUp and Login routes */}
                    <Route
                        path="/login"
                        element={
                            <Layout showFooter={false}>
                                <Login />
                            </Layout>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <Layout showFooter={false}>
                                <SignUp />
                            </Layout>
                        }
                    />

                    {/* Main route */}
                    <Route
                        path="/"
                        element={
                            <Layout>
                                <Home />
                            </Layout>
                        }
                    />

                    {/* Not Found route */}
                    <Route
                        path="*"
                        element={
                            <Layout showFooter={false} showHeader={false}>
                                <NotFoundPage />
                            </Layout>
                        }
                    />
                </Routes>
            </Router>

            {/* Scroll-to-top button */}
            <button
                className={`scroll-top scroll-to-target ${isScrolled ? "open" : ""}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <FaArrowUp size={20} color="white" />
            </button>
        </>
    );
};

export default App;
