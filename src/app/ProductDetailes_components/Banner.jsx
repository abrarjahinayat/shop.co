"use client";
import React, { useState } from "react";
import img1 from "../productdetailesimg/image 1.png";
import img2 from "../productdetailesimg/image 2.png";
import img3 from "../productdetailesimg/image 3.png";
import img4 from "../productdetailesimg/image 4.png";
import tshirt1 from "../productdetailesimg/t-shirt1.png";
import tshirt2 from "../productdetailesimg/t-shirt-2.png";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Lens } from "@/components/magicui/lens";
export default function Banner() {
  const [active, setactive] = useState(1);

  const handleActive = (number) => {
    setactive(number);
  };
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex">
          <div className="w-2/4 ">
            <div className="flex justify-between">
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
          <div className="w-2/4 bg-green-500 h-50"></div>
        </div>
      </div>
    </section>
  );
}
