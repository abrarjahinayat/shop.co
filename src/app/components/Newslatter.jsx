import React from "react";

export default function Newslatter() {
  return (
    <section className="relative top-20">
      <div className="container">
        <div className="bg-black-bg lg:flex justify-between py-8 lg:py-10 lg:px-13 px-6 rounded-4xl items-center">
          <div>
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-white uppercase lg:w-[600px]">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </div>
          <div className="lg:w-[400px] pt-5 lg:pt-0">
            <input className="text-base font-semibold bg-white  px-5 py-3 rounded-full lg:w-[349px] w-full   text-black/40" placeholder="Enter Your email address" type="email" />
            <button className="font-lato font-semibold hover:bg-black hover:text-white text-black text-base bg-white lg:px-22 w-full lg:w-auto py-3 rounded-full lg:mt-5 mt-3">Subscribe to Newsletter</button>
          </div>
        </div>
      </div>
    </section>
  );
}
