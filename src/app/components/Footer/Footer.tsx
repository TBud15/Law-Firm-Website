import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-4 border-t border-gray-300 mt-16">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left Section - Logo */}
        <div className="flex items-center">
          <img
            src="/images/Navbar/law-logo.png"
            alt="Logo"
            className="h-16" // Adjust the height to match the icon in your image
          />
        </div>

        {/* Center Section - Navigation */}
        <nav className="flex space-x-8 text-gray-600 font-roboto">
          <Link href="#home" className="hover:underline">
            Home
          </Link>
          <Link href="/sitemap.xml" className="hover:underline">
            Sitemap
          </Link>
        </nav>

        {/* Right Section - GitHub Icon */}
        <a
          href="https://github.com/TBud15" // Replace with your GitHub URL
          className="ml-4"
        >
          <img
            src="/images/icons/github-icon.svg" // Replace with your actual GitHub icon path
            alt="GitHub"
            className="h-10" // Adjust the height to match the icon in your image
          />
        </a>
      </div>

      {/* Bottom Copyright Text */}
      <div className="text-center text-sm text-gray-500 mt-4">
        © 2024 Tymur Budahov Personal Project | All Rights Reserved
      </div>
    </footer>
  );
}
