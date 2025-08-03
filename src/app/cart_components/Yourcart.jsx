"use client";
import React, { useState } from "react";
import cart1 from "../cartimg/cart1.png";
import cart2 from "../cartimg/cart2.png";
import cart3 from "../cartimg/cart3.png";
import deletebox from "../cartimg/deletebox.png";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";
import OrderSummary from "./OrderSummary";
export default function Yourcart() {
  const [count, setcount] = useState(1);

  const handleMinus = (number) => {
    if (count > 1) {
      setcount(count - 1);
    }
  };

  const handlePlus = (number) => {
    setcount(count + 1);
  };

  const cartsitem = [
    {
      Title: "Gradient Graphic T-shirt",
      Size: "Large",
      Color: "White",
      Price: " 145",
      image: cart1,
    },
    {
      Title: "CHECKERED SHIRT",
      Size: "Medium",
      Color: "Red",
      Price: " 180",
      image: cart2,
    },
    {
      Title: "SKINNY FIT JEANS",
      Size: "Large",
      Color: "Blue",
      Price: " 240",
      image: cart3,
    },
  ];

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="font-poppins font-bold text-5xl mb-5 text-black">
          Your cart
        </h2>
        <div className="flex justify-between">
        <div className="w-[715px] border border-gray-300 rounded-md px-6 py-5  ">
          {
            cartsitem.map((item)=>(

          <div className="py-5">
            <div className="flex items-center justify-between gap-x-4 border-b pb-5">
              <div className="flex items-center gap-x-4">
                <div>
                  <Image src={item.image} alt="" />
                </div>

                <div>
                  <h3 className="font-poppins font-bold text-2xl text-black">
                   {item.Title}
                  </h3>

                  <span className="flex items-center gap-x-1">
                    <h6 className="font-oswald font-medium text-sm text-black">
                      Size:
                    </h6>
                    <p className="font-oswald font-medium text-sm text-black/60">
                      {item.Size}
                    </p>
                  </span>
                  <span className="flex items-center mt-1 gap-x-1">
                    <h6 className="font-oswald font-medium text-sm text-black">
                      Color:
                    </h6>
                    <p className="font-oswald font-medium text-sm text-black/60">
                     {
                        item.Color
                     }
                    </p>
                  </span>
                  <p className="font-poppins font-bold mt-1 text-2xl text-black">
                    ${item.Price}
                  </p>
                </div>
              </div>

              <div className="relative">
                <Image
                  className="absolute right-0 top-0"
                  src={deletebox}
                  alt=""
                />

                <div className="bg-searchbar-bg rounded-4xl flex items-center gap-x-8 py-2 mt-20 px-4">
                  <FaMinus onClick={()=>handleMinus(count)} className="cursor-pointer" />
                  <p className="text-lg font-poppins font-medium">{count}</p>
                  <FaPlus onClick={()=>handlePlus(count)} className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
            ))
          }
        </div>
        <div>
            <OrderSummary/>
        </div>
        </div>
      </div>
    </section>
  );
}
