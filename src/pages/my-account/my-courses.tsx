import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { PublicLayout } from "@/layouts";
import { MenuBook, Schedule, Star, StarBorder } from "@mui/icons-material";
import { CommonHeroSection } from "@/components/core";

const MyCourses = () => {
  const CONTENT_ARRAY = [
    {
      image: "/courses-01.webp",
      desc: "Data Science and Machine Learning with Python - Hands On!",
      icon: "/courses-01.webp",
      name: "Himanshu",
      date: "12-09-23",
      button: "Science",
      coursecomplete: "38%",


      rating: "4.9",
    },
    {
      image: "/courses-02.webp",
      desc: "Create Amazing Color Schemes for Your UX Design Projects",
      icon: "/courses-02.webp",
      name: "Himanshu",
      date: "12-09-23",
      button: "Science",

      coursecomplete: "80%",

      rating: "4.9",
    },
    {
      image: "/courses-03.webp",
      desc: "Culture & Leadership: Strategies for a Successful Business",
      icon: "/courses-03.webp",
      name: "Himanshu",
      date: "12-09-23",
      button: "Science",
      coursecomplete: "15%",
      rating: "4.9",
    },
    {
      image: "/courses-04.webp",
      desc: "Finance Series: Learn to Budget and Calculate your Net Worth.",
      icon: "/courses-04.webp",
      name: "Himanshu",
      date: "12-09-23",
      button: "Design",
      coursecomplete: "45%",
      rating: "4.9",
    },
    {
      image: "/courses-05.webp",
      desc:
        "Build Brand Into Marketing: Tackling the New Marketing Landscape",
      icon: "/courses-05.webp",
      name: "Himanshu",
      date: "12-09-23",
      button: "Design",
      coursecomplete: "68%",
      rating: "4.9",
    },
    {
      image: "/courses-06.webp",
      desc:
        "Graphic Design: Illustrating Badges and Icons with Geometric Shapes",
      icon: "/courses-06.webp",
      name: "Himanshu",
      button: "Design",
      coursecomplete: "38%",
      rating: "4.9",
    },
  ];

  return (
    <PublicLayout>
      <CommonHeroSection title="My-courses" />
      <>

        {/* <CommonHeroSection title="My-Courses" /> */}
        <section className="bg-emerald-50 py-10">
          <h1 className="text-4xl font-bold text-center mb-5 lg:mb-8 relative">
            My- <span className="text-green-400">Courses</span>
            <span className="flex items-center justify-center absolute left-48 md:left-[53%] lg:left-[53%] transform -translate-x-1/2">
              <img src="/shape-4.webp" className="text-center w-40" alt="" />
            </span>
          </h1>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 main-container   h-full">
            {CONTENT_ARRAY.map((item, index) => (
              <ContentsCard key={index} item={item} />
            ))}
          </div>
        </section>
      </>
    </PublicLayout>
  );
};

export default MyCourses;

export const ContentsCard = ({ item }: any) => {
  return (
    <>
      <div className=" h-full w-full p-3 lg:p-5 rounded-lg border main-container hover:border-green-300 cursor-pointer bg-white">
        <Link href="/">
          <img
            src={item.image}
            className="w-full h-48 sm:h-auto rounded-xl shadow-lg"
          />
          <div className="flex items-center w-full h-[4rem] mt-4 ml-4">
            <img src={item.icon} alt="" className="h-10 w-10 rounded-full" />
            <div className="flex justify-around items-center w-full">
              <p>{item.name}</p>
              <button className="bg-[#E7F8EE] text-green-500 w-20 h-10  ml-3 rounded-lg">
                {item.button}
              </button>
            </div>
          </div>
          <p className="hover:text-green-500  w-full">{item.desc}</p>
          <h1>Course Complete: {item.coursecomplete}</h1>

          <div className="w-full   bg-gray-200 rounded-full h-1.5 mb-4">
            <div
              className="bg-green-400  h-1.5 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
          <div className="bg-[#EEFBF3] lg:p-6 p-2  h-14  rounded-xl flex items-center justify-between">
            <p className="text-green-700 font-bold text-base lg:text-xl">
              {item.price}
            </p>
            <p className="">
              {item.rating}{" "}
              <span>
                {" "}
                <Star className="text-yellow-500  text-lg" />
                <Star className="text-yellow-500 text-lg" />
                <Star className="text-yellow-500 text-lg" />
                <Star className="text-yellow-500 text-lg" />
                <StarBorder className="text-yellow-500 text-lg" />{" "}
              </span>
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};