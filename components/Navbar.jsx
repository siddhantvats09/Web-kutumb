"use client"; // for app directory or remove if using pages

import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1c1c1e9d] relative z-2 text-white p-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link href={"/"}>
          <img
            src={"/images/logo.png"}
            alt="logo"
            className="w-[150px] h-auto"
          ></img>
        </Link>
      </div>

      {/* Links - Hidden on small screens */}
      <div className="hidden md:flex space-x-16 text-[20px] font-medium pr-10">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
      
        <Link href={"/about-us"} className="hover:text-gray-300">
          About
        </Link>
        <Link href="/services" className="hover:text-gray-300">
          Services
        </Link>
      
        <Link href="/contactus" className="hover:text-gray-300">
          Contact Us
        </Link>
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
        <div className="absolute z-99  top-18 left-0 right-0 bg-[#1c1c1e] flex flex-col items-center space-y-4 py-4 md:hidden ">
         <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
      
        <Link href={"/about-us"} className="hover:text-gray-300">
          About
        </Link>
        <Link href="/services" className="hover:text-gray-300">
          Services
        </Link>
      
        <Link href="/contactus" className="hover:text-gray-300">
          Contact Us
        </Link>
        </div>
      )}
    </nav>
  );
}
