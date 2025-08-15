"use client";
import React, { useState } from "react";
import logo from "../images/logo.png";
import Image from "next/image";
import { FiShoppingCart, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <section className="border-b border-gray-200">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Left Side - Hamburger + Logo */}
          <div className="flex items-center gap-3">
            {/* Hamburger Menu Icon (mobile) */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(true)}
            >
              <FiMenu />
            </button>
            {/* Logo */}
            <div
              onClick={() => router.push("/")}
              className="cursor-pointer flex items-center"
            >
              <Image src={logo} alt="Logo" className="lg:w-[159px] w-[100px]" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-x-5">
              <li className="text-xl font-normal cursor-pointer">Shop</li>
              <li className="text-xl font-normal cursor-pointer">On Sale</li>
              <li>
                <a
                  href="#newarrivals"
                  className="text-xl font-normal cursor-pointer"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#brands"
                  className="text-xl font-normal cursor-pointer"
                >
                  Brands
                </a>
              </li>
            </ul>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-x-5">
            {/* Search Icon (mobile) */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setSearchOpen(true)}
            >
              <FiSearch />
            </button>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex px-4 py-2 rounded-3xl bg-searchbar-bg overflow-hidden w-[400px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="20px"
                className="fill-gray-600 mr-3 "
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full outline-none bg-transparent text-gray-600 text-md"
              />
            </div>

            {/* Cart Icon */}
            <FiShoppingCart className="text-2xl cursor-pointer" />

            {/* User Icon */}
            <IoPersonCircleOutline className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white w-64 h-full p-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Menu</h2>
              <FiX
                className="text-2xl cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            </div>
            <ul className="flex flex-col gap-4">
              <li onClick={() => setMenuOpen(false)}>Shop</li>
              <li onClick={() => setMenuOpen(false)}>On Sale</li>
              <li onClick={() => setMenuOpen(false)}>New Arrivals</li>
              <li onClick={() => setMenuOpen(false)}>Brands</li>
            </ul>
          </div>
        </div>
      )}

      {/* Mobile Search Popup */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-11/12 max-w-md p-4 rounded-lg">
            <div className="flex items-center gap-2 border-b pb-2">
              <FiSearch className="text-xl text-gray-500" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full outline-none"
              />
              <FiX
                className="text-2xl cursor-pointer"
                onClick={() => setSearchOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
