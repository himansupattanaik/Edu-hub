import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const InstructorSections = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 20 });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="w-full h-96 grid main-container"
        >
            <div className="bg-[#E7F8EE] w-[90%] place-self-center h-60 rounded-lg">
                <div className="">
                    <div className="grid lg:grid-cols-[35%,30%,35%] items-center">

                        {/* Section Title Start */}
                        <motion.div
                            className="h-40 pl-20 pt-10"
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h5 className="text-md lg:text-xl text-green-700 mb-4">Become A Instructor</h5>
                            <p className="text-xl lg:text-3xl mb-0 leading-snug">You can join with Edule as <span className='text-green-700'>a instructor?<img src="/shape-4.webp" alt="" className='hidden md:block lg:block ml-28 mt-2' /></span></p>
                        </motion.div>
                        {/* Section Title End */}
                        <img className="hidden lg:block h-24 w-30 relative top-11 left-36" src="/shape-13.svg" alt="Shape" />

                        <div className="text-center">
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-green-600 lg:mt-20 w-40 lg:w-52 rounded-lg text-white h-14 text-center"
                                >
                                    Drop Information
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default InstructorSections;
