import React from "react";
import logo from "../images/logo.png";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import sponsore from '../images/sponsore.png'
import Newslatter from "./Newslatter";
export default function Footer() {
    return (
        <section className="bg-searchbar-bg py-40  ">
          
            <div className="container">
          
                <div className="flex justify-between items-center border-b border-gray-300 py-10">
                    <div>
                        <Image src={logo} alt="" />
                        <p className="font-lato text-base text-black/60 font-semibold w-[350px] mt-6">
                            We have clothes that suits your style and which you’re proud to
                            wear. From women to men.
                        </p>
                        <ul className="flex  items-center gap-x-4 mt-5 ">
                            <li className="group">
                                <div className="bg-white w-8 h-8 cursor-pointer rounded-full flex items-center       justify-center group-hover:bg-black transition-all duration-300">
                                    <FaTwitter className="text-lg text-black group-hover:text-white transition-all duration-300" />
                                </div>
                            </li>

                            <li className="group">
                                <div className="bg-white w-8 h-8 rounded-full cursor-pointer flex items-center       justify-center group-hover:bg-black transition-all duration-300">
                                    <FaFacebookF className="text-lg text-black group-hover:text-white transition-all duration-300" />
                                </div>
                            </li>
                            <li className="group">
                                <div className="bg-white w-8 h-8 rounded-full cursor-pointer flex items-center       justify-center group-hover:bg-black transition-all duration-300">
                                    <RiInstagramLine className="text-lg text-black group-hover:text-white transition-all duration-300" />
                                </div>
                            </li>
                            <li className="group">
                                <div className="bg-white w-8 h-8 cursor-pointer rounded-full flex items-center       justify-center group-hover:bg-black transition-all duration-300">
                                    <IoLogoYoutube className="text-lg text-black group-hover:text-white transition-all duration-300" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-lg text-lato font-semibold text-black">COMPANY</h6>
                        <ul>

                        <li className="text-base font-lato text-black/60 font-semibold py-2">About</li>
                        <li className="text-base font-lato text-black/60 font-semibold mb-2">Features</li>
                        <li className="text-base font-lato text-black/60 font-semibold mb-2">Works</li>
                        <li className="text-base font-lato text-black/60 font-semibold ">Career</li>
                        </ul>
                    </div>
                     <div>
                        <h6 className="text-lg text-lato font-semibold text-black">HELP</h6>
                        <ul>

                        <li className="text-base font-lato text-black/60 font-semibold py-2">Customer Support</li>
                        <li className="text-base font-lato text-black/60 font-semibold mb-2">Delivery Details</li>
                        <li className="text-base font-lato text-black/60 font-semibold mb-2">Terms & Conditions</li>
                        <li className="text-base font-lato text-black/60 font-semibold ">Privacy Policy</li>
                        </ul>
                    </div> 
                    <div>
                        <h6 className="text-lg text-lato font-semibold text-black">F A Q</h6>
                        <ul>

                        <li className="text-base font-lato text-black/60 font-semibold py-2">Account</li>
                        <li className="text-base font-lato text-black/60 font-semibold mb-2">Manage Deliveries</li>
                        <li className="text-base font-lato text-black/60 font-semibold mb-2">Orders</li>
                        <li className="text-base font-lato text-black/60 font-semibold ">Payments</li>
                        </ul>
                    </div> 
                    <div>
                        <h6 className="text-lg text-lato font-semibold text-black">Resources</h6>
                        <ul>

                        <li className="text-base font-lato text-black/60 font-semibold py-2">Free eBooks</li>
                        <li className="text-base font-lato text-black/60 font-semibold mb-2">Development Tutorial</li>
                        <li className="text-base font-lato text-black/60 font-semibold mb-2">How to - Blog</li>
                        <li className="text-base font-lato text-black/60 font-semibold ">Youtube Playlist</li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center mt-5">
                <p className="text-sm text-black/60 font-lato font-semibold">Shop.co © 2000-2023, All Rights Reserved</p>
                <span className="justify-self-end">
                    <Image src={sponsore} alt="" />
                </span>
                </div>
            </div>
        </section>
    );
}
