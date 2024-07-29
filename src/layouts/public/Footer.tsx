import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Mail,
  PhoneInTalkOutlined,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  const { ref: logoRef, inView: logoInView } = useInView();
  const { ref: categoryRef, inView: categoryInView } = useInView();
  const { ref: quickLinksRef, inView: quickLinksInView } = useInView();
  const { ref: subscribeRef, inView: subscribeInView } = useInView();

  const controls = useAnimation();

  useEffect(() => {
    if (logoInView) {
      controls.start("visible");
    }
    if (categoryInView) {
      controls.start("visible");
    }
    if (quickLinksInView) {
      controls.start("visible");
    }
    if (subscribeInView) {
      controls.start("visible");
    }
  }, [controls, logoInView, categoryInView, quickLinksInView, subscribeInView]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <>
      <section className="w-full bg-emerald-50 lg:py-10 md:py-8 py-6">
        <div className="relative w-full main-container">
          <img
            src="/shape-21.webp"
            alt=""
            className="absolute top-8 -left-24 z-0 top-bottom-move hidden lg:block"
          />
          <img
            src="/shape-22.webp"
            alt=""
            className="absolute right-20 bottom-10 z-0 right-left-move"
          />
          <main className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 z-10">
            {/* logo */}
            <div className="" ref={logoRef}>
              <motion.img
                src="/logo.webp"
                className="text-xl font-bold mb-4"
                variants={textVariants}
                initial="hidden"
                animate={controls}
              />
              <motion.h1
                className="text-black text-2xl"
                variants={textVariants}
                initial="hidden"
                animate={controls}
              >
                Bhubaneswar
              </motion.h1>
              <motion.h2
                className=" text-green-500"
                variants={textVariants}
                initial="hidden"
                animate={controls}
              >
                Bhubaneswar, Odisha.
              </motion.h2>
              <div className=" lg:mt-8 leading-10">
                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate={controls}
                >
                  <Mail className=" text-green-500" /> address@gmail.com
                </motion.p>
                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate={controls}
                >
                  {" "}
                  <PhoneInTalkOutlined className=" text-green-500" /> (970)
                  262-1413
                </motion.p>
              </div>
              <div className="social-icon flex justify-between lg:mt-8 w-40 ml-1">
                <FacebookOutlined />
                <Twitter />
                <LinkedIn />
                <Instagram />
              </div>
            </div>
            {/* category */}
            <div className="" ref={categoryRef}>
              <motion.h2
                className="text-2xl  font-medium mb-4"
                variants={textVariants}
                initial="hidden"
                animate={controls}
              >
                Catagory
              </motion.h2>
              <motion.ul
                className="text-gray-700 mt-4 font-normal text-lg leading-10"
                variants={textVariants}
                initial="hidden"
                animate={controls}
              >
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
              </motion.ul>
            </div>
            {/* quick links start */}
            <div className="" ref={quickLinksRef}>
              <motion.h2
                className="text-2xl font-medium mb-4"
                variants={textVariants}
                initial="hidden"
                animate={controls}
              >
                Quick Links
              </motion.h2>
              <motion.ul
                className="text-gray-700 mt-4 font-normal text-lg leading-10"
                variants={textVariants}
                initial="hidden"
                animate={controls}
              >
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
              </motion.ul>
            </div>
            {/* subscribe start */}
            <div className="" ref={subscribeRef}>
              <motion.h2
                className="text-2xl font-medium mb-4"
                variants={textVariants}
                initial="hidden"
                animate={controls}
              >
                Subscribe
              </motion.h2>
              <motion.p
                className="text-gray-700 leading-8"
                variants={textVariants}
                initial="hidden"
                animate={controls}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                temporibus
              </motion.p>
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
          </main>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
            <ul className="flex flex-wrap justify-center sm:justify-end">
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
            <div className="w-full sm:w-auto">
              <p className="text-center sm:text-left">
                &copy; 2023<span className="text-green-500"> EDULE </span> made
                with ❤ by <span className="text-green-500">Himanshu</span>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
