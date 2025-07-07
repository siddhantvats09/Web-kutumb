"use client";

import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 text-white px-6 py-4 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="flex items-center justify-between w-full">
        {/* Left - Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logos.png"
            alt="Logo"
            width={140}
            height={40}
            className="hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Center - Links */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          <Link
            href="/about-us"
            className="relative transition duration-300 hover:text-indigo-300 group"
          >
            About
            <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300" />
          </Link>
          <Link
            href="/services"
            className="relative transition duration-300 hover:text-indigo-300 group"
          >
            Services
            <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300" />
          </Link>
          <Link
            href="/proof"
            className="relative transition duration-300 hover:text-indigo-300 group"
          >
            Our Work
            <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300" />
          </Link>
        </div>

        {/* Right - Contact Button */}
        {/* <div className="hidden md:block">
          <Link
            href="/contactus"
            className="px-5 py-2 bg-indigo-500 hover:bg-indigo-400 transition rounded-full font-medium"
          >
            Contact
          </Link>
        </div> */}
        <div className="hidden md:block">
          <Link
            href="/contactus"
            className="
      px-6 py-3 
      text-white text-lg font-medium
      rounded-xl
      bg-transparent
      border border-white/20
      hover:border-[#494646]
      hover:bg-white/5
      hover:shadow-md
      hover:scale-105
      backdrop-blur-sm
      transition-all duration-300 ease-in-out
    "
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <HiOutlineMenuAlt3
            className="text-3xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md flex flex-col items-center space-y-4 py-4 md:hidden z-50 border-t border-white/10">
          <Link
            href="/about-us"
            className="text-lg hover:text-indigo-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-lg hover:text-indigo-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/proof"
            className="text-lg hover:text-indigo-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Our Work
          </Link>
          <Link
            href="/contactus"
            className="text-lg hover:text-indigo-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
