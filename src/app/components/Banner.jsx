"use client";
import React from "react";
import CountUp from "react-countup";
const Banner = () => {
  return (
    <section className="bg-[url('/image/banner.png')] bg-cover bg-no-repeat py-40">
      <div className="container">
        <h1 className="w-[570px] font-oswald font-bold text-black text-7xl">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-md text-black/60 w-[545px] font-poppins py-8">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <button className="bg-black text-white font-medium text-md rounded-full py-4 px-16 ">
          Shop Now
        </button>

        <div className="flex  sm:flex-row w-full max-w-full lg:max-w-[600px] gap-6 sm:gap-8 lg:gap-x-15 justify-center lg:justify-start items-center text-xl lg:text-3xl mt-8 sm:mt-10 text-black px-2 sm:px-4 lg:px-0">
          <div className="text-center lg:text-left">
            <div>
              <CountUp
                className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold"
                end={200}
                duration={4}
              />
              <span className="text-2xl sm:text-3xl lg:text-5xl font-poppins font-medium">
                +
              </span>
            </div>
            <p className="text-sm sm:text-sm lg:text-xl font-poppins text-black/60">
             International Brands
            </p>
          </div>
          <div className="text-center lg:text-left">
            <div>
              <CountUp
                className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold"
                end={2000}
                duration={5}
              />
              <span className="text-2xl sm:text-3xl lg:text-5xl font-poppins font-medium">
                +
              </span>
            </div>
            <p className="text-xs sm:text-sm lg:text-xl  font-poppins text-black/60">
             High-Quality Products
            </p>
          </div>
          <div className="text-center lg:text-left">
            <div>
              <CountUp
                className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold"
                end={30000}
                duration={6}
              />
              <span className="text-2xl sm:text-3xl lg:text-5xl font-poppins font-medium">
                +
              </span>
            </div>
            <p className="text-xs sm:text-sm lg:text-xl w-auto max-w-[100px] sm:max-w-[120px] font-poppins text-black/60">
            Happy Customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
