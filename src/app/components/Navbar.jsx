import React from "react";
import logo from "../images/logo.png";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between py-5">
          <div >
            <Image src={logo} alt="" />
          </div>
          <div>
            <ul className="flex items-center gap-x-5">
              <li className="text-xl text-black-bg font-normal">Shop</li>
              <li className="text-xl text-black-bg font-normal">On Sale</li>
              <li className="text-xl text-black-bg font-normal">
                New Arriavals
              </li>
              <li className="text-xl text-black-bg font-normal">Brands</li>
            </ul>
          </div>
          <div>
            <div className="flex px-4 py-3 rounded-3xl bg-searchbar-bg overflow-hidden w-[577px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="25px"
                className="fill-gray-600 mr-3 "
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
              <input

                type="email"
                placeholder="Search for products..."
                className="w-full outline-none bg-transparent text-gray-600 text-md"
              />
            </div>
          </div>
          <div className="flex items-center gap-x-7">
            <FiShoppingCart className="text-2xl" />
            <IoPersonCircleOutline className="text-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
