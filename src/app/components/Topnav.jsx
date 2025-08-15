"use client"
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/navigation";
const Topnav = () => {
  const router = useRouter()
  let [close, setclose] = useState(true)

  let handleclose = ()=>{
    setclose(!close)
  }
  return (
    <>
    {
      close && 
    <section className="bg-black-bg py-2">
      <div className="container">

      <div className="flex items-center justify-center">
        <div>
          <h4 className="text-center text-sm lg:text-base text-white">
            {" "}
            Sign up and get 20% off to your first order.{" "}
            <span>
              <a onClick={()=>router.push('/signuppage')} className=" underline decoration-1" href="#">
                Sign Up Now
              </a>
            </span>
          </h4>
        </div>
        <span className="hidden lg:block">
          {" "}
          <GrClose onClick={handleclose} className="text-white text-2xl hover:text-red-500 relative cursor-pointer left-100" />
        </span>
      </div>
      </div>
    </section>
    }
    </>
  );
};

export default Topnav;
