import { MenuBook, Schedule, Star, StarBorder } from "@mui/icons-material";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contents = () => {
    const CONTENT_ARRAY = [
        {
            image: "courses-01.webp",
            desc: "Data Science and Machine Learning with Python - Hands On!",
            icon: "courses-01.webp",
            name: "Himanshu",
            date: "12-09-23",
            button: "Science",
            duration: "8hr 15min",
            lecture: "29 lecture",
            price: "$136.00",
            rating: "4.9",
        },
        {
            image: "courses-02.webp",
            desc: "Create Amazing Color Schemes for Your UX Design Projects",
            icon: "courses-02.webp",
            name: "Himanshu",
            date: "12-09-23",
            button: "Science",
            duration: "8hr 15min",
            lecture: "29 lecture",
            price: "$136.00",
            rating: "4.9",
        },
        {
            image: "courses-03.webp",
            desc: "Culture & Leadership: Strategies for a Successful Business",
            icon: "courses-03.webp",
            name: "Himanshu",
            date: "12-09-23",
            button: "Science",
            duration: "8hr 15min",
            lecture: "29 lecture",
            price: "$136.00",
            rating: "4.9",
        },
        {
            image: "courses-04.webp",
            desc: "Finance Series: Learn to Budget and Calculate your Net Worth.",
            icon: "courses-04.webp",
            name: "Himanshu",
            date: "12-09-23",
            button: "Design",
            duration: "8hr 15min",
            lecture: "29 lecture",
            price: "Free",
            rating: "4.9",
        },
        {
            image: "courses-05.webp",
            desc:
                "Build Brand Into Marketing: Tackling the New Marketing Landscape",
            icon: "courses-05.webp",
            name: "Himanshu",
            date: "12-09-23",
            button: "Design",
            duration: "8hr 15min",
            lecture: "29 lecture",
            price: "$136.00",
            rating: "4.9",
        },
        {
            image: "courses-06.webp",
            desc:
                "Graphic Design: Illustrating Badges and Icons with Geometric Shapes",
            icon: "courses-06.webp",
            name: "Himanshu",
            button: "Design",
            duration: "8hr 15min",
            lecture: "29 lecture",
            price: "$136.00",
            rating: "4.9",
        },
    ];

    return (
        <>
            <div className="h-2/4 bg-white w-full flex justify-center main-container place-content-center">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full my-14">
                    {CONTENT_ARRAY.map((item, index) => (
                        <AnimatedContentsCard key={index} item={item} />
                    ))}
                </div>
            </div>
            <div className="w-full grid">
                <button className="relative w-60 h-16 place-self-center text-green-600 rounded-2xl border border-green-600 font-semibold text-xl text-center mb-4 bg-[#E7F8EE]">
                    Other Courses
                </button>
            </div>
        </>
    );
};

export default Contents;

const AnimatedContentsCard = ({ item }: any) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3, // Adjust as needed
    });

    return (
        <motion.div
            ref={ref}
            className="h-full w-full space-y-3 bg-transparent p-5 rounded-lg border cursor-pointer"
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
        >
            <Link href="DetailsPageHerosection">
                <motion.img
                    src={item.image}
                    className="w-full h-48 sm:h-auto rounded-xl shadow-lg"
                    whileHover={{ scale: 1.1 }}
                />
                <div className="flex items-center w-full h-[4rem] mt-4 ml-4">
                    <motion.img
                        src={item.icon}
                        alt=""
                        className="h-10 w-10 rounded-full"
                    />
                    <motion.div
                        className="flex justify-around items-center w-full"
                        whileHover={{ scale: 1.1 }}
                    >
                        <p>{item.name}</p>
                        <button className="bg-[#E7F8EE] text-green-500 w-20 h-10  ml-3 rounded-lg">
                            {item.button}
                        </button>
                    </motion.div>
                </div>
                <motion.p
                    className="hover:text-green-500 w-full ml-5"
                    whileHover={{ scale: 1.1 }}
                >
                    {item.desc}
                </motion.p>
                <div className="flex justify-between mx-5 my-5 text-sm">
                    <div>
                        <Schedule className="text-green-700" /> {item.duration}
                    </div>
                    <div>
                        <MenuBook className="text-green-700" /> {item.lecture}
                    </div>
                </div>
                <motion.div
                    className="bg-[#EEFBF3] p-6 h-14 rounded-xl flex items-center justify-between"
                    whileHover={{ scale: 1.1 }}
                >
                    <p className="text-green-700 font-bold text-xl">
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
                        </span>{" "}
                    </p>
                </motion.div>
            </Link>
        </motion.div>
    );
};