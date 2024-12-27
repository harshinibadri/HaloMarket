import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  const totalCost = cart.reduce((acc, product) => acc + product.price, 0);

  // Function to remove product from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold text-white-800 mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-lg text-white-500">Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <li key={product.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
                <div>
                  <p className="text-lg font-semibold text-gray-800">{product.title}</p>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-lg font-bold text-blue-500">${product.price}</p>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="ml-4 text-red-500 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-semibold text-white-800">Total: ${totalCost}</p>
            <Link to="/checkout" className="bg-white-500 text-white p-3 rounded-lg hover:bg-white-600 transition duration-300">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
