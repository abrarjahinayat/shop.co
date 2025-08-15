import React from 'react'
import style1 from '../images/style1.png'
import style2 from '../images/style2.png'
import style3 from '../images/style3.png'
import style4 from '../images/style4.png'
import Image from 'next/image'
import Link from 'next/link'
const DressStyle = () => {
  return (
    <section className='py-5 lg:py-10'>
        <div className="container">
            <div className='bg-searchbar-bg rounded-4xl py-6 px-3 lg:py-16 lg:px-16'>
                <h2 className='font-poppins font-bold text-4xl lg:text-5xl text-black uppercase text-center'>BROWSE BY Dress STYLE</h2>
                <div className='lg:flex  gap-5 lg:pt-14 pt-7 '>
                    <Link href={'/category'}>
                    <Image className='scale-95 hover:scale-105 hover:shadow transition cursor-pointer duration-700 ease-in-out' src={style1} alt="" />
                    </Link>
                    <Image className='scale-95 hover:scale-105 hover:shadow transition cursor-pointer duration-700 ease-in-out' src={style2} alt="" />
                </div>
                <div className='lg:flex gap-5 pt-5'>
                    <Image className='scale-95 hover:scale-105 hover:shadow transition cursor-pointer duration-700 ease-in-out' src={style3} alt="" />
                    <Image className='scale-95 hover:scale-105 hover:shadow transition cursor-pointer duration-700 ease-in-out' src={style4} alt="" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default DressStyle