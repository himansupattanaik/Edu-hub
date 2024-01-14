import Link from "next/link";

const InstructorSection = () => {
  return (
    <div className="  p-44  pb-0 pt-16 ">
      <div className=" bg-[#E7F8EE]  h-60 rounded-lg">
        <div className="  ">
          {/* <img className=" " src="/shape-12.webp" alt="Shape" /> */}
          <img
            className=" h-24 w-30  relative left-[50%]  top-20   "
            src="/shape-13.svg"
            alt="Shape"
          />
          {/* <img className=" " src="/shape-12.webp" alt="Shape" /> */}

          <div className="flex  justify-between md:flex-row items-center  ">
            {/* Section Title Start */}
            <div className="  h-40  ml-10   ">
              <h5 className=" text-xl text-green-700 mb-4">
                Become A Instructor
              </h5>
              <p className="text-3xl mb-0  w-[55%] leading-snug  ">
                You can join with Edule as{" "}
                <span className=" text-green-700">
                  a instructor?
                  <img src="/shape-4.webp" alt="" className=" ml-28 mt-2" />
                </span>
              </p>
            </div>
            {/* Section Title End */}

            <div className=" md:mt-0   text-center">
              <Link href="/contact">
                <button className="bg-green-600   w-52 rounded-lg text-white  h-14 text-center ml-32">
                  Drop Information
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
