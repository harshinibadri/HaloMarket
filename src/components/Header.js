import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cart, setSearchTerm }) => {
  return (
    <header className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          HaloMarket
        </Link>
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search products..."
          className="p-2 rounded border"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <nav className="flex space-x-4">
          <Link to="/" className="text-white font-semibold">Home</Link>
          <Link to="/cart" className="text-white font-semibold">Cart ({cart.length})</Link>
          <Link to="/checkout" className="text-white font-semibold">Checkout</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
