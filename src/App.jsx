import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Login from "./pages/Login/Login.jsx";
import Layout from "./layouts/Layout";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Login route: header only, no footer */}
                <Route
                    path="/login"
                    element={
                        <Layout showFooter={false}>
                            <Login />
                        </Layout>
                    }
                />

                {/* Other routes: header and footer */}
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
                        <Layout>
                            <NotFoundPage />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
