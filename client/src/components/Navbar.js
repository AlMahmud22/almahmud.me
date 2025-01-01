import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">My Website</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
