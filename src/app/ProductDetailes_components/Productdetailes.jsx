import React from "react";
import sizechart from '../productdetailesimg/sizechart.jpg'
import Image from "next/image";
export default function Productdetailes() {
  return (
    <section className="lg:py-7 py-5">
      <div className="container">
        <p className='font-lato lg:text-lg text-black/80 font-semibold  '>
          Men's Premium Quality t-shirt offers a much smoother, silky feel and
          more structured, mid-weight fit than regular t-shirts. The t-shirts
          are made with the finest quality Combed Compact Cotton, which features
          astonishing ~175 GSM on just 26's cotton, giving a smooth and compact
          construction. The compact finish guarantees that the t-shirt length
          and width will not change over wash or months of usage.
        </p>

        <p className='font-lato lg:text-xl text-black font-semibold lg:py-7 py-5 '>Detailed Specification:</p>
            <div>
                <ul className="list-disc font-lato lg:text-lg text-black/60 font-semibold px-3">
                    <li>Organic Ringspun Combed Compact Cotton</li>
                    <li>100% Cotton</li>
                    <li>Regular fit, Crew Neck Mid-weight, 5.16 oz/yd2(~175GSM)</li>
                    <li>Reactive Dye, enzyme, and silicon washed</li>
                    <li>Preshrunk to minimize shrinkage</li>
                    <li>Cut N Sew ( No Print)</li>
                </ul>
            </div>

            <p className='font-lato lg:text-xl text-black font-semibold py-5 ' >Size chart - In inches (Expected Deviation &lt; 3% )</p>

            <Image src={sizechart} alt="" className="-ml-2 " />
      </div>
    </section>
  );
}
