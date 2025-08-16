import Banner from "@/app/ProductDetailes_components/Banner";
import Rating from "@/app/ProductDetailes_components/Rating";
import Reviews from "@/app/ProductDetailes_components/Reviews";
import SuggestionProduct from "@/app/ProductDetailes_components/SuggestionProduct";
import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function productDetailespage() {
  return (
    <div>
      <div className="container">
      <Breadcrumb className="mt-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/productDetailes">ProductDetailes</BreadcrumbLink>
          </BreadcrumbItem>
        
        </BreadcrumbList>
      </Breadcrumb>
      </div>
      <Banner />
      <Rating />
      {/* <SuggestionProduct /> */}
    </div>
  );
}
