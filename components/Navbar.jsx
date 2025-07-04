"use client";

import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contactus" },
  ];

  return (
    <nav className="sticky top-0 z-50 text-white px-6 py-4 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logos.png" // <-- Put your logo image here
            alt="SixthGenX Logo"
            width={140} // Adjust size as needed
            height={40}
            className="hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition duration-300 hover:text-indigo-300 group"
            >
              {item.label}
              <span className="absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300" />
            </Link>
          ))}
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
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg hover:text-indigo-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
