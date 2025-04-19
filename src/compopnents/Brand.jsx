import React from 'react';
import {Link} from "react-router-dom";

const data = [
    {
        id: 1,
        title: 'Most Popular Brands',
        imageSrc: 'public/products/television.png',
        desc: "Audio devices",
        imageAlt: 'television image for brands',
    },
    {
        id: 2,
        title: 'Most Popular Brands',
        imageSrc: '/products/otoo.png',
        desc: "Home & kitchen appliances",
        imageAlt: 'phone image for brands',
    },
    {
        id: 3,
        title: 'Most Popular Brands',
        imageSrc: '/products/radio-1.png',
        desc: "Audio devices",
        imageAlt: 'radio image for brands',
    }
];

const Brand = () => {
    return (
        <div className='container'>
            <div className='brand-element products-container'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10 rounded-lg'>
                    {
                        data.map((item, index) => (
                            <div key={index}
                                 className="brand flex flex-col lg:flex-row items-center lg:items-start border p-4 rounded-md shadow-sm">

                                {/* TEXT CONTENT on the RIGHT */}
                                <div className="flex flex-col text-left lg:text-left ml-4 brand-txt-container">
                                    <h4 className="text-lg font-semibold brand-title">{item.title}</h4>
                                    <span className="text-sm text-slate-50 pt-6 brand-desc">{item.desc}</span>
                                    <button className="btn mt-2 rounded-sm brand-btn">View more</button>
                                </div>

                                {/* IMAGE on the LEFT */}
                                <Link to="#" className="flex-shrink-0">
                                    <img
                                        alt={item.imageAlt}
                                        src={item.imageSrc}
                                        className="object-contain"
                                    />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Brand;
