
"use client"
import React, { useState } from 'react'
import Products from './Products'

const TopSelling = () => {

  const [viewall, setviewall] = useState(false)
  
     const  handleviewall =()=>{
        setviewall(!viewall)
    }
  return (
    <section>
        <div className="container">
             <h2 className='font-bold font-poppins text-5xl text-center'>TOP SELLING</h2>
            <Products/>

              {
              viewall && <Products/>
            }
            <button onClick={handleviewall} className="bg-white border transition duration-300 ease-in-out border-gray-300 rounded-full text-black text-md font-lato font-medium py-4 px-20 mx-auto block mt-10 mb-10 cursor-pointer hover:bg-black hover:text-white">View All</button>

        </div>
    </section>
  )
}

export default TopSelling