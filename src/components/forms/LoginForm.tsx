import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { ArrowRightAltOutlined } from "@mui/icons-material";
import { useAuth } from "@/hooks/useAuth";

const LoginForm = () => {
  const { loginUser } = useAuth();
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      loginUser(values);
    },
  });

  return (
    <section>
      <form onSubmit={formik.handleSubmit} className="mt-8">
        <div className="space-y-5">
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
                className={`flex h-10 w-full rounded-md border ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                } bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`}
                placeholder="Email"
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-base font-medium text-gray-900"
              >
                Password
              </label>
              {/* <a
                href="#"
                title=""
                className="text-sm font-semibold text-black hover:underline"
              >
                Forgot password?
              </a> */}
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`flex h-10 w-full rounded-md border ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-gray-300"
                } bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`}
                placeholder="Password"
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-green-600 hover:bg-black  hover:transition-all hover:origin-center   hover:duration-700 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
            >
              Login <ArrowRightAltOutlined className="ml-2" />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
