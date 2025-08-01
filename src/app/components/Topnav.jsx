"use client"
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
const Topnav = () => {
  let [close, setclose] = useState(true)

  let handleclose = ()=>{
    setclose(!close)
  }
  return (
    <>
    {
      close && 
    <section className="bg-black-bg py-2">
      <div className="flex items-center justify-center">
        <div>
          <h4 className="text-center text-md text-white">
            {" "}
            Sign up and get 20% off to your first order.{" "}
            <span>
              <a className=" underline decoration-1" href="#">
                Sign Up Now
              </a>
            </span>
          </h4>
        </div>
        <span>
          {" "}
          <GrClose onClick={handleclose} className="text-white text-2xl hover:text-red-500 relative cursor-pointer left-100" />
        </span>
      </div>
    </section>
    }
    </>
  );
};

export default Topnav;
