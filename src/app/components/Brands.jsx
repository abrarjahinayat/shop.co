import React from 'react'
import brand1 from '../images/brand1.png'
import brand2 from '../images/brand2.png'
import brand3 from '../images/brand3.png'
import brand4 from '../images/brand4.png'
import brand5 from '../images/brand5.png'
import Image from 'next/image'
const Brands = () => {
  return (
    <section className='bg-black py-11'>
        <div className="container">
            <div className='flex justify-between items-center'>
                <Image src={brand1} alt="" />
                <Image src={brand2} alt="" />
                <Image src={brand3} alt="" />
                <Image src={brand4} alt="" />
                <Image src={brand5} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Brands