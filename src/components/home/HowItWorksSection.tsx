import React from "react";
import { Search, Description, WorkspacePremium } from "@mui/icons-material";

const HowItWorksSection = () => {
    const worksData = [
        {
            id: 1,
            shapeClass: "shape-1",
            icon: <Search className=" text-5xl text-green-600  hover:text-white" />,
            title: "Find Your Course",
            description: "It has survived not only centurie also leap into electronic.",
        },
        {
            id: 2,
            shapeClass: "shape-2",
            icon: <Description className=" text-5xl text-green-600 hover:text-white " />,
            title: "Book A Seat",
            description: "It has survived not only centurie also leap into electronic.",
        },
        {
            id: 3,
            shapeClass: "shape-3",
            icon: <WorkspacePremium className=" text-5xl text-green-600 hover:text-white" />,
            title: "Get Certificate",
            description: "It has survived not only centurie also leap into electronic.",
        },
    ];

    return (
        <div className="my-9">
            <div className="main-container">

                {/* Section Title Start */}
                <div className="text-center">
                    <h5>Over 1,235+ Course</h5>
                    <h2>How It <span> Works?</span></h2>
                </div>
                {/* Section Title End */}

                <div className="my-6 grid grid-cols-1 md:grid-cols-3 lg:gap-36 gap-8 container">

                    {worksData.map((work, index) => (
                        <div key={work.id} className="bg-emerald-50 rounded-3xl relative p-10 h-52">

                            <img className={work.shapeClass} src="/shape-15.webp" alt="Shape" />

                            <div className=" bg-white border border-gray-300 hover:bg-green-600  h-12 rounded-lg w-14 text-center absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                {work.icon}
                            </div>

                            <div className=" ">
                                <h3 className="text-3xl">{work.title}</h3>
                                <p className=" ">{work.description}</p>
                            </div>

                            {index < worksData.length - 1 && (
                                <img className=" hidden lg:block absolute bottom-1/2 left-96 transform -translate-x-1/2 -translate-y-1/2" src="/shape-17.webp" alt="" />
                            )}
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
};

export default HowItWorksSection;
