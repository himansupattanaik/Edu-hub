import React from "react";
import {
  AccessTime,
  CreditCard,
  Facebook,
  Instagram,
  LibraryBooks,
  LinkedIn,
  Man2,
  Movie,
  SignalCellularAlt,
  Star,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";

const DetailsPageRightSide = () => {
  return (
    <section>
      <div className="w-full">
        {/* Course Part */}
        <div className="bg-emerald-50 rounded-xl border border-emerald-300">
          <h1 className="my-10 text-3xl text-green-700 font-semibold font-mono text-center ">
            $420.38
          </h1>

          <div className="leading-10 w-full  text-center   ">
            <div className="flex justify-around items-center p-2 border-t-2">
              {" "}
              <p>
                {" "}
                <span>
                  <Man2 />
                </span>
                Instructor
              </p>{" "}
              <p>Pamela Foster</p>
            </div>
            <div className="flex justify-around items-center p-2 border-t-2">
              {" "}
              <p>
                {" "}
                <span>
                  <AccessTime />
                </span>{" "}
                Duration
              </p>{" "}
              <p>08 hr 15 mins</p>
            </div>
            <div className="flex justify-around  gap-16  items-center p-2 border-t-2">
              {" "}
              <p>
                {" "}
                <span>
                  <Movie />
                </span>{" "}
                Lectures
              </p>{" "}
              <p>29</p>
            </div>
            <div className="flex justify-around gap-11 items-center p-2 border-t-2">
              {" "}
              <p>
                {" "}
                <span>
                  {" "}
                  <SignalCellularAlt />{" "}
                </span>{" "}
                Level
              </p>{" "}
              <p>Secondary</p>
            </div>
            <div className="flex justify-around gap-11 items-center p-2 border-t-2">
              {" "}
              <p>
                {" "}
                <span>
                  <LibraryBooks />{" "}
                </span>
                Language
              </p>{" "}
              <p>English</p>
            </div>
            <div className="flex justify-around gap-12 items-center p-2 border-t-2 border-b-2">
              <p>
                {" "}
                <span>
                  {" "}
                  <CreditCard />
                </span>
                Certificate
              </p>{" "}
              <p>Yes</p>
            </div>
            <button className=" bg-green-600 h-14 w-36 my-10 text-white  text-xl font-semibold rounded-xl hover:bg-black">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
      {/* share Part */}
      <div className="">
        <h1 className=" p-5 text-3xl">Share Course:</h1>
        <div className="  flex gap-7 pt-5 ">
          <a href="">
            <Facebook className="text-5xl hover:text-white hover:bg-green-400 hover:border-none border rounded-lg border-slate-500" />
          </a>
          <a href="">
            <LinkedIn className="text-5xl  hover:text-white hover:bg-green-400 hover:border-none border rounded-lg border-slate-500" />
          </a>
          <a href="">
            {" "}
            <Twitter className="text-5xl  hover:text-white hover:bg-green-400 hover:border-none border rounded-lg border-slate-500" />{" "}
          </a>
          <a href="">
            <WhatsApp className="text-5xl  hover:text-white hover:bg-green-400 hover:border-none border rounded-lg border-slate-500" />
          </a>
          <a href="">
            <Instagram className="text-5xl  hover:text-white hover:bg-green-400 hover:border-none border rounded-lg border-slate-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DetailsPageRightSide;
