// components/Navbar.jsx
import React from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white  py-5 z-50">
      <div className="flex justify-between items-center gap-20 text-md text-gray-800 max-w-screen-xl mx-auto px-8">
        <a href="#">ABOUT</a>
        <a href="#">NEWS & EVENTS</a>
        <a href="#">RESEARCH</a>

        <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />

        <a href="#">PORTFOLIOS</a>
        <a href="#">PEOPLE</a>
        <a href="#">CONTACT US</a>
      </div>
    </nav>
  );
};

export default Navbar;