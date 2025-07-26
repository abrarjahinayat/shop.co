import React from 'react'
import Products from './Products'

const NewArrivals = () => {
  return (
    <section className='py-18'>
        <div className="container">
            <h2 className='font-bold font-poppins text-5xl text-center'>NEW ARRIVALS</h2>
            <Products/>
        </div>
    </section>
  )
}

export default NewArrivals