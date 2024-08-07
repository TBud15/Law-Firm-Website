"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/Navbar/law-logo.png"
            alt="Law Logo"
            className="h-20 w-20"
          />
          <span className="text-xl font-bold ml-2">One Law</span>
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Home
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            About Us
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Family Law
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Immigration Law
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Contacts
          </a>
        </div>

        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </motion.button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-gray-800 hover:text-gray-600">
              Home
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-600">
              About Us
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-600">
              Family Law
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-600">
              Immigration Law
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-600">
              Contacts
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
