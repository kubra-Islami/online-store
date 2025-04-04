import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./compopnents/Checkout.jsx";
import Header from "./pages/Header.jsx";
import ProductList from "./pages/ProductList.jsx";
import HeroSection from "./pages/HeroSection.jsx";


const App = () => {
    return (
        <Router>
            <Header />
            <HeroSection/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Router>
    );
};

export default App;
