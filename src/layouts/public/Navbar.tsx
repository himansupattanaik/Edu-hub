import Link from "next/link";
import { useEffect, useState } from "react";
import AccountDrawer from "./AccountDrawer";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 150) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <nav
      className={`navbar ${show ? "active" : ""
        } lg:bg-white shadow-md  fixed  z-50 w-full  `}
    >
      <div className="main-container hidden lg:flex flex-col sm:flex-row justify-between items-center relative">
        <Link className="" href="/">
          <img src="/logo.webp" alt="Logo" className="cursor-pointer" />
        </Link>
        <ul className="flex flex-col sm:flex-row  gap-12 text-xl">
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
      </div>
      <ResponsiveNavbar />
    </nav>
  );
};

export default Navbar;
