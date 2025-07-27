import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Technologies", href: "#technologies" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex justify-between items-center px-4 py-2 pb-9 bg-transparent">
      <div className="flex items-center gap-2">
        <a href="#hero" aria-label="Home">
          <img src={logo} width={50} height={33} alt="logo" />
        </a>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white text-2xl focus:outline-none z-50"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Navigation Links */}
      <div
        className={`flex-col md:flex-row md:flex gap-4 md:gap-6 text-sm md:text-base font-medium
        absolute md:static top-[70px] right-0 md:top-auto md:right-auto bg-[#121212] md:bg-transparent 
        p-4 md:p-0 rounded-lg ${menuOpen ? "flex" : "hidden"} transition-all duration-300 ease-in-out z-40`}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-stone-300 px-4 py-2 rounded-[20px] bg-[#1e1e1e] shadow-md hover:shadow-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
