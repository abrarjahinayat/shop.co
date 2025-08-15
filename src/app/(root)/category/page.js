import CasualProducts from "@/app/Category_components/CasualProducts";
import Newslatter from "@/app/components/Newslatter";
import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Category_page() {
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
            <BreadcrumbLink href="/category">Category</BreadcrumbLink>
          </BreadcrumbItem>
   
        
        </BreadcrumbList>
      </Breadcrumb>
      </div>
      <CasualProducts />
    </div>
  );
}
