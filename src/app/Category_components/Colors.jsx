"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

export default function Colors() {
  const [active, setactive] = useState(false);
  const [coloractive, setcoloractive] = useState(1);

  const handleactive = () => {
    setactive(!active);
  };

  const handlecoloractive = (number) => {
    setcoloractive(number);
  };
  return (
    <section>
      <div >
        <div className="border-b pb-4">
        <div
          onClick={handleactive}
          className="p-2  flex justify-between items-center cursor-pointer"
        >
          <h5 className="font-poppins font-bold lg:text-xl text-lg text-black">Colors</h5>
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
        <div className="flex gap-4 flex-wrap">
          <p
            onClick={() => handlecoloractive(1)}
            className="w-9 h-9 bg-[#F57906] rounded-full flex items-center   cursor-pointer    justify-center "
          >
            {coloractive == 1 && <FaCheck className="text-white" />}
          </p>
          <p
            onClick={() => handlecoloractive(2)}
            className="w-9 h-9 bg-[#F5DD06] rounded-full flex items-center   cursor-pointer    justify-center"
          >
            {" "}
            {coloractive == 2 && <FaCheck className="text-white" />}{" "}
          </p>
          <p
            onClick={() => handlecoloractive(3)}
            className="w-9 h-9 bg-[#00C12B] rounded-full flex items-center   cursor-pointer    justify-center"
          >
            {" "}
            {coloractive == 3 && <FaCheck className="text-white" />}
          </p>  
           <p
            onClick={() => handlecoloractive(4)}
            className="w-9 h-9 bg-[#F50606] rounded-full flex items-center   cursor-pointer    justify-center"
          >
            {" "}
            {coloractive == 4 && <FaCheck className="text-white" />}
          </p>  
          <p
            onClick={() => handlecoloractive(5)}
            className="w-9 h-9 bg-[#000000] rounded-full flex items-center   cursor-pointer    justify-center"
          >
            {" "}
            {coloractive == 5 && <FaCheck className="text-white" />}
          </p>  
            <p
            onClick={() => handlecoloractive(6)}
            className="w-9 h-9 bg-[#063AF5] rounded-full flex items-center   cursor-pointer    justify-center"
          >
            {" "}
            {coloractive == 6 && <FaCheck className="text-white" />}
          </p>    
            <p
            onClick={() => handlecoloractive(7)}
            className="w-9 h-9 bg-[#7D06F5] rounded-full flex items-center   cursor-pointer    justify-center"
          >
            {" "}
            {coloractive == 7 && <FaCheck className="text-white" />}
          </p> 
            <p
            onClick={() => handlecoloractive(8)}
            className="w-9 h-9 bg-[#F506A4] rounded-full flex items-center   cursor-pointer    justify-center"
          >
            {" "}
            {coloractive == 8 && <FaCheck className="text-white" />}
          </p> 
           <p
            onClick={() => handlecoloractive(9)}
            className="w-9 h-9 bg-[#06CAF5] rounded-full flex items-center   cursor-pointer    justify-center"
          >
            {" "}
            {coloractive == 9 && <FaCheck className="text-white" />}
          </p>  
          <p
            onClick={() => handlecoloractive(10)}
            className="w-9 h-9 bg-[#FFFFFF] rounded-full flex items-center   cursor-pointer    justify-center"
          >
            {" "}
            {coloractive == 10 && <FaCheck className="text-white" />}
          </p>
        </div>
                }
        </div>
      </div>
    </section>
  );
}
