"use client";
import React, { useState } from "react";
import img1 from "../productdetailesimg/image 1.png";
import img2 from "../productdetailesimg/image 2.png";
import img3 from "../productdetailesimg/image 3.png";
import img4 from "../productdetailesimg/image 4.png";
import tshirt1 from "../productdetailesimg/t-shirt1.png";
import tshirt2 from "../productdetailesimg/t-shirt-2.png";
import starfull from "../productimg/starfull.png";
import starhalf from "../productimg/starhalf.png";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Lens } from "@/components/magicui/lens";
import { FaCheck } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function Banner() {
  const router = useRouter()
  const [active, setactive] = useState(1);
  const [coloractive , setcoloractive] =useState(1)
  const [sizeactive , setsizeactive] =useState(1)

  const handleActive = (number) => {
    setactive(number);
  };
    const handlecoloractive = (number) => {
    setcoloractive(number);
  };
   const handlesizeactive = (number) => {
    setsizeactive(number);
  };

  const [count, setcount] =useState(1)

  const handleMinus = () => {
  if (count > 1) {
    setcount(count - 1);
  }
};

const handlePlus = () => {
  setcount(count + 1);
};

  return (
    <section className="py-20">
      <div className="container">
        <div className="lg:flex">
          <div className="lg:w-2/4 ">
            <div className="flex  justify-between">
              <div className="grid gap-y-3">
                <Image
                  onClick={() => handleActive(1)}
                  className={`${
                    active == 1
                      ? "border border-black/60 rounded-3xl cursor-pointer "
                      : "border-none cursor-pointer "
                  } `}
                  src={img2}
                  alt=""
                />
                <Image
                  onClick={() => handleActive(2)}
                  className={`${
                    active == 2
                      ? "border border-black/60 rounded-3xl cursor-pointer "
                      : "border-none cursor-pointer "
                  } `}
                  src={img3}
                  alt=""
                />
                <Image
                  onClick={() => handleActive(3)}
                  className={`${
                    active == 3
                      ? "border border-black/60 rounded-3xl cursor-pointer "
                      : "border-none cursor-pointer "
                  } `}
                  src={img4}
                  alt=""
                />
              </div>
              <div>
                {active == 1 ? (
                  <Lens
                    zoomFactor={2}
                    lensSize={180}
                    isStatic={false}
                    ariaLabel="Zoom Area"
                  >
                    <Image src={img1} alt="" />
                  </Lens>
                ) : active == 2 ? (
                  <Lens
                    zoomFactor={2}
                    lensSize={180}
                    isStatic={false}
                    ariaLabel="Zoom Area"
                  >
                    <Image src={tshirt1} alt="" />
                  </Lens>
                ) : active == 3 ? (
                  <Image src={tshirt2} alt="" />
                ) : null}
              </div>
            </div>
          </div>



          <div className="lg:w-2/4 ">
            <div className="px-10">
              <h2 className="font-poppins font-bold text-[40px] text-black uppercase ">
                One Life Graphic T-shirt
              </h2>
              <div className="flex items-center mt-1">
                <Image src={starfull} alt="" />
                <Image src={starfull} alt="" />
                <Image src={starfull} alt="" />
                <Image src={starfull} alt="" />
                <Image src={starhalf} alt="" />
                <p className="font-poppins text-sm font-semibold ml-3">4.5/5</p>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <p className="font-poppins font-bold text-black text-3xl">
                  $260
                </p>
                <p className="font-poppins font-bold text-black/30 text-3xl line-through">
                  $300
                </p>
                <p className="bg-[#FF3333]/10 px-2.5 py-1.5 rounded-4xl text-base font-poppins font-medium text-[#FF3333]">
                  -40%
                </p>
              </div>
              <p className="font-poppins text-black/60 font-semibold text-base max-w-[700px] py-4 border-b-2">
                This graphic t-shirt which is perfect for any occasion. Crafted
                from a soft and breathable fabric, it offers superior comfort
                and style.
              </p>

              <h6 className="font-poppins text-black/60 font-medium text-base py-3">
                Select Colors
              </h6>
              <div className="flex gap-x-5">
                <p onClick={()=>handlecoloractive(1)} className="w-9 h-9 bg-[#4F4631] rounded-full flex items-center   cursor-pointer    justify-center ">
                {coloractive ==1 &&   <FaCheck className="text-white" />}
                </p>
                <p onClick={()=>handlecoloractive(2)} className="w-9 h-9 bg-[#314F4A] rounded-full flex items-center   cursor-pointer    justify-center">   {coloractive ==2 &&   <FaCheck className="text-white" />} </p>
                <p onClick={()=>handlecoloractive(3)} className="w-9 h-9 bg-[#31344F] rounded-full flex items-center   cursor-pointer    justify-center">  {coloractive ==3 &&   <FaCheck className="text-white" />}</p>
              </div>
               <h6 className="font-poppins text-black/60 font-medium text-base py-3">
                Choose Size
              </h6>
              <div className="flex items-center gap-x-3 border-b-2 pb-5 max-w-[700px] ">
                <p onClick={()=>handlesizeactive(1)} className={`${sizeactive ==1 ? "text-base font-lato font-semibold  text-white bg-black px-6 py-3 rounded-4xl" : "text-base font-lato text-black/60 bg-searchbar-bg px-6 py-3 rounded-4xl cursor-pointer "}`}>Small</p> 
                 <p onClick={()=>handlesizeactive(2)} className={`${sizeactive ==2 ? "text-base font-lato font-semibold  text-white bg-black px-6 py-3 rounded-4xl" : "text-base font-lato text-black/60 bg-searchbar-bg px-6 py-3 rounded-4xl cursor-pointer "}`}> Medium </p> 
                  <p onClick={()=>handlesizeactive(3)} className={`${sizeactive ==3 ? "text-base font-lato font-semibold  text-white bg-black px-6 py-3 rounded-4xl" : "text-base font-lato text-black/60 bg-searchbar-bg px-6 py-3 rounded-4xl cursor-pointer "}`}>Large</p>
                   <p onClick={()=>handlesizeactive(4)} className={`${sizeactive ==4 ? "text-base font-lato font-semibold  text-white bg-black px-6 py-3 rounded-4xl" : "text-base font-lato text-black/60 bg-searchbar-bg px-6 py-3 rounded-4xl cursor-pointer "}`}>X-Large</p>
              </div>
              <div>
                <div className="flex items-center justify-between py-5  ">
                    <div className="bg-searchbar-bg rounded-4xl flex items-center gap-x-8 py-3 px-5">
                    <FaMinus onClick={handleMinus} className="cursor-pointer" />
                    <p className="text-lg font-poppins font-medium">{count}</p>
                    <FaPlus onClick={handlePlus} className="cursor-pointer" />

                    </div>
                    <div className="bg-black rounded-4xl hover:bg-black/85 hover:rounded-4xl ">
                        <button onClick={()=>router.push('/cart')} className="text-base font-poppins font-medium text-white px-35 py-4 cursor-pointer   ">Add to Cart</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
