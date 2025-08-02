"use client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Size() {
  const [active, setactive] = useState(false);
    const [sizeactive , setsizeactive] =useState(1)

  const handleactive = () => {
    setactive(!active);
  };

     const handlesizeactive = (number) => {
    setsizeactive(number);
  };
  return (
    <section>
      <div className="container">
        <div
          onClick={handleactive}
          className="p-4  flex justify-between items-center cursor-pointer"
        >
          <h5 className="font-poppins font-bold text-xl text-black">Size</h5>
          <IoIosArrowForward
            className={`${
              active
                ? "rotate-90 text-xl transition-transform duration-300"
                : "rotate-0 text-xl transition-transform duration-300"
            }`}
          />
        </div>

        {
            active && 
         <div className="flex flex-wrap  items-center justify-between gap-5 border-b-2 pb-5 max-w-[700px] ">
                <p onClick={()=>handlesizeactive(1)} className={`${sizeactive ==1 ? "text-base font-lato font-semibold  text-white bg-black px-6 py-3 rounded-4xl" : "text-base font-lato text-black/60 bg-searchbar-bg px-6 py-3 rounded-4xl cursor-pointer "}`}>Small</p> 
                 <p onClick={()=>handlesizeactive(2)} className={`${sizeactive ==2 ? "text-base font-lato font-semibold  text-white bg-black px-6 py-3 rounded-4xl" : "text-base font-lato text-black/60 bg-searchbar-bg px-6 py-3 rounded-4xl cursor-pointer "}`}> Medium </p> 
                  <p onClick={()=>handlesizeactive(3)} className={`${sizeactive ==3 ? "text-base font-lato font-semibold  text-white bg-black px-6 py-3 rounded-4xl" : "text-base font-lato text-black/60 bg-searchbar-bg px-6 py-3 rounded-4xl cursor-pointer "}`}>Large</p>
                   <p onClick={()=>handlesizeactive(4)} className={`${sizeactive ==4 ? "text-base font-lato font-semibold  text-white bg-black px-6 py-3 rounded-4xl" : "text-base font-lato text-black/60 bg-searchbar-bg px-6 py-3 rounded-4xl cursor-pointer "}`}>X-Large</p>     
                   <p onClick={()=>handlesizeactive(5)} className={`${sizeactive ==5 ? "text-base font-lato font-semibold  text-white bg-black px-6 py-3 rounded-4xl" : "text-base font-lato text-black/60 bg-searchbar-bg px-6 py-3 rounded-4xl cursor-pointer "}`}>XX-Large</p>  
                    <p onClick={()=>handlesizeactive(6)} className={`${sizeactive ==6 ? "text-base font-lato font-semibold  text-white bg-black px-6 py-3 rounded-4xl" : "text-base font-lato text-black/60 bg-searchbar-bg px-6 py-3 rounded-4xl cursor-pointer "}`}>3X-Large</p>
              </div>
        }
      </div>
    </section>
  );
}
