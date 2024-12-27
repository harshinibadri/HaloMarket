import React from 'react';

const Checkout = () => {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Checkout</h2>
      <form className="bg-white p-6 rounded-lg shadow-lg">
        <input type="text" placeholder="Name" className="border p-3 mb-4 w-full rounded-md shadow-sm focus:ring-2 focus:ring-blue-500" />
        <input type="text" placeholder="Address" className="border p-3 mb-4 w-full rounded-md shadow-sm focus:ring-2 focus:ring-blue-500" />
        <input type="text" placeholder="Card Number" className="border p-3 mb-4 w-full rounded-md shadow-sm focus:ring-2 focus:ring-blue-500" />
        <button type="submit" className="bg-blue-500 text-white p-3 w-full rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Complete Purchase
        </button>
      </form>
    </div>
  );
};

export default Checkout;
