import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Search } from "@mui/icons-material";
import { Card, CardContent, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Contents from './Contents';

const CustomArrow = ({ onClick, icon: Icon, position }: any) => (
    <button
        onClick={onClick}
        className={`absolute top-1/2 transform -translate-y-1/2 ${position === 'left' ? '-left-14' : '-right-10'} bg-white text-black h-8 w-8 rounded-full`}
    >
        <Icon />
    </button>
);

const Courses = [
    'UI/UX Design',
    'Development',
    'Data Science',
    'Business',
    'Financial',
];

const CourseCard = ({ course }: any) => (
    <Card className='bg-white text-center w-[80%] h-16 rounded-xl border border-green-600'>
        <CardContent>
            <Typography className='text-[1rem] text-center'>
                {course}
            </Typography>
        </CardContent>
    </Card>
);

const CourseSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <CustomArrow icon={KeyboardArrowLeftIcon} position="left" />,
        nextArrow: <CustomArrow icon={KeyboardArrowRightIcon} position="right" />,

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,

            },

        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,

            },

        },

        ],

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
        <section className=' '>
            <div className="bg-eefbf3 lg:p-16  rounded-lg mt-10 relative  ">
                {/* Section Title Start */}
                <div className="flex items-center my-10 lg:my-0  main-container">
                    <p className="text-3xl font-semibold mb-0">
                        <span className="px-2 py-1">All</span>
                        <span className="text-green-500 px-2 py-1">Courses </span>
                        <span className="">of Edule</span>
                        <img src="/shape-11.webp" alt="" className="absolute left-16 lg:left-[13%] lg:bottom-10" />
                    </p>
                </div>


            </div>

            <div className="w-full lg:h-40 lg:w-[80%]  h-20 p-20  main-container bg-emerald-50 rounded-lg py-6 flex flex-col justify-center ">
                <CourseSlider />
            </div>
        </section>
        <Contents />
    </>
);

export default Allcourses;