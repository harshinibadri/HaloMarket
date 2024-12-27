import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cart }) => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/cart" className="mr-4">Cart ({cart.length})</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
};

export default Header;
