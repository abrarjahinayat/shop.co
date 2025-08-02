"use client";
import React, { useState } from "react";
import icon1 from "../categoryimg/icon1.png";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Price from "./Price";
import Colors from "./Colors";
import Size from "./Size";
export default function CasualProducts() {
  const [active, setactive] = useState(false);

  const handleactive = (number) => {
    setactive(number);
  };
  return (
    <section>
      <div className="container">
        {/* ========= sidebar start ======= */}
        <div className="relative flex h-[calc(100vh-2rem)] w-full max-w-[18rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
          <div className="p-4 mb-2 flex justify-between border-b">
            <h5 className="font-poppins font-bold text-xl text-black">
              Filters
            </h5>
            <Image src={icon1} alt="" />
          </div>
          <div>
            <div
              onClick={() => handleactive(1)}
              className="flex justify-between items-center p-2 cursor-pointer "
            >
              <h4 className="font-oswald text-base text-black/60 font-medium">
                T-Shirts
              </h4>
              <IoIosArrowForward
                className={`${
                  active == 1
                    ? "rotate-90 text-xl transition-transform duration-300"
                    : "rotate-0 text-xl transition-transform duration-300"
                }`}
              />
            </div>

            {active == 1 && (
              <div className=" bg-gray-200 rounded-md p-2 cursor-pointer   ">
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    T-Shirt
                  </h4>
                </div>
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" id="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    Printed T-Shirt
                  </h4>
                </div>
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" id="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    V-neck t-shirt
                  </h4>
                </div>
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" id="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    Long sleeve Crew neck T-shirts
                  </h4>
                </div>
              </div>
            )}
          </div>

          <div>
            <div
              onClick={() => handleactive(2)}
              className="flex justify-between items-center p-2 cursor-pointer "
            >
              <h4 className="font-oswald text-base text-black/60 font-medium">
                Shorts
              </h4>
              <IoIosArrowForward
                className={`${
                  active == 2
                    ? "rotate-90 text-xl transition-transform duration-300"
                    : "rotate-0 text-xl transition-transform duration-300"
                }`}
              />
            </div>
            {/* ===== active section start ====  */}
            {active == 2 && (
              <div className=" bg-gray-200 rounded-md p-2 cursor-pointer   ">
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    Denim shorts
                  </h4>
                </div>
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" id="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    Chino shorts
                  </h4>
                </div>
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" id="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    Cargo shorts
                  </h4>
                </div>
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" id="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    Walking shorts
                  </h4>
                </div>
              </div>
            )}
          </div>

          <div>
            <div
              onClick={() => handleactive(3)}
              className="flex justify-between items-center p-2 cursor-pointer "
            >
              <h4 className="font-oswald text-base text-black/60 font-medium">
                Shirts
              </h4>
              <IoIosArrowForward
                className={`${
                  active == 3
                    ? "rotate-90 text-xl transition-transform duration-300"
                    : "rotate-0 text-xl transition-transform duration-300"
                }`}
              />
            </div>
            {/* ===== active section start ====  */}
            {active == 3 && (
              <div className=" bg-gray-200 rounded-md p-2 cursor-pointer   ">
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    Formal Shirt
                  </h4>
                </div>
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" id="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    Half Shirt
                  </h4>
                </div>
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" id="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    Denim Shirt
                  </h4>
                </div>
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" id="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    Flannel Shirt
                  </h4>
                </div>
              </div>
            )}
          </div>

          <div>
            <div
              onClick={() => handleactive(4)}
              className="flex justify-between items-center p-2 cursor-pointer "
            >
              <h4 className="font-oswald text-base text-black/60 font-medium">
                Hoodie
              </h4>
              <IoIosArrowForward
                className={`${
                  active == 4
                    ? "rotate-90 text-xl transition-transform duration-300"
                    : "rotate-0 text-xl transition-transform duration-300"
                }`}
              />
            </div>
            {/* ===== active section start ====  */}
            {active == 4 && (
              <div className=" bg-gray-200 rounded-md p-2 cursor-pointer   ">
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    Formal Hoodie
                  </h4>
                </div>
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" id="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    Half Hoodie
                  </h4>
                </div>
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" id="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    Denim Hoodie
                  </h4>
                </div>
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" id="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    Flannel Hoodie
                  </h4>
                </div>
              </div>
            )}
          </div>

          <div className="border-b pb-4">
            <div
              onClick={() => handleactive(5)}
              className="flex justify-between items-center p-2 cursor-pointer "
            >
              <h4 className="font-oswald text-base text-black/60 font-medium">
                Jeans
              </h4>
              <IoIosArrowForward
                className={`${
                  active == 5
                    ? "rotate-90 text-xl transition-transform duration-300"
                    : "rotate-0 text-xl transition-transform duration-300"
                }`}
              />
            </div>
            {/* ===== active section start ====  */}
            {active == 5 ? (
              <div className=" bg-gray-200 rounded-md p-2 cursor-pointer   ">
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    Formal Jeans
                  </h4>
                </div>
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" id="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    Half Jeans
                  </h4>
                </div>
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" id="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    Denim Jeans
                  </h4>
                </div>
                <div className="flex gap-x-3">
                  <input type="checkbox" name="" id="" />
                  <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                    Flannel Jeans
                  </h4>
                </div>
              </div>
            ) : null}
          </div>
          <div>
            <Price/>
          </div>
          <div>
            <Colors/>
          </div>
          <div>
            <Size/>
          </div>
        </div>
        {/* ====== sidebar end ========= */}
      </div>
    </section>
  );
}
