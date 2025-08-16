"use client";
import React, { useState } from "react";
import icon1 from "../categoryimg/icon1.png";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { FiFilter } from "react-icons/fi"; // Filter Icon
import Price from "./Price";
import Colors from "./Colors";
import Size from "./Size";
import DressStyle from "./DressStyle";
import ProductsCasual from "./ProductsCasual";
import PaginationRounded from "../components/PaginationRounded";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";

export default function CasualProducts() {
  const [active, setactive] = useState(false);
  const [showFilter, setShowFilter] = useState(false); // For mobile filter toggle

  const handleactive = (number) => {
    setactive(number);
  };

  return (
    <section className="lg:py-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          {/* ===== Filter Toggle Button for Mobile ===== */}
          <div className="flex justify-end mb-4 lg:hidden">
            <button
              onClick={() => setShowFilter(true)}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg shadow-md"
            >
              <FiFilter className="text-lg" />
              Filters
            </button>
          </div>

          {/* ========= Sidebar Start ======= */}
          <div
            className={`fixed lg:static top-0 left-0 h-full lg:h-auto w-3/4 sm:w-1/2 lg:w-1/4 bg-white shadow-lg z-50 transform transition-transform duration-300 
              ${
                showFilter ? "translate-x-0" : "-translate-x-full"
              } lg:translate-x-0`}
          >
            <div className="relative flex-col rounded-xl bg-white bg-clip-border p-3 text-gray-700 shadow-blue-gray-900/5 h-full overflow-y-auto">
              {/* Close button for mobile */}
              <div className="flex justify-between items-center mb-2 border-b pb-2">
                <h5 className="font-poppins font-bold text-xl text-black">
                  Filters
                </h5>
                <button
                  className="lg:hidden text-black text-lg"
                  onClick={() => setShowFilter(false)}
                >
                  ✕
                </button>
              </div>

              <Collapsible defaultClose className="group/collapsible">
                <SidebarGroup>
                  <SidebarGroupLabel asChild>
                    <CollapsibleTrigger>
                      <h4 className="font-oswald text-base text-black/60 font-medium">
                        T-Shirt
                      </h4>
                      <IoIosArrowForward className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                    <div className=" bg-gray-200 rounded-md p-2 cursor-pointer ">
                      {" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          T-Shirt{" "}
                        </h4>{" "}
                      </div>{" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" id="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          Printed T-Shirt{" "}
                        </h4>{" "}
                      </div>{" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" id="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          V-neck t-shirt{" "}
                        </h4>{" "}
                      </div>{" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" id="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          Long sleeve Crew neck T-shirts{" "}
                        </h4>{" "}
                      </div>{" "}
                    </div>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>

              <Collapsible defaultClose className="group/collapsible">
                <SidebarGroup>
                  <SidebarGroupLabel asChild>
                    <CollapsibleTrigger>
                      <h4 className="font-oswald text-base text-black/60 font-medium">
                        Shorts
                      </h4>
                      <IoIosArrowForward className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                    <div className=" bg-gray-200 rounded-md p-2 cursor-pointer ">
                      {" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          Denim shorts{" "}
                        </h4>{" "}
                      </div>{" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" id="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          Chino shorts{" "}
                        </h4>{" "}
                      </div>{" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" id="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          Cargo shorts{" "}
                        </h4>{" "}
                      </div>{" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" id="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          Walking shorts{" "}
                        </h4>{" "}
                      </div>{" "}
                    </div>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>

              <Collapsible defaultClose className="group/collapsible">
                <SidebarGroup>
                  <SidebarGroupLabel asChild>
                    <CollapsibleTrigger>
                      <h4 className="font-oswald text-base text-black/60 font-medium">
                        Shirts
                      </h4>
                      <IoIosArrowForward className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                    <div className=" bg-gray-200 rounded-md p-2 cursor-pointer ">
                      {" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          Formal Shirt{" "}
                        </h4>{" "}
                      </div>{" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" id="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          Half Shirt{" "}
                        </h4>{" "}
                      </div>{" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" id="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          Denim Shirt{" "}
                        </h4>{" "}
                      </div>{" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" id="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          Flannel Shirt{" "}
                        </h4>{" "}
                      </div>{" "}
                    </div>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>

              <Collapsible defaultClose className="group/collapsible">
                <SidebarGroup>
                  <SidebarGroupLabel asChild>
                    <CollapsibleTrigger>
                      <h4 className="font-oswald text-base text-black/60 font-medium">
                        Hoodie
                      </h4>
                      <IoIosArrowForward className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                    <div className=" bg-gray-200 rounded-md p-2 cursor-pointer ">
                      {" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          Formal Hoodie{" "}
                        </h4>{" "}
                      </div>{" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" id="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          Half Hoodie{" "}
                        </h4>{" "}
                      </div>{" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" id="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          Denim Hoodie{" "}
                        </h4>{" "}
                      </div>{" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" id="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          Flannel Hoodie{" "}
                        </h4>{" "}
                      </div>{" "}
                    </div>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>

              <Collapsible defaultClose className="group/collapsible">
                <SidebarGroup>
                  <SidebarGroupLabel asChild>
                    <CollapsibleTrigger>
                      <h4 className="font-oswald text-base text-black/60 font-medium">
                        Jeans
                      </h4>
                      <IoIosArrowForward className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                    <div className=" bg-gray-200 rounded-md p-2 cursor-pointer ">
                      {" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          Formal Jeans{" "}
                        </h4>{" "}
                      </div>{" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" id="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          Half Jeans{" "}
                        </h4>{" "}
                      </div>{" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" id="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          Denim Jeans{" "}
                        </h4>{" "}
                      </div>{" "}
                      <div className="flex gap-x-3">
                        {" "}
                        <input type="checkbox" name="" id="" />{" "}
                        <h4 className="font-oswald text-base text-black/60 font-medium py-2 hover:text-black ">
                          {" "}
                          Flannel Jeans{" "}
                        </h4>{" "}
                      </div>{" "}
                    </div>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>

              {/* Other Collapsibles ... */}

              <div>
                <Price />
              </div>
              <div>
                <Colors />
              </div>
              <div>
                <Size />
              </div>
              <div>
                <DressStyle />
              </div>
              <div className="bg-black rounded-4xl hover:bg-black/85 mt-10">
                <button className="w-full text-base font-poppins font-medium text-white py-4 px-6 cursor-pointer text-center">
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
          {/* ========= Sidebar End ======= */}

          {/* ========= Product Section Start ======= */}
          <div className="w-full lg:w-3/4 lg:ml-5 mt-6 lg:mt-0">
            <div className="flex items-center justify-between">
              <h5 className="font-poppins font-bold text-2xl text-black">
                Casual
              </h5>

              <div className="flex items-center gap-x-3">
                <p className="font-oswald font-medium text-base text-black/60">
                  Showing 1-10 of 100 Products
                </p>
                <div className=" items-center gap-x-2 hidden lg:flex">
                  <p className="font-oswald font-medium text-base text-black/60">
                    Sort by:
                  </p>
                  <div className="flex items-center gap-x-1 cursor-pointer ">
                    <p className="font-oswald font-medium text-base text-black">
                      Most Popular
                    </p>
                    <IoIosArrowDown className="text-lg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b-2">
              <ProductsCasual />
            </div>
            <div className="mt-5">
              <PaginationRounded />
            </div>
          </div>
          {/* ========= Product Section End ======= */}
        </div>
      </div>
    </section>
  );
}
