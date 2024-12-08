"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="absolute w-full h-full">
      <nav className="absolute left-0 top-0 z-10 flex h-[6.25rem] w-full items-center justify-between bg-background-primary-transparent px-5 text-white sm:px-10 lg:px-20">
        <div className="flex w-full items-center justify-center">
          <ul
            className={`fixed left-0 top-0 flex h-full w-full transform flex-col items-center justify-center gap-10 bg-background-primary text-center ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 sm:relative sm:flex sm:h-auto sm:w-auto sm:translate-x-0 sm:flex-row sm:gap-10 sm:bg-transparent`}
          >
            <li className="group relative">
              <Link
                href="/"
                className="text-3xl uppercase md:text-4xl"
                onClick={() => setMenuOpen(false)}
              >
                Mladen Mićić
              </Link>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group relative">
              <Link
                href="/atelje"
                className="text-3xl uppercase md:text-4xl"
                onClick={() => setMenuOpen(false)}
              >
                Atelje 98
              </Link>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </div>
      </nav>
      <button
        className="absolute right-5 top-10  z-20 text-3xl text-white focus:outline-none sm:right-10 sm:hidden"
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
}

export default Navbar;
