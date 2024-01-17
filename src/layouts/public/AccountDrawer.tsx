import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { BiLogOutCircle, BiMenuAltLeft } from "react-icons/bi";
import { IoApps } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineFavoriteBorder, MdExpandMore } from "react-icons/md";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { Collapse, Drawer } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
// import { SearchBar } from "@/components/core";
import { useRouter } from "next/router";
import { Person } from "@mui/icons-material";
// import { useAuth, useSWRAPI } from "@/hooks";

const AccountDrawer = () => {
  //   const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleClick = (path: string) => {
    router.push(path);
    setOpen(false);
  };
  const handleLogout = () => {
    // logout();
    router.push("/login");
  };

  const handleClose = () => {
    setOpen(false);
  };
  const user = {
    role: "STUDENT",
  };

  return (
    <section className="py-4">
      {user?.role === "STUDENT" ? (
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="bg-green-800 px-4 py-1 rounded-lg flex gap-1 items-center cursor-pointer"
        >
          <span>
            <Person className="text-white text-sm" />
          </span>
          <span className="text-white text-sm">MyAccount</span>
        </div>
      ) : (
        <>
          <ul className="flex gap-7 items-center mr-24 ">
            <li>
              <Link href="/login">
                <button className="text-gray-700 hover:text-green-500 text-xl">
                  Sign In
                </button>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <button className="border border-green-500 text-xl px-6 py-3 rounded-md transition hover:text-white hover:bg-green-600">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </>
      )}
      <Drawer open={open} onClose={handleClose} anchor={"right"}>
        <article className="bg-white w-full shadow-sm">
          <section className="main-container w-full flex flex-col pt-4 font-medium">
            {/* <SearchBar /> */}
            <p className="text-gray-400 text-sm font-light tracking-wide uppercase pt-4 pb-2">
              Explore Wisdom
            </p>
            <p
              className="flex items-center tracking-wider text-gray-500 p-2"
              onClick={() => handleClick("/")}
            >
              <AiOutlineHome className="text-xl mr-4" />
              Home
            </p>
            <ResponsiveCategoryList onClose={() => setOpen(false)} />
            {true ? (
              <div className="w-full">
                <p className="text-gray-400 text-sm font-light tracking-wide uppercase pt-4 pb-2">
                  My Account
                </p>

                <p
                  className="flex items-center tracking-wider text-gray-500 p-2"
                  onClick={() => handleClick("/account")}
                >
                  <CgProfile className="text-xl mr-4" />
                  My Profile
                </p>

                <p
                  className="flex items-center tracking-wider text-gray-500 p-2"
                  onClick={() => handleClick("/account")}
                >
                  <CgProfile className="text-xl mr-4" />
                  My Courses
                </p>

                <p
                  className="flex items-center tracking-wider text-gray-500 p-2"
                  onClick={() => handleClick("/account/my-requests")}
                >
                  <HiOutlineShoppingBag className="text-xl mr-4" />
                  My Certificates
                </p>

                <p
                  className="flex items-center tracking-wider text-gray-500 p-2"
                  onClick={() => handleClick("/account/my-demos")}
                >
                  <RiShoppingBag3Line className="text-xl mr-4" />
                  My Carts
                </p>

                <p
                  className="flex items-center tracking-wider text-gray-500 p-2"
                  onClick={() => handleClick("/account/wishlist")}
                >
                  <MdOutlineFavoriteBorder className="text-xl mr-4" />
                  Change Password
                </p>
                <p
                  onClick={handleLogout}
                  className="flex items-center tracking-wider text-gray-500 p-2"
                >
                  <BiLogOutCircle className="text-xl mr-4" />
                  Logout
                </p>
              </div>
            ) : (
              <Link href="/login">
                <button className="px-4 py-2 rounded-lg tracking-wider text-white font-semibold bg-primary mt-4">
                  Login
                </button>
              </Link>
            )}

            <button
              className="group shake w-fit flex items-center gap-2 bg-emerald-500 h-10 px-4 rounded-full text-white capitalize text-sm tracking-wider font-semibold mt-4"
              onClick={() => handleClick("/#contacts")}
            >
              <FiPhoneCall className="text-white shake-animation common-transition text-lg" />
              Connect us Now
            </button>
          </section>
        </article>
      </Drawer>
    </section>
  );
};

const ResponsiveCategoryList = ({ onClose }: { onClose: () => void }) => {
  const [isOpen, setIsOpen] = useState("");
  //   const { data, isValidating } = useSWRAPI("domain/getAll");
  const router = useRouter();
  const handleClick = (domainId: string, subDomainId: string) => {
    router.push(`/`);
    setIsOpen("");
    onClose();
  };

  const DATA = [
    {
      domainId: "2",
      domainTitle: "All Courses",
    },
    {
      domainId: "3",
      domainTitle: "Contact",
    },
  ];

  return (
    <>
      {DATA?.map((item: any) => (
        <div className="w-full" key={item?.domainId}>
          <div
            className={`flex items-center justify-between p-2 ${
              isOpen === item?.domainTitle
                ? "bg-primary/10 text-primary rounded-md"
                : "text-gray-500"
            }`}
            onClick={() =>
              setIsOpen((prev) =>
                prev === item?.domainTitle ? "" : item?.domainTitle
              )
            }
          >
            <p className="flex items-center tracking-wider">
              <IoApps className="text-xl mr-4" />
              {item?.domainTitle}
            </p>
            <MdExpandMore
              className={`text-xl common-transition ${
                isOpen === item?.domainTitle ? "-rotate-180" : ""
              }`}
            />
          </div>

          <Collapse
            in={item?.domainTitle === isOpen}
            timeout="auto"
            unmountOnExit
          >
            <article className="bg-white w-full flex flex-col shadow-sm pl-9 text-sm overflow-y-scroll">
              {item?.subDomain?.map((_: any, i: number) => (
                <p
                  className="flex items-center tracking-wider text-gray-500 py-2"
                  onClick={() => handleClick(item?.domainId, _?._id)}
                  key={i}
                >
                  {_?.title}
                </p>
              ))}
            </article>
          </Collapse>
        </div>
      ))}
    </>
  );
};

export default AccountDrawer;
