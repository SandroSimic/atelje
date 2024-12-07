"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-background-primary-transparent w-full h-[6.25rem] flex items-center justify-between text-white px-5 sm:px-10 lg:px-20 absolute top-0 left-0 z-10">
      <div className="flex items-center justify-center w-full">
        <ul className={`fixed top-0 left-0 w-full h-full bg-background-primary flex flex-col items-center justify-center gap-10 text-center transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 sm:relative sm:translate-x-0 sm:flex sm:flex-row sm:gap-10 sm:bg-transparent sm:w-auto sm:h-auto`}>
          <li className="group relative">
            <Link href="/" className="uppercase text-3xl md:text-4xl" onClick={() => setMenuOpen(false)}>
              Mladen Mićić
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative">
            <Link href="/atelje" className="uppercase text-3xl md:text-4xl" onClick={() => setMenuOpen(false)}>
              Atelje 98
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
        <button
          className="sm:hidden absolute right-5 sm:right-10 text-white text-3xl z-20 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
