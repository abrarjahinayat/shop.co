import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import ReactSlider from 'react-slider';

export default function Price() {
 const [value, setValue] = useState([50, 200]);

 const [active , setactive] = useState(false)

 const handleactive = ()=>{
        setactive(!active)
 }

  return (
    <section className="py-4">
      <div >
            <div className="border-b pb-2 ">
        <div onClick={handleactive} className="p-2   flex justify-between items-center cursor-pointer">
          <h5 className="font-poppins font-bold text-lg lg:text-xl text-black">Price</h5>
          <IoIosArrowForward  className={`${
                  active 
                    ? "rotate-90 text-xl transition-transform duration-300"
                    : "rotate-0 text-xl transition-transform duration-300"
                }`} />
        </div>
    {
        active &&
        <div className="py-3">
          <div className="w-[250px] mx-auto">

      <ReactSlider
        className="h-2 bg-gray-200 rounded-full relative"
        thumbClassName="w-5 h-5 bg-black rounded-full cursor-pointer -top-1.5"
        trackClassName="top-0 bottom-0 bg-black rounded-full"
        value={value}
        min={0}
        max={500}
        onChange={(val) => setValue(val)}
        pearling
        minDistance={10}
      />

      <div className="flex justify-between mt-2 text-sm font-medium">
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>
    </div>
        </div>
    }

            </div>


      </div>
    </section>
  );
}
