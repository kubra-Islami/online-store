import React from "react";
// Fashion & Apparel
import { FaTshirt } from 'react-icons/fa';
import { GiConverseShoe, GiAmpleDress, GiFruitBowl, GiLipstick, GiSoccerBall, GiHammerNails, GiDogBowl, GiPapers } from 'react-icons/gi';
import { MdToys } from 'react-icons/md';
import { MdChair, MdSmartphone, MdOutlineEventNote } from "react-icons/md";

const categories = [
    { name: 'Fashion & Apparel', to: '/', icon: FaTshirt },
    { name: 'Electronics & Gadgets', to: '/', icon: MdSmartphone },
    { name: 'Home & Living', to: '/', icon: MdChair },
    { name: 'Food & Grocery', to: '/', icon: GiFruitBowl },
    { name: 'Beauty & Personal Care', to: '/', icon: GiLipstick },
    { name: 'Toys & Kids', to: '/', icon: MdToys },
    { name: 'Sports & Outdoors', to: '/', icon: GiSoccerBall },
    { name: 'Tools & DIY', to: '/', icon: GiHammerNails },
    { name: 'Pets', to: '/', icon: GiDogBowl },
    { name: 'Office & Stationery', to: '/', icon: MdOutlineEventNote },
];
function CategoryItem() {
    return (
        <div className="my-12 px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 bg-gray-100 p-6 rounded-xl shadow">
                {categories.map((cat, idx) => (
                    <Link to={cat.to} key={idx}>
                        <div key={idx} className="flex flex-col items-center text-center gap-2 p-4 hover:bg-white transition rounded-lg">
                            <cat.icon size={32} className="text-gray-700" />
                            <span className="text-sm font-medium text-gray-800">{cat.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CategoryItem;