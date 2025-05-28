import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFoundPage() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-4 bg-gradient-to-br from-orange-500 to-orange-200">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/notFound/notFound.jpg')" }}></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/70 to-orange-200/70 z-[-1]"></div>

            <div className="relative z-10 text-center text-white max-w-2xl px-4 error-content">
                <div className="relative h-[280px] mb-8 flex items-center justify-center notfound-404">
                    <h1 className="fourofour ">404</h1>
                </div>
                <h2 className="text-2xl font-semibold mb-4 sth-wrong">Sorry, something went wrong</h2>
                <p className="text-lg mb-6">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link
                    to="/"
                    className="inline-block px-6 py-2 rounded transition outline-white-btn  btn-gohome"
                >
                    Go to Homepage
                </Link>
            </div>
        </section>
    );
}

export default NotFoundPage;
