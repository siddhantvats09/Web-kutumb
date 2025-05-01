'use client'; // for app directory or remove if using pages

import { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1c1c1e] text-white p-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
       <img src={"/images/logo.png"} alt='logo' className='w-[150px] h-auto'>
       </img>
      </div>

      {/* Links - Hidden on small screens */}
      <div className="hidden md:flex space-x-16 text-[20px] font-medium pr-10">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">Services</a>
        <a href="#" className="hover:text-gray-300">Data</a>
        <a href="#" className="hover:text-gray-300">Clients</a>
      </div>

      {/* Right side: Search & Menu */}
      <div className="flex  md:hidden items-center space-x-4 md:space-x-2">
        {/* <FiSearch className="text-lg cursor-pointer" /> */}
        <HiOutlineMenuAlt3
          className="text-2xl cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-18 left-0 right-0 bg-[#1c1c1e] flex flex-col items-center space-y-4 py-4 md:hidden z-50">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Data</a>
          <a href="#">Clients</a>
        </div>
      )}
    </nav>
  );
}

