'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 mb-8 bg-white shadow-md relative">
      <h1 className="text-3xl font-bold text-blue-800">
        <Link href="/">Kenneth Matiba Hospital</Link>
      </h1>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
        className="p-2 rounded-md hover:bg-gray-200 md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop menu */}
      <nav className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-blue-600 text-lg text-blue-800 transition duration-200">Home</Link>
        <Link href="/eye-care" className="hover:text-blue-600 text-lg text-blue-800 transition duration-200">About Us</Link>
        <Link href="/general-medicine" className="hover:text-blue-600 text-lg text-blue-800 transition duration-200">Services</Link>
        <Link href="/dental-care" className="hover:text-blue-600 text-lg text-blue-800 transition duration-200">Contacts</Link>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="absolute top-full right-0 mt-2 w-48 bg-white p-4 rounded shadow-md md:hidden z-50">
          <ul className="flex flex-col space-y-3">
            <li>
              <Link href="/" className="text-blue-800 hover:underline transition duration-200">Home</Link>
            </li>
            <li>
              <Link href="/eye-care" className="text-blue-800 hover:underline transition duration-200">About Us</Link>
            </li>
            <li>
              <Link href="/general-medicine" className="text-blue-800 hover:underline transition duration-200">Services</Link>
            </li>
            <li>
              <Link href="/dental-care" className="text-blue-800 hover:underline transition duration-200">Contacts</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
