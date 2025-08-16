import React from 'react'
import product1 from "../productimg/product1.png";
import product2 from "../productimg/product2.png";
import product3 from "../productimg/product3.png";
import product4 from "../productimg/product4.png";
import starfull from '../productimg/starfull.png'
import starhalf from '../productimg/starhalf.png'
import Image from "next/image";
import Link from 'next/link';
export default function SuggestionProduct() {
      const productData =[
            {
                title: "T-SHIRT WITH TAPE DETAILS",
                Price: "120",
                image: product1
            },  {
                title: "SKINNY FIT JEANS",
                Price: "240",
                image: product2
            },  {
                title: "CHECKERED SHIRT",
                Price: "180",
                image: product3
            },  {
                title: "SLEEVE STRIPED T-SHIRT",
                Price: "130",
                image: product4
            },
        ]
  return (
   
      <section className="lg:py-6 py-3">
      <div className="container">
         <h2 className="font-poppins font-bold text-center text-3xl lg:text-5xl lg:mb-12 mb-6 text-black uppercase ">
          You might also like
        </h2>
        {/* Grid layout for responsiveness */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8">
          {productData.map((item, index) => (
            <Link
              key={index}
              href={"/productDetailes"}
              className="border border-gray-100 lg:hover:border-black/20 px-3 py-5 rounded-md cursor-pointer"
            >
              {/* Product Image */}
              <Image
                className="w-[108px] lg:w-auto mx-auto"
                src={item.image}
                alt={item.title}
              />

              {/* Product Title */}
              <h4 className="lg:text-lg text-sm font-lato font-bold text-black mt-3 line-clamp-2">
                {item.title}
              </h4>

              {/* Rating */}
              <div className="flex items-center mt-1">
                <Image src={starfull} alt="star" />
                <Image src={starfull} alt="star" />
                <Image src={starfull} alt="star" />
                <Image src={starfull} alt="star" />
                <Image src={starhalf} alt="half star" />
                <p className="font-lato lg:text-sm text-xs font-normal ml-3">
                  4.5/5
                </p>
              </div>

              {/* Price */}
              <h6 className="font-poppins font-bold lg:text-2xl text-black mt-2">
                ${item.Price}
              </h6>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
