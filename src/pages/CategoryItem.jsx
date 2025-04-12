import React from "react";

function CategoryItem({categories}) {
    return (
        categories.map((cat, idx) => (
            <div
                key={idx}
                className="keen-slider__slide flex flex-col items-center text-center gap-2 p-4 rounded-lg transition-all duration-300 cat_item"
                style={{padding: '20px'}}>
                <cat.icon size={32} className="icon_category_item"/>
                <span className="text-sm font-medium text-inherit">{cat.name}</span>

            </div>
        ))
    )
}

export default CategoryItem;