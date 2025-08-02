"use client";
import Image from "next/image";
import React, { useState } from "react";
import icon1 from '../productdetailesimg/icon1.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import Reviews from "./Reviews";
import Products from "../components/Products";
import Productdetailes from "./Productdetailes";
import Faqs from "./Faqs";


export default function Rating() {
  const [active, setactive] = useState(2);


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

        <div >
                {
                  active ==1 ? (<Productdetailes/>) :
                 active ==2 ? (<Reviews/>) : 
                 active == 3 ? (<Faqs/>) : null
                }
        </div>

        {/* ====== Review section start ======== */}
      
 

       

          

        
      </div>
    </section>
  );
}
