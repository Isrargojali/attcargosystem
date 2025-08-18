import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-[#2C3E50] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 h-20">
        {/* Logo */}
        <NavLink to="/" className="flex items-center h-full">
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-auto object-contain py-1 px-2"
          />
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="text-[#2C3E50] text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:space-x-8 absolute md:static bg-white md:w-auto w-full left-0 transition-all duration-500 ease-in-out transform ${
            isOpen
              ? "top-20 opacity-100 scale-100"
              : "top-[-400px] opacity-0 scale-95 md:opacity-100 md:scale-100"
          } md:flex-row flex flex-col items-center text-lg font-medium py-4 md:py-0`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            // { name: "Track Cargo", path: "/track-cargo" },
            { name: "Trade Tools", path: "/trade-tools" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.name} className="py-2 md:py-0">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-[#008CBA] transition ${
                    isActive ? "text-[#008CBA]" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          {/* <li className="py-2 md:py-0">
            <NavLink
              to="/login"
              className="bg-[#008CBA] px-6 py-2 rounded-md text-white hover:bg-[#0077a8] transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
          </li>
          <li className="py-2 md:py-0">
            <NavLink
              to="/sign-up"
              className="bg-[#008CBA] px-6 py-2 rounded-md text-white hover:bg-[#0077a8] transition"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
