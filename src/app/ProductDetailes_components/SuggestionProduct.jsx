import React from 'react'
import product1 from "../productimg/product1.png";
import product2 from "../productimg/product2.png";
import product3 from "../productimg/product3.png";
import product4 from "../productimg/product4.png";
import starfull from '../productimg/starfull.png'
import starhalf from '../productimg/starhalf.png'
import Image from "next/image";
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
   
    <section className='py-10'>
   <div className="container">
      <h2 className="font-poppins font-bold text-center text-5xl mb-12 text-black uppercase ">
          You might also like
        </h2>
        <div className="flex justify-between items-center">

        {
            productData.map((item)=>(

        <div className=" border border-gray-100 hover:border-black/20 w-[295px] px-3 py-5 rounded-md cursor-pointer">
          <Image src={item.image} alt="" />
          <h4 className="text-md font-lato font-bold text-black mt-3">{item.title}</h4>
            <div className="flex items-center mt-1">
                <Image src={starfull} alt="" />
                <Image src={starfull} alt="" />
                <Image src={starfull} alt="" />
                <Image src={starfull} alt="" />
                <Image src={starhalf} alt="" />
                <p className="font-lato text-sm font-normal ml-3">4.5/5</p>
            </div>
            <h6 className="font-poppins font-bold text-2xl text-black mt-2">${item.Price}</h6>
        </div>
            ))
        }
        </div>
      
      </div>
    </section>
  )
}
