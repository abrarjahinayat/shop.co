import React from 'react'
import product1 from "../productimg/product1.png";
import product2 from "../productimg/product2.png";
import product3 from "../productimg/product3.png";
import product4 from "../productimg/product4.png";
import starfull from '../productimg/starfull.png'
import starhalf from '../productimg/starhalf.png'
import casual1 from '../categoryimg/casual1.png'
import casual2 from '../categoryimg/casual2.png'
import casual3 from '../categoryimg/casual3.png'
import casual4 from '../categoryimg/casual4.png'
import casual5 from '../categoryimg/casual5.png'
import casual6 from '../categoryimg/casual6.png'
import casual7 from '../categoryimg/casual7.png'
import casual8 from '../categoryimg/casual8.png'
import casual9 from '../categoryimg/casual9.png'
import Image from "next/image";
import Link from "next/link";
export default function ProductsCasual() {
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
                title: "CHECKERED SHIRT",
                Price: "180",
                image: casual1
            },  {
                title: "CHECKERED SHIRT",
                Price: "180",
                image: casual2
            },  {
                title: "CHECKERED SHIRT",
                Price: "180",
                image: casual3
            },  {
                title: "CHECKERED SHIRT",
                Price: "180",
                image: casual4
            },  {
                title: "CHECKERED SHIRT",
                Price: "180",
                image: casual5
            },  {
                title: "CHECKERED SHIRT",
                Price: "180",
                image: casual6
            },  {
                title: "CHECKERED SHIRT",
                Price: "180",
                image: casual7
            },  {
                title: "CHECKERED SHIRT",
                Price: "180",
                image: casual8
            },  {
                title: "CHECKERED SHIRT",
                Price: "180",
                image: casual9
            },  
        ]
  return (
   <section className="py-10">
      <div className="container">
        <div className="flex justify-between flex-wrap gap-y-6 items-center">

        {
            productData.map((item)=>(

        <Link href={'/productDetailes'} className=" border border-gray-100 hover:border-black/20 w-[295px] px-3 py-5 rounded-md cursor-pointer">
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
        </Link>
            ))
        }
        </div>
      
      </div>
    </section>
  )
}
