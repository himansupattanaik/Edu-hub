import Link from "next/link";

import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  MenuBookOutlined,
  PhoneInTalkOutlined,
  Star,
  Twitter,
} from "@mui/icons-material";
import React from "react";

function HeroSection() {
  return (
    <section className="bg-[#EEFBF3]">
      <UpperNav />
      <InnerNav />
      <div className="relative h-[33rem] w-full flex lg:flex-row justify-between items-center lg:gap-16 md:gap-12 gap-8 flex-col main-container">
        <aside className="h-[20em] relative lg:w-1/2 w-full main-container pl-6 md:pl-6 lg:pl-16">
          <img
            src="/shape-8.webp"
            alt=""
            className="absolute -top-28 -left-8 animate-spin h-20 "
          />

          <p className="text-green-600 text-lg md:text-xl mb-2 md:mb-4">
            Start your favorite course
          </p>
          <p className="text-black lg:text-2xl md:text-xl text-lg  font-sans leading-[2.5rem]">
            Now learning from anywhere, and build your{" "}
            <span className="text-green-600">
              bright career.{" "}
              <span>
                <img
                  src="/shape-4.webp"
                  alt=""
                  className="relative left-12 md:left-24 top-3 mb-6 md:mb-10"
                />
              </span>{""}
            </span>{" "}
          </p>
          <p className="text-slate-700 text-sm md:text-lg">
            It has survived not only five centuries but also the leap into
            electronic typesetting.
          </p>

          <button className="h-12 md:h-16 w-32 md:w-44 text-white text-md md:text-lg font-bold rounded-md bg-green-600 mt-6 md:mt-9">
            Start A Course
          </button>
        </aside>
        <aside className="lg:w-1/2 w-full relative">
          <img
            src="/slider-1.webp"
            alt=""
            className="w-full md:w-[80vw] lg:w-[50vw] h-auto object-cover float-right right-2 md:right-8 md:top-0 relative z-40"
          />


          <div className="absolute left-0 top-[10%] md:top-1/4">
            <img
              src="/shape-5.webp"
              alt=""
              className="relative left-10 md:left-40 right-move animate-moveRightToLeft infinite transition-transform duration-500"
            />
            <img src="/shape-6.webp" alt="" className=" relative -bottom-16 -left-4   " />
            <div className="bg-green-700 absolute  -top-3 md:-top-2  rounded-full md:h-[125px] md:w-[125px] h-[100px] w-[100px] text-center mx-auto md:ml-0">
              <div className="text-xl md:text-2xl   text-white absolute left-5  font-sans flex flex-col items-center justify-center">
                <MenuBookOutlined className="text-3xl" />
                <h3 className="text-2xl font-bold">1,235</h3>
                <h2>courses</h2>
              </div>

            </div>
          </div>
        </aside>
        <div className="absolute lg:right-4 md:right-2 right-2 -top-28 lg:top-5">
          <img
            src="/shape-7.webp"
            alt=""
            className="relative  top-[10rem] left-[1rem] z-10 top-bottom-move"
          />
          <div className="bg-white rounded-full lg:h-[100px] lg:w-[100px] h-[80px] w-[80px] text-center mx-auto md:ml-0 relative -top-28 left-8 md:left-14 flex items-center justify-center">
            <div className="text-green-500  relative font-sans">
              <p className="flex items-center text-center mb-2 text-md md:text-lg font-bold">
                4.8{" "}
                <span>
                  <Star className="text-yellow-500 md:ml-3 mb-1" />
                </span>
              </p>
              <h4 className="text-black text-sm md:text-md">Rating(86k)</h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;

export const InnerNav = () => {
  return (
    <div className=" flex flex-col mx-auto p-4 bg-transparent border z-50 border-green-200 sm:flex-row justify-between items-center relative top-6  w-[81%] rounded-md">
      <Link href="/">
        <img
          src="/logo.webp"
          alt="Logo"
          className="cursor-pointer  mb-4 sm:mb-0"
        />
      </Link>
      <ul className="flex flex-col sm:flex-row gap-10 text-xl">
        <li>
          <Link href="/">
            <p className="text-green-500 relative">
              Home
              <span className="absolute top-9 left-1/2 transform -translate-x-1/2 w-14">
                <img src="/shape-3.webp" alt="" className="h-[5px] w-[100%]" />
              </span>
            </p>
          </Link>
        </li>
        <li>
          <Link href="/courses">
            <p className="text-gray-700 hover:text-green-500">All Courses</p>
          </Link>
        </li>
        <li>
          <Link href="/pages">
            <p className="text-gray-700 hover:text-green-500">Pages</p>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <p className="text-gray-700 hover:text-green-500">Blog</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p className="text-gray-700 hover:text-green-500">Contact</p>
          </Link>
        </li>
      </ul>
      <ul className="flex gap-4 items-center ">
        <li>
          <Link href="/login">
            <button className="text-gray-700 hover:text-green-500 text-xl">
              Sign In
            </button>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <button className="border border-green-500 bg-white text-xl px-6 py-3 rounded-md transition hover:text-white hover:bg-green-600">
              Sign Up
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export const UpperNav = () => {
  return (
    <div className="hidden lg:block bg-[#212832] w-full h-12 text-white">
      <div className="w-[80%] h-12 flex justify-between items-center relative left-32">
        <div className="">
          <p>
            All course 28% off for{" "}
            <a href="#" className="text-green-600">
              Liberian people’s.
            </a>
          </p>
        </div>

        <div className="mr-9">
          <div className="top-info flex gap-4 items-center ">
            <img
              src="/shape-1.webp"
              alt=""
              className="h-[14px] w-[41px] mr-11"
            />
            <p className="hover:text-green-600 mr-7">
              {" "}
              <a href="tel:9702621413">
                {" "}
                <PhoneInTalkOutlined className="text-green-600 " /> &nbsp;
                &nbsp;(970) 262-1413
              </a>
            </p>
            <p className="hover:text-green-600">
              {" "}
              <a href="mailto:address@gmail.com">
                {" "}
                <Email className="text-green-600 ml-3" />
                &nbsp; &nbsp;address@gmail.com
              </a>
            </p>
            <img
              src="/shape-2.webp"
              alt=""
              className="h-[14px] w-[41px] ml-11"
            />
          </div>
        </div>

        <div className="relative">
          <ul className="social flex gap-2">
            <li>
              <a href="#">
                {" "}
                <Facebook />{" "}
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <Twitter />{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <LinkedIn />{" "}
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <Instagram />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

