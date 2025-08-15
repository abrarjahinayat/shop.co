import Yourcart from '@/app/cart_components/Yourcart'
import Newslatter from '@/app/components/Newslatter'
import React from 'react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function page() {
  return (
    <div>
       <div className="container">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />  
            <BreadcrumbItem>
            <BreadcrumbLink href="/productDetailes">ProductDetailes</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
          </BreadcrumbItem>
        
        </BreadcrumbList>
      </Breadcrumb>
      </div>
        <Yourcart/>
    
    </div>
  )
}
