
"use client"
import React, { useState } from 'react'
import Products from './Products'

const TopSelling = () => {

  const [viewall, setviewall] = useState(false)
  
     const  handleviewall =()=>{
        setviewall(!viewall)
    }
  return (
    <section className='py-4 lg:py-0'>
        <div className="container">
             <h2 className='font-bold font-poppins text-4xl lg:text-5xl text-center'>TOP SELLING</h2>
            <Products/>

              {
              viewall && <Products/>
            }
            {
              viewall ?
              <button onClick={handleviewall} className="bg-white border transition duration-300 ease-in-out border-gray-300 rounded-full text-black text-md font-lato font-medium py-4 px-20 mx-auto block lg:mt-10 w-full lg:w-auto cursor-pointer hover:bg-black hover:text-white">Close All</button>
              :
               <button onClick={handleviewall} className="bg-white border transition duration-300 ease-in-out border-gray-300 rounded-full text-black text-md font-lato font-medium py-4 px-20 mx-auto block lg:mt-10 w-full lg:w-auto cursor-pointer hover:bg-black hover:text-white">View All</button>

            }

        </div>
    </section>
  )
}

export default TopSelling