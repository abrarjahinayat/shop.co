import React from "react";

export default function Newslatter() {
  return (
    <section className="">
      <div className="container">
        <div className="bg-black-bg flex justify-between py-10 px-13 rounded-4xl items-center">
          <div>
            <h2 className="font-poppins font-bold text-5xl text-white uppercase w-[600px]">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </div>
          <div className="w-[400px]">
            <input className="text-base font-semibold bg-white  px-5 py-3 rounded-full w-[349px] text-black/40" placeholder="Enter Your email address" type="email" />
            <button className="font-lato font-semibold text-black text-base bg-white px-22 py-3 rounded-full mt-5">Subscribe to Newsletter</button>
          </div>
        </div>
      </div>
    </section>
  );
}
