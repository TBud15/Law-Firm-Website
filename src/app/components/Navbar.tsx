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
    <nav className="bg-white py-4 shadow-md" id="home">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="images/Navbar/law-logo.png"
            alt="Law Logo"
            className="h-20 w-20"
          />
          <span className="text-xl font-bold font-roboto ml-2">One Law</span>
        </div>

        <div className="hidden md:flex space-x-8 font-roboto tracking-[.2em]">
          <a href="#" className="text-gray-800 hover:text-gray-600">
            HOME
          </a>
          <a href="#about-us" className="text-gray-800 hover:text-gray-600">
            ABOUT US
          </a>
          <a href="#family-law" className="text-gray-800 hover:text-gray-600">
            FAMILY LAW
          </a>
          <a
            href="#immigration-law"
            className="text-gray-800 hover:text-gray-600"
          >
            IMMIGRATION LAW
          </a>
          <a
            href="#client-reviews"
            className="text-gray-800 hover:text-gray-600"
          >
            REVIEWS
          </a>
        </div>

        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none mr-5"
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
          className="md:hidden flex justify-center text-center font-roboto text-xl"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-gray-800 hover:text-gray-600 p-2">
              Home
            </a>
            <a
              href="#about-us"
              className="block text-gray-800 hover:text-gray-600 p-2"
            >
              About Us
            </a>
            <a
              href="#family-law"
              className="block text-gray-800 hover:text-gray-600 p-2"
            >
              Family Law
            </a>
            <a
              href="#immigration-law"
              className="block text-gray-800 hover:text-gray-600 p-2"
            >
              Immigration Law
            </a>
            <a
              href="#client-review"
              className="block text-gray-800 hover:text-gray-600 p-2"
            >
              Contacts
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
