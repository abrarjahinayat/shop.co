"use client"
import React, { useState } from "react";
import starfull from "../productimg/starfull.png";
import verified from "../images/verified.png";
import Image from "next/image";
import icon1 from "../productdetailesimg/icon1.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import MoreLoadReview from "./MoreLoadReview";
export default function Reviews() {
  const [morereivew, setmorereview] = useState(false);

  const handlemorereview = () => {
    setmorereview(!morereivew);
  };
  return (
    <section className="py-7">
      <div className="container">
        <div className="mb-7">
          <div className="flex items-center justify-between">
            <h3 className="font-poppins font-bold text-black text-2xl">
              All Reviews
            </h3>
            <div className="flex items-center gap-x-4">
              <div>
                <span className="w-12 h-12 bg-searchbar-bg flex items-center justify-center rounded-full">
                  <Image src={icon1} alt="" />
                </span>
              </div>
              <div className="flex items-center gap-x-3 bg-searchbar-bg rounded-4xl py-3 px-5 cursor-pointer">
                <p className="font-poppins text-base font-medium text-black ">
                  Latest
                </p>
                <MdKeyboardArrowDown className="text-xl" />
              </div>
              <div className="bg-black rounded-4xl hover:bg-black/85 hover:rounded-4xl ">
                <button className="text-base font-poppins font-medium text-white px-6 py-3 cursor-pointer   ">
                  Write a Review
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="bg-white border border-gray-300 rounded-2xl w-[610px] px-6 py-6">
            <div className="flex items-center gap-x-2">
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
            </div>
            <div className="flex items-center gap-x-2">
              <h6 className="font-poppins font-bold text-xl text-black py-3">
                Sarah M.
              </h6>
              <Image src={verified} alt="" />
            </div>
            <p className="font-lato text-base text-black/60 font-semibold  ">
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </p>
            <p className="font-poppins font-semibold text-base text-black/60 mt-6">
              Posted on August 14, 2023
            </p>
          </div>
          <div className="bg-white border border-gray-300 rounded-2xl w-[610px] px-6 py-6">
            <div className="flex items-center gap-x-2">
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
            </div>
            <div className="flex items-center gap-x-2">
              <h6 className="font-poppins font-bold text-xl text-black py-3">
                Alex K.
              </h6>
              <Image src={verified} alt="" />
            </div>
            <p className="font-lato text-base text-black/60 font-semibold ">
              "Finding clothes that align with my personal style used to be a
              challenge until I discovered Shop.co. The range of options they
              offer is truly remarkable, catering to a variety of tastes and
              occasions.”
            </p>
            <p className="font-poppins font-semibold text-base text-black/60 mt-6">
              Posted on August 14, 2023
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div className="bg-white border border-gray-300 rounded-2xl w-[610px] px-6 py-6">
            <div className="flex items-center gap-x-2">
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
            </div>
            <div className="flex items-center gap-x-2">
              <h6 className="font-poppins font-bold text-xl text-black py-3">
                Sarah M.
              </h6>
              <Image src={verified} alt="" />
            </div>
            <p className="font-lato text-base text-black/60 font-semibold  ">
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </p>
            <p className="font-poppins font-semibold text-base text-black/60 mt-6">
              Posted on August 14, 2023
            </p>
          </div>
          <div className="bg-white border border-gray-300 rounded-2xl w-[610px] px-6 py-6">
            <div className="flex items-center gap-x-2">
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
            </div>
            <div className="flex items-center gap-x-2">
              <h6 className="font-poppins font-bold text-xl text-black py-3">
                Alex K.
              </h6>
              <Image src={verified} alt="" />
            </div>
            <p className="font-lato text-base text-black/60 font-semibold ">
              "Finding clothes that align with my personal style used to be a
              challenge until I discovered Shop.co. The range of options they
              offer is truly remarkable, catering to a variety of tastes and
              occasions.”
            </p>
            <p className="font-poppins font-semibold text-base text-black/60 mt-6">
              Posted on August 14, 2023
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div className="bg-white border border-gray-300 rounded-2xl w-[610px] px-6 py-6">
            <div className="flex items-center gap-x-2">
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
            </div>
            <div className="flex items-center gap-x-2">
              <h6 className="font-poppins font-bold text-xl text-black py-3">
                Sarah M.
              </h6>
              <Image src={verified} alt="" />
            </div>
            <p className="font-lato text-base text-black/60 font-semibold  ">
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </p>
            <p className="font-poppins font-semibold text-base text-black/60 mt-6">
              Posted on August 14, 2023
            </p>
          </div>
          <div className="bg-white border border-gray-300 rounded-2xl w-[610px] px-6 py-6">
            <div className="flex items-center gap-x-2">
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
            </div>
            <div className="flex items-center gap-x-2">
              <h6 className="font-poppins font-bold text-xl text-black py-3">
                Alex K.
              </h6>
              <Image src={verified} alt="" />
            </div>
            <p className="font-lato text-base text-black/60 font-semibold ">
              "Finding clothes that align with my personal style used to be a
              challenge until I discovered Shop.co. The range of options they
              offer is truly remarkable, catering to a variety of tastes and
              occasions.”
            </p>
            <p className="font-poppins font-semibold text-base text-black/60 mt-6">
              Posted on August 14, 2023
            </p>
          </div>
        </div>

           {
            morereivew && <MoreLoadReview/> 
       
          }

        <button
          onClick={handlemorereview}
          className="bg-white border transition duration-300 ease-in-out border-gray-300 rounded-full text-black text-md font-lato font-medium py-4 px-20 mx-auto block mt-10 cursor-pointer hover:bg-black hover:text-white"
        >
          Load More Reviews
        </button>
      </div>
    </section>
  );
}
