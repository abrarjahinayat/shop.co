// components/MySwiper.jsx
"use client"; // if using Next.js App Router (app directory)

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Customerslide from "./Customerslide";

export default function CustomerFeedback() {
  return (
    <section className="py-20 hidden lg:block">
      <div className="container">
        <h2 className="font-poppins font-bold text-4xl lg:text-5xl mb-8 text-black uppercase ">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="w-full mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
          >
            <SwiperSlide>
              <div className="">
                <Customerslide/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                 <Customerslide/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                 <Customerslide/>
              </div>
            </SwiperSlide>
    
          </Swiper>
        </div>
      </div>
    </section>
  );
}
