import { motion } from 'framer-motion';
import Link from "next/link";
import AccountDrawer from "./AccountDrawer";
import ResponsiveNavbar from "./ResponsiveNavbar";

export const InnerNav = () => {
  const containerVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 1,
      },
    },
  };

  return (
    <>
      <motion.div
        className="main-container hidden lg:flex flex-col p-4 bg-transparent border z-50 border-green-200 sm:flex-row justify-between items-center relative top-6 rounded-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Link href="/">
          <img
            src="/logo.webp"
            alt="Logo"
            className="cursor-pointer mb-4 sm:mb-0"
          />
        </Link>
        <ul className="lg:flex flex-col sm:flex-row gap-10 text-xl hidden">
          <li>
            <Link href="/">
              <p className="text-green-500 relative">
                Home
                <span className="absolute top-9 left-1/2 transform -translate-x-1/2 w-14">
                  <img
                    src="/shape-3.webp"
                    alt=""
                    className="h-[5px] w-[100%]"
                  />
                </span>
              </p>
            </Link>
          </li>
          <li>
            <Link href="/courses">
              <p className="text-gray-700 hover:text-green-500">All Courses</p>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <p className="text-gray-700 hover:text-green-500">FAQs</p>
            </Link>
          </li>
          <li>
            <Link href="/contactus">
              <p className="text-gray-700 hover:text-green-500">Contact</p>
            </Link>
          </li>
        </ul>
        <div className="hidden lg:flex">
          <AccountDrawer />
        </div>
      </motion.div>
      <ResponsiveNavbar />
    </>
  );
};
