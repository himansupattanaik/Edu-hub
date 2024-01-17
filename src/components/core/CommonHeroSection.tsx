import { Title, WorkspacePremium } from "@mui/icons-material";
import React from "react";
import { InnerNav, UpperNav } from "../home/HeroSection";

const CommonHeroSection = ({ title }: { title: string }) => {
  return (
    <>
      <section className=" bg-emerald-50">
        <UpperNav />
        <InnerNav />
        <img
          className=" shape-8 relative left-32 top-10"
          src="/shape-8.webp"
          alt=""
        />
        <div className="h-[40vh] main-container  flex items-center justify-between my-9">
          <aside className="w-1/2 text-xl ">
            <div className=" w-fit  ">
              <div className=" relative left-16   leading-[3rem]">
                <span className="">
                  <span className="mr-1">Home</span>//
                  <span className="text-green-500 ml-1">{title}</span>
                </span>
                <p className="text-4xl">
                  {title}
                  <span>
                    <img
                      className=" w-32 relative left-28   top-4   "
                      src="/shape-4.webp"
                      alt=""
                    />
                  </span>
                </p>
              </div>
              <div className=" relative right-36  top-6">
                <img className=" h-[20vh] " src="/shape-23.webp" alt="" />
              </div>
            </div>
          </aside>

          <aside className="w-1/2 flex   items-center">
            <div className="bg-green-600 h-32 w-32 absolute right-1/3  top-72 rounded-full outline-1   outline outline-offset-8 outline-emerald-300">
              <WorkspacePremium className=" h-28 w-28 ml-2 text-white" />
              <img className=" relative top-10 " src="/shape-6.webp" alt="" />
              <img
                className=" shape-5 relative left-36 bottom-40"
                src="/shape-5.webp"
                alt=""
              />
            </div>
            <div className=" absolute right-44 top-1/3">
              <img className="rounded-full " src="/author-11.webp" alt="" />
            </div>
            {/* Add your third div here if needed */}
            <div>
              <img
                className="    relative bottom-28 left-52"
                src="/shape-24.webp"
                alt=""
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default CommonHeroSection;
