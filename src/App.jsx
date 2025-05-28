import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFound/NotFoundPage.jsx";
import Login from "./pages/Login/Login.jsx";
import Layout from "./layouts/Layout";
import SignUp from "./pages/SignUp/SignUp.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* SignUp route: header only, no footer */}
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
                        <Layout showFooter={false} showHeader={false}>
                            <NotFoundPage />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
