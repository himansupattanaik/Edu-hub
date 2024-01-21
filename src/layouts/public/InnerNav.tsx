import Link from "next/link";
import AccountDrawer from "./AccountDrawer";
import ResponsiveNavbar from "./ResponsiveNavbar";

export const InnerNav = () => {
  return (
    <>
      <div className="main-container hidden lg:flex flex-col p-4 bg-transparent border z-50 border-green-200 sm:flex-row justify-between items-center relative top-6 rounded-md">
        <Link href="/">
          <img
            src="/logo.webp"
            alt="Logo"
            className="cursor-pointer  mb-4 sm:mb-0"
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
            <Link href="/">
              <p className="text-gray-700 hover:text-green-500">AboutUs</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="text-gray-700 hover:text-green-500">Faq</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="text-gray-700 hover:text-green-500">Contact</p>
            </Link>
          </li>
        </ul>
        <div className="hidden lg:flex">
          <AccountDrawer />
        </div>
      </div>
      <ResponsiveNavbar />
    </>
  );
};
