'use client'; // Ensure this is at the top
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-900 text-white py-6 fixed w-full top-0 z-50 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link
          href="#home"
          className="text-3xl font-semibold hover:text-purple-400 transition duration-300"
        >
          My Website
        </Link>

        {/* Navbar links for larger screens */}
        <ul className="hidden md:flex space-x-12">
          <li>
            <Link
              href="#home"
              className="text-lg hover:text-purple-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-lg hover:text-purple-400 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="text-lg hover:text-purple-400 transition duration-300"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-lg hover:text-purple-400 transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-lg hover:text-purple-400 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-3xl focus:outline-none text-white"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white absolute top-16 left-0 w-full py-6 shadow-xl">
          <ul className="space-y-6 text-center">
            <li>
              <Link
                href="#home"
                className="block py-3 text-lg hover:text-purple-400 transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block py-3 text-lg hover:text-purple-400 transition duration-300"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="block py-3 text-lg hover:text-purple-400 transition duration-300"
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block py-3 text-lg hover:text-purple-400 transition duration-300"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-3 text-lg hover:text-purple-400 transition duration-300"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
