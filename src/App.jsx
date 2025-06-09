import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFound/NotFoundPage.jsx";
import Login from "./pages/Login/Login.jsx";
import Layout from "./layouts/Layout";
import SignUp from "./pages/SignUp/SignUp.jsx";
import { FaArrowUp } from "react-icons/fa";
import Preloader from "./compopnents/Preloader/Preloader.jsx";

const ScrollToTopButton = ({ isVisible }) => (
    <button
        className={`scroll-top scroll-to-target ${isVisible ? "open" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
    >
        <FaArrowUp size={20} color="white" />
    </button>
);

// 👇 Hook that listens to route changes
const useRouteChangeLoader = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); // start loader on route change
        const timeout = setTimeout(() => setLoading(false), 1000); // simulate load time

        return () => clearTimeout(timeout);
    }, [location.pathname]);

    return loading;
};

const AppRoutes = () => {
    const isLoading = useRouteChangeLoader();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 100);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {isLoading && <Preloader />} {/* Show loader while route is loading */}

            <Routes>
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
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route
                    path="*"
                    element={
                        <Layout showFooter={false} showHeader={false}>
                            <NotFoundPage />
                        </Layout>
                    }
                />
            </Routes>

            <ScrollToTopButton isVisible={isScrolled} />
        </>
    );
};

const App = () => {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
};

export default App;
