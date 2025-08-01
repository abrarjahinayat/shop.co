import Banner from '@/app/ProductDetailes_components/Banner'
import Rating from '@/app/ProductDetailes_components/Rating'
import Reviews from '@/app/ProductDetailes_components/Reviews'
import SuggestionProduct from '@/app/ProductDetailes_components/SuggestionProduct'
import React from 'react'

export default function productDetailespage() {
  return (
    <div>
        <Banner/>
        <Rating/>
        <SuggestionProduct/>
    </div>
  )
}
