import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import NotFoundPage from "./pages/NotFoundPage.jsx";


const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<NotFoundPage/>} /> {/* Catch-all route */}
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
