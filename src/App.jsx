import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./compopnents/Checkout.jsx";
import Header from "./pages/Header.jsx";
import HeroSection from "./pages/HeroSection.jsx";
import Footer from "./pages/Footer.jsx";


const App = () => {
    return (
        <Router>
            <Header/>
            <HeroSection/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
