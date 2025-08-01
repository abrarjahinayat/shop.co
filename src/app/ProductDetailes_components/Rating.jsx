"use client";
import Image from "next/image";
import React, { useState } from "react";
import icon1 from '../productdetailesimg/icon1.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import Reviews from "./Reviews";


export default function Rating() {
  const [active, setactive] = useState(2);
  const [morereivew,setmorereview]= useState(false)

  const handlemorereview = ()=>{
    setmorereview(!morereivew)
  }

  const handleactive = (number) => {
    setactive(number);
  };
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex items-center justify-between">
          <div onClick={() => handleactive(1)} className="cursor-pointer">
            <h5
              className={`${
                active == 1
                  ? "font-poppins font-semibold text-center text-xl text-black border-b-1 border-black pb-2 w-[414px]"
                  : "font-poppins font-medium text-center text-xl text-black/60 border-b-1 pb-2 w-[414px]"
              }`}
            >
              Product Details
            </h5>
          </div>
          <div onClick={() => handleactive(2)} className="cursor-pointer">
            <h5
              className={`${
                active == 2
                  ? "font-poppins font-semibold text-center text-xl text-black border-b-1 border-black pb-2 w-[414px]"
                  : "font-poppins font-medium text-center text-xl text-black/60 border-b-1 pb-2 w-[414px]"
              }`}
            >
              Rating & Reviews
            </h5>
          </div>
          <div className="cursor-pointer">
            <h5
              onClick={() => handleactive(3)}
              className={`${
                active == 3
                  ? "font-poppins font-semibold text-center text-xl text-black border-b-1 border-black pb-2 w-[414px]"
                  : "font-poppins font-medium text-center text-xl text-black/60 border-b-1 pb-2 w-[414px]"
              }`}
            >
              FAQs
            </h5>
          </div>
        </div>
        <div className="mt-7">
          <div className="flex items-center justify-between">
            <h3 className="font-poppins font-bold text-black text-2xl">
              All Reviews
            </h3>
            <div className="flex items-center gap-x-4">

            <div>
                <span className="w-12 h-12 bg-searchbar-bg flex items-center justify-center rounded-full"><Image src={icon1} alt="" /></span>
            </div>
            <div className="flex items-center gap-x-3 bg-searchbar-bg rounded-4xl py-3 px-5 cursor-pointer">
                <p className="font-poppins text-base font-medium text-black ">Latest</p>
                <MdKeyboardArrowDown className="text-xl" />
            </div>
                   <div className="bg-black rounded-4xl hover:bg-black/85 hover:rounded-4xl ">
                        <button className="text-base font-poppins font-medium text-white px-6 py-3 cursor-pointer   ">Write a Review</button>
                    </div>
            </div>
          </div>
        </div>
        <Reviews/>

          {
            morereivew && <Reviews/> 
       
          }

             <button onClick={handlemorereview} className="bg-white border transition duration-300 ease-in-out border-gray-300 rounded-full text-black text-md font-lato font-medium py-4 px-20 mx-auto block mt-10 cursor-pointer hover:bg-black hover:text-white">Load More Reviews</button>

        
      </div>
    </section>
  );
}
