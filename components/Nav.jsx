import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import logo from "@/assets/logo.jpg";
import { Input } from "postcss";

const Nav = () => {
  return (
    <>
      <div className="h-20 sticky top-0 left-0 bg-white w-full shadow-md flex justify-between items-center px-7 z-50">
        <div className="flex gap-8 items-center w-[50%]">
          <div className="font-semibold text-xl">AK ENTERPRISES</div>
          <div className="flex text-sm items-center gap-4">
            <a href="/">
              <div className="text-[13px] font-medium">HOME</div>
            </a>
            <div>
              <Accordion type="single" collapsible className="relative">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-[13px] font-medium">
                    EXPLORE
                  </AccordionTrigger>
                  <AccordionContent className="fixed shadow-[0_-3px_6px_rgba(0,0,0,.071)] bg-white w-14.5 p-3">
                    <ul className="leading-8 text-[12.5px] font-medium">
                      <li>MECHANICAL PROJECT I..</li>
                      <li>RENTAL BASIS</li>
                      <li>CIVIL MATERIALS</li>
                      <li>COVID ESSENTIALS</li>
                      <li>MORE ITEMS</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <a href="/about-us">
              <div className="text-[13px] font-medium">ABOUT US</div>
            </a>
          </div>
        </div>
        <div className="flex items-center content-between gap-[35px] mx-5">
          <div className="flex items-center gap-3 border-b border-black py-1 w-[180px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <p className="text-sm font-medium cursor-pointer">SEARCH</p>
          </div>
          <Dialog>
            <DialogTrigger>
              <div className="flex items-center gap-3">
                <p className="text-sm font-medium cursor-pointer">Login</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  cursor={"pointer"}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <div>
                  <Image
                    src={logo}
                    width={60}
                    height={60}
                    className="rounded-full m-7 mb-10"
                  />
                </div>
                <DialogTitle>
                  <div>
                    <p className="text-xl font-medium text-gray-500">
                      Welcome to AG ENTERPRISES
                    </p>
                    <p className="text-3xl font-semibold">Login</p>
                  </div>
                </DialogTitle>
                <DialogDescription>
                  <p className="mt-8 text-gray-500 text-sm font-semibold">
                    Mobile Number
                  </p>
                  <input
                    type="text"
                    name="Mobile Number"
                    id="price"
                    className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-lg sm:leading-6"
                    placeholder="Enter Your Mobile Number"
                  />
                  <p className="mt-8 mb-3 ">
                    Yes, I want to receive important information & updates on my
                    WhatsApp
                  </p>
                  <button className="border w-full h-8 bg-gray-200 rounded-sm">
                    Get OTP
                  </button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <div className="flex items-center gap-3">
            <a href="/cart">
              <p className="text-sm font-medium cursor-pointer">Cart</p>
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              cursor={"pointer"}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
