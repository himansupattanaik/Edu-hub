import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Search } from "@mui/icons-material";
import { Card, CardContent, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Contents from "./Contents";

const CustomArrow = ({ onClick, icon: Icon, position }: any) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 ${
      position === "left" ? " -left-14" : "-right-10"
    }  bg-white text-black h-8 w-8 rounded-full`}
  >
    <Icon />
  </button>
);

const Courses = [
  "UI/UX Design",
  "Development",
  "Data Science",
  "Business",
  "Financial",
];

const CourseCard = ({ course }: any) => (
  <Card className="bg-white text-center w-[80%] h-16 rounded-xl border border-green-600">
    <CardContent>
      <Typography className="text-[1rem] text-center">{course}</Typography>
    </CardContent>
  </Card>
);

const CourseSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomArrow icon={KeyboardArrowLeftIcon} position="left" />,
    nextArrow: <CustomArrow icon={KeyboardArrowRightIcon} position="right" />,
  };
  return (
    <Slider {...settings}>
      {Courses.map((course, index) => (
        <div key={index} className="p-5">
          <CourseCard course={course} />
        </div>
      ))}
    </Slider>
  );
};

const Allcourses = () => (
  <>
    <section>
      <div className="bg-eefbf3 md:p-16 rounded-lg mt-10 relative flex justify-between items-center">
        {/* Section Title Start */}
        <div className="flex items-center ml-20">
          <p className="text-3xl font-semibold mb-0">
            <span className="px-2 py-1">All</span>
            <span className="text-green-500 px-2 py-1">Courses </span>
            <span className="">of Edule</span>
            <img
              src="/shape-11.webp"
              alt=""
              className="absolute left-[13%] bottom-10"
            />
          </p>
        </div>
        {/* Section Title End */}
        {/* Courses Search Start */}
        <div className="mr-24">
          <form action="#">
            <input
              type="text"
              placeholder="Search your course"
              className="border outline-1 outline-green-500 border-green-500 text-xl rounded-md w-[26rem] h-[3.7rem] relative  left-12 p-5"
            />
            <button className="bg-green-100 text-green  rounded-md relative right-2 bottom-0.5 h-[3rem] w-12">
              <Search />
            </button>
          </form>
        </div>
      </div>
      {/* Courses Search End */}

      <div className=" h-40 w-[80%] p-20 ml-32 bg-[#eefbf3] rounded-lg py-6 flex flex-col justify-center sm:py-12">
        <CourseSlider />
      </div>
    </section>
    <Contents />
  </>
);

export default Allcourses;
