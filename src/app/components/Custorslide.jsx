import React from 'react'
import starfull from '../productimg/starfull.png'
import verified from '../images/verified.png'
import Image from 'next/image'
const Custorslide = () => {
  return (
    <section>
        <div className="container">
            <div className='flex justify-between'>
                <div className='bg-white border border-gray-300 rounded-2xl w-[400px] px-6 py-6'>
                    <div className='flex items-center gap-x-2'>
                    <Image src={starfull} alt="" />
                    <Image src={starfull} alt="" />
                    <Image src={starfull} alt="" />
                    <Image src={starfull} alt="" />
                    <Image src={starfull} alt="" />

                    </div>
                    <div className='flex items-center gap-x-2'>
                    <h6 className='font-poppins font-bold text-xl text-black py-3'>Sarah M.</h6>
                    <Image src={verified} alt="" />
                    </div>
                    <p className='font-lato text-base text-black/60 font-semibold w-[350px] '>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                </div>
                 <div className='bg-white border border-gray-300 rounded-2xl w-[400px] px-6 py-6'>
                    <div className='flex items-center gap-x-2'>
                    <Image src={starfull} alt="" />
                    <Image src={starfull} alt="" />
                    <Image src={starfull} alt="" />
                    <Image src={starfull} alt="" />
                    <Image src={starfull} alt="" />

                    </div>
                    <div className='flex items-center gap-x-2'>
                    <h6 className='font-poppins font-bold text-xl text-black py-3'>Alex K.</h6>
                    <Image src={verified} alt="" />
                    </div>
                    <p className='font-lato text-base text-black/60 font-semibold w-[350px] '>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                </div> 
                <div className='bg-white border border-gray-300 rounded-2xl w-[400px] px-6 py-6'>
                    <div className='flex items-center gap-x-2'>
                    <Image src={starfull} alt="" />
                    <Image src={starfull} alt="" />
                    <Image src={starfull} alt="" />
                    <Image src={starfull} alt="" />
                    <Image src={starfull} alt="" />

                    </div>
                    <div className='flex items-center gap-x-2'>
                    <h6 className='font-poppins font-bold text-xl text-black py-3'>James L.</h6>
                    <Image src={verified} alt="" />
                    </div>
                    <p className='font-lato text-base text-black/60 font-semibold w-[350px] '>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Custorslide