import React from 'react';

function ProductCard({ image, title, description, price }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-gray-600 text-sm">Price:</span>
        <span className="text-gray-900 font-semibold text-lg ml-2">${price}</span>
      </div>
    </div>
  );
}

export default ProductCard;