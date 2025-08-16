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
import { Lens } from "@/components/magicui/lens";
import { FaCheck } from "react-icons/fa6";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter();
  const [active, setactive] = useState(1);
  const [coloractive, setcoloractive] = useState(1);
  const [sizeactive, setsizeactive] = useState(1);
  const [count, setcount] = useState(1);

  const handleActive = (number) => setactive(number);
  const handlecoloractive = (number) => setcoloractive(number);
  const handlesizeactive = (number) => setsizeactive(number);

  const handleMinus = () => {
    if (count > 1) setcount(count - 1);
  };
  const handlePlus = () => setcount(count + 1);

  // helper: return active image
  const renderActiveImage = () => {
    if (active === 1) return img1;
    if (active === 2) return tshirt1;
    if (active === 3) return tshirt2;
    return img1;
  };

  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT IMAGE SECTION */}
          <div className="lg:w-2/4 w-full">
            {/* MOBILE VIEW */}
            <div className="lg:hidden flex flex-col">
              {/* Full screen active image */}
              <div className="w-full mb-4">
                <Image
                  src={renderActiveImage()}
                  alt=""
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
              {/* Thumbnails under active image */}
              <div className="flex justify-center gap-3">
                <Image
                  onClick={() => handleActive(1)}
                  className={`w-20 h-20 object-cover rounded-xl cursor-pointer ${
                    active === 1 ? "border-2 border-black" : ""
                  }`}
                  src={img2}
                  alt=""
                />
                <Image
                  onClick={() => handleActive(2)}
                  className={`w-20 h-20 object-cover rounded-xl cursor-pointer ${
                    active === 2 ? "border-2 border-black" : ""
                  }`}
                  src={img3}
                  alt=""
                />
                <Image
                  onClick={() => handleActive(3)}
                  className={`w-20 h-20 object-cover rounded-xl cursor-pointer ${
                    active === 3 ? "border-2 border-black" : ""
                  }`}
                  src={img4}
                  alt=""
                />
              </div>
            </div>

            {/* DESKTOP VIEW (remain same) */}
            <div className="hidden lg:flex justify-between">
              {/* Thumbnails left */}
              <div className="grid gap-y-3">
                <Image
                  onClick={() => handleActive(1)}
                  className={`${
                    active == 1
                      ? "border border-black/60 rounded-3xl cursor-pointer "
                      : "cursor-pointer "
                  }`}
                  src={img2}
                  alt=""
                />
                <Image
                  onClick={() => handleActive(2)}
                  className={`${
                    active == 2
                      ? "border border-black/60 rounded-3xl cursor-pointer "
                      : "cursor-pointer "
                  }`}
                  src={img3}
                  alt=""
                />
                <Image
                  onClick={() => handleActive(3)}
                  className={`${
                    active == 3
                      ? "border border-black/60 rounded-3xl cursor-pointer "
                      : "cursor-pointer "
                  }`}
                  src={img4}
                  alt=""
                />
              </div>
              {/* Active image with lens */}
              <div>
                {active == 1 ? (
                  <Lens zoomFactor={2} lensSize={180} isStatic={false}>
                    <Image src={img1} alt="" />
                  </Lens>
                ) : active == 2 ? (
                  <Lens zoomFactor={2} lensSize={180} isStatic={false}>
                    <Image src={tshirt1} alt="" />
                  </Lens>
                ) : active == 3 ? (
                  <Image src={tshirt2} alt="" />
                ) : null}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT (unchanged) */}
          <div className="lg:w-2/4 w-full">
            {/* ... your content side (title, rating, price, colors, size, add to cart) stays same ... */}
              <div className="lg:w-2/4 w-full">
            <div className="px-3 lg:px-10">
              <h2 className="font-poppins font-bold text-2xl lg:text-[40px] text-black uppercase">
                One Life Graphic T-shirt
              </h2>

              {/* Rating */}
              <div className="flex items-center mt-2">
                <Image src={starfull} alt="" />
                <Image src={starfull} alt="" />
                <Image src={starfull} alt="" />
                <Image src={starfull} alt="" />
                <Image src={starhalf} alt="" />
                <p className="font-poppins text-sm font-semibold ml-3">4.5/5</p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mt-3">
                <p className="font-poppins font-bold text-black text-2xl lg:text-3xl">
                  $260
                </p>
                <p className="font-poppins font-bold text-black/30 text-lg lg:text-3xl line-through">
                  $300
                </p>
                <p className="bg-[#FF3333]/10 px-2.5 py-1.5 rounded-4xl text-sm lg:text-base font-poppins font-medium text-[#FF3333]">
                  -40%
                </p>
              </div>

              {/* Description */}
              <p className="font-poppins text-black/60 font-semibold text-sm lg:text-base py-4 border-b-2">
                This graphic t-shirt which is perfect for any occasion. Crafted
                from a soft and breathable fabric, it offers superior comfort
                and style.
              </p>

              {/* Colors */}
              <h6 className="font-poppins text-black/60 font-medium text-sm lg:text-base py-3">
                Select Colors
              </h6>
              <div className="flex gap-x-4">
                <p
                  onClick={() => handlecoloractive(1)}
                  className="w-8 h-8 lg:w-9 lg:h-9 bg-[#4F4631] rounded-full flex items-center justify-center cursor-pointer"
                >
                  {coloractive == 1 && <FaCheck className="text-white" />}
                </p>
                <p
                  onClick={() => handlecoloractive(2)}
                  className="w-8 h-8 lg:w-9 lg:h-9 bg-[#314F4A] rounded-full flex items-center justify-center cursor-pointer"
                >
                  {coloractive == 2 && <FaCheck className="text-white" />}
                </p>
                <p
                  onClick={() => handlecoloractive(3)}
                  className="w-8 h-8 lg:w-9 lg:h-9 bg-[#31344F] rounded-full flex items-center justify-center cursor-pointer"
                >
                  {coloractive == 3 && <FaCheck className="text-white" />}
                </p>
              </div>

              {/* Sizes */}
              <h6 className="font-poppins text-black/60 font-medium text-sm lg:text-base py-3">
                Choose Size
              </h6>
              <div className="flex flex-wrap items-center gap-2 lg:gap-3 border-b-2 pb-5">
                {["Small", "Medium", "Large", "X-Large"].map((size, idx) => (
                  <p
                    key={size}
                    onClick={() => handlesizeactive(idx + 1)}
                    className={`${
                      sizeactive == idx + 1
                        ? "text-sm lg:text-base font-lato font-semibold text-white bg-black px-4 lg:px-6 py-2 lg:py-3 rounded-4xl"
                        : "text-sm lg:text-base font-lato text-black/60 bg-searchbar-bg px-4 lg:px-6 py-2 lg:py-3 rounded-4xl cursor-pointer"
                    }`}
                  >
                    {size}
                  </p>
                ))}
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex  lg:flex-row items-center justify-center lg:justify-between py-5 gap-4">
                <div className="bg-searchbar-bg rounded-4xl flex items-center gap-x-6 lg:gap-x-8 py-2 lg:py-3 px-4 lg:px-5">
                  <FaMinus onClick={handleMinus} className="cursor-pointer" />
                  <p className="text-lg font-poppins font-medium">{count}</p>
                  <FaPlus onClick={handlePlus} className="cursor-pointer" />
                </div>
                <div className="bg-black rounded-4xl hover:bg-black/85">
                  <button
                    onClick={() => router.push("/cart")}
                    className="text-sm lg:text-base font-poppins font-medium text-white px-8 lg:px-35  py-3 lg:py-4 cursor-pointer"
                  >
                    Add to Cart
                  </button>
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
