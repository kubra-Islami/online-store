import React from "react";
import {Link} from 'react-router-dom';


function NotFoundPage() {
    return (
        <div className="container flex flex-col items-center justify-between" style={{textAlign: 'center', padding: '50px'}}>
            <img
                src="../../public/products/NotFound.png"
                alt="Not Found Page"
                className="w-fit h-96 object-contain "
                style={{margin:'2rem 0'}}
            />
            <p className="text-red-600 font-bold w-fit ">Oops! The page you're looking for doesn't exist.</p>
            <Link className="bg-amber-500 text-white p-6 rounded-sm" to="/" style={{marginTop: '1rem', display: 'inline-block',padding: '.5rem'}}>
                Go Back Home
            </Link>
        </div>
    )
}

export default NotFoundPage;