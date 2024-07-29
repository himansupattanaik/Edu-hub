import { motion } from "framer-motion";
import { InnerNav } from "@/layouts/public/InnerNav";
import { UpperNav } from "@/layouts/public/UpperNav";
import { MenuBookOutlined, Star } from "@mui/icons-material";

function HeroSection() {
  return (
    <motion.section className="bg-[#EEFBF3]">
      <UpperNav />
      <InnerNav />
      <div className="relative h-[33rem] w-full flex lg:flex-row justify-between items-center lg:gap-16 md:gap-12 gap-8 flex-col main-container">
        <motion.aside className="h-[20em] relative lg:w-1/2 w-full main-container pl-6 md:pl-6 lg:pl-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <motion.img src="/shape-8.webp" alt="" className="absolute -top-10 -left-12 animate-spin h-20 " initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} />

          <motion.p className="text-green-600 text-lg md:text-xl mb-2 md:mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            Start your favorite course
          </motion.p>
          <motion.p className="text-black lg:text-2xl md:text-xl text-lg  font-sans leading-[2.5rem]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
            Now learning from anywhere, and build your{" "}
            <span className="text-green-600">
              bright career.{" "}
              <span>
                <motion.img src="/shape-4.webp" alt="" className="relative left-12 md:left-24 top-3 mb-6 md:mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} />
              </span>
              {""}
            </span>{" "}
          </motion.p>
          <motion.p className="text-slate-700 text-sm md:text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
            It has survived not only five centuries but also the leap into electronic typesetting.
          </motion.p>

          <motion.button className="h-12 md:h-16 w-32 md:w-44 text-white text-md md:text-lg font-bold rounded-md bg-green-600 mt-6 md:mt-9" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
            Start A Course
          </motion.button>
        </motion.aside>
        <motion.aside className="lg:w-1/2 w-full relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}>
          <motion.img src="/slider-1.webp" alt="" className="w-full md:w-[80vw] lg:w-[50vw] h-auto object-cover float-right right-2 md:right-8 md:top-0 relative z-40" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.8 }} />

          <motion.div className="absolute left-0 top-[10%] md:top-1/4" initial={{ x: "-100vw" }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 0.9 }}>
            <motion.img src="/shape-5.webp" alt="" className="relative left-10 md:left-40 right-move animate-moveRightToLeft infinite transition-transform duration-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }} />
            <motion.img src="/shape-6.webp" alt="" className=" relative -bottom-16 -left-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.1 }} />
            <motion.div className="bg-green-700 absolute  -top-3 md:-top-2  rounded-full md:h-[125px] md:w-[125px] h-[100px] w-[100px] text-center mx-auto md:ml-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.2 }}>
              <motion.div className="text-xl md:text-2xl text-white absolute left-5 font-sans flex flex-col items-center justify-center" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1.3 }}>
                <MenuBookOutlined className="text-3xl" />
                <h3 className="text-2xl font-bold">1,235</h3>
                <h2>courses</h2>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.aside>
        {/* <motion.div className="absolute lg:right-4 md:right-2 right-2 -top-28 lg:top-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.4 }}>
          <motion.img src="/shape-7.webp" alt="" className="relative  top-[10rem] left-[1rem] z-10 top-bottom-move" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 }} />
          <motion.div className="bg-white  rounded-full lg:h-[100px] lg:w-[100px] h-[80px] w-[80px] text-center mx-auto md:ml-0 relative -top-28 left-8 md:left-14 flex items-center justify-center" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1.6 }}>
            <div className="text-green-500  relative font-sans">
              <p className="flex items-center text-center mb-2 text-md md:text-lg font-bold">
                4.8{" "}
                <span>
                  <Star className="text-yellow-500 md:ml-3 mb-1" />
                </span>
              </p>
              <h4 className="text-black text-sm md:text-md">Rating(86k)</h4>
            </div>
          </motion.div>
        </motion.div> */}
      </div>
    </motion.section>
  );
}

export default HeroSection;
