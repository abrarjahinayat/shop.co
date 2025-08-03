import React from 'react'
import { FaPenRuler } from "react-icons/fa6";
export default function OrderSummary() {
  return (
    <section>
        <div className="container">
            <div className='w-[605px] border border-gray-300 rounded-md px-6 py-5'>
                <h3 className='text-2xl font-poppins font-bold text-black'>Order Summary</h3>
                <div className='border-b py-5 '>
                    <span className='flex justify-between items-center '>
                        <h6 className='font-oswald font-medium text-xl text-black/60'>Subtotal</h6>
                        <p className='font-poppins text-xl text-black font-bold'>$565</p>
                    </span>
                    <span className='flex justify-between items-center py-5'>
                        <h6 className='font-oswald font-medium text-xl text-black/60'>Discount (-20%)</h6>
                        <p className='font-poppins text-xl text-red-500 font-bold'>-$113</p>
                    </span>  
                    <span className='flex justify-between items-center '>
                        <h6 className='font-oswald font-medium text-xl text-black/60'>Delivery Fee</h6>
                        <p className='font-poppins text-xl text-black font-bold'>$15</p>
                    </span>
                </div>
                <div className='flex items-center justify-between'>
                    <h4 className='font-oswald font-medium text-2xl text-black py-5'>Total</h4>
                    <p className='font-poppins text-2xl text-black font-bold'>$467</p>
                </div>

                <div className='flex items-center gap-x-3'>
                    <div className='relative'>
                    <FaPenRuler className='text-xl absolute text-black/60 top-4 left-4' />
                    <input className='bg-searchbar-bg w-[410px] py-3 px-11 border rounded-full text-base uppercase font-oswald font-medium text-black/60' type="text" placeholder='Add promo code' />

                    </div>
                    <div>
                        <button className='bg-black text-white font-poppins font-medium text-base py-3 px-12 rounded-full cursor-pointer hover:bg-black/90'>Apply</button>
                    </div>
                </div>
                 <div className='py-5'>
                        <button className='bg-black text-white font-poppins font-medium text-base py-5 px-53 rounded-full cursor-pointer hover:bg-black/90'>Go to Checkout</button>
                    </div>
            </div>
        </div>
    </section>
  )
}
