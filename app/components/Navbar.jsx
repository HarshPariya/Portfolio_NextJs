"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { path: "/", label: "🏠 Home" },
  { path: "/about", label: "👤 About" },
  { path: "/skills", label: "💻 Skills" },
  { path: "/services", label: "🛠 Services" },
  { path: "/projects", label: "📁 Projects" },
  { path: "/contact", label: "📬 Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full fixed top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent"
        >
          🚀 Harsh's Portfolio
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="relative group hover:text-emerald-400 transition duration-300"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl p-2 hover:text-emerald-400 transition"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-slate-900/95 backdrop-blur-md border-t border-slate-700/30 animate-slideDown">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-center text-slate-300 hover:text-emerald-400 hover:bg-white/5 rounded-lg transition duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
