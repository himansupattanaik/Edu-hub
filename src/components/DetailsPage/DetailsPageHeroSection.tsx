import { Star } from "@mui/icons-material";
import React from "react";

const DetailsPageHeroSection = () => {
  return (
    <div className="w-full overflow-y-auto">
      <img
        className=" rounded-lg w-[100%]"
        src="/courses-details.webp"
        alt=""
      />

      <button className="text-white bg-yellow-600 h-12 w-32 rounded-lg text-xl relative bottom-16 left-5 ">
        Finance
      </button>

      <p className=" text-3xl h-24">
        Finance & Investment Series: Learn to Budget and Calculate Your Net
        Worth.
      </p>
      <div className=" flex gap-16  h-20 w-full items-center ">
        <div className=" flex gap-3 items-center">
          <img
            className=" h-14 w-14 rounded-full"
            src="/author-01.webp"
            alt=""
          />
          <span>
            Pamela Foster ||{" "}
            <span className=" text-emerald-7~00">286 Enrolled Students</span>
          </span>
        </div>
        <div className=" flex items-center ">
          <span>
            4.9{" "}
            <span className="text-yellow-400">
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
            <Star className=" text-slate-300" />
            (5,764 Rating)
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailsPageHeroSection;
