import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Mail,
  PhoneInTalkOutlined,
  Twitter,
} from "@mui/icons-material";

import React from "react";

const Footer = () => {
  return (
    <>
      <section className="w-full  bg-emerald-50">
        <div className="relative main-container">
          <div className="relative w-full">
            <img
              src="/shape-21.webp"
              alt=""
              className="absolute top-8 left-6 z-0 top-bottom-move hidden lg:block"
            />

            <img
              src="/shape-22.webp"
              alt=""
              className="absolute right-20 bottom-10 z-0 right-left-move"
            />
            <main className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 z-10">
              <div className="p-6">
                <img src="/logo.webp" className="text-xl font-bold mb-4" />

                <h1 className="text-black text-2xl">Caribbean Ct</h1>
                <h2 className=" text-green-500">Haymarket, Virginia(VA).</h2>
                <div className=" mt-8 leading-10">
                  <p>
                    <Mail className=" text-green-500" /> address@gmail.com
                  </p>
                  <p>
                    {" "}
                    <PhoneInTalkOutlined className=" text-green-500" />{" "}
                    (970)262-1413
                  </p>
                </div>
                <div className="social-icon flex justify-between mt-8 w-40 ml-1">
                  <FacebookOutlined />
                  <Twitter />
                  <LinkedIn />
                  <Instagram />
                </div>
              </div>
              <div className=" p-6 ">
                <h2 className="text-2xl  font-medium mb-4">Catagory</h2>
                <ul className="text-gray-700 mt-4 font-normal text-lg leading-10  ">
                  <li>
                    <a href="">Creative Writing</a>
                  </li>
                  <li>
                    <a href="">Film & Video</a>
                  </li>
                  <li>
                    <a href="">Graphic Design</a>
                  </li>
                  <li>
                    <a href="">UI/UX Design</a>
                  </li>
                  <li>
                    <a href="">Business Analytics</a>
                  </li>
                  <li>
                    <a href="">Marketing</a>
                  </li>
                </ul>
              </div>
              {/* catagory section End */}
              {/* quick links start */}

              <div className=" p-6 ">
                <h2 className="text-2xl font-medium mb-4">Quick Links</h2>
                <ul className="text-gray-700 mt-4 font-normal text-lg leading-10  ">
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Discussion</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">Customer Support</a>
                  </li>
                  <li>
                    <a href="">Course FAQ's</a>
                  </li>
                </ul>
              </div>
              {/* quick links end */}
              {/* subscribe start */}

              <div className=" p-6">
                <h2 className="text-2xl font-medium mb-4">Subscribe</h2>
                <p className="text-gray-700 leading-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                  temporibus{" "}
                </p>
                <div className=" mt-7">
                  <input
                    type="email"
                    placeholder="Email here"
                    className=" h-12 w-60 rounded-lg pl-4 text-black border border-slate-300 mb-7"
                  />
                  <button className=" bg-green-600 text-white font-medium py-3 px-6 rounded-md">
                    Subscribe Now
                  </button>
                </div>
              </div>
              {/* subscribe end */}
            </main>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-white  mb-0 py-5 p-24">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
            <div className="w-full sm:w-auto mb-6 sm:mb-0">
              <ul className="flex justify-center sm:justify-end">
                <li className="mr-4">
                  <a href="#">Terms of Service</a> *
                </li>
                <li className="mr-4">
                  <a href="#">Privacy Policy</a> *
                </li>
                <li className="mr-4">
                  <a href="#">Sitemap</a> *
                </li>
                <li>
                  <a href="#">Contact Us</a> *
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-auto">
              <p className="text-center sm:text-left">
                &copy; 2023<span className="text-green-500"> EDULE </span>{" "}
                made with ❤ by{" "}
                <span className="text-green-500">Himanshu</span>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>

  );
};

export default Footer;
