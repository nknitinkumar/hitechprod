"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { Russo_One, Poppins } from 'next/font/google';

const russo = Russo_One({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Retrieve the stored active link from localStorage on page load
    const storedLink = localStorage.getItem('activeLink');
    if (storedLink) {
      setActiveLink(storedLink);
    }
  }, []);
  

  const handleLinkClick = (link) => {
    setActiveLink(link);
    localStorage.setItem('activeLink', link); // Store the active link in localStorage
    setMenuOpen(false); // Close mobile menu after clicking a link
  };


  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-2 px-6 lg:px-24">
        {/* Logo */}
        <Link href="/" className="flex items-center ml-2 lg:ml-10">
          <Image src="/img/logo/logo.jpg" alt="Logo" width={66} height={76} />
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            id="menu-btn"
            className="text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-8 h-8 mr-2"
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
          </button>
        </div>

        {/* Desktop Menu */}
        <nav id="menu" className="hidden lg:flex space-x-8 text-md">
          {['HOME', 'ABOUT', 'PROJECTS', 'PARTNERSHIP', 'GALLERY', 'CAREER', 'BLOGS', 'CONTACT'].map((link) => (
            <Link
              href={link === 'HOME' ? '/' : `/${link.toLowerCase()}`}
              key={link}
            >
              <button
                onClick={() => handleLinkClick(link)}
                className={`cursor-pointer w-full ${activeLink === link ? 'text-[#C8181D] font-bold' : 'text-black'
                  } ${poppins.className} hover:text-[#C8181D]`}
              >
                {link}
              </button>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${menuOpen ? 'flex' : 'hidden'} bg-white shadow-lg fixed inset-0 top-[64px] z-40 flex-col items-start p-6 space-y-3`}
      >
        {['HOME', 'ABOUT', 'PROJECTS', 'PARTNERSHIP', 'GALLERY', 'CAREER', 'BLOGS', 'CONTACT'].map((link) => (
          <Link
            href={link === 'HOME' ? '/' : `/${link.toLowerCase()}`}
            key={link}
          >
            <button
              onClick={() => handleLinkClick(link)}
              className={`block cursor-pointer w-full ${activeLink === link ? 'text-[#C8181D] font-bold' : 'text-black'
                } ${poppins.className} hover:text-[#C8181D]`}
            >
              {link}
            </button>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
