import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list grid grid-cols-3 gap-6 p-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="card bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
        >
          <div className="image-container w-full h-64 mb-4 overflow-hidden rounded-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"  // Ensures the image covers the space without distortion
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">{product.title}</h3>
          <p className="text-gray-700 mb-4 text-center">{product.description}</p>
          <p className="text-lg font-semibold text-green-600 text-center">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 w-full bg-green-500 text-white p-2 rounded-lg "
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
