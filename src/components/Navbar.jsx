import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart, ShoppingCart, Search } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Sign Up", path: "/sign-up" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-red-400 text-white text-center py-2 text-sm">
        Summer Sale - Up to 50% Off!
      </div>

      <nav className="bg-black w-full z-50 shadow-md">
        {/* Navbar Top */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-extrabold tracking-wide text-red-400"
          >
            ChicCloset
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="text-gray-300 font-medium relative group hover:text-white transition"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search products..."
                className="bg-zinc-800 text-gray-300 placeholder:text-gray-500 
                border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-400 
                h-10 rounded-md pl-10 pr-3 transition"
              />
            </div>

            {/* Icons */}
            <Heart className="text-gray-300 hover:text-white cursor-pointer transition" />

            <div className="relative cursor-pointer">
              <ShoppingCart className="text-gray-300 hover:text-white transition" />

              {/* Cart Badge */}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                2
              </span>
            </div>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-gray-200"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* ================= MOBILE DRAWER ================= */}

        <div
          className={`fixed h-screen top-0 left-0 w-full lg:hidden z-50
          transition-all duration-500 p-4 bg-black/95 backdrop-blur-md overflow-y-auto
          ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
          `}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700">
            <h2 className="text-xl font-extrabold text-gray-200">ChicCloset</h2>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-800 transition"
            >
              <X size={26} className="text-gray-200" />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="w-full px-4 mt-4">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-zinc-800 text-gray-300 placeholder:text-gray-500 
                border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-400 
                h-10 rounded-md pl-10 pr-3 transition"
              />
            </div>

            {/* Icons */}
            <div className="flex justify-center gap-6 mt-4">
              <Heart className="text-gray-300 hover:text-red-400 cursor-pointer transition" />
              <ShoppingCart className="text-gray-300 hover:text-red-400 cursor-pointer transition" />
            </div>
          </div>

          {/* Links */}
          <div className="flex-1 px-4 py-6 space-y-3">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center py-3 rounded-xl font-medium
                text-gray-300
                hover:bg-red-400 hover:text-white
                transition-all duration-300
                shadow-sm hover:shadow-md"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
