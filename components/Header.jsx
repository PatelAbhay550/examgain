"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const navlinks = [
    { href: "/", text: "Ask" },
    { href: "/login", text: "Login / Signup" },
  ];

  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md py-4 sm:py-4 px-4 w-full fixed top-0 z-30">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="text-2xl font-bold">
          <a href="/">Examgain</a>
        </div>

        {/* Hamburger icon for mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {navlinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-sm ${
                path === link.href
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden absolute top-16 right-0 bg-white shadow-lg w-full text-center">
            {navlinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block px-4 py-4 border-b ${
                  path === link.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.text}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
