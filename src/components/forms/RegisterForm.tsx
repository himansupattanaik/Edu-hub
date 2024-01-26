import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useUserRegistration } from "@/hooks/useUserRegistration";

const RegisterForm = ({ setToggleForm }: any) => {
  const { registerUser, allUsers } = useUserRegistration();
  // Validation schema using yup
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    mobile: yup.string().required("Mobile is required"),
    age: yup.number().required("Age is required"),
    gender: yup.string().required("Gender is required"),
    password: yup.string().required("Password is required"),
  });

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      age: "",
      gender: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }: any) => {
      // Handle user registration here
      registerUser(values);
      resetForm();
      setToggleForm(true);
    },
  });

  return (
    <section>
      <section>
        <form onSubmit={formik.handleSubmit} className="mt-8">
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="text-base font-medium text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your Name"
                />
              </div>
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500">{formik.errors.name}</div>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-base font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Email"
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="text-base font-medium text-gray-900"
              >
                Mobile number
              </label>
              <div className="mt-2">
                <input
                  id="mobile"
                  name="mobile"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Mobile number"
                />
              </div>
              {formik.touched.mobile && formik.errors.mobile ? (
                <div className="text-red-500">{formik.errors.mobile}</div>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="age"
                className="text-base font-medium text-gray-900"
              >
                Age
              </label>
              <div className="mt-2">
                <input
                  id="age"
                  name="age"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.age}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Age"
                />
              </div>
              {formik.touched.age && formik.errors.age ? (
                <div className="text-red-500">{formik.errors.age}</div>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="gender"
                className="text-base font-medium text-gray-900"
              >
                Gender
              </label>
              <div className="mt-2">
                <input
                  id="gender"
                  name="gender"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.gender}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Gender"
                />
              </div>
              {formik.touched.gender && formik.errors.gender ? (
                <div className="text-red-500">{formik.errors.gender}</div>
              ) : null}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-base font-medium text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Password"
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-green-600 hover:bg-black hover:transition-all hover:origin-center hover:duration-700 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                Create an account
              </button>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};

export default RegisterForm;
