"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import MenuOverlay from "./MenuOverlay";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar fixed top-0 left-0 right-0 bg-[#141010] bg-opacity-95 z-10">
      <div className="flex flex-wrap items-center justify-between md:w-[85%] mx-auto p-3 px-4 md:px-0">
        <Link
          href={"/"}
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
        >
          Aagam Doshi
        </Link>
        <div className="navbar-menu block md:hidden">
          {isOpen ? (
            <button
              className="flex items-center px-3 py-2 border border-slate-200"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose className="h-5 w-5" />
            </button>
          ) : (
            <button
              className="flex items-center px-3 py-2 border border-slate-200"
              onClick={() => setIsOpen(true)}
            >
              <IoIosMenu className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex ">
            <li>
              <NavLink href="/#about" text="About" />
            </li>
            <li>
              <NavLink href={"/#experience"} text={"Experience"} />
            </li>
            <li>
              <NavLink href="/projects" text="Projects" />
            </li>
            <li>
              <NavLink href="/#contact" text="Contact" />
            </li>
          </ul>
        </div>
      </div>
      {isOpen && <MenuOverlay />}
    </nav>
  );
}

export default Navbar;
