import React from 'react'
import Products from './Products'

const TopSelling = () => {
  return (
    <section>
        <div className="container">
             <h2 className='font-bold font-poppins text-5xl text-center'>TOP SELLING</h2>
            <Products/>
        </div>
    </section>
  )
}

export default TopSelling