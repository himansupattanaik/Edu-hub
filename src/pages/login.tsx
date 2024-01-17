import { DetailsPageHeroection } from "@/components/DetailsPage";
import { LoginForm, RegisterForm } from "@/components/forms";
import { InnerNav } from "@/components/home/HeroSection";
import { PublicLayout } from "@/layouts";
import Navbar from "@/layouts/public/Navbar";
import { ArrowRight } from "@mui/icons-material";
import React, { useState } from "react";

function login() {
  const [toggleForm, setToggleForm] = useState(true);
  return (
    <>
      <PublicLayout>
        <DetailsPageHeroection />
        <section className=" bg-white grid h-screen w-full ">
          <div className="grid grid-cols-2 rounded-md lg:grid-cols-2 w-[80%] h-[90vh] place-self-center border shadow-md shadow-black border-green-600 ">
            <div className=" h-50 grid w-full  ">
              <div className="h-[75vh] w-[80%] relative grid place-self-center rounded-2xl shadow-md shadow-slate-800  bg-emerald-100">
                <div className=" absolute left-32 top-7  bg-green-500 rounded-full h-44 w-44 ">
                  <img
                    src="/shape-26.webp"
                    alt=""
                    className=" absolute left-10 top-10 font-bold h-24"
                  />
                </div>
                <img
                  className=" w-[75%] rounded-md h-[70vh] place-self-center z-10"
                  src="/register-login.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="  flex items-center shadow-md shadow-slate-600 ">
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <h2 className="text-3xl font-bold leading-tight text-center text-green-400 sm:text-4xl">
                  {toggleForm ? "Sign in" : "Register Now"}
                </h2>
                {!toggleForm ? (
                  <div className="mt-2 text-sm text-gray-600 text-center">
                    <span>Already have an account? </span>
                    <span
                      onClick={() => setToggleForm(true)}
                      className="font-semibold text-black transition-all duration-200 hover:underline"
                    >
                      Sign In
                    </span>
                  </div>
                ) : (
                  <div className="mt-2 text-sm text-gray-600 text-center">
                    <span>Don&apos;t have an account? </span>
                    <span
                      onClick={() => setToggleForm(false)}
                      className="font-semibold text-black transition-all duration-200 hover:underline"
                    >
                      Create a free account
                    </span>
                  </div>
                )}
                {toggleForm ? <LoginForm /> : <RegisterForm />}
              </div>
            </div>
          </div>
        </section>
      </PublicLayout>
    </>
  );
}
export default login;
