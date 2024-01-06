"use client"

import Image from "next/image";
import Nav from "@/components/Nav";

import logo from "@/assets/logo.jpg";
import offer from "@/assets/offer.png";
import { Tabs } from "@/components/ui/Tabs";
import Card from "@/components/card";
import { useEffect, useState } from "react";
import axios from "axios";
import AllItems from "@/components/AllItems";




export default function Home() {

  return (
    <>
      <div>
        <div className="width-full flex justify-between mb-[72px]">
          <div className="flex-row m-auto text-center w-[400px]">
            <div className="flex justify-center my-10">
              <Image
                src={logo}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <p className="font-bold text-[39px] text-[#475924] mb-[30px]">
              AK ENTERPRISES
            </p>
            <p className="text-[16px] text-[#475924] mb-8">
              Kharagpur, NH 6 Road, sadatpur police station opposite site
            </p>
            <button className="w-[80px] h-[40px] font-medium bg-[#475924] text-white">
              Explore
            </button>
          </div>
          <div className="">
            <Image
              src={
                "https://kgnenterpriseservices.com/_next/image?url=https%3A%2F%2Fcdn.dotpe.in%2FkiranaStatic%2FPremium_Images%2FServices_Maintenance%2FWeb%2FJPEG%2Fhuh5.jpg&w=1920&q=75"
              }
              width={663}
              height={800}
            />
          </div>
        </div>

        {/* Offers section */}
        <div className="text-center mb-[72px]">
          <p className="text-4xl font-semibold">Offers</p>
          <div className="h-[120px] w-[23%] mx-auto mt-10 bg-hero-pattern rounded-xl">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/discount--v1.png"
              alt="discount--v1"
              className="pt-2 pl-2"
            />
            <div className="text-white w-[40%] mt-1 text-sm text-left pl-4">
              <p className="font-semibold">20% OFF</p>
              <p>Use Code:</p>
              <p>AG20</p>
            </div>
          </div>
        </div>

        {/* Products section */}
        <div className="mt-10 text-center h-screen">
          <p className="font-bold text-2xl">Shop By Collections</p>
          <div className="mt-14 border">
            <Tabs />
          </div>
          {/* <AllItems/> */}
        </div>
      </div>
    </>
  );
}
