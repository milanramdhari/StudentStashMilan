import React from 'react';
import {Link} from 'react-router-dom'

// Product component accepts props for dynamic rendering
export default function Product({ image, label, price, priceFixed, condition, description }) {
    return (
        <div className="flex flex-col gap-2 w-full max-w-xs mx-auto">
            {/* Display the product image */}
            <Link>
            <div className="h-48 w-full">
                {/* If image is an array, render the first image */}
                <img src={image} alt={label} className="w-full h-full object-cover" />
            </div>
            </Link>
            
            {/* creates an effect everytime a user hovers over the label below */}
            <Link className="hover:text-red-500">
                {/* Display the product label */}
            <div className="mb-1">
                <h2 className="text-xl font-semibold">{label}</h2>
            </div>
            </Link>

            {/* Display the product price */}
            <div className="mb-1 flex items-center gap-2">
                <p className="text-lg font-medium">${price}</p>
                <div className="badge badge-outline">{priceFixed ? "Fixed":"Negotiable"}</div>
            </div>

            {/* Display the product condition */}
            <div className="mb-1">
                <p className="text-sm text-gray-500">Condition: {condition}</p>
            </div>

            {/* Display the product description */}
            <div>
                <p className="text-sm">{description}</p>
            </div>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    );
}
