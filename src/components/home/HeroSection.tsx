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

function Herosection() {
  return (
    <section>
      {/* first nav */}
      <div className=" bg-[#212832] w-full  h-12  text-white">
        <div className=" w-[80%] h-12 flex justify-between  items-center  relative left-32">
          <div className=" ">
            <p>
              All course 28% off for{" "}
              <a href="#" className=" text-green-600">
                Liberian people’s.
              </a>
            </p>
          </div>

          <div className=" mr-9">
            <div className="top-info flex gap-4 items-center  ">
              <img
                src="/shape-1.webp"
                alt=""
                className=" h-[14px] w-[41px] mr-11"
              />
              <p className=" hover:text-green-600 mr-7">
                {" "}
                <a href="tel:9702621413">
                  {" "}
                  <PhoneInTalkOutlined className="text-green-600  " /> &nbsp;
                  &nbsp;(970) 262-1413
                </a>
              </p>
              <p className=" hover:text-green-600">
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
                className=" h-[14px] w-[41px] ml-11"
              />
            </div>
          </div>

          <div className=" relative">
            <ul className="social  flex gap-2">
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
      <div className=" h-[120vh] w-full bg-[#EEFBF3] ">
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
                    <img
                      src="/shape-3.webp"
                      alt=""
                      className="h-[5px] w-[100%]"
                    />
                  </span>
                </p>
              </Link>
            </li>
            <li>
              <Link href="/courses">
                <p className="text-gray-700 hover:text-green-500">
                  All Courses
                </p>
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
        <div>
          <img
            src="/slider-1.webp"
            alt=""
            className=" h-[39.2rem] w-[53%] float-right relative right-16 top-3 z-10"
          />

          <div className="  h-[20em] w-[30%] relative top-32 left-32">
            <img
              src="/shape-8.webp"
              alt=""
              className="absolute -top-28 -left-20 animate-spin h-20"
            />

            <p className="  text-green-600  text-xl mb-4">
              start your favorite course
            </p>
            <p className=" text-black  text-5xl  font-sans leading-[3.5rem]">
              Now learning from anywhere, and build your{" "}
              <span className=" text-green-600">
                bright career.{" "}
                <span>
                  <img
                    src="/shape-4.webp"
                    alt=""
                    className=" relative left-24 top-3 mb-10"
                  />
                </span>{" "}
              </span>{" "}
            </p>
            <p className=" text-slate-700 text-lg">
              It has survived not only five centuries but also the leap into
              electronic typesetting.
            </p>

            <button className=" h-16 w-44 text-white text-lg font-bold rounded-md bg-green-600 mt-9">
              Start A Course
            </button>
          </div>
          <div className="absolute left-[50%] top-[40%]">
            <img
              src="/shape-5.webp"
              alt=""
              className="relative left-40 right-move animate-moveRightToLeft infinite transition-transform duration-500"
            />
            <img src="/shape-6.webp" alt="" className="absolute -bottom-6" />
            <div className="bg-green-700 rounded-full h-[150px] w-[150px] text-center">
              <div className="text-xl text-white absolute left-9 font-sans top-14">
                <MenuBookOutlined className="text-3xl" />
                <h3 className="text-3xl font-bold">1,235</h3>
                <h2>courses</h2>
              </div>
            </div>
          </div>

          <div className="absolute right-10  top-5 ">
            <img
              src="/shape-7.webp"
              alt=""
              className=" relative right-5  top-[20rem] top-bottom-move"
            />
            <div className=" bg-white rounded-full h-[125px] w-[125px] ">
              <div className=" text-green-500 absolute left-4 font-sans top-44">
                <p className=" flex items-center text-center ml-3 mb-3 text-2xl font-bold">
                  4.8{" "}
                  <span>
                    <Star className=" text-yellow-500 ml-3 mb-1" />{" "}
                  </span>
                </p>
                <h4 className=" text-black ml-2">Rating(86k)</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
