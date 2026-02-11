"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const navlinks = [
    { href: "/", text: "Search" },
    { href: "/guides", text: "Learn" },
    { href: "/mcq/the-penny-dropped-idiom", text: "MCQs" },
    { href: "/revision/ssc", text: "SSC" },
    { href: "/revision/class12", text: "Class 12" },
  ];

  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 py-4 px-4 w-full fixed top-0 z-40">
      <div className="container mx-auto flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Examgain
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded transition-colors"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2" aria-label="Main navigation">
          {navlinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded transition-all duration-200 ${
                path === link.href
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              }`}
              aria-current={path === link.href ? "page" : undefined}
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-gray-200 mt-4 pt-4" aria-label="Mobile navigation">
          {navlinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`block px-4 py-3 text-sm font-medium rounded transition-all duration-200 mb-2 last:mb-0 ${
                path === link.href
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              }`}
              aria-current={path === link.href ? "page" : undefined}
            >
              {link.text}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
