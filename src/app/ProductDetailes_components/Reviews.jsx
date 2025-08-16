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
            <h3 className="font-poppins font-bold text-xl text-black lg:text-2xl">
              All Reviews
            </h3>
            <div className="flex items-center gap-x-2 lg:gap-x-4">
              <div>
                <span className="lg:w-12 lg:h-12 w-10 h-10 bg-searchbar-bg flex items-center justify-center rounded-full">
                  <Image src={icon1} alt="" />
                </span>
              </div>
              <div className="lg:flex items-center gap-x-3 bg-searchbar-bg hidden  rounded-4xl py-3 px-5 cursor-pointer">
                <p className="font-poppins text-base font-medium text-black ">
                  Latest
                </p>
                <MdKeyboardArrowDown className="text-xl" />
              </div>
              <div className="bg-black rounded-4xl hover:bg-black/85 hover:rounded-4xl ">
                <button className="lg:text-base text-sm font-poppins font-medium text-white lg:px-6 lg:py-3 py-2 px-4 cursor-pointer   ">
                  Write a Review
                </button>
              </div>
            </div>
          </div>
        </div>



        <div className="flex lg:justify-between flex-col lg:flex-row gap-5 lg:gap-0 ">
          <div className="bg-white border border-gray-300 rounded-2xl lg:w-[610px] lg:px-6 px-4 lg:py-6 py-3">
            <div className="flex items-center gap-x-2">
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
            </div>
            <div className="flex items-center gap-x-2">
              <h6 className="font-poppins font-bold text-lg lg:text-xl text-black py-3">
                Sarah M.
              </h6>
              <Image src={verified} alt="" />
            </div>
            <p className="font-lato text-sm lg:text-base text-black/60 font-semibold  ">
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </p>
            <p className="font-poppins font-semibold lg:text-base text-sm text-black/60 lg:mt-6 mt-3">
              Posted on August 14, 2023
            </p>
          </div>
          <div className="bg-white border border-gray-300 rounded-2xl lg:w-[610px] lg:px-6 px-4 lg:py-6 py-3">
            <div className="flex items-center gap-x-2">
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
            </div>
            <div className="flex items-center gap-x-2">
              <h6 className= "font-poppins font-bold text-lg lg:text-xl text-black py-3">
                Alex K.
              </h6>
              <Image src={verified} alt="" />
            </div>
            <p className="font-lato text-sm lg:text-base text-black/60 font-semibold ">
              "Finding clothes that align with my personal style used to be a
              challenge until I discovered Shop.co. The range of options they
              offer is truly remarkable, catering to a variety of tastes and
              occasions.”
            </p>
            <p className="font-poppins font-semibold lg:text-base text-sm text-black/60 lg:mt-6 mt-3">
              Posted on August 14, 2023
            </p>
          </div>
        </div>  
        
        <div className="flex lg:justify-between mt-5 lg:mt-10 flex-col lg:flex-row gap-5 lg:gap-0 ">
          <div className="bg-white border border-gray-300 rounded-2xl lg:w-[610px] lg:px-6 px-4 lg:py-6 py-3">
            <div className="flex items-center gap-x-2">
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
            </div>
            <div className="flex items-center gap-x-2">
              <h6 className="font-poppins font-bold text-lg lg:text-xl text-black py-3">
                Sarah M.
              </h6>
              <Image src={verified} alt="" />
            </div>
            <p className="font-lato text-sm lg:text-base text-black/60 font-semibold  ">
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </p>
            <p className="font-poppins font-semibold lg:text-base text-sm text-black/60 lg:mt-6 mt-3">
              Posted on August 14, 2023
            </p>
          </div>
          <div className="bg-white border border-gray-300 rounded-2xl lg:w-[610px] lg:px-6 px-4 lg:py-6 py-3">
            <div className="flex items-center gap-x-2">
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
            </div>
            <div className="flex items-center gap-x-2">
              <h6 className= "font-poppins font-bold text-lg lg:text-xl text-black py-3">
                Alex K.
              </h6>
              <Image src={verified} alt="" />
            </div>
            <p className="font-lato text-sm lg:text-base text-black/60 font-semibold ">
              "Finding clothes that align with my personal style used to be a
              challenge until I discovered Shop.co. The range of options they
              offer is truly remarkable, catering to a variety of tastes and
              occasions.”
            </p>
            <p className="font-poppins font-semibold lg:text-base text-sm text-black/60 lg:mt-6 mt-3">
              Posted on August 14, 2023
            </p>
          </div>
        </div> 
        
        <div className="flex lg:justify-between mt-5 lg:mt-10 flex-col lg:flex-row gap-5 lg:gap-0 ">
          <div className="bg-white border border-gray-300 rounded-2xl lg:w-[610px] lg:px-6 px-4 lg:py-6 py-3">
            <div className="flex items-center gap-x-2">
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
            </div>
            <div className="flex items-center gap-x-2">
              <h6 className="font-poppins font-bold text-lg lg:text-xl text-black py-3">
                Sarah M.
              </h6>
              <Image src={verified} alt="" />
            </div>
            <p className="font-lato text-sm lg:text-base text-black/60 font-semibold  ">
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </p>
            <p className="font-poppins font-semibold lg:text-base text-sm text-black/60 lg:mt-6 mt-3">
              Posted on August 14, 2023
            </p>
          </div>
          <div className="bg-white border border-gray-300 rounded-2xl lg:w-[610px] lg:px-6 px-4 lg:py-6 py-3">
            <div className="flex items-center gap-x-2">
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
              <Image src={starfull} alt="" />
            </div>
            <div className="flex items-center gap-x-2">
              <h6 className= "font-poppins font-bold text-lg lg:text-xl text-black py-3">
                Alex K.
              </h6>
              <Image src={verified} alt="" />
            </div>
            <p className="font-lato text-sm lg:text-base text-black/60 font-semibold ">
              "Finding clothes that align with my personal style used to be a
              challenge until I discovered Shop.co. The range of options they
              offer is truly remarkable, catering to a variety of tastes and
              occasions.”
            </p>
            <p className="font-poppins font-semibold lg:text-base text-sm text-black/60 lg:mt-6 mt-3">
              Posted on August 14, 2023
            </p>
          </div>
        </div>



           {
            morereivew && <MoreLoadReview/> 
       
          }

        <button
          onClick={handlemorereview}
          className="bg-white border transition duration-300 ease-in-out border-gray-300 rounded-full text-black text-md font-lato font-medium py-4 px-20 mx-auto block lg:mt-10 mt-5 cursor-pointer hover:bg-black hover:text-white"
        >
          Load More Reviews
        </button>
      </div>
    </section>
  );
}
