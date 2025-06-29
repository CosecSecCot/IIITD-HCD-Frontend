import React, { useState } from 'react';
import hcdLogo from '../assets/logo.svg';
import iiitdLogo from '../assets/IIITD_logo.svg';
import { Search, Menu } from 'lucide-react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="w-full px-10 py-4 flex items-center justify-between">
        
        {/* Left: Logo and Text */}
        <div className="flex items-center gap-2">
          <img src={hcdLogo} alt="HCD Logo" className="w-12 h-12 object-contain" />
          <div className="text-sm text-gray-800 uppercase leading-tight tracking-tight">
            <div>Human Centred</div>
            <div>Design Department</div>
          </div>
        </div>

        {/* Right: Search, Menu, Logo */}
        <div className="flex items-center gap-3 relative">
          
          {/* Search Input */}
          <div className="flex items-center gap-2 border border-gray-400 rounded-full px-3 py-1 text-xs">
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-sm bg-transparent placeholder-gray-600 w-24"
            />
            <Search size={14} />
          </div>

          {/* Hamburger Menu */}
          <div className="relative">
            <button onClick={toggleDropdown}>
              <Menu size={40} className="text-black" />
            </button>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-md w-40 z-50">
                <ul className="text-sm text-gray-800">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">About</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Research</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">People</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact</li>
                </ul>
              </div>
            )}
          </div>

          {/* IIITD Logo */}
          <img src={iiitdLogo} alt="IIITD Logo" className="h-8 object-contain" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
