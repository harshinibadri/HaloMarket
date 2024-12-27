import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cart }) => {
  return (
    <header className="bg- #8B5CF6-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1 text-center">
          <Link to="/" className="text-3xl font-extrabold text-white font-serif background-color: #8B5CF6; /* Deep Purple */
">
            HaloMarket
          </Link>
        </div>
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
