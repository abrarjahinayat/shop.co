import React from 'react'
import brand1 from '../images/brand1.png'
import brand2 from '../images/brand2.png'
import brand3 from '../images/brand3.png'
import brand4 from '../images/brand4.png'
import brand5 from '../images/brand5.png'
import Image from 'next/image'
const Brands = () => {
  return (
    <section id='brands' className='bg-black py-11'>
        <div className="container">
            <div className='lg:flex  lg:justify-between lg:items-center grid grid-cols-3 gap-4'>
                <Image className='w-[100px] lg:w-auto' src={brand1} alt="" />
                <Image className='w-[70px] lg:w-auto' src={brand2} alt="" />
                <Image className='w-[100px] lg:w-auto' src={brand3} alt="" />
                <Image className='w-[100px] lg:w-auto' src={brand4} alt="" />
                <Image className='w-[100px] lg:w-auto' src={brand5} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Brands